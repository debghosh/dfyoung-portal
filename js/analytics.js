// Analytics Page JavaScript
(function() {
    window.AnalyticsPage = {
        init() {
            this.attachEventListeners();
        },

        attachEventListeners() {
            // Filter button handlers
            const filterButtons = document.querySelectorAll('.analytics-page .filter-btn');
            filterButtons.forEach(btn => {
                btn.addEventListener('click', function() {
                    // Remove active class from siblings
                    this.parentElement.querySelectorAll('.filter-btn').forEach(b => {
                        b.classList.remove('active');
                    });
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    console.log('Filter changed to:', this.textContent);
                    // Here you would typically update the chart data
                });
            });

            // Recommendation action buttons
            const recButtons = document.querySelectorAll('.analytics-page .recommendation-card .btn');
            recButtons.forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    const action = this.textContent.trim();
                    const card = this.closest('.recommendation-card');
                    const title = card.querySelector('.rec-title').textContent.trim();
                    
                    console.log(`Action "${action}" for recommendation: ${title}`);
                    
                    // Add visual feedback
                    this.style.transform = 'scale(0.96)';
                    setTimeout(() => {
                        this.style.transform = '';
                    }, 120);
                    
                    // Show alert for demo purposes
                    if (action === 'Implement Now') {
                        alert(`Implementation started for: ${title}\n\nThis would integrate with your backend API to begin the implementation process.`);
                    } else if (action === 'View Details' || action === 'View Analysis') {
                        alert(`Detailed analysis for: ${title}\n\nThis would open a detailed view with comprehensive data and projections.`);
                    } else if (action === 'Run Scenario') {
                        alert(`Running scenario analysis for: ${title}\n\nThis would launch an interactive scenario planning tool.`);
                    } else if (action === 'Dismiss') {
                        if (confirm('Are you sure you want to dismiss this recommendation?')) {
                            card.style.transition = 'all 0.3s ease';
                            card.style.opacity = '0';
                            card.style.transform = 'translateX(-20px)';
                            setTimeout(() => {
                                card.remove();
                            }, 300);
                        }
                    }
                });
            });

            // Export report button
            const exportBtn = document.querySelector('.analytics-page .header-actions .btn-primary');
            if (exportBtn && exportBtn.textContent.includes('Export')) {
                exportBtn.addEventListener('click', function() {
                    console.log('Exporting report...');
                    alert('📥 Report Export\n\nYour analytics report is being generated. You will receive a download link via email within 2 minutes.\n\nFormats available: PDF, Excel, CSV');
                });
            }

            // Date range button
            const dateBtn = document.querySelector('.analytics-page .header-actions .btn-secondary');
            if (dateBtn && dateBtn.textContent.includes('Last')) {
                dateBtn.addEventListener('click', function() {
                    console.log('Opening date range picker...');
                    alert('📅 Date Range Selector\n\nAvailable ranges:\n• Last 7 Days\n• Last 30 Days (Current)\n• Last 90 Days\n• Last 12 Months\n• Custom Range');
                });
            }

            // Table row hover effects
            const tableRows = document.querySelectorAll('.analytics-page .table-container tbody tr');
            tableRows.forEach(row => {
                row.addEventListener('click', function() {
                    const carrier = this.querySelector('td:first-child strong').textContent;
                    console.log('Viewing details for carrier:', carrier);
                    alert(`📊 Carrier Details: ${carrier}\n\nThis would open a detailed view with:\n• Historical performance trends\n• Cost breakdown analysis\n• Service level agreements\n• Recommendations for optimization`);
                });
            });

            // Bar chart interactions
            const bars = document.querySelectorAll('.analytics-page .bar');
            bars.forEach(bar => {
                bar.addEventListener('click', function() {
                    const label = this.querySelector('.bar-label').textContent;
                    const value = this.querySelector('.bar-value').textContent;
                    console.log(`Bar clicked: ${label} - ${value}`);
                    alert(`📊 ${label} Details\n\nTotal Spend: ${value}\n\nBreakdown:\n• Ground: 50%\n• Ocean: 25%\n• Air: 15%\n• Rail: 10%\n\nClick "View Details" in the full dashboard to see more.`);
                });
            });
        }
    };
})();