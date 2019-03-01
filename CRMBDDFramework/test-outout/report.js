$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/PC User1/Desktop/SeleniumFiles/CRMBDDFramework/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Let\u0027s\u0027 Kode it Login Feature",
  "description": "",
  "id": "let\u0027s\u0027-kode-it-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "# without Examples keyword"
    },
    {
      "line": 4,
      "value": "#Scenario: Let\u0027s\u0027 Kode it Login Scenario"
    },
    {
      "line": 5,
      "value": "#Given user is already on the login page"
    },
    {
      "line": 6,
      "value": "#When title of login page is Let\u0027s\u0027 Kode It"
    },
    {
      "line": 7,
      "value": "#Then user enters username and password"
    },
    {
      "line": 8,
      "value": "#Then user clicks on the login button"
    },
    {
      "line": 9,
      "value": "#Then user will close the web site"
    },
    {
      "line": 12,
      "value": "# With Examples Keyword you need to add Outline before scenario"
    }
  ],
  "line": 13,
  "name": "Let\u0027s\u0027 Kode it Login Scenario",
  "description": "",
  "id": "let\u0027s\u0027-kode-it-login-feature;let\u0027s\u0027-kode-it-login-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user is alread on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "title of login page is Let\u0027s\u0027 Kode It",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user clicks on the login button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user will close the web site",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "let\u0027s\u0027-kode-it-login-feature;let\u0027s\u0027-kode-it-login-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 22,
      "id": "let\u0027s\u0027-kode-it-login-feature;let\u0027s\u0027-kode-it-login-scenario;;1"
    },
    {
      "cells": [
        "ved1007@gmail.com",
        "Welcome01"
      ],
      "line": 23,
      "id": "let\u0027s\u0027-kode-it-login-feature;let\u0027s\u0027-kode-it-login-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "Let\u0027s\u0027 Kode it Login Scenario",
  "description": "",
  "id": "let\u0027s\u0027-kode-it-login-feature;let\u0027s\u0027-kode-it-login-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user is alread on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "title of login page is Let\u0027s\u0027 Kode It",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user enters \"ved1007@gmail.com\" and \"Welcome01\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user clicks on the login button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user will close the web site",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_alread_on_the_login_page()"
});
formatter.result({
  "duration": 15139906094,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 29813669,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ved1007@gmail.com",
      "offset": 13
    },
    {
      "val": "Welcome01",
      "offset": 37
    }
  ],
  "location": "LoginStepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 1237599926,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});