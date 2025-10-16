// Preferences Page Module
(function() {
    function preferencesMarkup() {
        return `
            <div class="page preferences-page">
                <h1 class="page-title">⚙️ Preferences</h1>
                <p class="page-subtitle">Customize your portal experience</p>

                <div class="card">
                    <h3 style="margin-bottom: 20px;">Account Settings</h3>
                    <div class="form-group">
                        <label>Company Name</label>
                        <input type="text" class="form-input" id="company-name" value="Acme Corporation" placeholder="Enter company name">
                    </div>
                    <div class="form-group">
                        <label>Email Address</label>
                        <input type="email" class="form-input" id="email" value="sarah@acmecorp.com" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <label>Phone Number</label>
                        <input type="tel" class="form-input" id="phone" value="+1 (555) 123-4567" placeholder="Enter phone">
                    </div>
                    <button class="btn btn-primary save-account-btn">Save Changes</button>
                </div>

                <div class="card">
                    <h3 style="margin-bottom: 20px;">Notification Preferences</h3>
                    <div class="checkbox-group">
                        <label class="checkbox-label">
                            <input type="checkbox" checked>
                            <span>Email notifications for shipment updates</span>
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" checked>
                            <span>SMS alerts for critical issues</span>
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" checked>
                            <span>AI recommendation notifications</span>
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox">
                            <span>Weekly performance reports</span>
                        </label>
                    </div>
                </div>

                <div class="card">
                    <h3 style="margin-bottom: 20px;">Display Preferences</h3>
                    <div class="form-group">
                        <label>Default Dashboard View</label>
                        <select class="form-select" id="default-view">
                            <option>Home Dashboard</option>
                            <option>Analytics Dashboard</option>
                            <option>Command Center</option>
                            <option>Shipments</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Time Zone</label>
                        <select class="form-select" id="timezone">
                            <option>Eastern Time (ET)</option>
                            <option>Central Time (CT)</option>
                            <option>Mountain Time (MT)</option>
                            <option>Pacific Time (PT)</option>
                        </select>
                    </div>
                </div>
            </div>
        `;
    }

    // Public API
    window.PreferencesPage = {
        render() {
            return preferencesMarkup();
        },
        attachListeners() {
            const saveBtn = document.querySelector('.preferences-page .save-account-btn');
            if (saveBtn) {
                saveBtn.addEventListener('click', function() {
                    const companyName = document.getElementById('company-name')?.value;
                    const email = document.getElementById('email')?.value;
                    const phone = document.getElementById('phone')?.value;
                    
                    console.log('Saving preferences:', { companyName, email, phone });
                    alert('Preferences saved successfully!');
                });
            }
        }
    };
})();