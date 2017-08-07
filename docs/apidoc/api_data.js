define({ "api": [
  {
    "type": "get",
    "url": "api/v1/user/list",
    "title": "Request Users information",
    "name": "GetListUsers",
    "group": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/user/list"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  status: 'success',\n  data: [\n       \"fullName\": \"David Nguyen\",\n       ...\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "api/v1/user/login",
    "title": "Request User login",
    "name": "UserLogin",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": "<p>Mandatory username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
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
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   status: 'success'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/user.js",
    "groupTitle": "User"
  }
] });
