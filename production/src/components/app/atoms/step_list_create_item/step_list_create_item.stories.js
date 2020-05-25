import React from "react"
import { storiesOf } from "@storybook/react"
import StepListCreateItem from "./step_list_create_item.js"

storiesOf(`Atoms`, module).add(`Step list item`, () => (
  <StepListCreateItem />
))