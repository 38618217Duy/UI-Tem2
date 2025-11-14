// Quote Calculator JavaScript

// State Management
const quoteState = {
    currentStep: 1,
    serviceType: null,
    cargoDetails: {},
    routeDetails: {},
    additionalServices: [],
    estimatedCost: 0
};

// Pricing Constants (USD)
const PRICING = {
    ocean: {
        '20ft': 1500,
        '40ft': 2500,
        '40hc': 2800,
        'reefer': 3500,
        'lcl': 150 // per CBM
    },
    air: {
        base: 3.5, // per kg
        express: 5.5 // per kg
    },
    land: {
        ftl: 800, // per truck
        ltl: 100 // per CBM
    },
    services: {
        insurance: 50,
        customs: 200,
        warehousing: 150,
        packaging: 80
    },
    fuelSurcharge: 0.15 // 15% of base
};

// Transit Times (days)
const TRANSIT_TIMES = {
    ocean: {
        domestic: '3-5',
        regional: '7-14',
        intercontinental: '20-35'
    },
    air: {
        domestic: '1-2',
        regional: '2-4',
        intercontinental: '4-7'
    },
    land: {
        domestic: '1-3',
        regional: '3-7'
    }
};

// Initialize
// Note: Navbar is now loaded via navbar-loader.js
document.addEventListener('DOMContentLoaded', function() {
    loadFooter();
    initCalculator();
});

// Load Footer only
function loadFooter() {
    fetch('index.html')
        .then(r => r.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const footer = doc.querySelector('footer');
            const footerPlaceholder = document.getElementById('footer-placeholder');
            if (footer && footerPlaceholder) {
                footerPlaceholder.outerHTML = footer.outerHTML;
            }
        });
}

// Initialize Calculator
function initCalculator() {
    // Step 1: Service Selection
    document.querySelectorAll('.service-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.service-option').forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');
            quoteState.serviceType = this.dataset.service;
            document.getElementById('nextStep1').disabled = false;
        });
    });

    // Navigation Buttons
    document.getElementById('nextStep1').addEventListener('click', () => goToStep(2));
    document.getElementById('prevStep2').addEventListener('click', () => goToStep(1));
    document.getElementById('nextStep2').addEventListener('click', () => {
        if (validateStep2()) goToStep(3);
    });
    document.getElementById('prevStep3').addEventListener('click', () => goToStep(2));
    document.getElementById('calculateBtn').addEventListener('click', calculateQuote);
    document.getElementById('requestQuoteBtn').addEventListener('click', requestOfficialQuote);
    document.getElementById('newQuoteBtn').addEventListener('click', resetCalculator);

    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('shippingDate').min = today;

    // Show/hide container type based on service
    updateFormBasedOnService();
}

