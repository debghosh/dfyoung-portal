// Recommendations Page Module
(function() {
    function recommendationsMarkup() {
        return `
            <div class="page recommendations-page">
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
    }

    // Public API
    window.RecommendationsPage = {
        render() {
            return recommendationsMarkup();
        },
        attachListeners() {
            // Implement buttons
            const implementBtns = document.querySelectorAll('.recommendations-page .btn-primary');
            implementBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const recCard = this.closest('.rec-card');
                    const recTitle = recCard ? recCard.querySelector('.rec-title').textContent : 'Unknown';
                    
                    console.log('Implementing recommendation:', recTitle);
                    alert(`Implementing: ${recTitle}\n\nThis would trigger the implementation workflow in your system, including timeline planning, stakeholder notifications, and progress tracking.`);
                });
            });
        }
    };
})();