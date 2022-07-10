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
    
      
const modifySearch = {
    flightStopsTitle: '',
    allFligts: '',
    direct: '',
    stops1: '',
    stops2: ''
}

const priceRange = {
    minRange: '',
    maxRange: ''
}

const airlines = {
  checkbox: '.custom-checkbox'
}

    export {searchFlights, modifySearch, priceRange, airlines }