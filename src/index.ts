import { initServer } from "./app";
const port = process.env.port || 8000;
async function init() {
  const app = await initServer();

  app.listen(port, () => {
    console.log(`server running port ${port}`);
  });
}

init();
