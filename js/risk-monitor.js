// Risk Monitor Page Module
(function() {
    function riskMonitorMarkup() {
        return `
            <div class="page risk-monitor-page">
                <h1 class="page-title">⚠️ Risk Monitor</h1>
                <p class="page-subtitle">Real-time supply chain risk assessment</p>

                <div class="alert-card">
                    <strong>🤖 AI Risk Assessment:</strong> Overall supply chain risk level is LOW. AI is monitoring 47 risk factors across your global network and will alert you of any emerging threats.
                </div>

                <div class="kpi-grid">
                    ${createKPICard('Risk Score', 'Low', '', true)}
                    ${createKPICard('Active Risks', '3', '', true)}
                    ${createKPICard('Mitigated Today', '8', '', true)}
                    ${createKPICard('Risk Savings', '$47K', '', true)}
                </div>

                <div class="card">
                    <h3 style="margin-bottom: 15px;">🎯 Risk Categories</h3>
                    <div class="risk-categories">
                        <div class="risk-category low">
                            <div class="risk-category-title">✅ Weather Risks - Low</div>
                            <div class="risk-category-desc">All routes clear. No severe weather expected in next 7 days.</div>
                        </div>
                        <div class="risk-category medium">
                            <div class="risk-category-title">⚠️ Port Congestion - Medium</div>
                            <div class="risk-category-desc">LA Port experiencing 2-day delays. Oakland routing recommended.</div>
                        </div>
                        <div class="risk-category low">
                            <div class="risk-category-title">✅ Compliance Risks - Low</div>
                            <div class="risk-category-desc">98% compliance score. All documentation up to date.</div>
                        </div>
                        <div class="risk-category low">
                            <div class="risk-category-title">✅ Capacity Risks - Low</div>
                            <div class="risk-category-desc">All carriers have sufficient capacity. No bottlenecks detected.</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Public API
    window.RiskMonitorPage = {
        render() {
            return riskMonitorMarkup();
        },
        attachListeners() {
            const riskCategories = document.querySelectorAll('.risk-monitor-page .risk-category');
            riskCategories.forEach(category => {
                category.addEventListener('click', function() {
                    const title = this.querySelector('.risk-category-title').textContent;
                    console.log('Risk category clicked:', title);
                    alert(`Viewing detailed risk analysis for: ${title}`);
                });
            });
        }
    };
})();