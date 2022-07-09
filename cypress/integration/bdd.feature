Feature: Check if user can navigate to pages

    Scenario: Blog page navigation
    Given user is logged in
    When user navigates to "Blog" page
    Then user is on "Blog" page
    And user is logged out

    Scenario: Tours page navigation
    Given user is logged in
    When user navigates to "Tours" page
    Then user is on "TOURS" page
    And user is logged out

    Scenario: Hotels page navigation
    Given user is logged in
    When user navigates to "Hotels" page
    Then user is on "HOTELS" page
    And user is logged out
 
    Scenario: Visa page navigation
    Given user is logged in
    When user navigates to "visa" page
    Then user is on "Visa" page
    And user is logged out


