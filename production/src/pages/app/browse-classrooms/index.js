import React, { useState } from "react"
import Layout from "../../../components/app/layout/layout"
import styled from "styled-components"
import { Link } from "gatsby"
// HOOKS
import useFetch from "../../../hooks/useFetch"

const Browse_classrooms = () => {
  const res = useFetch("/private/api/classrooms/get-classrooms.php", {})

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
    <Layout page_title="Browse ClassRooms">
      {/* <List>{List_items}</List> */}
      <List>
        {!res.response ? (
          <div>LOADING</div>
        ) : (
          res.response.map(e => {
            return (
              <Item key={e.id}>
                <div>{e.title}</div>
                <div>classroom id: {e.id}</div>
                <Link to={"app/classroom"} state={{ classroom_id: e.id }}>
                  GO TO ROOM
                </Link>
              </Item>
            )
          })
        )}
      </List>
    </Layout>
  )
}

export default Browse_classrooms
