Feature: I am going to validate Calculator App

@CalculatorFunctionality
Scenario: Calculator Add functionality testing

Given I will navigate to "Calc" Site
When I add two numbers "3" and "5"
Then the output displayed should be "9"

@CalculatorFunctionality
Scenario: Calculator Add functionality testing

Given I will navigate to "Calc" Site
When I add two numbers "3" and "7"
Then the output displayed should be "10"

@AngularFunctionality
Scenario Outline:  Angualar validations

Given I will navigate to "AngularJs" Site
When I clicked on header link
And you will navigate to angular page
Then you will enter "<Key>" in search box

Examples:
| Key | 
| HEllo  | 
| Hey |

