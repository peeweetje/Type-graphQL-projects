import { testConnect } from "../../../test-utils/testConnect";
import { Connection } from "typeorm";
import { graphqlCall } from "../../../test-utils/graphqlCall";

let conn: Connection;
beforeAll(async () => {
  conn = await testConnect();
});
afterAll(async () => {
  await conn.close();
});

const registerMutation = `
mutation Register($data: RegisterInput!) {
  register(
    data: $data
  ) {
    id
    firstName
    lastName
    email
    name
  }
}
`;

describe("Register", () => {
  it("create user", async () => {
    console.log(
      await graphqlCall({
        source: registerMutation,
        variableValues: {
          data: {
            firstName: "petra",
            lastName: "vos",
            email: "petravos70@gamail.com",
            password: "123petra"
          }
        }
      })
    );
  });
});
