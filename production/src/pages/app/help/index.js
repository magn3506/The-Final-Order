import React from "react"
import Layout from "../../../components/app/layout/layout"
import styled from "styled-components"

const Help_page = () => {
  const Box = styled.div`
    height: 2000px;
    background-color: grey;
    margin: 0 auto;
    border: 1px solid red;
  `

  return (
    <Layout>
      <Box>HELP PAGE</Box>
    </Layout>
  )
}

export default Help_page
