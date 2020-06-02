import React, { useState } from "react"
import { Quiz_con, Answer_con } from "./quiz_styles"
import checkedIcon from "../../../../../assets/icons/checked.png"
import unCheckedIcon from "../../../../../assets/icons/unChecked.png"

const Quiz = props => {
  // STATE
  const [value, setValue] = useState("No Answer Selected")

  // HANDLE CHANGE
  const handleSetValue = e => {
    // e.preventDefault()
    setValue(e.target.value)
    props.handleSetCorrectAnswer(e.target.attributes.isCorrect.value)
  }

  // PROPS
  const question = props.question
  const answers = props.answers

  return (
    <Quiz_con>
      <h2>{question}</h2>
      <hr />
      <form>
        {answers.map((e, i) => {
          return (
            <Answer_con
              checked={value == e.answerValue}
              isCorrect={e.isCorrect}
            >
              <label key={i} for={`id${i}`}>
                <input
                  id={`id${i}`}
                  type="radio"
                  name={`answer${props.step}`}
                  value={e.answerValue}
                  className="answer"
                  onChange={e => handleSetValue(e)}
                  checked={value == e.answerValue}
                  isCorrect={e.isCorrect}
                />
                <div>
                  <img
                    src={value == e.answerValue ? checkedIcon : unCheckedIcon}
                    alt="checked or unchecked"
                  />
                </div>
                <p>{e.answerValue}</p>
              </label>
            </Answer_con>
          )
        })}
      </form>
    </Quiz_con>
  )
}

export default Quiz
