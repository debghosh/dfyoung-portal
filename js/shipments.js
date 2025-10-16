// Shipments Page Module
(function() {
    function shipmentsMarkup() {
        return `
            <div class="page shipments-page">
                <h1 class="page-title">📦 Shipments</h1>
                <p class="page-subtitle">Track and manage all your shipments</p>

                <div class="card">
                    <div class="shipments-header">
                        <h3>Active Shipments</h3>
                        <button class="btn btn-primary book-shipment-btn">Book New Shipment</button>
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
                                <td><button class="btn btn-secondary track-btn" data-tracking="DFY-8472">Track</button></td>
                            </tr>
                            <tr>
                                <td>DFY-8471</td>
                                <td>Chicago → Miami</td>
                                <td><span class="status-badge status-in-transit">In Transit</span></td>
                                <td>6 hours</td>
                                <td><button class="btn btn-secondary track-btn" data-tracking="DFY-8471">Track</button></td>
                            </tr>
                            <tr>
                                <td>DFY-8470</td>
                                <td>Seattle → Dallas</td>
                                <td><span class="status-badge status-delivered">Delivered</span></td>
                                <td>—</td>
                                <td><button class="btn btn-secondary details-btn" data-tracking="DFY-8470">Details</button></td>
                            </tr>
                            <tr>
                                <td>DFY-8469</td>
                                <td>Boston → Atlanta</td>
                                <td><span class="status-badge status-in-transit">In Transit</span></td>
                                <td>1 day</td>
                                <td><button class="btn btn-secondary track-btn" data-tracking="DFY-8469">Track</button></td>
                            </tr>
                            <tr>
                                <td>DFY-8468</td>
                                <td>San Francisco → Denver</td>
                                <td><span class="status-badge status-delivered">Delivered</span></td>
                                <td>—</td>
                                <td><button class="btn btn-secondary details-btn" data-tracking="DFY-8468">Details</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }

    // Public API
    window.ShipmentsPage = {
        render() {
            return shipmentsMarkup();
        },
        attachListeners() {
            // Book new shipment
            const bookBtn = document.querySelector('.shipments-page .book-shipment-btn');
            if (bookBtn) {
                bookBtn.addEventListener('click', function() {
                    console.log('Opening booking form');
                    alert('New shipment booking form would open here.');
                });
            }

            // Track buttons
            const trackBtns = document.querySelectorAll('.shipments-page .track-btn');
            trackBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const trackingNum = this.getAttribute('data-tracking');
                    console.log('Track shipment:', trackingNum);
                    alert(`Real-time tracking for ${trackingNum} would be displayed here with GPS location, status updates, and estimated delivery time.`);
                });
            });

            // Details buttons
            const detailsBtns = document.querySelectorAll('.shipments-page .details-btn');
            detailsBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const trackingNum = this.getAttribute('data-tracking');
                    console.log('View details:', trackingNum);
                    alert(`Complete shipment details for ${trackingNum} would be displayed here including timeline, documents, and proof of delivery.`);
                });
            });
        }
    };
})();