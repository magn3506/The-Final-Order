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

  const List = styled.div`
    width: 100px;
    margin: 0 auto;
    display: flex;
  `

  const Item = styled.div`
    list-style-type: none;
  `

  return (
    <Layout page_title="this is a classroom">
      {!res.response ? (
        <div>LOADING...</div>
      ) : (
        res.response.lectures.map(e => {
          return (
            <List>
              <li>Lecures</li>
            </List>
          )
        })
      )}
    </Layout>
  )
}

export default Classroom_page
