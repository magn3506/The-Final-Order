import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "../atoms/input";

storiesOf(`Atoms`, module).add(`Input`, () => (
    <div>
        <Input placeholder="Username" name="username" type="text"></Input>
    </div>
  ))