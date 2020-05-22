import React from "react"
import styled from "styled-components"
import Search from "./search_bar"

const Con = styled.div`
  padding: 10px;
  max-width: 750px;
  margin: 0 auto;
`

export default {
  title: "Search Bar",
  component: Search,
}

export const Search_bar = () => (
  <Con>
    <Search>Searck bar</Search>
  </Con>
)
