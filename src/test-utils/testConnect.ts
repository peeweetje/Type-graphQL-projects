import { createConnection } from "typeorm";

export const testConnect = (drop: boolean = false) => {
  return createConnection({
    name: "default",
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "typegraphql-project-test",
    synchronize: drop,
    dropSchema: drop,
    entities: [__dirname + "../entity/*.*"]
  });
};
