// Main Application Initialization
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 dfYOUNG Portal Loading...');
    
    // Initialize navigation
    Navigation.init();
    
    // Add smooth transitions
    addPageTransitions();
    
    // Initialize tooltips if needed
    initializeTooltips();
    
    console.log('✅ dfYOUNG Portal Ready');
});

// Add smooth page transitions
function addPageTransitions() {
    const container = document.getElementById('page-container');
    if (container) {
        container.style.transition = 'opacity 0.15s ease-in-out';
    }
}

// Initialize tooltips (placeholder for future implementation)
function initializeTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });
}

function showTooltip(e) {
    const tooltipText = e.target.getAttribute('data-tooltip');
    // Tooltip implementation would go here
}

function hideTooltip(e) {
    // Hide tooltip implementation would go here
}

// Utility: Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

// Utility: Format date
function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    }).format(new Date(date));
}

// Utility: Format number with commas
function formatNumber(num) {
    return new Intl.NumberFormat('en-US').format(num);
}

// Handle window resize for responsive behavior
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        handleResize();
    }, 250);
});

function handleResize() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    if (window.innerWidth <= 768) {
        // Mobile adjustments
        if (sidebar) sidebar.style.position = 'relative';
        if (mainContent) mainContent.style.marginLeft = '0';
    } else {
        // Desktop adjustments
        if (sidebar) sidebar.style.position = 'fixed';
        if (mainContent) mainContent.style.marginLeft = '260px';
    }
}

// Export utilities for use in other scripts
window.PortalUtils = {
    formatCurrency,
    formatDate,
    formatNumber
};

// Error handling - filter out common harmless errors
window.addEventListener('error', function(e) {
    // Ignore null errors from assistant_tabs observer
    if (e.error === null) return;
    
    console.error('Portal Error:', e.error);
    // You could show a user-friendly error message here
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled Promise Rejection:', e.reason);
});