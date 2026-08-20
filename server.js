const http = require("http");

const users = [
  {
    id: 1,
    name: "Rahma"
  },
  {
    id: 2,
    name: "Ahmed"
  }
];

const server = http.createServer((req, res) => {
  const parts = req.url.split("/");

  const isUsersRoute =
    parts[1] === "api" &&
    parts[2] === "users" &&
    (parts.length === 3 || parts.length === 4);

  // GET /api/users
  if (
    req.method === "GET" &&
    parts[1] === "api" &&
    parts[2] === "users" &&
    parts.length === 3
  ) {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(JSON.stringify(users));
    return;
  }

  // GET /api/users/:id
  if (
    req.method === "GET" &&
    parts[1] === "api" &&
    parts[2] === "users" &&
    parts.length === 4
  ) {
    const id = Number(parts[3]);

    // Invalid ID
    if (Number.isNaN(id)) {
      res.writeHead(400, {
        "Content-Type": "application/json"
      });

      res.end(
        JSON.stringify({
          message: "Invalid user ID"
        })
      );

      return;
    }

    const user = users.find((user) => user.id === id);

    // User found
    if (user) {
      res.writeHead(200, {
        "Content-Type": "application/json"
      });

      res.end(JSON.stringify(user));
      return;
    }

    // User not found
    res.writeHead(404, {
      "Content-Type": "application/json"
    });

    res.end(
      JSON.stringify({
        message: "User not found"
      })
    );

    return;
  }

  // GET /api/health
  if (
    req.method === "GET" &&
    req.url === "/api/health"
  ) {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(
      JSON.stringify({
        status: "OK",
        uptime: process.uptime(),
        platform: process.platform,
        timestamp: new Date().toISOString()
      })
    );

    return;
  }

  // 405 Method Not Allowed
  if (isUsersRoute) {
    res.writeHead(405, {
      "Content-Type": "application/json",
      "Allow": "GET"
    });

    res.end(
      JSON.stringify({
        message: "Method not allowed"
      })
    );

    return;
  }

  // 404 Route Not Found
  res.writeHead(404, {
    "Content-Type": "application/json"
  });

  res.end(
    JSON.stringify({
      message: "Route not found"
    })
  );
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000 🚀");
});