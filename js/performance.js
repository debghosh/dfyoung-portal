// Performance Page Module
(function() {
    function performanceMarkup() {
        return `
            <div class="page performance-page">
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
                    <div class="chart-placeholder">
                        Performance Chart Visualization
                    </div>
                </div>

                <div class="insight-card">
                    <h3>💡 AI Performance Insight</h3>
                    <p>Your on-time delivery rate improved by 3.2% this month due to proactive weather rerouting and optimized carrier selection. AI prevented 12 potential delays, saving an estimated $23,400 in expedite fees.</p>
                </div>
            </div>
        `;
    }

    // Public API
    window.PerformancePage = {
        render() {
            return performanceMarkup();
        },
        attachListeners() {
            // Chart interactions could be added here
            const chartPlaceholder = document.querySelector('.performance-page .chart-placeholder');
            if (chartPlaceholder) {
                chartPlaceholder.addEventListener('click', function() {
                    console.log('Chart clicked');
                    alert('Interactive chart would allow drilling down into specific metrics and time periods.');
                });
            }
        }
    };
})();