import React, { useState, useEffect } from "react"
import Layout from "../../../components/app/layout/layout"

// HOOKS
import useFetch from "../../../hooks/useFetch"

// COMPONENTS
import Header from "./components/header/header"
import Theory from "./components/theory_and_quiz/theory"
import Quiz from "./components/theory_and_quiz/quiz"
import Navigation from "./components/navigation/navigation"
import The_end from "./components/the-end/the_end"
// STYLED
import { Lecture_container, Slider, Slide } from "./index_styles"

const Lecture_page = ({ location }) => {
  // STATE
  const [tq, setTq] = useState(1)
  const [step, setStep] = useState(1)
  const [slide, setSlide] = useState(false)
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null)
  const [lectureEnd, setlectureEnd] = useState(false)

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

  // STEP DATA
  const { question, answers } = lecture.steps[step - 1]
  // PROGRESS
  const nr_of_steps = lecture.steps.length
  const progress = (tq / 2 / nr_of_steps) * 100

  // SETT CORRECT ANSWER
  const handleSetCorrectAnswer = val => {
    setIsCorrectAnswer(val)
    console.dir(val)
  }

  // SET LECTURE END
  const handleSetLectureEnd = e => {
    // VALIDATE ANSWER IF ON EVERY SECOND PAGE (QUIZ)
    if (isCorrectAnswer == null && tq % 2 == 0) {
      alert("Please choose an answer")
      return null
    }
    if (isCorrectAnswer == 0 && tq % 2 == 0) {
      alert("Wrong Answer. Try again!")
      return null
    }

    e.preventDefault()
    setlectureEnd(true)
  }

  // HANDLE NEXT AND PREV NAVIGATION
  const next = e => {
    e.preventDefault()

    // VALIDATE ANSWER IF ON EVERY SECOND PAGE (QUIZ)
    if (isCorrectAnswer == null && tq % 2 == 0) {
      alert("Please choose an answer")
      return null
    }
    if (isCorrectAnswer == 0 && tq % 2 == 0) {
      alert("Wrong Answer. Try again!")
      return null
    }
    if (isCorrectAnswer == 1 && tq % 2 == 0) {
      alert("Succes! You chose the right answer.")
      setIsCorrectAnswer(null)
    }

    //INCREAS STEP
    if (tq / 2 == step) {
      setTq(tq + 1)
      setStep(step + 1)
      setSlide(false)
    } else {
      setTq(tq + 1)
      setSlide(true)
    }
  }
  // PREV STEP
  const prev = e => {
    if (lectureEnd) {
      setlectureEnd(false)
    }

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

  return (
    <Layout page_title="this is a lecture">
      <Lecture_container>
        <Header // PROGRESS INFORMATION AND STEP TITLE
          location={location}
          step={step}
          lecture={lecture}
          progress={progress}
          lectureEnd={lectureEnd}
        />
        {/* SLIDER COMP and SLIDE CONTROLLING THE IMAGE SLDIER */}
        {lectureEnd ? (
          <Slider>
            <Slide slide={false}>
              <The_end location={location} />
            </Slide>
          </Slider>
        ) : (
          <Slider>
            <Slide slide={slide}>
              <Theory step={lecture.steps[step - 1]} />
            </Slide>
            <Slide slide={slide}>
              <Quiz
                step={step}
                question={question}
                answers={answers}
                handleSetCorrectAnswer={handleSetCorrectAnswer}
              />
            </Slide>
          </Slider>
        )}

        <Navigation // PREV AND NEXT BTN
          isPrevActive={step == 1 && tq == 1 ? "hide" : "show"}
          tq={tq}
          step={step}
          nr_of_steps={nr_of_steps}
          next={next}
          prev={prev}
          lectureEnd={lectureEnd}
          handleSetLectureEnd={handleSetLectureEnd}
        />
      </Lecture_container>
    </Layout>
  )
}

export default Lecture_page
