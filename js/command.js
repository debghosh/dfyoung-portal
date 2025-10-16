// Command Center Page Module
(function() {
    function commandMarkup() {
        return `
            <div class="page command-page">
                <h1 class="page-title">🌍 Supply Chain Command Center</h1>
                <p class="page-subtitle">Real-time global visibility and control</p>

                <div class="alert-card">
                    <strong>🤖 AI Insight:</strong> Port congestion detected in Los Angeles (3-day delay). I've automatically rerouted 23 shipments through Oakland. Estimated savings: $18,400 in demurrage fees.
                </div>

                <div class="kpi-grid">
                    ${createKPICard('Active Shipments', '2,313', '', true)}
                    ${createKPICard('On-Time Performance', '94.7%', '', true)}
                    ${createKPICard('At-Risk Shipments', '124', '', false)}
                    ${createKPICard('AI Actions Today', '47', '', true)}
                </div>

                <div class="card">
                    <h3 style="margin-bottom: 15px;">⚠️ Real-Time Alerts</h3>
                    <div class="alert-item critical">
                        <strong>🚨 Customs Hold - Milan</strong>
                        <span>12 shipments held. AI has auto-generated EUR.1 certificates and submitted to broker.</span>
                    </div>
                    <div class="alert-item warning">
                        <strong>⚠️ Weather Disruption - Tokyo</strong>
                        <span>Typhoon approaching. 67 shipments affected. AI recommends rerouting through Osaka.</span>
                    </div>
                    <div class="alert-item warning">
                        <strong>📦 Inventory Risk - Miami</strong>
                        <span>Miami warehouse at 92% capacity. AI predicts stockout in 4 days based on current demand.</span>
                    </div>
                </div>

                <div class="card">
                    <h3 style="margin-bottom: 15px;">🗺️ Global Network Status</h3>
                    <div class="network-grid">
                        <div class="network-region">
                            <div class="region-name">North America</div>
                            <div class="region-count">1,847</div>
                            <div class="region-label">Active shipments</div>
                        </div>
                        <div class="network-region">
                            <div class="region-name">Europe</div>
                            <div class="region-count">423</div>
                            <div class="region-label">Active shipments</div>
                        </div>
                        <div class="network-region warning">
                            <div class="region-name">Asia Pacific</div>
                            <div class="region-count">189</div>
                            <div class="region-label">Active shipments</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Public API
    window.CommandPage = {
        render() {
            return commandMarkup();
        },
        attachListeners() {
            // Alert item interactions
            const alertItems = document.querySelectorAll('.command-page .alert-item');
            alertItems.forEach(item => {
                item.addEventListener('click', function() {
                    const alertTitle = this.querySelector('strong').textContent;
                    console.log('Alert clicked:', alertTitle);
                    alert(`Viewing details for: ${alertTitle}`);
                });
            });

            // Network region clicks
            const regions = document.querySelectorAll('.command-page .network-region');
            regions.forEach(region => {
                region.addEventListener('click', function() {
                    const regionName = this.querySelector('.region-name').textContent;
                    console.log('Region clicked:', regionName);
                    alert(`Viewing shipments for: ${regionName}`);
                });
            });
        }
    };
})();