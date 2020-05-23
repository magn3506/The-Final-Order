import React from "react"
import { storiesOf } from "@storybook/react"
import StepListItem from "./step_list_item.js"

storiesOf(`Atoms`, module).add(`Step list item`, () => (
  <StepListItem title="Arrays &amp; Loops" />
))