import React from "react";
import { storiesOf } from "@storybook/react";
import Form from "./signup_form";

storiesOf(`Molecules`, module).add(`Signup form`, () => (
    <div>
        <Form></Form>
    </div>
  ))