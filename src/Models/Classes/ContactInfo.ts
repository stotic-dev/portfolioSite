import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class ContactInfo {
    @IsString()
    @IsNotEmpty()
    name?: string;
  
    @IsEmail()
    @IsNotEmpty()
    email?: string | null;
  
    @IsString()
    @IsNotEmpty()
    contact?: string | null;
  
    constructor(name?: string, email?: string, contact?: string) {
      this.name = name;
      this.email = email;
      this.contact = contact;
    }
  }