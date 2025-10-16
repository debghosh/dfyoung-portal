// Navigation Management
const Navigation = {
    currentPage: 'home',
    
    init() {
        this.attachEventListeners();
        this.loadPage('home');
    },
    
    attachEventListeners() {
        const navItems = document.querySelectorAll('.nav-item');

        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const page = item.getAttribute('data-page');
                this.navigateTo(page);
            });
        });
    },
    
    navigateTo(page) {
        // Update active state
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        
        const activeItem = document.querySelector(`[data-page="${page}"]`);
        if (activeItem) {
            activeItem.classList.add('active');
        }
        
        // Load page content
        this.loadPage(page);
        this.currentPage = page;
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    
    loadPage(page) {
        const container = document.getElementById('page-container');
        
        // Get page content
        const pageContent = Pages[page] ? Pages[page]() : Pages.notFound();
        
        // Update container with fade effect
        container.style.opacity = '0';
        setTimeout(() => {
            container.innerHTML = pageContent;
            container.style.opacity = '1';
            
            // Attach any page-specific event listeners
            this.attachPageListeners(page);
        }, 150);
    },
    
    attachPageListeners(page) {
        // Attach button click listeners
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', function() {
                console.log('Button clicked:', this.textContent);
            });
        });
        
        // Page-specific listeners
        const pageModules = {
            'home': window.HomePage,
            'ai-assistant': window.AssistantPage,
            'analytics': window.AnalyticsPage,
            'command': window.CommandPage,
            'shipments': window.ShipmentsPage,
            'compliance': window.CompliancePage,
            'recommendations': window.RecommendationsPage,
            'risk-monitor': window.RiskMonitorPage,
            'performance': window.PerformancePage,
            'sustainability': window.SustainabilityPage,
            'carrier-scorecards': window.CarrierScorecardsPage,
            'invoices': window.InvoicesPage,
            'preferences': window.PreferencesPage,
            'team': window.TeamPage,
            'notifications': window.NotificationsPage
        };
        
        // Call attachListeners for the current page module if it exists
        const pageModule = pageModules[page];
        if (pageModule && typeof pageModule.attachListeners === 'function') {
            pageModule.attachListeners();
        }
    },
    
    attachComplianceListeners() {
        const generateBtn = document.querySelector('.generate-docs-btn');
        if (generateBtn) {
            generateBtn.addEventListener('click', () => {
                alert('Document generation started! This would integrate with your backend API.');
            });
        }
    }
};

// Utility function to create KPI cards
function createKPICard(label, value, change, isPositive) {
    const direction = isPositive ? '↑' : '↓';
    const changeClass = isPositive ? 'positive' : 'negative';
    
    return `
        <div class="kpi-card">
            <div class="kpi-label">${label}</div>
            <div class="kpi-value">${value}</div>
            <div class="kpi-change ${changeClass}">${direction} ${change} vs last period</div>
        </div>
    `;
}

// Utility function to create recommendation cards
function createRecCard(title, description, metrics) {
    const metricsHTML = metrics.map(m => `
        <div>
            <div class="rec-metric-label">${m.label}</div>
            <div class="rec-metric-value">${m.value}</div>
        </div>
    `).join('');
    
    return `
        <div class="rec-card">
            <div class="rec-title">${title}</div>
            <p class="rec-description">${description}</p>
            <div class="rec-metrics">
                ${metricsHTML}
            </div>
            <button class="btn btn-primary">Implement Now</button>
        </div>
    `;
}