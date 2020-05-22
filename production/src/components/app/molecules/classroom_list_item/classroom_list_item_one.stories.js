import React from "react"
import Item from "./classroom_list_item_one"
import styled from "styled-components"

const Ul = styled.ul`
  padding: 10px;
  max-width: 750px;
  margin: 0 auto;
`

const stub = {
  id: "2",
  title: "Database Design",
  description:
    "Here you will learn about Relational Database management systems and Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  image: "1",
  isPrivate: "1",
  owner: "Magnus Jensen",
}

export default {
  title: "Item",
  component: Item,
}

export const item_1 = () => (
  <Ul>
    <Item classroom={stub}>Hello Button</Item>
  </Ul>
)
