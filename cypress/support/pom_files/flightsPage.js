const searchFlights = {
    economy: '#flight_type',
    oneWay : '#one-way',
    swap: '#swap',
    roudTrip: '#round-trip',
    flyingFrom: '#autocomplete',
    toDestination: '#autocomplete2',
    departureDate: '#departure', 
    passengers: '.guest_flights.d-block.text-center', 
    adultsMinus: '.adult_qty > .qty-box > .qtyBtn > .qtyDec > .la',
    adultsPlus: '.adult_qty > .qty-box > .qtyBtn > .qtyInc > .la',
    childsMinus: '.child_qty > .qty-box > .qtyBtn > .qtyDec > .la',
    childsPlus: '.child_qty > .qty-box > .qtyBtn > .qtyInc > .la',
    search: '#flights-search', 
    }

const redirectPage = {
    infoRedirectWhole : '.loading-results-globe'
}

const leftInfo = {
    passengersInfo : '.left-side-info > div > :nth-child(2)'
}

const rightInfo = {
    totalFlights : '.list-items > .d-flex > .waves-effect',
    modifySearchAccordionButton : '.accordion-button'
}

const modifySearch = {
    flightStopsTitle: '.card-header > strong',
    allFligts: '#all',
    direct: '#direct',
    stops1: ':nth-child(3) > .form-check > .form-check-label',
    stops2: ':nth-child(4) > .form-check > .form-check-label'
}

const priceRange = {
    minRange: ':nth-child(1) > .irs--round > .irs > .irs-from',
    maxRange: ':nth-child(1) > .irs--round > .irs > .irs-to'
}

const airlines = {
  checkbox: '.custom-checkbox'
}

    export {searchFlights, redirectPage, leftInfo, rightInfo, modifySearch, priceRange, airlines,leftInfo }