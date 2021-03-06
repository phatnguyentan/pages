define({ "api": [
  {
    "type": "get",
    "url": "v1/users",
    "title": "Request Users information",
    "name": "GetUsers",
    "group": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/users"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   data: [\n       \"firstName\": \"John\",\n       \"lastLame\": \"Doe\"\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/user.js",
    "groupTitle": "User"
  }
] });
