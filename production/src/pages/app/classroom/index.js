import React from "react"
import Layout from "../../../components/app/layout/layout"
import styled from "styled-components"
import { Link } from "gatsby"
// HOOKS
import useFetch from "../../../hooks/useFetch"

const Classroom_page = ({ location }) => {
  // TODO: WHAT HAPPENS IF LOCATION.state.classroom_id is på provided

  // FETCH CLASSROOM
  const url =
    "/private/api/classrooms/get-classroom-and-lectures.php?classroom_id=" +
    location.state.classroom_id
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
    <Layout page_title="this is a classroom">
      {!res.response ? (
        <div>LOADING...</div>
      ) : (
        res.response.lectures.map(e => {
          return (
            <List>
              <Item key={e.id}>
                <div>{e.title}</div>
                <div>classroom id: {e.id}</div>
                <Link to={"app/lecture"} state={{ lecture_id: e.id }}>
                  BEGIN LECTURE
                </Link>
              </Item>
            </List>
          )
        })
      )}
    </Layout>
  )
}

export default Classroom_page
