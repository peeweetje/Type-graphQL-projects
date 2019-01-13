import { Length, IsEmail } from "class-validator";
import { Field, InputType } from "type-graphql";
import { IsEmailAlreadyExist } from "./IsemailAlreadyexist";

@InputType()
export class RegisterInput {
  @Field()
  @Length(1, 125)
  firstName: string;

  @Field()
  @Length(1, 125)
  lastName: string;

  @Field()
  @IsEmail()
  @IsEmailAlreadyExist({ message: "Email already exist" })
  email: string;

  @Field()
  password: string;
}
