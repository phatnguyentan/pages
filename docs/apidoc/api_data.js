define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/user/login",
    "title": "Request User login",
    "name": "UserLogin",
    "group": "Guest",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "defaultValue": "david",
            "description": "<p>Mandatory username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "defaultValue": "123",
            "description": "<p>Mandatory password.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/user/login"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controllers/user.js",
    "groupTitle": "Guest"
  },
  {
    "type": "post",
    "url": "/api/v1/user/signup",
    "title": "Create User",
    "name": "UserSignUp",
    "group": "Guest",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "defaultValue": "tom",
            "description": "<p>Mandatory username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "defaultValue": "123",
            "description": "<p>Mandatory password.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/user/signup"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controllers/user.js",
    "groupTitle": "Guest"
  },
  {
    "type": "get",
    "url": "/api/v1/user/list",
    "title": "Request Users information",
    "name": "GetListUsers",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Basic ZGF2aWQ6MTIz",
            "description": "<p>Basic Access Authentication token.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/user/list"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v1/user/logout",
    "title": "Request User logout",
    "name": "User_Logout",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Basic ZGF2aWQ6MTIz",
            "description": "<p>Basic Access Authentication token.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/user/logout"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controllers/user.js",
    "groupTitle": "User"
  }
] });
