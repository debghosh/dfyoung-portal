// Page Content Definitions
const Pages = {
    // HOME PAGE
    home() {
        return `
            <div class="page">
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
            </div>
        `;
    },

    // AI ASSISTANT PAGE
    'ai-assistant'() {
        return `
            <div class="page">
                <h1 class="page-title">🤖 AI Assistant</h1>
                <p class="page-subtitle">Conversational AI for intelligent shipping management</p>

                <div class="card">
                    <h3 style="margin-bottom: 15px;">Chat with AI Agent</h3>
                    <div class="chat-container">
                        <div class="message user">
                            <strong>You:</strong>
                            <p>I need to ship 500 lbs of electronics from LA to NY. Can you give me a quote?</p>
                        </div>
                        <div class="message ai">
                            <strong>AI Agent:</strong>
                            <p>I've analyzed your request and found 3 optimized options. Based on your 5-day window, ground shipping via southern corridor (avoiding Chicago snow) will save $340 vs air freight.

Recommended: Ground Freight - $680, arrives in 4 days, 15% discount applied ✓</p>
                        </div>
                    </div>
                    <p class="ai-note">✨ AI automatically detected weather risks, applied volume discounts, and optimized routing</p>
                </div>

                <div class="card">
                    <h3 style="margin-bottom: 15px;">Quick Actions</h3>
                    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                        <button class="btn btn-primary">Get Quote</button>
                        <button class="btn btn-secondary">Track Shipment</button>
                        <button class="btn btn-secondary">Book Shipment</button>
                        <button class="btn btn-secondary">View Recommendations</button>
                    </div>
                </div>
            </div>
        `;
    },

    // ANALYTICS PAGE
    analytics() {
        return `
            <div class="page">
                <h1 class="page-title">📊 Analytics Dashboard</h1>
                <p class="page-subtitle">AI-powered insights for your logistics operations</p>

                <div class="kpi-grid">
                    ${createKPICard('Total Spend', '$847K', '-12.4%', true)}
                    ${createKPICard('Active Shipments', '1,247', '+8.1%', true)}
                    ${createKPICard('On-Time Delivery', '94.7%', '+3.2%', true)}
                    ${createKPICard('Carbon Footprint', '342t', '-18.3%', true)}
                </div>

                <div class="insight-card">
                    <h3>💡 AI Insight</h3>
                    <p>November spend decreased 12% due to successful consolidation strategy implemented in October. Projected December spend: $890K with continued optimization.</p>
                </div>

                <div class="card">
                    <h3 style="margin-bottom: 15px;">Carrier Performance Scorecard</h3>
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Carrier</th>
                                <th>Shipments</th>
                                <th>On-Time %</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>FedEx Ground</td>
                                <td>342</td>
                                <td>96.8%</td>
                                <td><span class="status-badge status-compliant">Excellent</span></td>
                            </tr>
                            <tr>
                                <td>UPS Freight</td>
                                <td>289</td>
                                <td>94.2%</td>
                                <td><span class="status-badge status-compliant">Good</span></td>
                            </tr>
                            <tr>
                                <td>Old Dominion</td>
                                <td>198</td>
                                <td>97.3%</td>
                                <td><span class="status-badge status-compliant">Excellent</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    },

    // COMMAND CENTER PAGE
    command() {
        return `
            <div class="page">
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
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                        <div style="padding: 15px; background: #f8fafc; border-radius: 8px;">
                            <div style="font-weight: 600;">North America</div>
                            <div style="font-size: 2em; color: #10b981;">1,847</div>
                            <div style="font-size: 0.85em; color: #64748b;">Active shipments</div>
                        </div>
                        <div style="padding: 15px; background: #f8fafc; border-radius: 8px;">
                            <div style="font-weight: 600;">Europe</div>
                            <div style="font-size: 2em; color: #10b981;">423</div>
                            <div style="font-size: 0.85em; color: #64748b;">Active shipments</div>
                        </div>
                        <div style="padding: 15px; background: #f8fafc; border-radius: 8px;">
                            <div style="font-weight: 600;">Asia Pacific</div>
                            <div style="font-size: 2em; color: #f59e0b;">189</div>
                            <div style="font-size: 0.85em; color: #64748b;">Active shipments</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    // COMPLIANCE HUB PAGE
    compliance() {
        return `
            <div class="page">
                <h1 class="page-title">📋 Compliance Hub</h1>
                <p class="page-subtitle">AI-powered regulatory compliance and documentation</p>

                <div class="card">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 15px;">
                        <div>
                            <h3>🤖 AI Document Generator <span class="ai-badge">99.8% Accuracy</span></h3>
                        </div>
                        <div class="compliance-score">
                            <div class="compliance-score-value">98</div>
                            <div class="compliance-score-label">Compliance Score</div>
                        </div>
                    </div>
                    <p style="margin-bottom: 15px;">AI automatically generates all required compliance documents including customs forms, certificates of origin, commercial invoices, and regulatory filings.</p>
                    <div class="form-grid" style="margin-bottom: 15px;">
                        <input type="text" class="form-input" placeholder="Shipment ID or Tracking Number">
                        <select class="form-select">
                            <option>Select Document Type</option>
                            <option>Commercial Invoice</option>
                            <option>Bill of Lading</option>
                            <option>Certificate of Origin</option>
                            <option>FDA Prior Notice</option>
                            <option>All Required Documents</option>
                        </select>
                    </div>
                    <button class="btn btn-primary generate-docs-btn" style="width: 100%;">🚀 Generate Documents</button>
                    
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-top: 20px;">
                        <div style="text-align: center; padding: 15px; background: #f8fafc; border-radius: 8px;">
                            <div style="font-size: 1.8em; font-weight: bold; color: #667eea;">1,247</div>
                            <div style="font-size: 0.8em; color: #64748b;">Docs Generated</div>
                        </div>
                        <div style="text-align: center; padding: 15px; background: #f8fafc; border-radius: 8px;">
                            <div style="font-size: 1.8em; font-weight: bold; color: #10b981;">99.8%</div>
                            <div style="font-size: 0.8em; color: #64748b;">Accuracy Rate</div>
                        </div>
                        <div style="text-align: center; padding: 15px; background: #f8fafc; border-radius: 8px;">
                            <div style="font-size: 1.8em; font-weight: bold; color: #3b82f6;">4.2s</div>
                            <div style="font-size: 0.8em; color: #64748b;">Avg Generation Time</div>
                        </div>
                    </div>
                </div>

                <div class="two-col-grid">
                    <div class="card">
                        <h3 style="margin-bottom: 15px;">📄 Recent Documents</h3>
                        <div class="doc-item">
                            <div class="doc-item-name">Commercial Invoice - DFY-2847392</div>
                            <div class="doc-item-time">Generated 5 min ago • Auto-validated</div>
                        </div>
                        <div class="doc-item">
                            <div class="doc-item-name">Certificate of Origin - EUR.1</div>
                            <div class="doc-item-time">Generated 23 min ago • Blockchain verified</div>
                        </div>
                        <div class="doc-item">
                            <div class="doc-item-name">FDA Prior Notice - Vaccines</div>
                            <div class="doc-item-time">Generated 1 hour ago • FDA approved</div>
                        </div>
                    </div>

                    <div class="card">
                        <h3 style="margin-bottom: 15px;">📚 Active Regulations</h3>
                        <div class="reg-item">
                            <div class="reg-item-name">✅ FDA FSMA - Compliant</div>
                            <div class="reg-item-desc">AI automatically generates FDA forms and maintains temperature logs</div>
                        </div>
                        <div class="reg-item">
                            <div class="reg-item-name">✅ USMCA Rules - Compliant</div>
                            <div class="reg-item-desc">AI auto-classifies goods. Saved $124K in tariffs</div>
                        </div>
                        <div class="reg-item">
                            <div class="reg-item-name">✅ IATA Dangerous Goods - Compliant</div>
                            <div class="reg-item-desc">AI identifies dangerous goods and generates declarations</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    // RECOMMENDATIONS PAGE
    recommendations() {
        return `
            <div class="page">
                <h1 class="page-title">💡 Strategic Recommendations</h1>
                <p class="page-subtitle">Macro-level logistics and supply chain optimization</p>

                ${createRecCard(
                    '💰 Consolidate East Coast Shipments',
                    "You're shipping to the East Coast 47 times per month with an average of 2-5 day flexibility. By consolidating shipments to New York, Boston, and Philadelphia into weekly batches, you can significantly reduce costs and carbon emissions.",
                    [
                        { label: 'Annual Savings', value: '$124,800' },
                        { label: 'Carbon Reduction', value: '34%' },
                        { label: 'Implementation', value: '2 weeks' }
                    ]
                )}

                ${createRecCard(
                    '🚢 Shift Air to Ocean+Rail',
                    '30% of your international shipments use air freight with 10+ day flexibility. Switching to ocean+rail multi-modal transport would meet delivery windows while dramatically reducing costs and emissions.',
                    [
                        { label: 'Annual Savings', value: '$287,400' },
                        { label: 'Carbon Reduction', value: '68%' },
                        { label: 'Affected Shipments', value: '142/year' }
                    ]
                )}

                ${createRecCard(
                    '🏢 Relocate Dallas Warehouse',
                    'Analysis of your shipping patterns shows 73% of Dallas warehouse shipments go to the Southeast. Relocating to Atlanta would reduce average transit distance by 340 miles and improve delivery times by 1.2 days.',
                    [
                        { label: 'Annual Savings', value: '$340,000' },
                        { label: 'Faster Delivery', value: '1.2 days' },
                        { label: 'ROI Timeline', value: '18 months' }
                    ]
                )}

                <div class="card">
                    <h3 style="margin-bottom: 20px;">📊 Projected Impact Summary</h3>
                    <div class="summary-metrics">
                        <div class="summary-metric">
                            <div class="summary-metric-value">$770K</div>
                            <div class="summary-metric-label">Total Annual Savings</div>
                        </div>
                        <div class="summary-metric">
                            <div class="summary-metric-value">45%</div>
                            <div class="summary-metric-label">Carbon Reduction</div>
                        </div>
                        <div class="summary-metric">
                            <div class="summary-metric-value">+12%</div>
                            <div class="summary-metric-label">Efficiency Improvement</div>
                        </div>
                        <div class="summary-metric">
                            <div class="summary-metric-value">3-6mo</div>
                            <div class="summary-metric-label">Avg Implementation</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    // SHIPMENTS PAGE
    shipments() {
        return `
            <div class="page">
                <h1 class="page-title">📦 Shipments</h1>
                <p class="page-subtitle">Track and manage all your shipments</p>

                <div class="card">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 10px;">
                        <h3>Active Shipments</h3>
                        <button class="btn btn-primary">Book New Shipment</button>
                    </div>
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Tracking #</th>
                                <th>Route</th>
                                <th>Status</th>
                                <th>ETA</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>DFY-8472</td>
                                <td>Los Angeles → New York</td>
                                <td><span class="status-badge status-in-transit">In Transit</span></td>
                                <td>2 hours</td>
                                <td><button class="btn btn-secondary" style="padding: 5px 10px; font-size: 0.85em;">Track</button></td>
                            </tr>
                            <tr>
                                <td>DFY-8471</td>
                                <td>Chicago → Miami</td>
                                <td><span class="status-badge status-in-transit">In Transit</span></td>
                                <td>6 hours</td>
                                <td><button class="btn btn-secondary" style="padding: 5px 10px; font-size: 0.85em;">Track</button></td>
                            </tr>
                            <tr>
                                <td>DFY-8470</td>
                                <td>Seattle → Dallas</td>
                                <td><span class="status-badge status-delivered">Delivered</span></td>
                                <td>—</td>
                                <td><button class="btn btn-secondary" style="padding: 5px 10px; font-size: 0.85em;">Details</button></td>
                            </tr>
                            <tr>
                                <td>DFY-8469</td>
                                <td>Boston → Atlanta</td>
                                <td><span class="status-badge status-in-transit">In Transit</span></td>
                                <td>1 day</td>
                                <td><button class="btn btn-secondary" style="padding: 5px 10px; font-size: 0.85em;">Track</button></td>
                            </tr>
                            <tr>
                                <td>DFY-8468</td>
                                <td>San Francisco → Denver</td>
                                <td><span class="status-badge status-delivered">Delivered</span></td>
                                <td>—</td>
                                <td><button class="btn btn-secondary" style="padding: 5px 10px; font-size: 0.85em;">Details</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    },

    // INVOICES PAGE
    invoices() {
        return `
            <div class="page">
                <h1 class="page-title">💰 Invoices</h1>
                <p class="page-subtitle">Manage billing and invoices</p>

                <div class="kpi-grid">
                    ${createKPICard('Outstanding Balance', '$12,450', '', false)}
                    ${createKPICard('Paid This Month', '$284,320', '', true)}
                    ${createKPICard('Pending Invoices', '3', '', false)}
                    ${createKPICard('Avg Payment Time', '5 days', '', true)}
                </div>

                <div class="card">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 10px;">
                        <h3>Recent Invoices</h3>
                        <button class="btn btn-secondary">Download All</button>
                    </div>
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Invoice #</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>INV-2024-1247</td>
                                <td>Nov 28, 2024</td>
                                <td>$8,450</td>
                                <td><span class="status-badge status-pending">Pending</span></td>
                                <td><button class="btn btn-primary" style="padding: 5px 10px; font-size: 0.85em;">Pay Now</button></td>
                            </tr>
                            <tr>
                                <td>INV-2024-1246</td>
                                <td>Nov 25, 2024</td>
                                <td>$12,320</td>
                                <td><span class="status-badge status-compliant">Paid</span></td>
                                <td><button class="btn btn-secondary" style="padding: 5px 10px; font-size: 0.85em;">Download</button></td>
                            </tr>
                            <tr>
                                <td>INV-2024-1245</td>
                                <td>Nov 20, 2024</td>
                                <td>$6,780</td>
                                <td><span class="status-badge status-compliant">Paid</span></td>
                                <td><button class="btn btn-secondary" style="padding: 5px 10px; font-size: 0.85em;">Download</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    },

    // RISK MONITOR PAGE
    'risk-monitor'() {
        return `
            <div class="page">
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
                    <div style="display: grid; gap: 15px;">
                        <div style="padding: 15px; background: #d1fae5; border-radius: 8px; border-left: 4px solid #10b981;">
                            <div style="font-weight: 600; margin-bottom: 5px;">✅ Weather Risks - Low</div>
                            <div style="font-size: 0.9em; color: #064e3b;">All routes clear. No severe weather expected in next 7 days.</div>
                        </div>
                        <div style="padding: 15px; background: #fef3c7; border-radius: 8px; border-left: 4px solid #f59e0b;">
                            <div style="font-weight: 600; margin-bottom: 5px;">⚠️ Port Congestion - Medium</div>
                            <div style="font-size: 0.9em; color: #78350f;">LA Port experiencing 2-day delays. Oakland routing recommended.</div>
                        </div>
                        <div style="padding: 15px; background: #d1fae5; border-radius: 8px; border-left: 4px solid #10b981;">
                            <div style="font-weight: 600; margin-bottom: 5px;">✅ Compliance Risks - Low</div>
                            <div style="font-size: 0.9em; color: #064e3b;">98% compliance score. All documentation up to date.</div>
                        </div>
                        <div style="padding: 15px; background: #d1fae5; border-radius: 8px; border-left: 4px solid #10b981;">
                            <div style="font-weight: 600; margin-bottom: 5px;">✅ Capacity Risks - Low</div>
                            <div style="font-size: 0.9em; color: #064e3b;">All carriers have sufficient capacity. No bottlenecks detected.</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    // PERFORMANCE PAGE
    performance() {
        return `
            <div class="page">
                <h1 class="page-title">📈 Performance</h1>
                <p class="page-subtitle">Comprehensive performance analytics and reporting</p>

                <div class="kpi-grid">
                    ${createKPICard('On-Time Delivery', '94.7%', '+3.2%', true)}
                    ${createKPICard('Avg Transit Time', '4.2 days', '-0.3 days', true)}
                    ${createKPICard('Cost per Mile', '$1.84', '-$0.12', true)}
                    ${createKPICard('Network Efficiency', '87%', '+5%', true)}
                </div>

                <div class="card">
                    <h3 style="margin-bottom: 15px;">📊 Monthly Performance Trends</h3>
                    <p style="color: #64748b; margin-bottom: 20px;">Performance metrics showing consistent improvement across all KPIs over the past 6 months.</p>
                    <div style="height: 300px; background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: #64748b;">
                        Performance Chart Visualization
                    </div>
                </div>

                <div class="insight-card">
                    <h3>💡 AI Performance Insight</h3>
                    <p>Your on-time delivery rate improved by 3.2% this month due to proactive weather rerouting and optimized carrier selection. AI prevented 12 potential delays, saving an estimated $23,400 in expedite fees.</p>
                </div>
            </div>
        `;
    },

    // SUSTAINABILITY PAGE
    sustainability() {
        return `
            <div class="page">
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
                            <div style="padding: 12px; background: #d1fae5; border-radius: 8px; margin-bottom: 10px;">
                                <div style="font-weight: 600;">✅ Route Optimization</div>
                                <div style="font-size: 0.9em; color: #064e3b;">Saved 42t CO2 this month</div>
                            </div>
                            <div style="padding: 12px; background: #d1fae5; border-radius: 8px; margin-bottom: 10px;">
                                <div style="font-weight: 600;">✅ Mode Shift (Air to Ocean)</div>
                                <div style="font-size: 0.9em; color: #064e3b;">Reduced emissions by 68%</div>
                            </div>
                            <div style="padding: 12px; background: #d1fae5; border-radius: 8px;">
                                <div style="font-weight: 600;">✅ Shipment Consolidation</div>
                                <div style="font-size: 0.9em; color: #064e3b;">34% reduction in trips</div>
                            </div>
                        </div>
                        <div>
                            <h4 style="margin-bottom: 10px;">Sustainability Goals</h4>
                            <div style="margin-bottom: 15px;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                                    <span style="font-size: 0.9em;">2024 Carbon Reduction Target</span>
                                    <span style="font-weight: 600;">73%</span>
                                </div>
                                <div style="background: #e2e8f0; height: 8px; border-radius: 10px; overflow: hidden;">
                                    <div style="background: linear-gradient(90deg, #10b981 0%, #059669 100%); height: 100%; width: 73%;"></div>
                                </div>
                            </div>
                            <div style="margin-bottom: 15px;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                                    <span style="font-size: 0.9em;">Green Carrier Usage</span>
                                    <span style="font-weight: 600;">56%</span>
                                </div>
                                <div style="background: #e2e8f0; height: 8px; border-radius: 10px; overflow: hidden;">
                                    <div style="background: linear-gradient(90deg, #10b981 0%, #059669 100%); height: 100%; width: 56%;"></div>
                                </div>
                            </div>
                            <div>
                                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                                    <span style="font-size: 0.9em;">Paperless Documentation</span>
                                    <span style="font-weight: 600;">94%</span>
                                </div>
                                <div style="background: #e2e8f0; height: 8px; border-radius: 10px; overflow: hidden;">
                                    <div style="background: linear-gradient(90deg, #10b981 0%, #059669 100%); height: 100%; width: 94%;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    // CARRIER SCORECARDS PAGE
    'carrier-scorecards'() {
        return `
            <div class="page">
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
    },

    // PREFERENCES PAGE
    preferences() {
        return `
            <div class="page">
                <h1 class="page-title">⚙️ Preferences</h1>
                <p class="page-subtitle">Customize your portal experience</p>

                <div class="card">
                    <h3 style="margin-bottom: 20px;">Account Settings</h3>
                    <div class="form-group">
                        <label style="display: block; margin-bottom: 5px; font-weight: 600;">Company Name</label>
                        <input type="text" class="form-input" value="Acme Corporation" placeholder="Enter company name">
                    </div>
                    <div class="form-group">
                        <label style="display: block; margin-bottom: 5px; font-weight: 600;">Email Address</label>
                        <input type="email" class="form-input" value="sarah@acmecorp.com" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <label style="display: block; margin-bottom: 5px; font-weight: 600;">Phone Number</label>
                        <input type="tel" class="form-input" value="+1 (555) 123-4567" placeholder="Enter phone">
                    </div>
                    <button class="btn btn-primary">Save Changes</button>
                </div>

                <div class="card">
                    <h3 style="margin-bottom: 20px;">Notification Preferences</h3>
                    <div style="display: flex; flex-direction: column; gap: 15px;">
                        <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                            <input type="checkbox" checked style="width: 18px; height: 18px;">
                            <span>Email notifications for shipment updates</span>
                        </label>
                        <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                            <input type="checkbox" checked style="width: 18px; height: 18px;">
                            <span>SMS alerts for critical issues</span>
                        </label>
                        <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                            <input type="checkbox" checked style="width: 18px; height: 18px;">
                            <span>AI recommendation notifications</span>
                        </label>
                        <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                            <input type="checkbox" style="width: 18px; height: 18px;">
                            <span>Weekly performance reports</span>
                        </label>
                    </div>
                </div>

                <div class="card">
                    <h3 style="margin-bottom: 20px;">Display Preferences</h3>
                    <div class="form-group">
                        <label style="display: block; margin-bottom: 5px; font-weight: 600;">Default Dashboard View</label>
                        <select class="form-select">
                            <option>Home Dashboard</option>
                            <option>Analytics Dashboard</option>
                            <option>Command Center</option>
                            <option>Shipments</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label style="display: block; margin-bottom: 5px; font-weight: 600;">Time Zone</label>
                        <select class="form-select">
                            <option>Eastern Time (ET)</option>
                            <option>Central Time (CT)</option>
                            <option>Mountain Time (MT)</option>
                            <option>Pacific Time (PT)</option>
                        </select>
                    </div>
                </div>
            </div>
        `;
    },

    // TEAM PAGE
    team() {
        return `
            <div class="page">
                <h1 class="page-title">👥 Team</h1>
                <p class="page-subtitle">Manage your team members and permissions</p>

                <div class="card">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 10px;">
                        <h3>Team Members</h3>
                        <button class="btn btn-primary">+ Invite Member</button>
                    </div>
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Sarah Johnson</strong></td>
                                <td>sarah@acmecorp.com</td>
                                <td>Administrator</td>
                                <td><span class="status-badge status-compliant">Active</span></td>
                                <td><button class="btn btn-secondary" style="padding: 5px 10px; font-size: 0.85em;">Edit</button></td>
                            </tr>
                            <tr>
                                <td><strong>Mike Chen</strong></td>
                                <td>mike@acmecorp.com</td>
                                <td>Logistics Manager</td>
                                <td><span class="status-badge status-compliant">Active</span></td>
                                <td><button class="btn btn-secondary" style="padding: 5px 10px; font-size: 0.85em;">Edit</button></td>
                            </tr>
                            <tr>
                                <td><strong>Emma Davis</strong></td>
                                <td>emma@acmecorp.com</td>
                                <td>Operations Analyst</td>
                                <td><span class="status-badge status-compliant">Active</span></td>
                                <td><button class="btn btn-secondary" style="padding: 5px 10px; font-size: 0.85em;">Edit</button></td>
                            </tr>
                            <tr>
                                <td><strong>James Wilson</strong></td>
                                <td>james@acmecorp.com</td>
                                <td>Viewer</td>
                                <td><span class="status-badge status-pending">Pending</span></td>
                                <td><button class="btn btn-secondary" style="padding: 5px 10px; font-size: 0.85em;">Resend Invite</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="card">
                    <h3 style="margin-bottom: 20px;">Role Permissions</h3>
                    <div style="display: grid; gap: 15px;">
                        <div style="padding: 15px; background: #f8fafc; border-radius: 8px;">
                            <div style="font-weight: 600; margin-bottom: 5px;">Administrator</div>
                            <div style="font-size: 0.9em; color: #64748b;">Full access to all features, team management, and billing</div>
                        </div>
                        <div style="padding: 15px; background: #f8fafc; border-radius: 8px;">
                            <div style="font-weight: 600; margin-bottom: 5px;">Logistics Manager</div>
                            <div style="font-size: 0.9em; color: #64748b;">Can book shipments, view analytics, and manage operations</div>
                        </div>
                        <div style="padding: 15px; background: #f8fafc; border-radius: 8px;">
                            <div style="font-weight: 600; margin-bottom: 5px;">Operations Analyst</div>
                            <div style="font-size: 0.9em; color: #64748b;">View-only access to analytics and reports</div>
                        </div>
                        <div style="padding: 15px; background: #f8fafc; border-radius: 8px;">
                            <div style="font-weight: 600; margin-bottom: 5px;">Viewer</div>
                            <div style="font-size: 0.9em; color: #64748b;">Basic read-only access to shipment tracking</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    // NOTIFICATIONS PAGE
    notifications() {
        return `
            <div class="page">
                <h1 class="page-title">🔔 Notifications</h1>
                <p class="page-subtitle">Configure alerts and notification preferences</p>

                <div class="card">
                    <h3 style="margin-bottom: 20px;">Recent Notifications</h3>
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <div style="padding: 15px; background: #e0e7ff; border-left: 4px solid #667eea; border-radius: 8px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                                <strong>🤖 AI Recommendation Available</strong>
                                <span style="font-size: 0.85em; color: #64748b;">2 hours ago</span>
                            </div>
                            <div style="font-size: 0.9em;">New consolidation opportunity identified. Potential savings: $2,400/month</div>
                        </div>
                        <div style="padding: 15px; background: #d1fae5; border-left: 4px solid #10b981; border-radius: 8px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                                <strong>✅ Shipment Delivered</strong>
                                <span style="font-size: 0.85em; color: #64748b;">4 hours ago</span>
                            </div>
                            <div style="font-size: 0.9em;">DFY-8470 delivered to Seattle facility on time</div>
                        </div>
                        <div style="padding: 15px; background: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 8px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                                <strong>⚠️ Weather Alert</strong>
                                <span style="font-size: 0.85em; color: #64748b;">6 hours ago</span>
                            </div>
                            <div style="font-size: 0.9em;">Snow forecast in Denver. AI has rerouted 3 affected shipments</div>
                        </div>
                        <div style="padding: 15px; background: #dbeafe; border-left: 4px solid #3b82f6; border-radius: 8px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                                <strong>📊 Weekly Report Ready</strong>
                                <span style="font-size: 0.85em; color: #64748b;">1 day ago</span>
                            </div>
                            <div style="font-size: 0.9em;">Your performance report for the week is now available</div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <h3 style="margin-bottom: 20px;">Notification Settings</h3>
                    <div style="display: grid; gap: 20px;">
                        <div>
                            <h4 style="margin-bottom: 10px;">Shipment Updates</h4>
                            <div style="display: flex; flex-direction: column; gap: 10px;">
                                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                                    <input type="checkbox" checked style="width: 18px; height: 18px;">
                                    <span>Pickup confirmations</span>
                                </label>
                                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                                    <input type="checkbox" checked style="width: 18px; height: 18px;">
                                    <span>Delivery confirmations</span>
                                </label>
                                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                                    <input type="checkbox" checked style="width: 18px; height: 18px;">
                                    <span>Delays and exceptions</span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <h4 style="margin-bottom: 10px;">AI Insights</h4>
                            <div style="display: flex; flex-direction: column; gap: 10px;">
                                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                                    <input type="checkbox" checked style="width: 18px; height: 18px;">
                                    <span>Cost optimization recommendations</span>
                                </label>
                                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                                    <input type="checkbox" checked style="width: 18px; height: 18px;">
                                    <span>Risk alerts</span>
                                </label>
                                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                                    <input type="checkbox" style="width: 18px; height: 18px;">
                                    <span>Performance insights</span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <h4 style="margin-bottom: 10px;">Reports</h4>
                            <div style="display: flex; flex-direction: column; gap: 10px;">
                                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                                    <input type="checkbox" checked style="width: 18px; height: 18px;">
                                    <span>Daily summary</span>
                                </label>
                                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                                    <input type="checkbox" checked style="width: 18px; height: 18px;">
                                    <span>Weekly performance report</span>
                                </label>
                                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                                    <input type="checkbox" style="width: 18px; height: 18px;">
                                    <span>Monthly analytics</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-primary" style="margin-top: 20px;">Save Preferences</button>
                </div>
            </div>
        `;
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