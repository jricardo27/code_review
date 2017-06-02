Feature: Examples of grammar in Scenarios.

    As a developer
    I should write coherent and grammatically correct scenarios
    So that the attention focuses on what the test does and not how bad it sounds.

    Scenario: A good scenario.
        Given there is a user "username" in the database
        When I login with "username"
        Then the page title should be "Welcome"

    Scenario: A bad scenario.
        And there is a user "username" in the database
        Given I login with "username"
        Then the page title should be "Welcome"

    Scenario: Another bad scenario.
        Given there is a user "username" in the database
        Given I login with "username"
        Then the page title should be "Welcome"
