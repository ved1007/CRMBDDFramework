Feature: Let's' Kode it Login Feature

# without Examples keyword
#Scenario: Let's' Kode it Login Scenario
#Given user is already on the login page
#When title of login page is Let's' Kode It
#Then user enters username and password
#Then user clicks on the login button
#Then user will close the web site


# With Examples Keyword you need to add Outline before scenario
Scenario Outline: Let's' Kode it Login Scenario
Given user is alread on the login page
When title of login page is Let's' Kode It
Then user enters "<username>" and "<password>"
Then user clicks on the login button
Then user will close the web site

Examples:

      | username          | password |
      | ved1007@gmail.com | Welcome01|
     