// Page Content Definitions - Refactored to use modules
const Pages = {
    // HOME PAGE
    home() {
        return window.HomePage
            ? window.HomePage.render()
            : '<div class="page"><div class="card">Home module failed to load.</div></div>';
    },

    // AI ASSISTANT PAGE
    'ai-assistant'() {
        return window.AssistantPage
            ? window.AssistantPage.render()
            : '<div class="page"><div class="card">Assistant module failed to load.</div></div>';
    },

    // ANALYTICS PAGE
    analytics() {
        return window.AnalyticsPage
            ? window.AnalyticsPage.render()
            : '<div class="page"><div class="card">Analytics module failed to load.</div></div>';
    },

    // COMMAND CENTER PAGE
    command() {
    console.log('command() called, CommandCenterPage is:', window.CommandCenterPage);
    console.log('Is CommandCenterPage truthy?', !!window.CommandCenterPage);
    
    if (window.CommandCenterPage) {
        console.log('Calling render()...');
        const html = window.CommandCenterPage.render();
        console.log('Render returned:', html.substring(0, 100) + '...');
        return html;
    } else {
        console.log('CommandCenterPage is falsy!');
        return '<div class="page"><div class="card">Command Center module failed to load.</div></div>';
    }
},

    // COMPLIANCE HUB PAGE
    compliance() {
        return window.CompliancePage
            ? window.CompliancePage.render()
            : '<div class="page"><div class="card">Compliance module failed to load.</div></div>';
    },

    // RECOMMENDATIONS PAGE
    recommendations() {
        return window.RecommendationsPage
            ? window.RecommendationsPage.render()
            : '<div class="page"><div class="card">Recommendations module failed to load.</div></div>';
    },

    // SHIPMENTS PAGE
    shipments() {
        return window.ShipmentsPage
            ? window.ShipmentsPage.render()
            : '<div class="page"><div class="card">Shipments module failed to load.</div></div>';
    },

    // INVOICES PAGE
    invoices() {
        return window.InvoicesPage
            ? window.InvoicesPage.render()
            : '<div class="page"><div class="card">Invoices module failed to load.</div></div>';
    },

    // RISK MONITOR PAGE
    'risk-monitor'() {
        return window.RiskMonitorPage
            ? window.RiskMonitorPage.render()
            : '<div class="page"><div class="card">Risk Monitor module failed to load.</div></div>';
    },

    // PERFORMANCE PAGE
    performance() {
        return window.PerformancePage
            ? window.PerformancePage.render()
            : '<div class="page"><div class="card">Performance module failed to load.</div></div>';
    },

    // SUSTAINABILITY PAGE
    sustainability() {
        return window.SustainabilityPage
            ? window.SustainabilityPage.render()
            : '<div class="page"><div class="card">Sustainability module failed to load.</div></div>';
    },

    // CARRIER SCORECARDS PAGE
    'carrier-scorecards'() {
        return window.CarrierScorecardsPage
            ? window.CarrierScorecardsPage.render()
            : '<div class="page"><div class="card">Carrier Scorecards module failed to load.</div></div>';
    },

    // PREFERENCES PAGE
    preferences() {
        return window.PreferencesPage
            ? window.PreferencesPage.render()
            : '<div class="page"><div class="card">Preferences module failed to load.</div></div>';
    },

    // TEAM PAGE
    team() {
        return window.TeamPage
            ? window.TeamPage.render()
            : '<div class="page"><div class="card">Team module failed to load.</div></div>';
    },

    // NOTIFICATIONS PAGE
    notifications() {
        return window.NotificationsPage
            ? window.NotificationsPage.render()
            : '<div class="page"><div class="card">Notifications module failed to load.</div></div>';
    },

    // NOT FOUND PAGE
    notFound() {
        return `
            <div class="page">
                <h1 class="page-title">Page Not Found</h1>
                <p class="page-subtitle">The requested page could not be found.</p>
                <div class="card">
                    <p>Please use the navigation menu to find what you're looking for.</p>
                </div>
            </div>
        `;
    }
};