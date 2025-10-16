// Supply Chain Command Center Page Module
(function() {
    function commandCenterMarkup() {
        return `
            <div class="page" style="background: #0f172a; margin: -30px; padding: 0; min-height: 100vh;">
                <!-- Top Bar -->
                <div style="background: linear-gradient(90deg, #1e293b 0%, #334155 100%); padding: 15px 30px; display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #334155;">
                    <div style="font-size: 1.5em; font-weight: bold; color: white;">
                        df<span style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">YOUNG</span> Command Center
                    </div>
                    <div style="display: flex; gap: 20px; align-items: center; color: white;">
                        ${createStatusItem('status-dot-green', 'Systems Operational')}
                        ${createStatusItem('status-dot-yellow', '3 Alerts')}
                        ${createStatusItem('status-dot-green', 'AI Active')}
                        <div style="display: flex; align-items: center; gap: 8px; padding: 8px 15px; background: rgba(255,255,255,0.05); border-radius: 8px; font-size: 0.9em;">
                            <span>🕐 Last updated: 2 min ago</span>
                        </div>
                    </div>
                </div>

                <!-- Main Grid -->
                <div style="display: grid; grid-template-columns: 2fr 1fr; grid-template-rows: 1fr 300px; gap: 20px; padding: 20px; height: calc(100vh - 70px);">
                    
                    <!-- Map Container -->
                    <div style="background: #1e293b; border-radius: 15px; padding: 20px; position: relative; overflow: hidden; border: 1px solid #334155; grid-row: 1 / 3;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                            <div style="font-size: 1.2em; font-weight: 700; color: white;">🌐 Global Shipment Network</div>
                            <div style="display: flex; gap: 8px;">
                                <div class="filter-chip active">All</div>
                                <div class="filter-chip">In-Transit</div>
                                <div class="filter-chip">Delayed</div>
                                <div class="filter-chip">Critical</div>
                            </div>
                        </div>

                        <!-- AI Insight Banner -->
                        <div style="background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%); border: 1px solid #667eea; border-radius: 10px; padding: 12px 15px; margin-bottom: 15px; display: flex; align-items: center; gap: 12px; color: white;">
                            <div style="font-size: 1.5em;">🤖</div>
                            <div style="flex: 1; font-size: 0.9em; line-height: 1.4;">
                                <strong>AI Insight:</strong> Port congestion detected in Los Angeles (3-day delay). I've automatically rerouted 23 shipments through Oakland. Estimated savings: $18,400 in demurrage fees.
                            </div>
                        </div>

                        <!-- World Map -->
                        <div id="worldMap" style="width: 100%; height: calc(100% - 140px); background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); border-radius: 10px; position: relative; background-image: repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(102, 126, 234, 0.03) 50px, rgba(102, 126, 234, 0.03) 51px), repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(102, 126, 234, 0.03) 50px, rgba(102, 126, 234, 0.03) 51px);">
                            ${createShipmentMarkers()}
                            ${createRouteLines()}
                        </div>

                        <!-- Legend -->
                        <div style="display: flex; gap: 15px; margin-top: 10px; flex-wrap: wrap; color: white; font-size: 0.8em;">
                            ${createLegendItem('#667eea', 'On-Time (1,847)')}
                            ${createLegendItem('#3b82f6', 'In-Transit (342)')}
                            ${createLegendItem('#f59e0b', 'Delayed (112)')}
                            ${createLegendItem('#ef4444', 'Critical (12)')}
                        </div>

                        <div id="tooltip" style="position: absolute; background: rgba(30, 41, 59, 0.95); padding: 12px; border-radius: 8px; border: 1px solid #667eea; font-size: 0.85em; pointer-events: none; z-index: 100; display: none; backdrop-filter: blur(10px); color: white;"></div>
                    </div>

                    <!-- Alerts Panel -->
                    <div style="background: #1e293b; border-radius: 15px; padding: 20px; border: 1px solid #334155; overflow-y: auto; color: white;">
                        <div style="font-size: 1.1em; font-weight: 700; margin-bottom: 15px; display: flex; align-items: center; gap: 8px;">
                            ⚠️ Real-Time Alerts
                        </div>

                        ${createAlertItem('critical', '🚨 Customs Hold - Milan', '5 min ago', '12 shipments held at Milan customs due to missing EUR.1 certificates. AI has auto-generated documents and submitted to broker.', 'View Details')}
                        ${createAlertItem('warning', '⚠️ Weather Disruption - Tokyo', '23 min ago', 'Typhoon approaching Tokyo Port. 67 shipments affected. AI recommends rerouting through Osaka (adds 1 day, saves $12K in demurrage).', 'Approve Reroute')}
                        ${createAlertItem('warning', '📦 Inventory Risk - Miami', '1 hour ago', 'Miami warehouse at 92% capacity. AI predicts stockout in 4 days based on current demand. Recommend expediting 3 inbound shipments.', 'Expedite Shipments')}
                        ${createAlertItem('normal', '💰 Cost Spike Alert', '2 hours ago', 'Fuel surcharges increased 8% on trans-Pacific routes. AI recommends locking in rates for next 90 days to save $47K.', 'Lock Rates')}
                        ${createAlertItem('normal', '🎯 Optimization Opportunity', '3 hours ago', 'AI detected 8 shipments to Boston area departing tomorrow. Consolidation opportunity: Save $2,340 and reduce carbon by 28%.', 'Consolidate')}
                        ${createAlertItem('normal', '✅ Issue Resolved', '4 hours ago', 'LA Port congestion cleared. 23 rerouted shipments now back on original schedule. No additional costs incurred.', '')}
                    </div>

                    <!-- Metrics Panel -->
                    <div style="background: #1e293b; border-radius: 15px; padding: 20px; border: 1px solid #334155; display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">
                        ${createMetricCard('Active Shipments', '2,313', '↑ 8.2% vs yesterday', true)}
                        ${createMetricCard('On-Time Performance', '94.7%', '↑ 2.1% vs last week', true)}
                        ${createMetricCard('At-Risk Shipments', '124', '↑ 12 vs yesterday', false)}
                        ${createMetricCard('Avg Transit Time', '4.2d', '↓ 0.3d vs last month', true)}
                        ${createMetricCard('Network Efficiency', '87%', '↑ 5% vs last month', true)}
                        ${createMetricCard('Cost per Mile', '$1.84', '↓ $0.12 vs last month', true)}
                        ${createMetricCard('Supply Chain Risk', 'Low', 'Improved from Medium', true, '✓')}
                        ${createMetricCard('AI Actions Today', '47', 'Saved $23.4K', true)}
                    </div>
                </div>
            </div>
        `;
    }

    // Helper function to create status items
    function createStatusItem(dotClass, text) {
        return `
            <div style="display: flex; align-items: center; gap: 8px; padding: 8px 15px; background: rgba(255,255,255,0.05); border-radius: 8px; font-size: 0.9em;">
                <div class="${dotClass}"></div>
                <span>${text}</span>
            </div>
        `;
    }

    // Helper function to create legend items
    function createLegendItem(color, text) {
        return `
            <div style="display: flex; align-items: center; gap: 6px;">
                <div style="width: 10px; height: 10px; border-radius: 50%; background: ${color};"></div>
                <span>${text}</span>
            </div>
        `;
    }

    // Helper function to create shipment markers
    function createShipmentMarkers() {
        const markers = [
            // North America
            { left: '15%', top: '35%', type: 'normal', info: 'Los Angeles Hub|342 shipments|On-time' },
            { left: '22%', top: '30%', type: 'normal', info: 'Chicago Facility|198 shipments|On-time' },
            { left: '28%', top: '32%', type: 'normal', info: 'New York Port|267 shipments|On-time' },
            { left: '25%', top: '45%', type: 'delayed', info: 'Dallas Warehouse|45 shipments|Weather delay' },
            { left: '20%', top: '28%', type: 'normal', info: 'Seattle Port|89 shipments|On-time' },
            // Europe
            { left: '48%', top: '28%', type: 'normal', info: 'Rotterdam Port|156 shipments|On-time' },
            { left: '50%', top: '32%', type: 'normal', info: 'Hamburg Hub|92 shipments|On-time' },
            { left: '52%', top: '35%', type: 'critical', info: 'Milan Facility|12 shipments|Customs hold' },
            // Asia
            { left: '78%', top: '38%', type: 'normal', info: 'Shanghai Port|423 shipments|On-time' },
            { left: '82%', top: '42%', type: 'normal', info: 'Hong Kong Hub|234 shipments|On-time' },
            { left: '85%', top: '35%', type: 'delayed', info: 'Tokyo Port|67 shipments|Typhoon delay' },
            { left: '75%', top: '45%', type: 'normal', info: 'Singapore Hub|189 shipments|On-time' },
            // South America
            { left: '32%', top: '65%', type: 'normal', info: 'São Paulo|34 shipments|On-time' }
        ];

        return markers.map(m => {
            const typeClass = m.type === 'critical' ? 'shipment-marker-critical' : 
                            m.type === 'delayed' ? 'shipment-marker-delayed' : 'shipment-marker';
            return `<div class="${typeClass}" style="left: ${m.left}; top: ${m.top};" data-info="${m.info}"></div>`;
        }).join('');
    }

    // Helper function to create route lines
    function createRouteLines() {
        const lines = [
            { left: '15%', top: '35%', width: '13%', rotation: '15deg' },
            { left: '28%', top: '32%', width: '20%', rotation: '-5deg' },
            { left: '48%', top: '30%', width: '30%', rotation: '5deg' }
        ];

        return lines.map(l => 
            `<div style="position: absolute; left: ${l.left}; top: ${l.top}; width: ${l.width}; height: 2px; background: linear-gradient(90deg, transparent, #667eea, transparent); transform: rotate(${l.rotation}); transform-origin: left center; opacity: 0.3;"></div>`
        ).join('');
    }

    // Helper function to create alert items
    function createAlertItem(type, title, time, description, actionText) {
        const typeStyles = {
            critical: 'border-left-color: #ef4444;',
            warning: 'border-left-color: #f59e0b;',
            normal: 'border-left-color: #667eea;'
        };

        const actionButton = actionText ? `<button class="btn btn-primary" style="margin-top: 8px; padding: 4px 10px; font-size: 0.75em;">${actionText}</button>` : '';

        return `
            <div class="command-alert-item ${type}" style="background: rgba(255,255,255,0.03); padding: 12px; border-radius: 8px; margin-bottom: 10px; border-left: 3px solid #667eea; transition: all 0.2s ease; ${typeStyles[type] || ''}">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px;">
                    <div style="font-weight: 600; font-size: 0.9em;">${title}</div>
                    <div style="font-size: 0.75em; color: #94a3b8;">${time}</div>
                </div>
                <div style="font-size: 0.85em; color: #cbd5e1; line-height: 1.4;">${description}</div>
                ${actionButton}
            </div>
        `;
    }

    // Helper function to create metric cards
    function createMetricCard(label, value, change, isPositive, badge = '') {
        const changeColor = isPositive ? '#10b981' : '#ef4444';
        const badgeHtml = badge ? `<span style="display: inline-block; padding: 3px 8px; border-radius: 12px; font-size: 0.75em; font-weight: 600; margin-left: 8px; background: rgba(16, 185, 129, 0.2); color: #10b981;">${badge}</span>` : '';

        return `
            <div style="background: rgba(255,255,255,0.03); padding: 15px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.05);">
                <div style="font-size: 0.75em; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">${label}</div>
                <div style="font-size: 2em; font-weight: bold; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">${value}${badgeHtml}</div>
                <div style="font-size: 0.8em; margin-top: 5px; color: ${changeColor};">${change}</div>
            </div>
        `;
    }

    // Public render function
    window.CommandCenterPage = {
        render() {
            return commandCenterMarkup();
        },
        attachListeners() {
            // Add custom styles for command center
            const style = document.createElement('style');
            style.textContent = `
                .status-dot-green, .status-dot-yellow {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    animation: pulse 2s infinite;
                }
                .status-dot-green {
                    background: #10b981;
                    box-shadow: 0 0 10px #10b981;
                }
                .status-dot-yellow {
                    background: #f59e0b;
                    box-shadow: 0 0 10px #f59e0b;
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
                .filter-chip {
                    padding: 6px 12px;
                    background: rgba(102, 126, 234, 0.2);
                    border: 1px solid #667eea;
                    border-radius: 20px;
                    font-size: 0.8em;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    color: white;
                }
                .filter-chip:hover, .filter-chip.active {
                    background: #667eea;
                }
                .shipment-marker {
                    position: absolute;
                    width: 12px;
                    height: 12px;
                    background: #667eea;
                    border-radius: 50%;
                    border: 2px solid white;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    animation: markerPulse 2s infinite;
                }
                .shipment-marker:hover {
                    transform: scale(1.5);
                    z-index: 10;
                }
                @keyframes markerPulse {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.7); }
                    50% { box-shadow: 0 0 0 10px rgba(102, 126, 234, 0); }
                }
                .shipment-marker-delayed {
                    position: absolute;
                    width: 12px;
                    height: 12px;
                    background: #f59e0b;
                    border-radius: 50%;
                    border: 2px solid white;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    animation: markerPulse 2s infinite;
                }
                .shipment-marker-critical {
                    position: absolute;
                    width: 12px;
                    height: 12px;
                    background: #ef4444;
                    border-radius: 50%;
                    border: 2px solid white;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    animation: criticalPulse 1s infinite;
                }
                @keyframes criticalPulse {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); }
                    50% { box-shadow: 0 0 0 15px rgba(239, 68, 68, 0); }
                }
                .command-alert-item:hover {
                    background: rgba(255,255,255,0.08) !important;
                    transform: translateX(5px);
                }
                .command-alert-item.critical {
                    animation: alertBlink 2s infinite;
                }
                @keyframes alertBlink {
                    0%, 100% { background: rgba(239, 68, 68, 0.1) !important; }
                    50% { background: rgba(239, 68, 68, 0.2) !important; }
                }
            `;
            document.head.appendChild(style);

            // Tooltip functionality
            const markers = document.querySelectorAll('.shipment-marker, .shipment-marker-delayed, .shipment-marker-critical');
            const tooltip = document.getElementById('tooltip');

            if (tooltip) {
                markers.forEach(marker => {
                    marker.addEventListener('mouseenter', (e) => {
                        const info = e.target.getAttribute('data-info').split('|');
                        tooltip.innerHTML = `
                            <strong>${info[0]}</strong><br>
                            ${info[1]}<br>
                            <span style="color: ${info[2].includes('delay') || info[2].includes('hold') ? '#f59e0b' : '#10b981'}">${info[2]}</span>
                        `;
                        tooltip.style.display = 'block';
                    });

                    marker.addEventListener('mousemove', (e) => {
                        tooltip.style.left = (e.pageX + 15) + 'px';
                        tooltip.style.top = (e.pageY + 15) + 'px';
                    });

                    marker.addEventListener('mouseleave', () => {
                        tooltip.style.display = 'none';
                    });
                });
            }

            // Filter functionality
            const filterChips = document.querySelectorAll('.filter-chip');
            filterChips.forEach(chip => {
                chip.addEventListener('click', () => {
                    filterChips.forEach(c => c.classList.remove('active'));
                    chip.classList.add('active');
                });
            });

            // Button click handlers
            document.querySelectorAll('.btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    this.style.transform = 'scale(0.96)';
                    setTimeout(() => { this.style.transform = ''; }, 120);
                });
            });
        }
    };
})();
