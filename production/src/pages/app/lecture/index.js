import React from "react"
import Layout from "../../../components/app/layout/layout"
import styled from "styled-components"
// HOOKS
import useFetch from "../../../hooks/useFetch"

const Lecture_page = ({ location }) => {
  // TODO: WHAT HAPPENS IF LOCATION.state.lecture_id is på provided
  // FETCH CLASSROOM
  const url =
    "/private/api/lectures/get-lecture.php?lecture_id=" +
    location.state.lecture_id
  const res = useFetch(url, {})

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
      {!res.response ? (
        <div>LOADING...</div>
      ) : (
        <div>
          <h2> {res.response.title}</h2>
          <div> {res.response.description}</div>
        </div>
      )}
    </Layout>
  )
}

export default Lecture_page
