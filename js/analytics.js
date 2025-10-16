// Analytics Page Module
(function() {
    function analyticsMarkup() {
        return `
            <div class="page analytics-page">
                <div class="page-header">
                    <div>
                        <h1 class="page-title">📊 Analytics Dashboard</h1>
                        <p class="page-subtitle">AI-powered insights for your logistics operations</p>
                    </div>
                    <div class="header-actions">
                        <button class="btn btn-secondary">📅 Last 30 Days</button>
                        <button class="btn btn-primary">📥 Export Report</button>
                    </div>
                </div>

                <div class="kpi-grid">
                    ${createKPICard('Total Spend', '$847K', '-12.4%', true)}
                    ${createKPICard('Active Shipments', '1,247', '+8.1%', true)}
                    ${createKPICard('On-Time Delivery', '94.7%', '+3.2%', true)}
                    ${createKPICard('Carbon Footprint', '342t', '-18.3%', true)}
                </div>

                <div class="recommendations-section">
                    <div class="section-header">
                        <div class="section-title">AI-Powered Recommendations</div>
                        <div class="ai-badge">🤖 AI Generated</div>
                    </div>

                    <div class="recommendation-card">
                        <div class="rec-header">
                            <div class="rec-title">💡 Consolidate East Coast Shipments</div>
                            <div class="rec-impact high">High Impact</div>
                        </div>
                        <div class="rec-description">
                            You're shipping to the East Coast 47 times per month with an average of 2-5 day flexibility. By consolidating shipments to New York, Boston, and Philadelphia into weekly batches, you can significantly reduce costs and carbon emissions.
                        </div>
                        <div class="rec-metrics">
                            <div class="rec-metric">
                                <div class="rec-metric-label">Annual Savings</div>
                                <div class="rec-metric-value">$124,800</div>
                            </div>
                            <div class="rec-metric">
                                <div class="rec-metric-label">Carbon Reduction</div>
                                <div class="rec-metric-value">34%</div>
                            </div>
                            <div class="rec-metric">
                                <div class="rec-metric-label">Implementation</div>
                                <div class="rec-metric-value">2 weeks</div>
                            </div>
                        </div>
                        <div class="rec-actions">
                            <button class="btn btn-primary">Implement Now</button>
                            <button class="btn btn-secondary">View Details</button>
                            <button class="btn btn-secondary">Dismiss</button>
                        </div>
                    </div>

                    <div class="recommendation-card">
                        <div class="rec-header">
                            <div class="rec-title">🚢 Shift Air to Ocean+Rail</div>
                            <div class="rec-impact medium">Medium Impact</div>
                        </div>
                        <div class="rec-description">
                            30% of your international shipments use air freight with 10+ day flexibility. Switching to ocean+rail multi-modal transport would meet delivery windows while dramatically reducing costs and emissions.
                        </div>
                        <div class="rec-metrics">
                            <div class="rec-metric">
                                <div class="rec-metric-label">Annual Savings</div>
                                <div class="rec-metric-value">$287,400</div>
                            </div>
                            <div class="rec-metric">
                                <div class="rec-metric-label">Carbon Reduction</div>
                                <div class="rec-metric-value">68%</div>
                            </div>
                            <div class="rec-metric">
                                <div class="rec-metric-label">Affected Shipments</div>
                                <div class="rec-metric-value">142/year</div>
                            </div>
                        </div>
                        <div class="rec-actions">
                            <button class="btn btn-primary">Implement Now</button>
                            <button class="btn btn-secondary">View Details</button>
                            <button class="btn btn-secondary">Dismiss</button>
                        </div>
                    </div>

                    <div class="recommendation-card">
                        <div class="rec-header">
                            <div class="rec-title">🏢 Relocate Dallas Warehouse</div>
                            <div class="rec-impact high">High Impact</div>
                        </div>
                        <div class="rec-description">
                            Analysis of your shipping patterns shows 73% of Dallas warehouse shipments go to the Southeast. Relocating to Atlanta would reduce average transit distance by 340 miles and improve delivery times by 1.2 days.
                        </div>
                        <div class="rec-metrics">
                            <div class="rec-metric">
                                <div class="rec-metric-label">Annual Savings</div>
                                <div class="rec-metric-value">$340,000</div>
                            </div>
                            <div class="rec-metric">
                                <div class="rec-metric-label">Faster Delivery</div>
                                <div class="rec-metric-value">1.2 days</div>
                            </div>
                            <div class="rec-metric">
                                <div class="rec-metric-label">ROI Timeline</div>
                                <div class="rec-metric-value">18 months</div>
                            </div>
                        </div>
                        <div class="rec-actions">
                            <button class="btn btn-primary">Run Scenario</button>
                            <button class="btn btn-secondary">View Analysis</button>
                            <button class="btn btn-secondary">Dismiss</button>
                        </div>
                    </div>
                </div>

                <div class="chart-grid">
                    <div class="chart-card">
                        <div class="chart-header">
                            <div class="chart-title">Shipping Spend by Month</div>
                            <div class="chart-filter">
                                <button class="filter-btn active">6M</button>
                                <button class="filter-btn">1Y</button>
                                <button class="filter-btn">All</button>
                            </div>
                        </div>
                        <div class="chart-placeholder">
                            <div class="bar-chart">
                                <div class="bar" style="height: 65%;">
                                    <div class="bar-value">$920K</div>
                                    <div class="bar-label">Jun</div>
                                </div>
                                <div class="bar" style="height: 72%;">
                                    <div class="bar-value">$1.02M</div>
                                    <div class="bar-label">Jul</div>
                                </div>
                                <div class="bar" style="height: 58%;">
                                    <div class="bar-value">$820K</div>
                                    <div class="bar-label">Aug</div>
                                </div>
                                <div class="bar" style="height: 80%;">
                                    <div class="bar-value">$1.13M</div>
                                    <div class="bar-label">Sep</div>
                                </div>
                                <div class="bar" style="height: 68%;">
                                    <div class="bar-value">$960K</div>
                                    <div class="bar-label">Oct</div>
                                </div>
                                <div class="bar" style="height: 60%;">
                                    <div class="bar-value">$847K</div>
                                    <div class="bar-label">Nov</div>
                                </div>
                            </div>
                        </div>
                        <div class="insight-card">
                            <h3>💡 AI Insight</h3>
                            <p>November spend decreased 12% due to successful consolidation strategy implemented in October. Projected December spend: $890K with continued optimization.</p>
                        </div>
                    </div>

                    <div class="chart-card">
                        <div class="chart-header">
                            <div class="chart-title">Spend by Mode</div>
                        </div>
                        <div class="chart-placeholder" style="height: 250px;">
                            <svg width="200" height="200" viewBox="0 0 200 200">
                                <circle cx="100" cy="100" r="80" fill="none" stroke="#667eea" stroke-width="40" stroke-dasharray="251 251" transform="rotate(-90 100 100)"/>
                                <circle cx="100" cy="100" r="80" fill="none" stroke="#8b5cf6" stroke-width="40" stroke-dasharray="126 377" stroke-dashoffset="-251" transform="rotate(-90 100 100)"/>
                                <circle cx="100" cy="100" r="80" fill="none" stroke="#ec4899" stroke-width="40" stroke-dasharray="75 428" stroke-dashoffset="-377" transform="rotate(-90 100 100)"/>
                                <circle cx="100" cy="100" r="80" fill="none" stroke="#f59e0b" stroke-width="40" stroke-dasharray="50 453" stroke-dashoffset="-452" transform="rotate(-90 100 100)"/>
                                <circle cx="100" cy="100" r="40" fill="white"/>
                                <text x="100" y="95" text-anchor="middle" font-size="24" font-weight="bold" fill="#1e293b">$847K</text>
                                <text x="100" y="115" text-anchor="middle" font-size="12" fill="#64748b">Total</text>
                            </svg>
                        </div>
                        <div class="legend">
                            <div class="legend-item">
                                <div class="legend-color" style="background: #667eea;"></div>
                                <span>Ground (50%)</span>
                            </div>
                            <div class="legend-item">
                                <div class="legend-color" style="background: #8b5cf6;"></div>
                                <span>Ocean (25%)</span>
                            </div>
                            <div class="legend-item">
                                <div class="legend-color" style="background: #ec4899;"></div>
                                <span>Air (15%)</span>
                            </div>
                            <div class="legend-item">
                                <div class="legend-color" style="background: #f59e0b;"></div>
                                <span>Rail (10%)</span>
                            </div>
                        </div>
                        <div class="insight-card">
                            <h3>💡 AI Insight</h3>
                            <p>Air freight usage decreased from 23% to 15% this month. Opportunity to reduce further by shifting 30% of remaining air shipments to ocean+rail.</p>
                        </div>
                    </div>
                </div>

                <div class="table-container">
                    <div class="section-header">
                        <div class="section-title">Carrier Performance Scorecard</div>
                        <div class="ai-badge">🤖 AI Analyzed</div>
                    </div>
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
                                <td><strong>FedEx Ground</strong></td>
                                <td>342</td>
                                <td>
                                    <div style="display: flex; align-items: center; gap: 10px;">
                                        <span>96.8%</span>
                                        <div class="progress-bar" style="width: 100px;">
                                            <div class="progress-fill" style="width: 96.8%;"></div>
                                        </div>
                                    </div>
                                </td>
                                <td>0.3%</td>
                                <td>$247</td>
                                <td><span class="status-badge status-compliant">Excellent</span></td>
                                <td style="color: #059669; font-weight: 600;">✓ Increase volume</td>
                            </tr>
                            <tr>
                                <td><strong>UPS Freight</strong></td>
                                <td>289</td>
                                <td>
                                    <div style="display: flex; align-items: center; gap: 10px;">
                                        <span>94.2%</span>
                                        <div class="progress-bar" style="width: 100px;">
                                            <div class="progress-fill" style="width: 94.2%;"></div>
                                        </div>
                                    </div>
                                </td>
                                <td>0.5%</td>
                                <td>$268</td>
                                <td><span class="status-badge status-compliant">Good</span></td>
                                <td style="color: #2563eb; font-weight: 600;">→ Maintain current</td>
                            </tr>
                            <tr>
                                <td><strong>XPO Logistics</strong></td>
                                <td>156</td>
                                <td>
                                    <div style="display: flex; align-items: center; gap: 10px;">
                                        <span>89.4%</span>
                                        <div class="progress-bar" style="width: 100px;">
                                            <div class="progress-fill" style="width: 89.4%;"></div>
                                        </div>
                                    </div>
                                </td>
                                <td>1.2%</td>
                                <td>$234</td>
                                <td><span class="status-badge status-pending">Warning</span></td>
                                <td style="color: #d97706; font-weight: 600;">⚠ Monitor closely</td>
                            </tr>
                            <tr>
                                <td><strong>Old Dominion</strong></td>
                                <td>198</td>
                                <td>
                                    <div style="display: flex; align-items: center; gap: 10px;">
                                        <span>97.3%</span>
                                        <div class="progress-bar" style="width: 100px;">
                                            <div class="progress-fill" style="width: 97.3%;"></div>
                                        </div>
                                    </div>
                                </td>
                                <td>0.2%</td>
                                <td>$289</td>
                                <td><span class="status-badge status-compliant">Excellent</span></td>
                                <td style="color: #059669; font-weight: 600;">✓ Negotiate volume discount</td>
                            </tr>
                            <tr>
                                <td><strong>Estes Express</strong></td>
                                <td>124</td>
                                <td>
                                    <div style="display: flex; align-items: center; gap: 10px;">
                                        <span>85.7%</span>
                                        <div class="progress-bar" style="width: 100px;">
                                            <div class="progress-fill" style="width: 85.7%;"></div>
                                        </div>
                                    </div>
                                </td>
                                <td>1.8%</td>
                                <td>$221</td>
                                <td><span class="status-badge" style="background: #fee2e2; color: #dc2626;">Poor</span></td>
                                <td style="color: #dc2626; font-weight: 600;">✗ Consider replacing</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="insight-card">
                        <h3>💡 AI Insight</h3>
                        <p><strong>Recommendation:</strong> Shift 80% of Estes Express volume to FedEx Ground and Old Dominion. This would improve on-time delivery by 11.6% and reduce damage claims by $12,400 annually while maintaining similar costs.</p>
                    </div>
                </div>
            </div>
        `;
    }

    // Public API
    window.AnalyticsPage = {
        render() {
            return analyticsMarkup();
        },
        attachListeners() {
            // Attach event listeners for interactive elements
            const exportBtn = document.querySelector('.analytics-page .btn-primary');
            if (exportBtn && exportBtn.textContent.includes('Export')) {
                exportBtn.addEventListener('click', () => {
                    console.log('Exporting analytics report...');
                    alert('Analytics report export started! This would integrate with your backend API.');
                });
            }

            // Chart filter buttons
            const filterBtns = document.querySelectorAll('.analytics-page .filter-btn');
            filterBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    console.log('Filter changed to:', this.textContent);
                });
            });

            // Recommendation action buttons
            const recBtns = document.querySelectorAll('.analytics-page .rec-actions .btn');
            recBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const action = this.textContent;
                    console.log('Recommendation action:', action);
                    
                    if (action.includes('Implement') || action.includes('Run Scenario')) {
                        alert(`${action} initiated! This would trigger the workflow in your system.`);
                    } else if (action.includes('Dismiss')) {
                        const card = this.closest('.recommendation-card');
                        if (card) {
                            card.style.opacity = '0';
                            setTimeout(() => card.remove(), 300);
                        }
                    }
                });
            });
        }
    };
})();