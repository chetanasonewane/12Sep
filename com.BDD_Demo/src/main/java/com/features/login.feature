Feature: jbk offline application test
@Login
Scenario: Login test

Given user should be on login page
When  user enters username
And   user enters password
And   user clicks login button
Then  user will be on dashboard page
@Logo
Scenario: Verify a JBK Logo

Given user should be on login page
Then user  should see a jbk logo

@register
Scenario: register a new user

Given user should be on register page
When user fills details
And user click on submit button
Then user should be added

@invalidLogin
Scenario Outline: login test with multiple data

Given user should be on login page
When user enters "<uname>" and "<pass>"
Then user will verify "<title>"
And user will capture error message
Examples:
|uname|pass|title|
|kiran@gmail.com|123456|Dashboard|
|Mangesh@gmail.com|78945|Log in|
|neelam@gmail.com|asdeft|Log in|

@invalidloginerrormsg
Scenario Outline:login test with multiple erro msg

Given user should be on login page
When user enters "<uname>" and "<pass>"
When user verify  "<emailerror>" and "<passerror>"
Then user will verify "<title>"

Examples:
|uname             |pass              | emaileror                               | passerror                    |title     |
|kiran@gmail.com   |123456            |                                         |                             | Dashboard |
|Mangesh@gmail.com |123456            |  Please enter email as kiran@gmail.com  |                             |  Log in   |
|neelam@gmail.com  |asdeft            |  Please enter email as kiran@gmail.com  | Please enter password 123456|  Log in   |
|                  |                  |  Please enter email.                    | Please enter password.      |  Log in   |
|Chetana@gmail.com |                  |  Please enter email as kiran@gmail.com  | Please enter password.      |  Log in   |
|                  |   asd@**12       |  Please enter email.                    | Please enter password 123456|   Log in  |

