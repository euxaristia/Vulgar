import { serve } from "bun";

serve({
  fetch(req) {
    const url = new URL(req.url);
    const path = url.pathname === "/" ? "/index.html" : url.pathname;
    const file = Bun.file(`.${path}`);
    return new Response(file);
  },
  port: 3000,
});

console.log("Server running at http://localhost:3000");
