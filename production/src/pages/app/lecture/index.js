import React from "react"
import Layout from "../../../components/app/layout/layout"
import styled from "styled-components"
// HOOKS
import useFetch from "../../../hooks/useFetch"

const Lecture_page = ({ location }) => {
  // TODO: WHAT HAPPENS IF LOCATION.state.lecture_id is på provided
  // FETCH CLASSROOM
  const url =
    "/private/api/lectures/get-lecture-and-steps.php?lecture_id=" +
    location.state.lecture_id
  const res = useFetch(url, {})
  const lecture = res.response

  const List = styled.ul`
    max-width: 800px;
    border: 1px solid red;
    display: grid;
    grid-template-columns: 1fr;
  `
  const Item = styled.li`
    width: 300px;
    height: 300px;
    background-color: red;
    margin: 10px;
  `

  return (
    <Layout page_title="this is a lecture">
      {!lecture ? (
        <div>LOADING...</div>
      ) : (
        <div>
          <h2> {lecture.title}</h2>
          <div> {lecture.description}</div>
          <ul>
            {lecture.steps.map(e => {
              return (
                <div>
                  <h3>{e.title}</h3>
                  <p>{e.theoryText}</p>
                  <h4>question?</h4>
                  <p>{e.question}</p>
                  <h4>Answers</h4>
                  {e.answers.map(e => {
                    return (
                      <div
                        style={
                          e.isCorrect === "1"
                            ? { color: "Green" }
                            : { colors: "black" }
                        }
                      >
                        Answer: {e.answerValue}
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </ul>
        </div>
      )}
    </Layout>
  )
}

export default Lecture_page
