$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/Adduser.feature");
formatter.feature({
  "line": 1,
  "name": "Adduser",
  "description": "",
  "id": "adduser",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "adding user to the list",
  "description": "",
  "id": "adduser;adding-user-to-the-list",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@adduser"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User navigates to the link \"\u003clink\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User_Validates that user are is on the User List Table",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on the Add user button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User_EL captures unique username \"\u003cfirstname\u003e\", \"\u003clastName\u003e\",\"\u003cusername\u003e\",\"\u003cpassword\u003e\", \"\u003ccustomer\u003e\",\"\u003crole\u003e\", \"\u003cemail\u003e\" and \"\u003ccellphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User_EL clicks Save button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Validates that saved record is successfully displyed in search screen \"\u003cusername\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "adduser;adding-user-to-the-list;",
  "rows": [
    {
      "cells": [
        "link",
        "firstname",
        "lastName",
        "username",
        "password",
        "customer",
        "role",
        "email",
        "cellphone"
      ],
      "line": 13,
      "id": "adduser;adding-user-to-the-list;;1"
    },
    {
      "cells": [
        "http://www.way2automation.com/angularjs-protractor/webtables/",
        "Testing1",
        "TestlastName",
        "Test@001",
        "Testing1",
        "Company AAA",
        "Sales Team",
        "test1@gmail.com",
        "0799658874"
      ],
      "line": 14,
      "id": "adduser;adding-user-to-the-list;;2"
    },
    {
      "cells": [
        "http://www.way2automation.com/angularjs-protractor/webtables/",
        "Testing2",
        "TwolastName",
        "Test@002",
        "Testing2",
        "Company BBB",
        "Customer",
        "test2@gmail.com",
        "0859658874"
      ],
      "line": 15,
      "id": "adduser;adding-user-to-the-list;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "adding user to the list",
  "description": "",
  "id": "adduser;adding-user-to-the-list;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@adduser"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User navigates to the link \"http://www.way2automation.com/angularjs-protractor/webtables/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User_Validates that user are is on the User List Table",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on the Add user button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User_EL captures unique username \"Testing1\", \"TestlastName\",\"Test@001\",\"Testing1\", \"Company AAA\",\"Sales Team\", \"test1@gmail.com\" and \"0799658874\"",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User_EL clicks Save button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Validates that saved record is successfully displyed in search screen \"Test@001\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/webtables/",
      "offset": 28
    }
  ],
  "location": "Adduser.user_navigates_to_the_link(String)"
});
formatter.result({
  "duration": 7504350716,
  "status": "passed"
});
formatter.match({
  "location": "Adduser.user_validates_that_user_are_is_on_the_User_List_Table()"
});
formatter.result({
  "duration": 11039478,
  "status": "passed"
});
formatter.match({
  "location": "Adduser.user_Clicks_on_the_Add_user_button()"
});
formatter.result({
  "duration": 190866455,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing1",
      "offset": 34
    },
    {
      "val": "TestlastName",
      "offset": 46
    },
    {
      "val": "Test@001",
      "offset": 61
    },
    {
      "val": "Testing1",
      "offset": 72
    },
    {
      "val": "Company AAA",
      "offset": 84
    },
    {
      "val": "Sales Team",
      "offset": 98
    },
    {
      "val": "test1@gmail.com",
      "offset": 112
    },
    {
      "val": "0799658874",
      "offset": 134
    }
  ],
  "location": "Adduser.user_el_captures_unique_username_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1351533493,
  "status": "passed"
});
formatter.match({
  "location": "Adduser.user_el_clicks_Save_button()"
});
formatter.result({
  "duration": 95391603,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test@001",
      "offset": 76
    }
  ],
  "location": "Adduser.user_Validates_that_saved_record_is_successfully_displyed_in_search_screen(String)"
});
formatter.result({
  "duration": 203106485,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "adding user to the list",
  "description": "",
  "id": "adduser;adding-user-to-the-list;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@adduser"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User navigates to the link \"http://www.way2automation.com/angularjs-protractor/webtables/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User_Validates that user are is on the User List Table",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on the Add user button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User_EL captures unique username \"Testing2\", \"TwolastName\",\"Test@002\",\"Testing2\", \"Company BBB\",\"Customer\", \"test2@gmail.com\" and \"0859658874\"",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User_EL clicks Save button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Validates that saved record is successfully displyed in search screen \"Test@002\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/webtables/",
      "offset": 28
    }
  ],
  "location": "Adduser.user_navigates_to_the_link(String)"
});
formatter.result({
  "duration": 6449152617,
  "status": "passed"
});
formatter.match({
  "location": "Adduser.user_validates_that_user_are_is_on_the_User_List_Table()"
});
formatter.result({
  "duration": 24756374,
  "status": "passed"
});
formatter.match({
  "location": "Adduser.user_Clicks_on_the_Add_user_button()"
});
formatter.result({
  "duration": 216446459,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing2",
      "offset": 34
    },
    {
      "val": "TwolastName",
      "offset": 46
    },
    {
      "val": "Test@002",
      "offset": 60
    },
    {
      "val": "Testing2",
      "offset": 71
    },
    {
      "val": "Company BBB",
      "offset": 83
    },
    {
      "val": "Customer",
      "offset": 97
    },
    {
      "val": "test2@gmail.com",
      "offset": 109
    },
    {
      "val": "0859658874",
      "offset": 131
    }
  ],
  "location": "Adduser.user_el_captures_unique_username_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1946877804,
  "status": "passed"
});
formatter.match({
  "location": "Adduser.user_el_clicks_Save_button()"
});
formatter.result({
  "duration": 160895175,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test@002",
      "offset": 76
    }
  ],
  "location": "Adduser.user_Validates_that_saved_record_is_successfully_displyed_in_search_screen(String)"
});
formatter.result({
  "duration": 252310327,
  "status": "passed"
});
});