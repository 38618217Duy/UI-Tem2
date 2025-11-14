// Tracking System JavaScript

// Sample tracking data (in production, this would come from API)
const trackingDatabase = {
    'MOL123456789': {
        trackingNumber: 'MOL123456789',
        service: 'Ocean Freight',
        origin: 'Ho Chi Minh City, Vietnam',
        destination: 'Tokyo, Japan',
        status: 'In Transit',
        estimatedDelivery: '2025-11-20',
        currentLocation: 'Singapore Port',
        vessel: 'MOL PROGRESS',
        container: 'MOLU1234567',
        events: [
            {
                date: '2025-11-10 09:00',
                location: 'Ho Chi Minh City, VN',
                status: 'Shipment Booked',
                description: 'Booking confirmed and shipment scheduled',
                completed: true
            },
            {
                date: '2025-11-11 14:30',
                location: 'Cat Lai Port, VN',
                status: 'Container Loaded',
                description: 'Container loaded onto vessel',
                completed: true
            },
            {
                date: '2025-11-12 08:00',
                location: 'Ho Chi Minh City, VN',
                status: 'Departed Origin Port',
                description: 'Vessel departed from HCMC',
                completed: true
            },
            {
                date: '2025-11-14 16:00',
                location: 'Singapore Port',
                status: 'In Transit',
                description: 'Transshipment at Singapore Hub',
                completed: true,
                current: true
            },
            {
                date: '2025-11-18 10:00',
                location: 'Yokohama Port, JP',
                status: 'Arrival at Destination',
                description: 'Expected arrival at destination port',
                completed: false
            },
            {
                date: '2025-11-20 15:00',
                location: 'Tokyo, Japan',
                status: 'Delivered',
                description: 'Estimated delivery to consignee',
                completed: false
            }
        ]
    },
    'MOL987654321': {
        trackingNumber: 'MOL987654321',
        service: 'Air Freight',
        origin: 'Hanoi, Vietnam',
        destination: 'Los Angeles, USA',
        status: 'Customs Clearance',
        estimatedDelivery: '2025-11-16',
        currentLocation: 'LAX Airport',
        flight: 'VN99',
        awb: 'VN-123-45678',
        events: [
            {
                date: '2025-11-13 10:00',
                location: 'Hanoi, Vietnam',
                status: 'Shipment Received',
                description: 'Cargo received at warehouse',
                completed: true
            },
            {
                date: '2025-11-13 18:00',
                location: 'Noi Bai Airport, VN',
                status: 'Departed',
                description: 'Flight departed from Hanoi',
                completed: true
            },
            {
                date: '2025-11-14 08:00',
                location: 'Los Angeles, USA',
                status: 'Arrived',
                description: 'Arrived at LAX Airport',
                completed: true
            },
            {
                date: '2025-11-14 14:00',
                location: 'LAX Airport, USA',
                status: 'Customs Clearance',
                description: 'Undergoing customs inspection',
                completed: true,
                current: true
            },
            {
                date: '2025-11-16 10:00',
                location: 'Los Angeles, USA',
                status: 'Out for Delivery',
                description: 'Scheduled for final delivery',
                completed: false
            }
        ]
    },
    'MOL555666777': {
        trackingNumber: 'MOL555666777',
        service: 'Land Transport',
        origin: 'Hai Phong, Vietnam',
        destination: 'Bangkok, Thailand',
        status: 'Delivered',
        estimatedDelivery: '2025-11-13',
        currentLocation: 'Bangkok Warehouse',
        truck: 'VN-51B-12345',
        events: [
            {
                date: '2025-11-10 08:00',
                location: 'Hai Phong, Vietnam',
                status: 'Pickup Completed',
                description: 'Cargo picked up from warehouse',
                completed: true
            },
            {
                date: '2025-11-11 16:00',
                location: 'Lao Cai Border, VN',
                status: 'Border Crossing',
                description: 'Cleared Vietnam customs',
                completed: true
            },
            {
                date: '2025-11-12 10:00',
                location: 'Chiang Rai, Thailand',
                status: 'In Transit',
                description: 'Entered Thailand territory',
                completed: true
            },
            {
                date: '2025-11-13 14:00',
                location: 'Bangkok, Thailand',
                status: 'Delivered',
                description: 'Successfully delivered to consignee',
                completed: true,
                current: true
            }
        ]
    }
};

