import { Button } from "@react-email/button";
import { Html } from "@react-email/html";
import React, { FC } from "react";
import { EmailType } from "../../../Models/Types/EmailType";

export const EmailComponent:FC<EmailType> = () => {
  return (
    <Html lang="jp">
      <Button>push</Button>
    </Html>
  );
};
