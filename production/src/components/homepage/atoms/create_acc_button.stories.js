import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../atoms/create_acc_button";

storiesOf(`Atoms`, module).add(`Create account Button`, () => (
    <div>
        <Button name="Create account"/>
    </div>
  ))