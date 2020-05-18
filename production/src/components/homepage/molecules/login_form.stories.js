import React from "react";
import { storiesOf } from "@storybook/react";
import Login from "../molecules/login_form";

storiesOf(`Molecules`, module).add(`Login form`, () => (
    <div>
        <Login></Login>
    </div>
  ))