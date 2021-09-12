$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "jbk offline application test",
  "description": "",
  "id": "jbk-offline-application-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 38,
  "name": "login test with multiple erro msg",
  "description": "",
  "id": "jbk-offline-application-test;login-test-with-multiple-erro-msg",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@invalidloginerrormsg"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "user enters \"\u003cuname\u003e\" and \"\u003cpass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "user verify  \"\u003cemailerror\u003e\" and \"\u003cpasserror\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "user will verify \"\u003ctitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 45,
  "name": "",
  "description": "",
  "id": "jbk-offline-application-test;login-test-with-multiple-erro-msg;",
  "rows": [
    {
      "cells": [
        "uname",
        "pass",
        "emaileror",
        "passerror",
        "title"
      ],
      "line": 46,
      "id": "jbk-offline-application-test;login-test-with-multiple-erro-msg;;1"
    },
    {
      "cells": [
        "kiran@gmail.com",
        "123456",
        "",
        "",
        "Dashboard"
      ],
      "line": 47,
      "id": "jbk-offline-application-test;login-test-with-multiple-erro-msg;;2"
    },
    {
      "cells": [
        "Mangesh@gmail.com",
        "123456",
        "Please enter email as kiran@gmail.com",
        "",
        "Log in"
      ],
      "line": 48,
      "id": "jbk-offline-application-test;login-test-with-multiple-erro-msg;;3"
    },
    {
      "cells": [
        "neelam@gmail.com",
        "asdeft",
        "Please enter email as kiran@gmail.com",
        "Please enter password 123456",
        "Log in"
      ],
      "line": 49,
      "id": "jbk-offline-application-test;login-test-with-multiple-erro-msg;;4"
    },
    {
      "cells": [
        "",
        "",
        "Please enter email.",
        "Please enter password.",
        "Log in"
      ],
      "line": 50,
      "id": "jbk-offline-application-test;login-test-with-multiple-erro-msg;;5"
    },
    {
      "cells": [
        "Chetana@gmail.com",
        "",
        "Please enter email as kiran@gmail.com",
        "Please enter password.",
        "Log in"
      ],
      "line": 51,
      "id": "jbk-offline-application-test;login-test-with-multiple-erro-msg;;6"
    },
    {
      "cells": [
        "",
        "asd@**12",
        "Please enter email.",
        "Please enter password 123456",
        "Log in"
      ],
      "line": 52,
      "id": "jbk-offline-application-test;login-test-with-multiple-erro-msg;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3948962600,
  "status": "passed"
});
formatter.before({
  "duration": 1792670100,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "login test with multiple erro msg",
  "description": "",
  "id": "jbk-offline-application-test;login-test-with-multiple-erro-msg;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@invalidloginerrormsg"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "user enters \"kiran@gmail.com\" and \"123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "user verify  \"\u003cemailerror\u003e\" and \"\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "user will verify \"Dashboard\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepLoginPage.user_should_be_on_login_page()"
});
formatter.result({
  "duration": 768356300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiran@gmail.com",
      "offset": 13
    },
    {
      "val": "123456",
      "offset": 35
    }
  ],
  "location": "StepLoginPage.user_enters_and(String,String)"
});
formatter.result({
  "duration": 907837100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cemailerror\u003e",
      "offset": 14
    },
    {
      "val": "",
      "offset": 33
    }
  ],
  "location": "StepLoginPage.user_verify_and(String,String)"
});
formatter.result({
  "duration": 25436000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard",
      "offset": 18
    }
  ],
  "location": "StepLoginPage.user_will_verify(String)"
});
formatter.result({
  "duration": 14380300,
  "status": "passed"
});
formatter.after({
  "duration": 42800,
  "status": "passed"
});
formatter.after({
  "duration": 22600,
  "status": "passed"
});
formatter.before({
  "duration": 1737252400,
  "status": "passed"
});
formatter.before({
  "duration": 1928045900,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "login test with multiple erro msg",
  "description": "",
  "id": "jbk-offline-application-test;login-test-with-multiple-erro-msg;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@invalidloginerrormsg"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "user enters \"Mangesh@gmail.com\" and \"123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "user verify  \"\u003cemailerror\u003e\" and \"\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "user will verify \"Log in\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepLoginPage.user_should_be_on_login_page()"
});
formatter.result({
  "duration": 899217100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mangesh@gmail.com",
      "offset": 13
    },
    {
      "val": "123456",
      "offset": 37
    }
  ],
  "location": "StepLoginPage.user_enters_and(String,String)"
});
formatter.result({
  "duration": 559637500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cemailerror\u003e",
      "offset": 14
    },
    {
      "val": "",
      "offset": 33
    }
  ],
  "location": "StepLoginPage.user_verify_and(String,String)"
});
formatter.result({
  "duration": 166786800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log in",
      "offset": 18
    }
  ],
  "location": "StepLoginPage.user_will_verify(String)"
});
formatter.result({
  "duration": 8847900,
  "status": "passed"
});
formatter.after({
  "duration": 27500,
  "status": "passed"
});
formatter.after({
  "duration": 14200,
  "status": "passed"
});
formatter.before({
  "duration": 1988981900,
  "status": "passed"
});
formatter.before({
  "duration": 1696515000,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "login test with multiple erro msg",
  "description": "",
  "id": "jbk-offline-application-test;login-test-with-multiple-erro-msg;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@invalidloginerrormsg"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "user enters \"neelam@gmail.com\" and \"asdeft\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "user verify  \"\u003cemailerror\u003e\" and \"Please enter password 123456\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "user will verify \"Log in\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepLoginPage.user_should_be_on_login_page()"
});
formatter.result({
  "duration": 692421200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "neelam@gmail.com",
      "offset": 13
    },
    {
      "val": "asdeft",
      "offset": 36
    }
  ],
  "location": "StepLoginPage.user_enters_and(String,String)"
});
formatter.result({
  "duration": 534828800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cemailerror\u003e",
      "offset": 14
    },
    {
      "val": "Please enter password 123456",
      "offset": 33
    }
  ],
  "location": "StepLoginPage.user_verify_and(String,String)"
});
formatter.result({
  "duration": 165643300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log in",
      "offset": 18
    }
  ],
  "location": "StepLoginPage.user_will_verify(String)"
});
formatter.result({
  "duration": 17098200,
  "status": "passed"
});
formatter.after({
  "duration": 21000,
  "status": "passed"
});
formatter.after({
  "duration": 8800,
  "status": "passed"
});
formatter.before({
  "duration": 2118209700,
  "status": "passed"
});
formatter.before({
  "duration": 1750026000,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "login test with multiple erro msg",
  "description": "",
  "id": "jbk-offline-application-test;login-test-with-multiple-erro-msg;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@invalidloginerrormsg"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "user enters \"\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "user verify  \"\u003cemailerror\u003e\" and \"Please enter password.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "user will verify \"Log in\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepLoginPage.user_should_be_on_login_page()"
});
formatter.result({
  "duration": 557386800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    },
    {
      "val": "",
      "offset": 20
    }
  ],
  "location": "StepLoginPage.user_enters_and(String,String)"
});
formatter.result({
  "duration": 499384000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cemailerror\u003e",
      "offset": 14
    },
    {
      "val": "Please enter password.",
      "offset": 33
    }
  ],
  "location": "StepLoginPage.user_verify_and(String,String)"
});
formatter.result({
  "duration": 167796300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log in",
      "offset": 18
    }
  ],
  "location": "StepLoginPage.user_will_verify(String)"
});
formatter.result({
  "duration": 10345900,
  "status": "passed"
});
formatter.after({
  "duration": 30100,
  "status": "passed"
});
formatter.after({
  "duration": 12100,
  "status": "passed"
});
formatter.before({
  "duration": 2181049600,
  "status": "passed"
});
formatter.before({
  "duration": 1582172700,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "login test with multiple erro msg",
  "description": "",
  "id": "jbk-offline-application-test;login-test-with-multiple-erro-msg;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@invalidloginerrormsg"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "user enters \"Chetana@gmail.com\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "user verify  \"\u003cemailerror\u003e\" and \"Please enter password.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "user will verify \"Log in\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepLoginPage.user_should_be_on_login_page()"
});
formatter.result({
  "duration": 851065600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chetana@gmail.com",
      "offset": 13
    },
    {
      "val": "",
      "offset": 37
    }
  ],
  "location": "StepLoginPage.user_enters_and(String,String)"
});
formatter.result({
  "duration": 804542700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cemailerror\u003e",
      "offset": 14
    },
    {
      "val": "Please enter password.",
      "offset": 33
    }
  ],
  "location": "StepLoginPage.user_verify_and(String,String)"
});
formatter.result({
  "duration": 161522900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log in",
      "offset": 18
    }
  ],
  "location": "StepLoginPage.user_will_verify(String)"
});
formatter.result({
  "duration": 8813600,
  "status": "passed"
});
formatter.after({
  "duration": 32700,
  "status": "passed"
});
formatter.after({
  "duration": 11900,
  "status": "passed"
});
formatter.before({
  "duration": 2373763900,
  "status": "passed"
});
formatter.before({
  "duration": 1898255800,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "login test with multiple erro msg",
  "description": "",
  "id": "jbk-offline-application-test;login-test-with-multiple-erro-msg;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@invalidloginerrormsg"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "user enters \"\" and \"asd@**12\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "user verify  \"\u003cemailerror\u003e\" and \"Please enter password 123456\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "user will verify \"Log in\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepLoginPage.user_should_be_on_login_page()"
});
formatter.result({
  "duration": 593802500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    },
    {
      "val": "asd@**12",
      "offset": 20
    }
  ],
  "location": "StepLoginPage.user_enters_and(String,String)"
});
formatter.result({
  "duration": 552412400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cemailerror\u003e",
      "offset": 14
    },
    {
      "val": "Please enter password 123456",
      "offset": 33
    }
  ],
  "location": "StepLoginPage.user_verify_and(String,String)"
});
formatter.result({
  "duration": 206978700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log in",
      "offset": 18
    }
  ],
  "location": "StepLoginPage.user_will_verify(String)"
});
formatter.result({
  "duration": 14010500,
  "status": "passed"
});
formatter.after({
  "duration": 39400,
  "status": "passed"
});
formatter.after({
  "duration": 19100,
  "status": "passed"
});
});