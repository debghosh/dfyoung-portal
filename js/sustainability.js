// Sustainability Page Module
(function() {
    function sustainabilityMarkup() {
        return `
            <div class="page sustainability-page">
                <h1 class="page-title">🌱 Sustainability</h1>
                <p class="page-subtitle">Environmental impact and carbon footprint tracking</p>

                <div class="kpi-grid">
                    ${createKPICard('Carbon Footprint', '342t', '-18.3%', true)}
                    ${createKPICard('Miles Optimized', '124K', '+12%', true)}
                    ${createKPICard('Green Shipments', '34%', '+8%', true)}
                    ${createKPICard('Carbon Offset', '$12.4K', '', true)}
                </div>

                <div class="card">
                    <h3 style="margin-bottom: 15px;">🌍 Environmental Impact</h3>
                    <div class="two-col-grid">
                        <div>
                            <h4 style="margin-bottom: 10px;">Carbon Reduction Initiatives</h4>
                            <div class="initiative-item">
                                <div class="initiative-title">✅ Route Optimization</div>
                                <div class="initiative-desc">Saved 42t CO2 this month</div>
                            </div>
                            <div class="initiative-item">
                                <div class="initiative-title">✅ Mode Shift (Air to Ocean)</div>
                                <div class="initiative-desc">Reduced emissions by 68%</div>
                            </div>
                            <div class="initiative-item">
                                <div class="initiative-title">✅ Shipment Consolidation</div>
                                <div class="initiative-desc">34% reduction in trips</div>
                            </div>
                        </div>
                        <div>
                            <h4 style="margin-bottom: 10px;">Sustainability Goals</h4>
                            <div class="goal-item">
                                <div class="goal-header">
                                    <span>2024 Carbon Reduction Target</span>
                                    <span class="goal-value">73%</span>
                                </div>
                                <div class="goal-bar">
                                    <div class="goal-fill" style="width: 73%;"></div>
                                </div>
                            </div>
                            <div class="goal-item">
                                <div class="goal-header">
                                    <span>Green Carrier Usage</span>
                                    <span class="goal-value">56%</span>
                                </div>
                                <div class="goal-bar">
                                    <div class="goal-fill" style="width: 56%;"></div>
                                </div>
                            </div>
                            <div class="goal-item">
                                <div class="goal-header">
                                    <span>Paperless Documentation</span>
                                    <span class="goal-value">94%</span>
                                </div>
                                <div class="goal-bar">
                                    <div class="goal-fill" style="width: 94%;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Public API
    window.SustainabilityPage = {
        render() {
            return sustainabilityMarkup();
        },
        attachListeners() {
            const initiativeItems = document.querySelectorAll('.sustainability-page .initiative-item');
            initiativeItems.forEach(item => {
                item.addEventListener('click', function() {
                    const title = this.querySelector('.initiative-title').textContent;
                    console.log('Initiative clicked:', title);
                    alert(`Viewing detailed metrics for: ${title}`);
                });
            });
        }
    };
})();