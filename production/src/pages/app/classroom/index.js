import React from "react"
import Layout from "../../../components/app/layout/layout"
import styled from "styled-components"
// HOOKS
import useFetch from "../../../hooks/useFetch"

const Classroom_page = ({ location }) => {
  const url =
    "/private/api/classrooms/get-classroom-and-lectures.php?classroom_id=" +
    location.state.classroom_id

  const res = useFetch(url, {})

  if (!res.response) {
    return <div>Loading...</div>
  }

  const Box = styled.div`
    height: 2000px;
    background-color: grey;
    margin: 0 auto;
    border: 1px solid red;
  `

  return (
    <Layout page_title={res.response.title}>
      <Box>HELP PAGE</Box>
    </Layout>
  )
}

export default Classroom_page
