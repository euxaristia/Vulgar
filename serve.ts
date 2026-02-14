const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);
    let path = url.pathname;
    if (path === "/") path = "/index.html";
    
    const file = Bun.file("." + path);
    const extension = path.split('.').pop();
    
    let contentType = "text/plain";
    if (extension === "html") contentType = "text/html";
    else if (extension === "js") contentType = "application/javascript";
    else if (extension === "css") contentType = "text/css";
    else if (extension === "json") contentType = "application/json";
    
    return new Response(file, {
      headers: {
        "Content-Type": contentType,
      },
    });
  },
});

console.log(`Listening on http://localhost:${server.port}`);
