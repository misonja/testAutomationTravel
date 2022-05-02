const topHeader = {
    signup: '[href="https://www.phptravels.net/signup"]',
    login : '.theme-btn-transparent',
    account: ':nth-child(3) > .dropdown > #currency',
    logoutAccount: ':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(5) > .dropdown-item'
}

const mainMenu = {
    home: 'nav > :nth-child(1) > :nth-child(1) > .waves-effect',
    hotels: 'nav > :nth-child(1) > :nth-child(2) > .waves-effect',
    flights: 'nav > :nth-child(1) > :nth-child(3) > .waves-effect',
    tours: 'nav > :nth-child(1) > :nth-child(4) > .waves-effect',
    visa: 'nav > :nth-child(1) > :nth-child(5) > .waves-effect',
    blog: 'nav > :nth-child(1) > :nth-child(6) > .waves-effect',
    offers: 'nav > :nth-child(1) > :nth-child(7) > .waves-effect',
    company: 'nav > :nth-child(1) > :nth-child(8) > .waves-effect'

}

export {topHeader, mainMenu}