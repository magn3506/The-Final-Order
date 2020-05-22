import React, { useState } from "react"
import Layout from "../../../components/app/layout/layout"
import styled from "styled-components"
import { Link } from "gatsby"
import { colors } from "../../../styles/global/colors"
// COMPONENTS
import Classrooms_li from "../../../components/app/molecules/classroom_list_item/classroom_list_item_one"
import Search_bar from "../../../components/app/atoms/search_bar/search_bar"

// HOOKS
import useFetch from "../../../hooks/useFetch"

const Browse_classrooms = () => {
  const res = useFetch("/private/api/classrooms/get-classrooms.php", {})

  const Content_container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `

  const Header = styled.div`
    margin-top: 50px;
    padding-bottom: 20px;
    border-bottom: 2px solid ${colors.grey};
  `

  const List = styled.ul`
    max-width: 750px;
    margin: 0 auto;
    padding: 0px 10px;
  `

  return (
    <Layout page_title="Browse ClassRooms">
      <Content_container>
        <Header>
          <Search_bar />
        </Header>
        <List>
          {!res.response ? (
            <div>LOADING</div>
          ) : (
            res.response.map(e => {
              return <Classrooms_li classroom={e} />
            })
          )}
        </List>
      </Content_container>
    </Layout>
  )
}

export default Browse_classrooms
