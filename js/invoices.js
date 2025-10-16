// Invoices Page Module
(function() {
    function invoicesMarkup() {
        return `
            <div class="page invoices-page">
                <h1 class="page-title">💰 Invoices</h1>
                <p class="page-subtitle">Manage billing and invoices</p>

                <div class="kpi-grid">
                    ${createKPICard('Outstanding Balance', '$12,450', '', false)}
                    ${createKPICard('Paid This Month', '$284,320', '', true)}
                    ${createKPICard('Pending Invoices', '3', '', false)}
                    ${createKPICard('Avg Payment Time', '5 days', '', true)}
                </div>

                <div class="card">
                    <div class="invoices-header">
                        <h3>Recent Invoices</h3>
                        <button class="btn btn-secondary download-all-btn">Download All</button>
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
                                <td><button class="btn btn-primary pay-btn" data-invoice="INV-2024-1247">Pay Now</button></td>
                            </tr>
                            <tr>
                                <td>INV-2024-1246</td>
                                <td>Nov 25, 2024</td>
                                <td>$12,320</td>
                                <td><span class="status-badge status-compliant">Paid</span></td>
                                <td><button class="btn btn-secondary download-btn" data-invoice="INV-2024-1246">Download</button></td>
                            </tr>
                            <tr>
                                <td>INV-2024-1245</td>
                                <td>Nov 20, 2024</td>
                                <td>$6,780</td>
                                <td><span class="status-badge status-compliant">Paid</span></td>
                                <td><button class="btn btn-secondary download-btn" data-invoice="INV-2024-1245">Download</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }

    // Public API
    window.InvoicesPage = {
        render() {
            return invoicesMarkup();
        },
        attachListeners() {
            // Download all button
            const downloadAllBtn = document.querySelector('.invoices-page .download-all-btn');
            if (downloadAllBtn) {
                downloadAllBtn.addEventListener('click', function() {
                    console.log('Downloading all invoices');
                    alert('Downloading all invoices as ZIP file...');
                });
            }

            // Pay buttons
            const payBtns = document.querySelectorAll('.invoices-page .pay-btn');
            payBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const invoice = this.getAttribute('data-invoice');
                    console.log('Processing payment for:', invoice);
                    alert(`Payment gateway for ${invoice} would open here.`);
                });
            });

            // Download individual invoice buttons
            const downloadBtns = document.querySelectorAll('.invoices-page .download-btn');
            downloadBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const invoice = this.getAttribute('data-invoice');
                    console.log('Downloading invoice:', invoice);
                    alert(`Downloading ${invoice}.pdf...`);
                });
            });
        }
    };
})();