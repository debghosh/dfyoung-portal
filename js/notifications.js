// Notifications Page Module
(function() {
    function notificationsMarkup() {
        return `
            <div class="page notifications-page">
                <h1 class="page-title">🔔 Notifications</h1>
                <p class="page-subtitle">Configure alerts and notification preferences</p>

                <div class="card">
                    <h3 style="margin-bottom: 20px;">Recent Notifications</h3>
                    <div class="notifications-list">
                        <div class="notification-item info">
                            <div class="notification-header">
                                <strong>🤖 AI Recommendation Available</strong>
                                <span class="notification-time">2 hours ago</span>
                            </div>
                            <div class="notification-body">New consolidation opportunity identified. Potential savings: $2,400/month</div>
                        </div>
                        <div class="notification-item success">
                            <div class="notification-header">
                                <strong>✅ Shipment Delivered</strong>
                                <span class="notification-time">4 hours ago</span>
                            </div>
                            <div class="notification-body">DFY-8470 delivered to Seattle facility on time</div>
                        </div>
                        <div class="notification-item warning">
                            <div class="notification-header">
                                <strong>⚠️ Weather Alert</strong>
                                <span class="notification-time">6 hours ago</span>
                            </div>
                            <div class="notification-body">Snow forecast in Denver. AI has rerouted 3 affected shipments</div>
                        </div>
                        <div class="notification-item info">
                            <div class="notification-header">
                                <strong>📊 Weekly Report Ready</strong>
                                <span class="notification-time">1 day ago</span>
                            </div>
                            <div class="notification-body">Your performance report for the week is now available</div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <h3 style="margin-bottom: 20px;">Notification Settings</h3>
                    <div class="settings-grid">
                        <div class="settings-section">
                            <h4>Shipment Updates</h4>
                            <div class="checkbox-group">
                                <label class="checkbox-label">
                                    <input type="checkbox" checked>
                                    <span>Pickup confirmations</span>
                                </label>
                                <label class="checkbox-label">
                                    <input type="checkbox" checked>
                                    <span>Delivery confirmations</span>
                                </label>
                                <label class="checkbox-label">
                                    <input type="checkbox" checked>
                                    <span>Delays and exceptions</span>
                                </label>
                            </div>
                        </div>
                        <div class="settings-section">
                            <h4>AI Insights</h4>
                            <div class="checkbox-group">
                                <label class="checkbox-label">
                                    <input type="checkbox" checked>
                                    <span>Cost optimization recommendations</span>
                                </label>
                                <label class="checkbox-label">
                                    <input type="checkbox" checked>
                                    <span>Risk alerts</span>
                                </label>
                                <label class="checkbox-label">
                                    <input type="checkbox">
                                    <span>Performance insights</span>
                                </label>
                            </div>
                        </div>
                        <div class="settings-section">
                            <h4>Reports</h4>
                            <div class="checkbox-group">
                                <label class="checkbox-label">
                                    <input type="checkbox" checked>
                                    <span>Daily summary</span>
                                </label>
                                <label class="checkbox-label">
                                    <input type="checkbox" checked>
                                    <span>Weekly performance report</span>
                                </label>
                                <label class="checkbox-label">
                                    <input type="checkbox">
                                    <span>Monthly analytics</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-primary save-settings-btn">Save Preferences</button>
                </div>
            </div>
        `;
    }

    // Public API
    window.NotificationsPage = {
        render() {
            return notificationsMarkup();
        },
        attachListeners() {
            // Notification items
            const notificationItems = document.querySelectorAll('.notifications-page .notification-item');
            notificationItems.forEach(item => {
                item.addEventListener('click', function() {
                    const title = this.querySelector('strong').textContent;
                    console.log('Notification clicked:', title);
                    alert(`Viewing details for: ${title}`);
                });
            });

            // Save settings button
            const saveBtn = document.querySelector('.notifications-page .save-settings-btn');
            if (saveBtn) {
                saveBtn.addEventListener('click', function() {
                    console.log('Saving notification preferences');
                    alert('Notification preferences saved successfully!');
                });
            }
        }
    };
})();