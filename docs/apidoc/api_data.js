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
            "defaultValue": "test",
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
    "filename": "src/routes/user.js",
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
    "filename": "src/routes/user.js",
    "groupTitle": "Guest"
  },
  {
    "type": "post",
    "url": "/api/v1/item/create",
    "title": "Create Item",
    "name": "Create_Item",
    "group": "Item",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageId",
            "defaultValue": "1",
            "description": "<p>Mandatory type.</p>"
          },
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "values",
            "defaultValue": "{name: test}",
            "description": "<p>Mandatory type.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Basic dGVzdDoxMjM=",
            "description": "<p>Basic Access Authentication token.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/item/create"
      }
    ],
    "version": "0.0.0",
    "filename": "src/routes/item.js",
    "groupTitle": "Item"
  },
  {
    "type": "post",
    "url": "/api/v1/item/detail/:itemId",
    "title": "Item Detail",
    "name": "Item_Detail",
    "group": "Item",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Basic dGVzdDoxMjM=",
            "description": "<p>Basic Access Authentication token.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/item/detail/1"
      }
    ],
    "version": "0.0.0",
    "filename": "src/routes/item.js",
    "groupTitle": "Item"
  },
  {
    "type": "post",
    "url": "/api/v1/item/update/:itemId",
    "title": "Update Item",
    "name": "Update_Item",
    "group": "Item",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "values",
            "defaultValue": "{name: test}",
            "description": "<p>Mandatory type.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Basic dGVzdDoxMjM=",
            "description": "<p>Basic Access Authentication token.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/item/update/1"
      }
    ],
    "version": "0.0.0",
    "filename": "src/routes/item.js",
    "groupTitle": "Item"
  },
  {
    "type": "post",
    "url": "/api/v1/page/create",
    "title": "Create Page",
    "name": "Create_Page",
    "group": "Page",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "defaultValue": "My Note",
            "description": "<p>Mandatory type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "defaultValue": "note",
            "description": "<p>Mandatory type.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Basic dGVzdDoxMjM=",
            "description": "<p>Basic Access Authentication token.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/page/create"
      }
    ],
    "version": "0.0.0",
    "filename": "src/routes/page.js",
    "groupTitle": "Page"
  },
  {
    "type": "post",
    "url": "/api/v1/page/delete",
    "title": "Delete Page",
    "name": "Delete_Page",
    "group": "Page",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageId",
            "defaultValue": "1",
            "description": "<p>Mandatory type.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Basic dGVzdDoxMjM=",
            "description": "<p>Basic Access Authentication token.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/page/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "src/routes/page.js",
    "groupTitle": "Page"
  },
  {
    "type": "get",
    "url": "/api/v1/page/detail/:pageId",
    "title": "Request Page Detail",
    "name": "Page_Detail",
    "group": "Page",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Basic dGVzdDoxMjM=",
            "description": "<p>Basic Access Authentication token.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/page/detail/1"
      }
    ],
    "version": "0.0.0",
    "filename": "src/routes/page.js",
    "groupTitle": "Page"
  },
  {
    "type": "get",
    "url": "/api/v1/page/list",
    "title": "Request Page List",
    "name": "Page_List",
    "group": "Page",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Basic dGVzdDoxMjM=",
            "description": "<p>Basic Access Authentication token.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/page/list"
      }
    ],
    "version": "0.0.0",
    "filename": "src/routes/page.js",
    "groupTitle": "Page"
  },
  {
    "type": "post",
    "url": "/api/v1/tag/create",
    "title": "Create Tag",
    "name": "Create_Tag",
    "group": "Tag",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemId",
            "defaultValue": "1",
            "description": "<p>Mandatory type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "defaultValue": "working",
            "description": "<p>Mandatory type.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Basic dGVzdDoxMjM=",
            "description": "<p>Basic Access Authentication token.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/tag/create"
      }
    ],
    "version": "0.0.0",
    "filename": "src/routes/tag.js",
    "groupTitle": "Tag"
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
            "defaultValue": "Basic dGVzdDoxMjM=",
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
    "filename": "src/routes/user.js",
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
            "defaultValue": "Basic dGVzdDoxMjM=",
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
    "filename": "src/routes/user.js",
    "groupTitle": "User"
  }
] });
