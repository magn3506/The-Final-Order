import React from "react"
import { storiesOf } from "@storybook/react"
import BackButton from "./back_button.js"

storiesOf(`Atoms`, module).add(`Back button`, () => (
  <BackButton linkRoute="/app/my-classrooms" name="Back" />
))