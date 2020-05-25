import React from "react"
import { storiesOf } from "@storybook/react"
import LectureStepsList from "./lecture_steps_list.js"

storiesOf(`Molecules`, module).add(`Lecture steps list`, () => (
  <LectureStepsList />
))