// Initialize tracking functionality
document.addEventListener('DOMContentLoaded', function() {
    initTrackingTabs();
    initTrackingSearch();
});

// Initialize tracking tabs
function initTrackingTabs() {
    const tabs = document.querySelectorAll('.tracking-tab');
    const tabContents = document.querySelectorAll('.tracking-tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            document.getElementById(`${tabId}-tracking`).classList.add('active');
        });
    });
}

// Initialize tracking search
function initTrackingSearch() {
    const trackBtn = document.getElementById('trackBtn');
    const trackMultipleBtn = document.getElementById('trackMultipleBtn');

    if (trackBtn) {
        trackBtn.addEventListener('click', handleSingleTracking);
        
        // Allow Enter key in input
        const trackingInput = document.getElementById('trackingInput');
        if (trackingInput) {
            trackingInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    handleSingleTracking();
                }
            });
        }
    }

    if (trackMultipleBtn) {
        trackMultipleBtn.addEventListener('click', handleMultipleTracking);
    }
}

// Handle single tracking
function handleSingleTracking() {
    const input = document.getElementById('trackingInput');
    const trackingNumber = input.value.trim().toUpperCase();

    if (!trackingNumber) {
        showError('Please enter a tracking number');
        return;
    }

    // Store in sessionStorage and redirect
    sessionStorage.setItem('trackingNumber', trackingNumber);
    window.location.href = 'tracking-results.html';
}

// Handle multiple tracking
function handleMultipleTracking() {
    const input = document.getElementById('multipleTrackingInput');
    const trackingNumbers = input.value
        .split('\n')
        .map(num => num.trim().toUpperCase())
        .filter(num => num.length > 0);

    if (trackingNumbers.length === 0) {
        showError('Please enter at least one tracking number');
        return;
    }

    // Store in sessionStorage and redirect
    sessionStorage.setItem('trackingNumbers', JSON.stringify(trackingNumbers));
    window.location.href = 'tracking-results.html';
}

// Show error message
function showError(message) {
    alert(message); // In production, use a better toast/notification system
}

// Get tracking data (used by tracking-results.html)
function getTrackingData(trackingNumber) {
    return trackingDatabase[trackingNumber] || null;
}

// Calculate progress percentage
function calculateProgress(events) {
    const completed = events.filter(e => e.completed).length;
    return Math.round((completed / events.length) * 100);
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return date.toLocaleDateString('en-US', options);
}

// Get status color
function getStatusColor(status) {
    const statusColors = {
        'Shipment Booked': '#2196F3',
        'Container Loaded': '#4CAF50',
        'Departed Origin Port': '#FF9800',
        'In Transit': '#FFC107',
        'Arrival at Destination': '#9C27B0',
        'Delivered': '#4CAF50',
        'Shipment Received': '#2196F3',
        'Departed': '#FF9800',
        'Arrived': '#9C27B0',
        'Customs Clearance': '#FFC107',
        'Out for Delivery': '#FF5722',
        'Pickup Completed': '#4CAF50',
        'Border Crossing': '#9C27B0'
    };
    return statusColors[status] || '#666666';
}

// Export to PDF (placeholder - requires library like jsPDF)
function exportToPDF(trackingNumber) {
    alert('PDF export feature coming soon!\nTracking Number: ' + trackingNumber);
    // In production, implement with jsPDF or similar library
}

// Send email notification (placeholder)
function sendEmailNotification(trackingNumber, email) {
    alert(`Email notifications will be sent to ${email} for tracking ${trackingNumber}`);
    // In production, make API call to backend
}
