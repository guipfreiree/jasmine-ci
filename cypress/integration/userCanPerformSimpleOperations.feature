Feature: Perfom Simple Operations

    As a calculator user
    I want to perfom simple operation in the calculator web

    Scenario Outline: The user can perfom valid operations
        Given the user is at the simple calculator page
        And the user typed "<firstNumber>" "<operation>" "<secondNumber>"
        When the focus is changed from the input operation field
        Then the result is "<result>"
        Examples:
            | firstNumber | operation | secondNumber | result |
            | 1           | +         | 10           | 11     |
            | 10.5        | -         | 5            | 5.5    |
            | 0           | *         | 100          | 0      |
            | 1           | *         | 100          | 100    |
            | 100         | /         | 10           | 10     |
            | 321123      | /         | 1            | 312123 |