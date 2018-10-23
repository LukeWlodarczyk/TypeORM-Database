import "reflect-metadata";
import { createConnection } from "typeorm";
import httpServer from "./app";

const PORT = process.env.PORT || 5000;

createConnection()
  .then(async () => {
    httpServer.listen(PORT, () => {
      console.log(
        `Server ready at http://localhost:${PORT}/graphql`
      );
    });
  })
  .catch(error => console.log(error));
