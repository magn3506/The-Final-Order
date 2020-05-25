import React, { useState, useEffect } from "react"
import Layout from "../../../components/app/layout/layout"

// HOOKS
import useFetch from "../../../hooks/useFetch"
// ICONS
import { AiFillCloseCircle } from "react-icons/ai"
import { IoIosArrowDropleft } from "react-icons/io"
import { IoIosArrowDropright } from "react-icons/io"

// STYLED
import { Lecture_container, Header, Slider, Slide, Nav } from "./index_styles"

const Lecture_page = ({ location }) => {
  // STATE
  const [tq, setTq] = useState(1)
  const [step, setStep] = useState(1)
  const [slide, setSlide] = useState(false)

  // TODO: WHAT HAPPENS IF LOCATION.state.lecture_id is not provided
  // FETCH CLASSROOM
  const url =
    "/private/api/lectures/get-lecture-and-steps.php?lecture_id=" +
    location.state.lecture_id
  const res = useFetch(url, {})
  const lecture = res.response

  // WHILE LOADING
  if (!lecture) {
    return (
      <Layout>
        <div>LOADING</div>
      </Layout>
    )
  }

  // HANDLE NEXT AND PREV
  const next = e => {
    e.preventDefault()
    if (tq / 2 == step) {
      setTq(tq + 1)
      setStep(step + 1)
      setSlide(false)
    } else {
      setTq(tq + 1)
      setSlide(true)
    }
  }
  const prev = e => {
    e.preventDefault()
    if ((step - 1) * 2 == tq - 1) {
      setTq(tq - 1)
      setStep(step - 1)
      setSlide(true)
    } else {
      setTq(tq - 1)
      setSlide(false)
    }
  }

  // STEP DATA

  const { theoryText, question, title, sources, answers } = lecture.steps[
    step - 1
  ]
  // PROGRESS
  const nr_of_steps = lecture.steps.length
  const progress = (tq / 2 / nr_of_steps) * 100
  //
  if (step == nr_of_steps) {
    console.log("THE END")
  }
  return (
    <Layout page_title="this is a lecture">
      <Lecture_container>
        <Header>
          <div className="details">
            <div className="step">
              Step {step}/{lecture.steps.length}
            </div>
            <h2> {lecture.title}</h2>
            <AiFillCloseCircle size="30px" />
          </div>
          <div className="progress">
            <div style={{ width: `${progress}%` }}></div>
          </div>
        </Header>
        <Slider>
          <Slide slide={slide}>
            <div className="theory">
              <h3>{title}</h3>
              <p>{theoryText}</p>
              {!sources.length >= 1 ? (
                ""
              ) : (
                <div>
                  <h4>Sources</h4>
                  <hr />
                  {sources.map((e, i) => {
                    return (
                      <a key={i} href={e.url} target="_blank">
                        {e.title}
                      </a>
                    )
                  })}
                </div>
              )}
            </div>
          </Slide>
          <Slide slide={slide}>
            <div className="quiz">
              <h2>{question}</h2>
              <hr />
              <form>
                {answers.map((e, i) => {
                  return (
                    <label key={i}>
                      <input
                        type="radio"
                        value={e.answerValue}
                        className="answer"
                      />
                      {e.answerValue}
                    </label>
                  )
                })}
              </form>
            </div>
          </Slide>
        </Slider>
        <Nav isPrevActive={step == 1 && tq == 1 ? "hide" : "show"}>
          <button
            className="prev"
            onClick={step == 1 && tq == 1 ? null : e => prev(e)} // INACTIVE WHEN FIRST STEP 1
          >
            <IoIosArrowDropleft size="30px" /> <div>PREV</div>
          </button>
          <button className="next" onClick={e => next(e)}>
            <div>NEXT</div>
            <IoIosArrowDropright size="30px" />
          </button>
        </Nav>
      </Lecture_container>
    </Layout>
  )
}

export default Lecture_page
