// Home Page Module
(function() {
    function homeMarkup() {
        return `
            <div class="page home-page">
                <h1 class="page-title">Welcome back, Sarah</h1>
                <p class="page-subtitle">Here's what's happening with your logistics today</p>

                <div class="kpi-grid">
                    ${createKPICard('Active Shipments', '24', '+8%', true)}
                    ${createKPICard('On-Time Rate', '96.5%', '+2.1%', true)}
                    ${createKPICard('Monthly Spend', '$284K', '-12%', true)}
                    ${createKPICard('Critical Alerts', '2', '+1', false)}
                </div>

                <div class="card">
                    <h2 style="margin-bottom: 15px;">
                        🤖 AI Recommendations <span class="ai-badge">AI Generated</span>
                    </h2>
                    ${createRecCard(
                        '💡 Consolidation Opportunity',
                        'Combine 3 weekly shipments to Chicago into one consolidated shipment',
                        [
                            { label: 'Monthly Savings', value: '$2,400' },
                            { label: 'Carbon Reduction', value: '28%' }
                        ]
                    )}
                </div>

                <div class="card">
                    <h3 style="margin-bottom: 15px;">📦 Recent Shipments</h3>
                    <div class="recent-shipments">
                        <div class="shipment-item">
                            <div class="shipment-info">
                                <div class="shipment-id">DFY-8472 • Los Angeles → New York</div>
                                <div class="shipment-status-text">In Transit • ETA: 2 hours</div>
                            </div>
                            <span class="status-badge status-in-transit">In Transit</span>
                        </div>
                        <div class="shipment-item">
                            <div class="shipment-info">
                                <div class="shipment-id">DFY-8471 • Chicago → Miami</div>
                                <div class="shipment-status-text">In Transit • ETA: 6 hours</div>
                            </div>
                            <span class="status-badge status-in-transit">In Transit</span>
                        </div>
                        <div class="shipment-item">
                            <div class="shipment-info">
                                <div class="shipment-id">DFY-8470 • Seattle → Dallas</div>
                                <div class="shipment-status-text">Delivered today at 9:45 AM</div>
                            </div>
                            <span class="status-badge status-delivered">Delivered</span>
                        </div>
                    </div>
                </div>

                <div class="two-col-grid">
                    <div class="card">
                        <h3 style="margin-bottom: 15px;">⚠️ Active Alerts</h3>
                        <div class="alert-item warning">
                            <strong>Weather Disruption - Chicago</strong>
                            <span>Snow forecast for tomorrow. 3 shipments may be delayed by 4-6 hours.</span>
                        </div>
                        <div class="alert-item warning">
                            <strong>Carrier Delay - UPS</strong>
                            <span>UPS experiencing delays in Northeast region. Expect 1-day delays.</span>
                        </div>
                    </div>

                    <div class="card">
                        <h3 style="margin-bottom: 15px;">📊 This Month's Performance</h3>
                        <div class="performance-metrics">
                            <div class="performance-item">
                                <div class="performance-header">
                                    <span>On-Time Delivery</span>
                                    <span class="performance-value">96.5%</span>
                                </div>
                                <div class="progress-bar-container">
                                    <div class="progress-bar-fill" style="width: 96.5%; background: linear-gradient(90deg, #10b981 0%, #059669 100%);"></div>
                                </div>
                            </div>
                            <div class="performance-item">
                                <div class="performance-header">
                                    <span>Cost Efficiency</span>
                                    <span class="performance-value">87%</span>
                                </div>
                                <div class="progress-bar-container">
                                    <div class="progress-bar-fill" style="width: 87%; background: linear-gradient(90deg, #3b82f6 0%, #2563eb 100%);"></div>
                                </div>
                            </div>
                            <div class="performance-item">
                                <div class="performance-header">
                                    <span>Customer Satisfaction</span>
                                    <span class="performance-value">94%</span>
                                </div>
                                <div class="progress-bar-container">
                                    <div class="progress-bar-fill" style="width: 94%; background: linear-gradient(90deg, #8b5cf6 0%, #7c3aed 100%);"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Public API
    window.HomePage = {
        render() {
            return homeMarkup();
        },
        attachListeners() {
            // Track shipment clicks
            const shipmentItems = document.querySelectorAll('.home-page .shipment-item');
            shipmentItems.forEach(item => {
                item.addEventListener('click', function() {
                    const shipmentId = this.querySelector('.shipment-id').textContent.split(' ')[0];
                    console.log('Track shipment:', shipmentId);
                    alert(`Tracking details for ${shipmentId} would be displayed here.`);
                });
            });

            // Implement recommendation
            const recButtons = document.querySelectorAll('.home-page .btn-primary');
            recButtons.forEach(btn => {
                if (btn.textContent.includes('Implement')) {
                    btn.addEventListener('click', function() {
                        console.log('Implementing recommendation');
                        alert('Consolidation workflow initiated! This would integrate with your backend system.');
                    });
                }
            });
        }
    };
})();