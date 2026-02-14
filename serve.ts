import { join, normalize, sep } from "path";

const PORT = 3000;
const PUBLIC_DIR = process.cwd();

const MIME_TYPES: Record<string, string> = {
  html: "text/html",
  js: "application/javascript",
  css: "text/css",
  json: "application/json",
  png: "image/png",
  jpg: "image/jpeg",
  svg: "image/svg+xml",
  ico: "image/x-icon",
};

const server = Bun.serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url);
    let relativePath = url.pathname === "/" ? "/index.html" : url.pathname;
    
    // Prevent directory traversal: normalize and ensure it stays within PUBLIC_DIR
    const safePath = normalize(relativePath).replace(/^(\.\.[\/\\])+/, "");
    const filePath = join(PUBLIC_DIR, safePath);

    const file = Bun.file(filePath);

    if (!(await file.exists())) {
      console.error(`[404] ${url.pathname}`);
      return new Response("Not Found", { status: 404 });
    }

    const extension = filePath.split(".").pop() || "";
    const contentType = MIME_TYPES[extension] || "text/plain";

    console.log(`[200] ${url.pathname} -> ${contentType}`);
    return new Response(file, {
      headers: {
        "Content-Type": contentType,
      },
    });
  },
  error(error) {
    return new Response(`<pre>${error}\n${error.stack}</pre>`, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  },
});

console.log(`🚀 Vulgar server running at http://localhost:${server.port}`);
