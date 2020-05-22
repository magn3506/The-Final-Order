import React, { useState } from "react"
import Layout from "../../../components/app/layout/layout"
import styled from "styled-components"
import { Link } from "gatsby"
import Classrooms_li from "../../../components/app/molecules/classroom_list_item/classroom_list_item_one"
// HOOKS
import useFetch from "../../../hooks/useFetch"

const Browse_classrooms = () => {
  const res = useFetch("/private/api/classrooms/get-classrooms.php", {})

  const List = styled.ul`
    max-width: 750px;
    margin: 0 auto;
  `

  return (
    <Layout page_title="Browse ClassRooms">
      {/* <List>{List_items}</List> */}
      <List>
        {!res.response ? (
          <div>LOADING</div>
        ) : (
          res.response.map(e => {
            return <Classrooms_li classroom={e} />
          })
        )}
      </List>
    </Layout>
  )
}

export default Browse_classrooms
