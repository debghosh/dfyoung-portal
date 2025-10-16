/*! DFY Assistant Tabs v6
 * - Waits for SPA content using MutationObserver (no race conditions)
 * - Wires existing .workflow-tabs/.tab and .workflow-content
 * - Falls back to index mapping and explicit style.display toggling
 * - Safe to include once; auto-inits whenever AI Assistant content appears
 * - Reduced console logging
 */
(function () {
  const STATE = { 
    initializedFor: new WeakSet(),
    hasLogged: false // Track if we've already logged the waiting message
  };

  function $(sel, root = document) { return root.querySelector(sel); }
  function $all(sel, root = document) { return Array.from(root.querySelectorAll(sel)); }
  function normalizeKey(key) { return (key || '').trim().replace(/\s+/g, '-'); }

  function candidateRoots() {
    return [
      document.getElementById('page-container'),
      $('.assistant'),
      $('.content-area'),
      $('.page'),
      document.body,
      document
    ].filter(Boolean);
  }

  function findPanel(scope, key, indexFallback, panels) {
    if (key) {
      const safe = (window.CSS && CSS.escape) ? CSS.escape(key) : key.replace(/[^a-zA-Z0-9_-]/g, '');
      let el = scope.querySelector('#' + safe);
      if (el) return el;
      el = scope.querySelector('.workflow-content[data-workflow="' + key + '"]');
      if (el) return el;
      el = scope.querySelector('.workflow-content.' + normalizeKey(key));
      if (el) return el;
    }
    return panels[indexFallback] || null;
  }

  function show(panel) { if (panel) { panel.classList.add('active'); panel.style.display = 'block'; } }
  function hide(panel) { if (panel) { panel.classList.remove('active'); panel.style.display = 'none'; } }

  function wireScope(scope) {
    if (!scope || STATE.initializedFor.has(scope)) return false;

    const tabsWrap = scope.querySelector('.workflow-tabs');
    const tabs = tabsWrap ? $all('.tab', tabsWrap) : [];
    const panels = $all('.workflow-content', scope);

    if (!tabsWrap || !tabs.length || !panels.length) return false;

    // Build mapping
    const mapping = tabs.map((tab, i) => {
      const key = tab.getAttribute('data-workflow') || tab.getAttribute('data-target') || tab.id || '';
      const panel = findPanel(scope, key, i, panels);
      return { tab, panel, key, index: i };
    });

    // Reset all
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(hide);

    // Activate first
    const first = mapping.find(m => m.panel) || null;
    if (first) {
      first.tab.classList.add('active');
      show(first.panel);
    }

    // Bind clicks (clear previous by cloning)
    mapping.forEach(({ tab }, idx) => {
      const clone = tab.cloneNode(true);
      tab.parentNode.replaceChild(clone, tab);

      const pair = mapping[idx];
      clone.addEventListener('click', () => {
        // deactivate all
        (tabsWrap.querySelectorAll('.tab') || []).forEach(t => t.classList.remove('active'));
        panels.forEach(hide);

        // activate selected
        clone.classList.add('active');
        const panel = (pair && pair.panel) || panels[idx] || null;
        show(panel);
      });
    });

    STATE.initializedFor.add(scope);
    console.log('[DFY Tabs v6] Initialized in scope:', scope);
    STATE.hasLogged = false; // Reset logging flag when we successfully initialize
    return true;
  }

  function tryInitAll() {
    let any = false;
    for (const root of candidateRoots()) {
      const assistantLike = root.querySelector('.workflow-tabs') || root.querySelector('.workflow-content');
      if (assistantLike) {
        if (wireScope(root)) any = true;
      }
    }
    if (!any && !STATE.hasLogged) {
      console.log('[DFY Tabs v6] Waiting for AI Assistant content...');
      STATE.hasLogged = true; // Only log once
    }
    return any;
  }

  // Public API
  window.DFYAssistantTabs = {
    init(root) {
      if (root) {
        return wireScope(root);
      }
      return tryInitAll();
    },
    forceInit() {
      STATE.initializedFor = new WeakSet(); // reset and re-try
      STATE.hasLogged = false;
      return tryInitAll();
    }
  };

  // 1) Initial attempt (in case content is already there)
  setTimeout(() => tryInitAll(), 0);

  // 2) Observe SPA changes and init when content shows up
  const mo = new MutationObserver(() => {
    tryInitAll();
  });
  mo.observe(document.documentElement, { childList: true, subtree: true });
})();