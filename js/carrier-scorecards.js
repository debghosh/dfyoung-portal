// Carrier Scorecards Page Module
(function() {
    function carrierScorecardsMarkup() {
        return `
            <div class="page carrier-scorecards-page">
                <h1 class="page-title">🎯 Carrier Scorecards</h1>
                <p class="page-subtitle">Comprehensive carrier performance evaluation</p>

                <div class="card">
                    <h3 style="margin-bottom: 15px;">Carrier Performance Scorecard <span class="ai-badge">AI Analyzed</span></h3>
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Carrier</th>
                                <th>Shipments</th>
                                <th>On-Time %</th>
                                <th>Damage Rate</th>
                                <th>Avg Cost</th>
                                <th>Rating</th>
                                <th>AI Recommendation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>FedEx Ground</td>
                                <td>342</td>
                                <td>96.8%</td>
                                <td>0.3%</td>
                                <td>$247</td>
                                <td><span class="status-badge status-compliant">Excellent</span></td>
                                <td style="color: #059669; font-weight: 600;">✓ Increase volume</td>
                            </tr>
                            <tr>
                                <td>UPS Freight</td>
                                <td>289</td>
                                <td>94.2%</td>
                                <td>0.5%</td>
                                <td>$268</td>
                                <td><span class="status-badge status-compliant">Good</span></td>
                                <td style="color: #2563eb; font-weight: 600;">→ Maintain current</td>
                            </tr>
                            <tr>
                                <td>XPO Logistics</td>
                                <td>156</td>
                                <td>89.4%</td>
                                <td>1.2%</td>
                                <td>$234</td>
                                <td><span class="status-badge status-pending">Warning</span></td>
                                <td style="color: #d97706; font-weight: 600;">⚠ Monitor closely</td>
                            </tr>
                            <tr>
                                <td>Old Dominion</td>
                                <td>198</td>
                                <td>97.3%</td>
                                <td>0.2%</td>
                                <td>$289</td>
                                <td><span class="status-badge status-compliant">Excellent</span></td>
                                <td style="color: #059669; font-weight: 600;">✓ Negotiate discount</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="insight-card">
                    <h3>💡 AI Recommendation</h3>
                    <p><strong>Action:</strong> Shift 80% of XPO Logistics volume to FedEx Ground and Old Dominion. This would improve on-time delivery by 11.6% and reduce damage claims by $12,400 annually while maintaining similar costs.</p>
                </div>
            </div>
        `;
    }

    // Public API
    window.CarrierScorecardsPage = {
        render() {
            return carrierScorecardsMarkup();
        },
        attachListeners() {
            const rows = document.querySelectorAll('.carrier-scorecards-page .data-table tbody tr');
            rows.forEach(row => {
                row.addEventListener('click', function() {
                    const carrier = this.cells[0].textContent;
                    console.log('Carrier selected:', carrier);
                    alert(`Viewing detailed performance metrics for: ${carrier}`);
                });
            });
        }
    };
})();