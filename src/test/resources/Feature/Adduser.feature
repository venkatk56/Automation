Feature: Adduser

@adduser
Scenario Outline: adding user to the list
Given User navigates to the link "<link>"
When User_Validates that user are is on the User List Table
And User Clicks on the Add user button
And User_EL captures unique username "<firstname>", "<lastName>","<username>","<password>", "<customer>","<role>", "<email>" and "<cellphone>"
And User_EL clicks Save button
Then User Validates that saved record is successfully displyed in search screen "<username>"

Examples:
|link                                                         |firstname |lastName	  |username|password|customer    |role      |email          |cellphone|
|http://www.way2automation.com/angularjs-protractor/webtables/|Testing1  |TestlastName|Test@001|Testing1|Company AAA |Sales Team|test1@gmail.com|0799658874|
|http://www.way2automation.com/angularjs-protractor/webtables/|Testing2  |TwolastName |Test@002|Testing2|Company BBB |Customer  |test2@gmail.com|0859658874|