// Go to Step
function goToStep(stepNumber) {
    // Update state
    quoteState.currentStep = stepNumber;

    // Update steps UI
    document.querySelectorAll('.step').forEach(step => {
        const stepNum = parseInt(step.dataset.step);
        step.classList.remove('active', 'completed');
        if (stepNum === stepNumber) {
            step.classList.add('active');
        } else if (stepNum < stepNumber) {
            step.classList.add('completed');
        }
    });

    // Update calculator steps
    document.querySelectorAll('.calculator-step').forEach(step => {
        step.classList.remove('active');
    });
    document.getElementById(`step${stepNumber}`).classList.add('active');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Update Form Based on Service
function updateFormBasedOnService() {
    const containerType = document.getElementById('containerType');
    if (quoteState.serviceType === 'ocean') {
        containerType.parentElement.style.display = 'block';
        containerType.required = true;
    } else {
        containerType.parentElement.style.display = 'none';
        containerType.required = false;
    }
}

// Validate Step 2
function validateStep2() {
    const cargoType = document.getElementById('cargoType').value;
    const weight = document.getElementById('weight').value;
    const volume = document.getElementById('volume').value;

    if (!cargoType || !weight || !volume) {
        alert('Please fill in all required fields');
        return false;
    }

    if (quoteState.serviceType === 'ocean') {
        const containerType = document.getElementById('containerType').value;
        if (!containerType) {
            alert('Please select a container type');
            return false;
        }
        quoteState.cargoDetails.containerType = containerType;
    }

    quoteState.cargoDetails = {
        ...quoteState.cargoDetails,
        cargoType,
        weight: parseFloat(weight),
        volume: parseFloat(volume)
    };

    // Collect additional services
    quoteState.additionalServices = [];
    document.querySelectorAll('.checkbox-group input[type="checkbox"]:checked').forEach(cb => {
        quoteState.additionalServices.push(cb.value);
    });

    return true;
}

// Calculate Quote
function calculateQuote() {
    // Validate Step 3
    const originCountry = document.getElementById('originCountry').value;
    const originPort = document.getElementById('originPort').value;
    const destCountry = document.getElementById('destCountry').value;
    const destPort = document.getElementById('destPort').value;
    const shippingDate = document.getElementById('shippingDate').value;
    const incoterms = document.getElementById('incoterms').value;

    if (!originCountry || !originPort || !destCountry || !destPort || !shippingDate) {
        alert('Please fill in all required fields');
        return;
    }

    quoteState.routeDetails = {
        originCountry,
        originPort,
        destCountry,
        destPort,
        shippingDate,
        incoterms
    };

    // Show loading
    document.getElementById('calculateBtn').classList.add('loading');

    // Simulate API call
    setTimeout(() => {
        const costs = calculateCosts();
        displayResults(costs);
        document.getElementById('calculateBtn').classList.remove('loading');
        goToStep(4);
    }, 1000);
}

// Calculate Costs
function calculateCosts() {
    let baseFreight = 0;
    const { weight, volume, containerType } = quoteState.cargoDetails;

    // Calculate base freight
    switch (quoteState.serviceType) {
        case 'ocean':
            if (containerType === 'lcl') {
                baseFreight = volume * PRICING.ocean.lcl;
            } else {
                baseFreight = PRICING.ocean[containerType] || 2000;
            }
            break;
        case 'air':
            const isExpress = weight < 100; // Express for small shipments
            baseFreight = weight * (isExpress ? PRICING.air.express : PRICING.air.base);
            break;
        case 'land':
            if (volume > 20) { // FTL
                baseFreight = PRICING.land.ftl;
            } else { // LTL
                baseFreight = volume * PRICING.land.ltl;
            }
            break;
    }

    // Calculate fuel surcharge
    const fuelSurcharge = baseFreight * PRICING.fuelSurcharge;

    // Calculate additional services
    const additionalCosts = quoteState.additionalServices.reduce((total, service) => {
        return total + (PRICING.services[service] || 0);
    }, 0);

    // Total
    const totalCost = baseFreight + fuelSurcharge + additionalCosts;

    return {
        baseFreight: Math.round(baseFreight),
        fuelSurcharge: Math.round(fuelSurcharge),
        insurance: quoteState.additionalServices.includes('insurance') ? PRICING.services.insurance : 0,
        customs: quoteState.additionalServices.includes('customs') ? PRICING.services.customs : 0,
        warehousing: quoteState.additionalServices.includes('warehousing') ? PRICING.services.warehousing : 0,
        packaging: quoteState.additionalServices.includes('packaging') ? PRICING.services.packaging : 0,
        totalCost: Math.round(totalCost)
    };
}

// Display Results
function displayResults(costs) {
    // Service
    const serviceNames = {
        ocean: 'Ocean Freight',
        air: 'Air Freight',
        land: 'Land Transport'
    };
    document.getElementById('resultService').textContent = serviceNames[quoteState.serviceType];

    // Route
    const { originPort, destPort } = quoteState.routeDetails;
    document.getElementById('resultRoute').textContent = `${originPort} → ${destPort}`;

    // Transit Time
    const transitTime = getTransitTime();
    document.getElementById('resultTransit').textContent = `${transitTime} days`;

    // Costs
    document.getElementById('baseFreight').textContent = `$${costs.baseFreight.toLocaleString()}`;
    document.getElementById('fuelSurcharge').textContent = `$${costs.fuelSurcharge.toLocaleString()}`;

    // Additional services
    const insuranceItem = document.getElementById('insuranceItem');
    const customsItem = document.getElementById('customsItem');
    const warehousingItem = document.getElementById('warehousingItem');

    if (costs.insurance > 0) {
        insuranceItem.style.display = 'flex';
        document.getElementById('insuranceFee').textContent = `$${costs.insurance}`;
    } else {
        insuranceItem.style.display = 'none';
    }

    if (costs.customs > 0) {
        customsItem.style.display = 'flex';
        document.getElementById('customsFee').textContent = `$${costs.customs}`;
    } else {
        customsItem.style.display = 'none';
    }

    if (costs.warehousing > 0) {
        warehousingItem.style.display = 'flex';
        document.getElementById('warehousingFee').textContent = `$${costs.warehousing}`;
    } else {
        warehousingItem.style.display = 'none';
    }

    // Total
    document.getElementById('totalCost').textContent = `$${costs.totalCost.toLocaleString()}`;

    quoteState.estimatedCost = costs.totalCost;
}

// Get Transit Time
function getTransitTime() {
    const { originCountry, destCountry } = quoteState.routeDetails;
    
    let distanceType = 'domestic';
    if (originCountry !== destCountry) {
        const regionalCountries = ['VN', 'TH', 'CN', 'KR', 'JP', 'SG'];
        if (regionalCountries.includes(originCountry) && regionalCountries.includes(destCountry)) {
            distanceType = 'regional';
        } else {
            distanceType = 'intercontinental';
        }
    }

    const transitRange = TRANSIT_TIMES[quoteState.serviceType][distanceType];
    return transitRange;
}

// Request Official Quote
function requestOfficialQuote() {
    const subject = encodeURIComponent('Official Quote Request - MOL Logistics Vietnam');
    const body = encodeURIComponent(`Hello MOL Logistics Team,

I would like to request an official quote based on my estimate:

Service Type: ${quoteState.serviceType}
Route: ${quoteState.routeDetails.originPort} → ${quoteState.routeDetails.destPort}
Cargo Type: ${quoteState.cargoDetails.cargoType}
Weight: ${quoteState.cargoDetails.weight} kg
Volume: ${quoteState.cargoDetails.volume} m³
Shipping Date: ${quoteState.routeDetails.shippingDate}
Estimated Cost: $${quoteState.estimatedCost.toLocaleString()}

Please provide an official quote with detailed pricing.

Thank you!`);

    window.location.href = `mailto:mlgvn.salehcm-group@molgroup.com?subject=${subject}&body=${body}`;
}

// Reset Calculator
function resetCalculator() {
    // Reset state
    quoteState.currentStep = 1;
    quoteState.serviceType = null;
    quoteState.cargoDetails = {};
    quoteState.routeDetails = {};
    quoteState.additionalServices = [];
    quoteState.estimatedCost = 0;

    // Reset UI
    document.querySelectorAll('.service-option').forEach(o => o.classList.remove('selected'));
    document.getElementById('nextStep1').disabled = true;

    // Reset form
    document.querySelectorAll('input, select').forEach(input => {
        if (input.type === 'checkbox') {
            input.checked = false;
        } else {
            input.value = '';
        }
    });

    // Go to step 1
    goToStep(1);
}
