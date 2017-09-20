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
    "filename": "src/routes/api/user.js",
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
    "filename": "src/routes/api/user.js",
    "groupTitle": "Guest"
  },
  {
    "type": "post",
    "url": "/api/v1/item/add-page",
    "title": "Add to Page",
    "name": "Add_to_Page",
    "group": "Item",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Basic dGVzdDokMmEkMDQkMWN1UTZnVklLY3o3cmNPbkUuVzc5ZWJxaTRvRkpDUm95L0k2RUl1aXpHYkg3a1R3UzFZdlM=",
            "description": "<p>Basic Access Authentication token.</p>"
          }
        ]
      }
    },
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
            "type": "String",
            "optional": false,
            "field": "itemId",
            "defaultValue": "1",
            "description": "<p>Mandatory type.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/item/add-page"
      }
    ],
    "version": "0.0.0",
    "filename": "src/routes/api/item.js",
    "groupTitle": "Item"
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
            "field": "title",
            "defaultValue": "test",
            "description": "<p>Mandatory type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "defaultValue": "description test",
            "description": "<p>Mandatory type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "privacy",
            "defaultValue": "public",
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
            "defaultValue": "Basic dGVzdDokMmEkMDQkMWN1UTZnVklLY3o3cmNPbkUuVzc5ZWJxaTRvRkpDUm95L0k2RUl1aXpHYkg3a1R3UzFZdlM=",
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
    "filename": "src/routes/api/item.js",
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
            "defaultValue": "Basic dGVzdDokMmEkMDQkMWN1UTZnVklLY3o3cmNPbkUuVzc5ZWJxaTRvRkpDUm95L0k2RUl1aXpHYkg3a1R3UzFZdlM=",
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
    "filename": "src/routes/api/item.js",
    "groupTitle": "Item"
  },
  {
    "type": "get",
    "url": "/api/v1/item/list/:pageId",
    "title": "List Item By Page",
    "name": "List_Item",
    "group": "Item",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Basic dGVzdDokMmEkMDQkMWN1UTZnVklLY3o3cmNPbkUuVzc5ZWJxaTRvRkpDUm95L0k2RUl1aXpHYkg3a1R3UzFZdlM=",
            "description": "<p>Basic Access Authentication token.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/item/list/1?page=1&per=10"
      }
    ],
    "version": "0.0.0",
    "filename": "src/routes/api/item.js",
    "groupTitle": "Item"
  },
  {
    "type": "get",
    "url": "/api/v1/item/list-home",
    "title": "List Item Home Page",
    "name": "List_Item_Home_Page",
    "group": "Item",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Basic dGVzdDokMmEkMDQkMWN1UTZnVklLY3o3cmNPbkUuVzc5ZWJxaTRvRkpDUm95L0k2RUl1aXpHYkg3a1R3UzFZdlM=",
            "description": "<p>Basic Access Authentication token.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/item/list-home"
      }
    ],
    "version": "0.0.0",
    "filename": "src/routes/api/item.js",
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
            "defaultValue": "Basic dGVzdDokMmEkMDQkMWN1UTZnVklLY3o3cmNPbkUuVzc5ZWJxaTRvRkpDUm95L0k2RUl1aXpHYkg3a1R3UzFZdlM=",
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
    "filename": "src/routes/api/item.js",
    "groupTitle": "Item"
  },
  {
    "type": "post",
    "url": "/api/v1/item-link/create/:itemId",
    "title": "Create Item Link",
    "name": "Create_Item_Link",
    "group": "Item_Link",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Basic dGVzdDokMmEkMDQkMWN1UTZnVklLY3o3cmNPbkUuVzc5ZWJxaTRvRkpDUm95L0k2RUl1aXpHYkg3a1R3UzFZdlM=",
            "description": "<p>Basic Access Authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "link",
            "defaultValue": "https://nodejs.org/api/documentation.html",
            "description": "<p>Mandatory type.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/item-link/create/1"
      }
    ],
    "version": "0.0.0",
    "filename": "src/routes/api/item-link.js",
    "groupTitle": "Item_Link"
  },
  {
    "type": "post",
    "url": "/api/v1/item-link/delete",
    "title": "Delete Item Link",
    "name": "Delete_Item_Link",
    "group": "Item_Link",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Basic dGVzdDokMmEkMDQkMWN1UTZnVklLY3o3cmNPbkUuVzc5ZWJxaTRvRkpDUm95L0k2RUl1aXpHYkg3a1R3UzFZdlM=",
            "description": "<p>Basic Access Authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "linkId",
            "defaultValue": "1",
            "description": "<p>Mandatory type.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/item-link/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "src/routes/api/item-link.js",
    "groupTitle": "Item_Link"
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
            "defaultValue": "Basic dGVzdDokMmEkMDQkMWN1UTZnVklLY3o3cmNPbkUuVzc5ZWJxaTRvRkpDUm95L0k2RUl1aXpHYkg3a1R3UzFZdlM=",
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
    "filename": "src/routes/api/page.js",
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
            "defaultValue": "Basic dGVzdDokMmEkMDQkMWN1UTZnVklLY3o3cmNPbkUuVzc5ZWJxaTRvRkpDUm95L0k2RUl1aXpHYkg3a1R3UzFZdlM=",
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
    "filename": "src/routes/api/page.js",
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
            "defaultValue": "Basic dGVzdDokMmEkMDQkMWN1UTZnVklLY3o3cmNPbkUuVzc5ZWJxaTRvRkpDUm95L0k2RUl1aXpHYkg3a1R3UzFZdlM=",
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
    "filename": "src/routes/api/page.js",
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
            "defaultValue": "Basic dGVzdDokMmEkMDQkMWN1UTZnVklLY3o3cmNPbkUuVzc5ZWJxaTRvRkpDUm95L0k2RUl1aXpHYkg3a1R3UzFZdlM=",
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
    "filename": "src/routes/api/page.js",
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
            "defaultValue": "Basic dGVzdDokMmEkMDQkMWN1UTZnVklLY3o3cmNPbkUuVzc5ZWJxaTRvRkpDUm95L0k2RUl1aXpHYkg3a1R3UzFZdlM=",
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
    "filename": "src/routes/api/tag.js",
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
            "defaultValue": "Basic dGVzdDokMmEkMDQkMWN1UTZnVklLY3o3cmNPbkUuVzc5ZWJxaTRvRkpDUm95L0k2RUl1aXpHYkg3a1R3UzFZdlM=",
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
    "filename": "src/routes/api/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/v1/user/show",
    "title": "Request User information",
    "name": "GetUser",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Basic dGVzdDokMmEkMDQkMWN1UTZnVklLY3o3cmNPbkUuVzc5ZWJxaTRvRkpDUm95L0k2RUl1aXpHYkg3a1R3UzFZdlM=",
            "description": "<p>Basic Access Authentication token.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/user/show"
      }
    ],
    "version": "0.0.0",
    "filename": "src/routes/api/user.js",
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
            "defaultValue": "Basic dGVzdDokMmEkMDQkMWN1UTZnVklLY3o3cmNPbkUuVzc5ZWJxaTRvRkpDUm95L0k2RUl1aXpHYkg3a1R3UzFZdlM=",
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
    "filename": "src/routes/api/user.js",
    "groupTitle": "User"
  }
] });
