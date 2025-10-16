// Compliance Hub Page Module
(function() {
    function complianceMarkup() {
        return `
            <div class="page compliance-page">
                <h1 class="page-title">📋 Compliance Hub</h1>
                <p class="page-subtitle">AI-powered regulatory compliance and documentation</p>

                <div class="card">
                    <div class="compliance-header">
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
                        <input type="text" class="form-input" id="shipment-input" placeholder="Shipment ID or Tracking Number">
                        <select class="form-select" id="doc-type-select">
                            <option>Select Document Type</option>
                            <option>Commercial Invoice</option>
                            <option>Bill of Lading</option>
                            <option>Certificate of Origin</option>
                            <option>FDA Prior Notice</option>
                            <option>All Required Documents</option>
                        </select>
                    </div>
                    <button class="btn btn-primary generate-docs-btn" style="width: 100%;">🚀 Generate Documents</button>
                    
                    <div class="compliance-stats">
                        <div class="stat-box">
                            <div class="stat-value">1,247</div>
                            <div class="stat-label">Docs Generated</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-value">99.8%</div>
                            <div class="stat-label">Accuracy Rate</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-value">4.2s</div>
                            <div class="stat-label">Avg Generation Time</div>
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
    }

    // Public API
    window.CompliancePage = {
        render() {
            return complianceMarkup();
        },
        attachListeners() {
            const generateBtn = document.querySelector('.compliance-page .generate-docs-btn');
            if (generateBtn) {
                generateBtn.addEventListener('click', function() {
                    const shipmentInput = document.getElementById('shipment-input');
                    const docTypeSelect = document.getElementById('doc-type-select');
                    
                    const shipmentId = shipmentInput ? shipmentInput.value : '';
                    const docType = docTypeSelect ? docTypeSelect.value : '';
                    
                    if (!shipmentId) {
                        alert('Please enter a Shipment ID or Tracking Number');
                        return;
                    }
                    
                    if (docType === 'Select Document Type') {
                        alert('Please select a document type');
                        return;
                    }
                    
                    console.log('Generating documents:', { shipmentId, docType });
                    alert(`Generating ${docType} for shipment ${shipmentId}...\n\nThis would integrate with your backend API to generate compliance documents automatically.`);
                    
                    // Clear form
                    if (shipmentInput) shipmentInput.value = '';
                    if (docTypeSelect) docTypeSelect.selectedIndex = 0;
                });
            }

            // Document item clicks
            const docItems = document.querySelectorAll('.compliance-page .doc-item');
            docItems.forEach(item => {
                item.addEventListener('click', function() {
                    const docName = this.querySelector('.doc-item-name').textContent;
                    console.log('Viewing document:', docName);
                    alert(`Opening document: ${docName}`);
                });
            });
        }
    };
})();