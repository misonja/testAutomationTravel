const tours = {
    title: '.text-center',
    destinationField: '.select2-search__field',
    destinationDropDown: '#select2-tours_city-container',
    destinationDropDownItem: '.select2-results__option--highlighted',
    destinationMessage: '.select2-results__message',
    date: '#date',
    dateNum: '.new:nth-child(5)',
    travellersDropDown: '.travellers',
    adultsMin: '.dropdown-item:nth-child(1) .qtyDec > .la',
    adultsNum: '#tours_adults',
    adultsDec: '.dropdown-item:nth-child(1) .qtyInc > .la',
    childMin: '.dropdown-item:nth-child(2) .qtyDec > .la',
    childNum: '#tours_child',
    childDec: '.dropdown-item:nth-child(2) .qtyInc > .la',
    search: '.ladda-label',
    priceRangeBar: 'irs-bar',
}

const filter = {
    minTours: ':nth-child(1) > .irs--round > .irs > .irs-from',
    maxTours: ':nth-child(1) > .irs--round > .irs > .irs-to',
    bar: 'div > div > div:nth-child(1) > span > span.irs-bar'
}

const searchTours = {
    toursList : '.hotels_amenities_',
    pageNumber : 'div > div > div > div:nth-child(2) > div > ul > li',
    filterTitle: ':nth-child(2) > .title',
    tourTitleFirst: '#private-custom-new-york-city-tour-by-suv > .card-item > .card-body > .row > .col-8 > .card-title'
}

export {tours,searchTours,filter}