import { createServer, Model } from "miragejs";

function fakeServer() {
  let server = createServer({
    models: {
      posts: Model,
    },
    routes() {
      this.get("/api/posts", (schema) => {
        return schema.posts.all();
      });

      this.post("/api/posts", (schema, req) => {
        const payload = JSON.parse(req.requestBody);

        return schema.posts.create(payload);
      });
    },
  });
  return server;
}

export default fakeServer;
