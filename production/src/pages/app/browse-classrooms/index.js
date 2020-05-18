import React from "react"
import Layout from "../../../components/app/layout/layout"
import styled from "styled-components"

const Browse_classrooms = () => {
  const Box = styled.div`
    height: 2000px;
    max-width: 1000px;
    background-color: grey;
    margin: 0 auto;
    border: 1px solid red;
  `

  return (
    <Layout>
      <Box>HELLO</Box>
    </Layout>
  )
}

export default Browse_classrooms
