import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./submit_button";

storiesOf(`Atoms`, module).add(`Submit Button`, () => (
    <div>
        <Button name="Create account"/>
    </div>
  ))