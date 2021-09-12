Feature: Jbk  Offline Application Test2
@AddUser
Scenario: Adduser Page Test

Given user should be on AddUser page
When  user fills the details  in userlist
And  user clicks on the submit button
Then  user will be added

@Dashboard
Scenario: Dashboard page Test
Given user must be in Dashboard page
When  click on User link
Then User page will displayed
When click on Add Users Buttons
When click on Operators Link
Then Operators page Will be Displayed
When click on Usefull Link
Then Usefull Link page will Open
When click on DownlOads
Then Download Page will Visible
When click on LogOut 
Then User Will be on Login Page
