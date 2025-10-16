// Team Page Module
(function() {
    function teamMarkup() {
        return `
            <div class="page team-page">
                <h1 class="page-title">👥 Team</h1>
                <p class="page-subtitle">Manage your team members and permissions</p>

                <div class="card">
                    <div class="team-header">
                        <h3>Team Members</h3>
                        <button class="btn btn-primary invite-btn">+ Invite Member</button>
                    </div>
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Sarah Johnson</strong></td>
                                <td>sarah@acmecorp.com</td>
                                <td>Administrator</td>
                                <td><span class="status-badge status-compliant">Active</span></td>
                                <td><button class="btn btn-secondary edit-btn" data-member="Sarah Johnson">Edit</button></td>
                            </tr>
                            <tr>
                                <td><strong>Mike Chen</strong></td>
                                <td>mike@acmecorp.com</td>
                                <td>Logistics Manager</td>
                                <td><span class="status-badge status-compliant">Active</span></td>
                                <td><button class="btn btn-secondary edit-btn" data-member="Mike Chen">Edit</button></td>
                            </tr>
                            <tr>
                                <td><strong>Emma Davis</strong></td>
                                <td>emma@acmecorp.com</td>
                                <td>Operations Analyst</td>
                                <td><span class="status-badge status-compliant">Active</span></td>
                                <td><button class="btn btn-secondary edit-btn" data-member="Emma Davis">Edit</button></td>
                            </tr>
                            <tr>
                                <td><strong>James Wilson</strong></td>
                                <td>james@acmecorp.com</td>
                                <td>Viewer</td>
                                <td><span class="status-badge status-pending">Pending</span></td>
                                <td><button class="btn btn-secondary resend-btn" data-member="James Wilson">Resend Invite</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="card">
                    <h3 style="margin-bottom: 20px;">Role Permissions</h3>
                    <div class="roles-grid">
                        <div class="role-item">
                            <div class="role-name">Administrator</div>
                            <div class="role-desc">Full access to all features, team management, and billing</div>
                        </div>
                        <div class="role-item">
                            <div class="role-name">Logistics Manager</div>
                            <div class="role-desc">Can book shipments, view analytics, and manage operations</div>
                        </div>
                        <div class="role-item">
                            <div class="role-name">Operations Analyst</div>
                            <div class="role-desc">View-only access to analytics and reports</div>
                        </div>
                        <div class="role-item">
                            <div class="role-name">Viewer</div>
                            <div class="role-desc">Basic read-only access to shipment tracking</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Public API
    window.TeamPage = {
        render() {
            return teamMarkup();
        },
        attachListeners() {
            // Invite member button
            const inviteBtn = document.querySelector('.team-page .invite-btn');
            if (inviteBtn) {
                inviteBtn.addEventListener('click', function() {
                    console.log('Opening invite dialog');
                    alert('Team member invitation form would open here.');
                });
            }

            // Edit buttons
            const editBtns = document.querySelectorAll('.team-page .edit-btn');
            editBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const member = this.getAttribute('data-member');
                    console.log('Editing member:', member);
                    alert(`Edit permissions and details for: ${member}`);
                });
            });

            // Resend invite buttons
            const resendBtns = document.querySelectorAll('.team-page .resend-btn');
            resendBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const member = this.getAttribute('data-member');
                    console.log('Resending invite to:', member);
                    alert(`Invitation email resent to: ${member}`);
                });
            });
        }
    };
})();