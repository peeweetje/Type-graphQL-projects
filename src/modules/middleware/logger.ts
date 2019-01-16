import { MiddlewareFn } from "type-graphql";
import { Context } from "src/types/Context";

export const logger: MiddlewareFn<Context> = async ({ args }, next) => {
  console.log("args: ", args);

  return next();
};
