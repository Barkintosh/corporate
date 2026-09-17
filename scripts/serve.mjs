import http from "node:http";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const port = Number(process.env.PORT || 8080);
if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error("PORT must be a valid TCP port.");

const types = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".png", "image/png"],
  [".woff2", "font/woff2"],
  [".txt", "text/plain; charset=utf-8"]
]);
const publicFiles = new Set(["index.html", "styles.css", "script.js"]);

const server = http.createServer(async (request, response) => {
  response.setHeader("X-Content-Type-Options", "nosniff");
  response.setHeader("Cache-Control", "no-store");
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" });
    response.end("Method not allowed");
    return;
  }
  try {
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    const relativePath = pathname === "/" ? "index.html" : pathname.slice(1);
    const segments = relativePath.split("/");
    const isAsset = relativePath.startsWith("assets/") && types.has(path.extname(relativePath));
    if ((!publicFiles.has(relativePath) && !isAsset) || segments.some(segment => segment.startsWith(".")) || relativePath.includes("\\")) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }
    const content = await readFile(path.join(root, relativePath));
    response.writeHead(200, { "Content-Type": types.get(path.extname(relativePath)), "Content-Length": content.length });
    response.end(request.method === "HEAD" ? undefined : content);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
});

server.on("error", error => {
  console.error(error.code === "EADDRINUSE" ? `Port ${port} is already in use. Try PORT=8081 node scripts/serve.mjs` : error.message);
  process.exitCode = 1;
});
server.listen(port, "127.0.0.1", () => console.log(`Corporate preview: http://localhost:${port}\nPress Ctrl+C to stop.`));
