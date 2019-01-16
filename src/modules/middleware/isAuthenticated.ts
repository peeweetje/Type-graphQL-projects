import { MiddlewareFn } from "type-graphql";
import { Context } from "src/types/Context";

export const isAuthenticated: MiddlewareFn<Context> = async (
  { context },
  next
) => {
  if (!context.req.session!.userId) {
    throw new Error("not authenticated");
  }
  return next();
};
