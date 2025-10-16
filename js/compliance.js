// Compliance Hub Page Module
(function() {
    function compliancePageMarkup() {
        return `
            <div class="page">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 30px; flex-wrap: wrap; gap: 20px;">
                    <div>
                        <h1 class="page-title">📋 Compliance Hub</h1>
                        <p class="page-subtitle">AI-powered regulatory compliance and documentation</p>
                    </div>
                    <div style="background: white; padding: 15px 25px; border-radius: 15px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); border: 2px solid #10b981; display: flex; align-items: center; gap: 15px;">
                        <div style="width: 60px; height: 60px; border-radius: 50%; background: linear-gradient(135deg, #10b981 0%, #059669 100%); display: flex; align-items: center; justify-content: center; font-size: 1.5em; font-weight: bold; color: white;">98</div>
                        <div>
                            <div style="font-size: 0.85em; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Compliance Score</div>
                            <div style="font-size: 1.3em; font-weight: 700; color: #10b981;">Excellent</div>
                        </div>
                    </div>
                </div>

                <!-- Alert Banner -->
                <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border: 2px solid #f59e0b; border-radius: 12px; padding: 15px 20px; margin-bottom: 25px; display: flex; align-items: center; gap: 15px; flex-wrap: wrap;">
                    <div style="font-size: 2em;">⚠️</div>
                    <div style="flex: 1; min-width: 300px;">
                        <div style="font-weight: 700; color: #92400e; margin-bottom: 5px;">New FDA Regulation Effective Jan 1, 2026</div>
                        <div style="color: #78350f; font-size: 0.9em; line-height: 1.5;">
                            Updated cold chain documentation requirements for pharmaceutical shipments. AI has analyzed your operations and identified 47 affected shipments. Automated compliance updates are ready for review.
                        </div>
                    </div>
                    <button class="btn btn-primary">Review Changes</button>
                </div>

                <!-- AI Form Generator -->
                <div class="card" style="margin-bottom: 25px;">
                    <div style="background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 2px solid #8b5cf6;">
                        <div style="font-weight: 700; color: #6b21a8; margin-bottom: 12px; display: flex; align-items: center; gap: 8px; font-size: 1.1em;">
                            🤖 AI Document Generator
                        </div>
                        <div style="color: #5b21b6; font-size: 0.9em; line-height: 1.5; margin-bottom: 15px;">
                            Simply enter your shipment details, and AI will automatically generate all required compliance documents including customs forms, certificates of origin, commercial invoices, and regulatory filings.
                        </div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 15px;">
                            <input type="text" class="form-input" placeholder="Shipment ID or Tracking Number" style="padding: 10px; border: 2px solid #c4b5fd; border-radius: 8px; font-size: 0.9em;">
                            <select class="form-select" style="padding: 10px; border: 2px solid #c4b5fd; border-radius: 8px; font-size: 0.9em;">
                                <option>Select Document Type</option>
                                <option>Commercial Invoice</option>
                                <option>Bill of Lading</option>
                                <option>Certificate of Origin</option>
                                <option>FDA Prior Notice</option>
                                <option>EUR.1 Certificate</option>
                                <option>Dangerous Goods Declaration</option>
                                <option>All Required Documents</option>
                            </select>
                        </div>
                        <button class="btn btn-primary" style="width: 100%;">🚀 Generate Documents (AI-Powered)</button>
                    </div>

                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px;">
                        <div style="background: #f8fafc; padding: 15px; border-radius: 10px; text-align: center; border: 1px solid #e2e8f0;">
                            <div style="font-size: 2em; font-weight: bold; color: #667eea; margin-bottom: 5px;">1,247</div>
                            <div style="font-size: 0.8em; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Docs Generated</div>
                        </div>
                        <div style="background: #f8fafc; padding: 15px; border-radius: 10px; text-align: center; border: 1px solid #e2e8f0;">
                            <div style="font-size: 2em; font-weight: bold; color: #667eea; margin-bottom: 5px;">99.8%</div>
                            <div style="font-size: 0.8em; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Accuracy Rate</div>
                        </div>
                        <div style="background: #f8fafc; padding: 15px; border-radius: 10px; text-align: center; border: 1px solid #e2e8f0;">
                            <div style="font-size: 2em; font-weight: bold; color: #667eea; margin-bottom: 5px;">4.2s</div>
                            <div style="font-size: 0.8em; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Avg Generation Time</div>
                        </div>
                    </div>
                </div>

                <!-- Two Column Grid -->
                <div class="two-col-grid">
                    <!-- Recent Documents -->
                    <div class="card">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                            <div style="font-size: 1.2em; font-weight: 700; color: #1e293b; display: flex; align-items: center; gap: 8px;">
                                📄 Recent Documents
                            </div>
                            <div class="ai-badge">🤖 Auto-Generated</div>
                        </div>
                        
                        <div style="display: flex; flex-direction: column; gap: 12px;">
                            ${createDocItem('📋', 'Commercial Invoice - DFY-2847392', 'Generated 5 min ago • Auto-validated')}
                            ${createDocItem('🌐', 'Certificate of Origin - EUR.1', 'Generated 23 min ago • Blockchain verified')}
                            ${createDocItem('💊', 'FDA Prior Notice - Vaccines', 'Generated 1 hour ago • FDA approved')}
                            ${createDocItem('🚢', 'Bill of Lading - Ocean Freight', 'Generated 2 hours ago • Carrier confirmed')}
                            ${createDocItem('⚠️', 'Dangerous Goods Declaration', 'Generated 3 hours ago • IATA compliant')}
                        </div>
                    </div>

                    <!-- Active Regulations -->
                    <div class="card">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                            <div style="font-size: 1.2em; font-weight: 700; color: #1e293b;">📚 Active Regulations</div>
                            <div class="ai-badge">🤖 AI Monitored</div>
                        </div>

                        ${createRegulationItem(
                            'FDA Food Safety Modernization Act (FSMA)',
                            'Requires prior notice for food imports and temperature monitoring for perishables. AI automatically generates FDA forms and maintains temperature logs.',
                            'Compliant',
                            'Last updated: Nov 2024',
                            '✓ 47 shipments compliant',
                            '#10b981'
                        )}

                        ${createRegulationItem(
                            'USMCA Rules of Origin',
                            'Trade agreement between US, Mexico, and Canada requiring certificates of origin for duty-free treatment. AI auto-classifies goods and generates certificates.',
                            'Compliant',
                            'Effective: July 2020',
                            '✓ Saved $124K in tariffs',
                            '#10b981'
                        )}

                        ${createRegulationItem(
                            'IATA Dangerous Goods Regulations',
                            'International standards for shipping hazardous materials by air. AI identifies dangerous goods and generates required declarations and labels.',
                            'Compliant',
                            'Edition 65 (2024)',
                            '✓ 23 shipments certified',
                            '#10b981'
                        )}

                        ${createRegulationItem(
                            'EU General Data Protection Regulation (GDPR)',
                            'Data privacy regulation affecting shipments to EU. AI detected 3 shipments requiring updated privacy notices for customer data handling.',
                            'Action Needed',
                            'Effective: May 2018',
                            '<button class="btn btn-primary" style="padding: 4px 10px; font-size: 0.75em;">Update Now</button>',
                            '#f59e0b'
                        )}
                    </div>
                </div>

                <!-- Audit Trail -->
                <div class="card" style="margin-top: 25px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                        <div style="font-size: 1.2em; font-weight: 700; color: #1e293b;">🔍 Compliance Audit Trail</div>
                        <div class="ai-badge">🤖 Blockchain Verified</div>
                    </div>

                    <div style="display: flex; flex-direction: column; gap: 15px;">
                        ${createAuditItem('✓', 'FDA Prior Notice Submitted - Shipment DFY-COLD-8392', '5 min ago', 'AI automatically generated and submitted FDA prior notice for vaccine shipment. Confirmation number: FDA-2024-8392847. Blockchain hash: 0x7f3a...')}
                        ${createAuditItem('📄', 'Certificate of Origin Generated - Milan Shipment', '23 min ago', 'EUR.1 certificate auto-generated to resolve customs hold in Milan. Document verified by Italian customs authority. 12 shipments released.')}
                        ${createAuditItem('⚠️', 'Regulation Change Detected - FDA Cold Chain', '2 hours ago', 'AI detected new FDA regulation effective Jan 1, 2026. Analyzed 47 affected shipments and prepared compliance updates. Awaiting user review.')}
                        ${createAuditItem('✓', 'Quarterly Compliance Audit Completed', '1 day ago', 'AI conducted automated compliance audit of 1,247 shipments. Results: 98% compliance score, 3 minor issues identified and auto-corrected, 0 violations.')}
                        ${createAuditItem('🎓', 'Team Training Completed - IATA DG Regulations', '3 days ago', '12 team members completed AI-guided training on IATA Dangerous Goods Regulations Edition 65. All certifications renewed and uploaded to compliance system.')}
                    </div>
                </div>

                <!-- Training & Certifications -->
                <div class="two-col-grid" style="margin-top: 25px;">
                    <div class="card">
                        <div style="font-size: 1.2em; font-weight: 700; color: #1e293b; margin-bottom: 20px;">🎓 Team Training</div>

                        ${createTrainingItem('IATA Dangerous Goods Regulations', '12 team members • Due: Dec 31, 2025', 100, 'Complete')}
                        ${createTrainingItem('FDA Food Safety Modernization Act', '8 team members • Due: Jan 15, 2026', 75, '75%')}
                        ${createTrainingItem('USMCA Rules of Origin', '15 team members • Due: Feb 1, 2026', 45, '45%')}
                        ${createTrainingItem('Cold Chain Management Best Practices', '6 team members • Due: Mar 1, 2026', 20, '20%')}
                    </div>

                    <div class="card">
                        <div style="font-size: 1.2em; font-weight: 700; color: #1e293b; margin-bottom: 20px;">⚖️ Active Certifications</div>

                        <div style="display: flex; flex-direction: column; gap: 12px;">
                            ${createCertItem('✓', 'C-TPAT Certification', 'Expires: Dec 2026', 'Active')}
                            ${createCertItem('✓', 'ISO 9001:2015 Quality Management', 'Expires: Mar 2026', 'Active')}
                            ${createCertItem('✓', 'AEO (Authorized Economic Operator)', 'Expires: Aug 2027', 'Active')}
                            ${createCertItem('⚠️', 'IATA CEIV Pharma Certification', 'Expires: Jan 2026', 'Renewal Due')}
                            ${createCertItem('✓', 'TSA Known Shipper Program', 'Expires: Nov 2028', 'Active')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Helper function to create document items
    function createDocItem(icon, name, meta) {
        return `
            <div style="background: #f8fafc; padding: 15px; border-radius: 10px; display: flex; justify-content: space-between; align-items: center; transition: all 0.2s ease; border: 1px solid #e2e8f0;" class="doc-item-hover">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.2em;">${icon}</div>
                    <div>
                        <div style="font-weight: 600; color: #1e293b; font-size: 0.95em;">${name}</div>
                        <div style="font-size: 0.8em; color: #64748b;">${meta}</div>
                    </div>
                </div>
                <div style="display: flex; gap: 8px;">
                    <button class="btn btn-secondary" style="padding: 6px 12px; font-size: 0.85em;">View</button>
                    <button class="btn btn-primary" style="padding: 6px 12px; font-size: 0.85em;">Download</button>
                </div>
            </div>
        `;
    }

    // Helper function to create regulation items
    function createRegulationItem(title, description, status, footer1, footer2, borderColor) {
        const statusClass = status === 'Compliant' ? 'status-compliant' : 'status-pending';
        return `
            <div style="background: #f8fafc; padding: 15px; border-radius: 10px; margin-bottom: 12px; border-left: 4px solid ${borderColor};">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                    <div style="font-weight: 700; color: #1e293b; font-size: 0.95em;">${title}</div>
                    <span class="status-badge ${statusClass}">${status}</span>
                </div>
                <div style="color: #475569; font-size: 0.85em; line-height: 1.5; margin-bottom: 10px;">${description}</div>
                <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.8em; color: #64748b;">
                    <span>${footer1}</span>
                    <span style="color: #10b981; font-weight: 600;">${footer2}</span>
                </div>
            </div>
        `;
    }

    // Helper function to create audit items
    function createAuditItem(icon, title, time, description) {
        return `
            <div style="display: flex; gap: 15px; position: relative;">
                <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.1em; flex-shrink: 0; z-index: 1;">${icon}</div>
                <div style="flex: 1; background: #f8fafc; padding: 12px; border-radius: 8px;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px;">
                        <div style="font-weight: 600; color: #1e293b; font-size: 0.9em;">${title}</div>
                        <div style="font-size: 0.75em; color: #64748b;">${time}</div>
                    </div>
                    <div style="font-size: 0.85em; color: #475569; line-height: 1.4;">${description}</div>
                </div>
            </div>
        `;
    }

    // Helper function to create training items
    function createTrainingItem(title, meta, progress, status) {
        const statusClass = status === 'Complete' ? 'status-compliant' : 'status-pending';
        return `
            <div style="background: #f8fafc; padding: 15px; border-radius: 10px; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center; border: 1px solid #e2e8f0;">
                <div style="flex: 1;">
                    <div style="font-weight: 600; margin-bottom: 4px;">${title}</div>
                    <div style="font-size: 0.8em; color: #64748b;">${meta}</div>
                </div>
                <div style="width: 150px; height: 8px; background: #e2e8f0; border-radius: 10px; overflow: hidden; margin-right: 15px;">
                    <div style="height: 100%; background: linear-gradient(90deg, #667eea 0%, #764ba2 100%); border-radius: 10px; width: ${progress}%; transition: width 0.3s ease;"></div>
                </div>
                <span class="status-badge ${statusClass}">${status}</span>
            </div>
        `;
    }

    // Helper function to create certification items
    function createCertItem(icon, name, expires, status) {
        const statusClass = status === 'Active' ? 'status-compliant' : 'status-pending';
        return `
            <div style="background: #f8fafc; padding: 15px; border-radius: 10px; display: flex; align-items: center; gap: 12px; border: 1px solid #e2e8f0;">
                <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.2em;">${icon}</div>
                <div style="flex: 1;">
                    <div style="font-weight: 600; color: #1e293b;">${name}</div>
                    <div style="font-size: 0.8em; color: #64748b;">${expires} • <span class="status-badge ${statusClass}">${status}</span></div>
                </div>
            </div>
        `;
    }

    // Public render function
    window.CompliancePage = {
        render() {
            return compliancePageMarkup();
        },
        attachListeners() {
            // Add hover effects for document items
            const style = document.createElement('style');
            style.textContent = `
                .doc-item-hover:hover {
                    background: #f1f5f9 !important;
                    transform: translateX(5px);
                }
            `;
            document.head.appendChild(style);

            // Add button click handlers
            document.querySelectorAll('.btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    this.style.transform = 'scale(0.96)';
                    setTimeout(() => { this.style.transform = ''; }, 120);
                });
            });
        }
    };
})();
