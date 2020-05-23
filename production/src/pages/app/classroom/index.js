import React from "react"
import Layout from "../../../components/app/layout/layout"
import styled from "styled-components"
import { Link } from "gatsby"
// HOOKS
import useFetch from "../../../hooks/useFetch"
// COMPONENTS
import Classroom_container from "../../../components/app/organisms/classroom-details/classroom_details"
// ICONS
import { MdPlayCircleOutline } from "react-icons/md"

import {
  Heading,
  Content_container,
  Content_wrapper,
  List,
  Item,
} from "./index_styles"

const Classroom_page = ({ location }) => {
  // TODO: WHAT HAPPENS IF LOCATION.state.classroom_id is på provided

  // FETCH CLASSROOM
  const url =
    "/private/api/classrooms/get-classroom-and-lectures.php?classroom_id=" +
    location.state.classroom_id
  const res = useFetch(url, {})

  return (
    <Layout page_title="this is a classroom">
      <Content_wrapper>
        <Heading>BREAD CRUMS AND BACK BUTTON</Heading>
        {!res.response ? (
          <div>LOADING...</div>
        ) : (
          <Content_container>
            <Classroom_container
              classroomData={{
                title: res.response.title,
                description: res.response.description,
                owner: res.response.owner,
              }}
            />
            <List>
              <h2>
                Lectures: <span>0{res.response.lectures.length}</span>
              </h2>
              {res.response.lectures.map((e, i) => {
                return (
                  <Item>
                    <div className="index">{i + 1}</div>
                    <div className="card">
                      <h4 className="title">{e.title}</h4>
                      <div className="progress">100%</div>
                      <Link to="#">
                        <MdPlayCircleOutline size="20px" color="white" />
                        <div>Begin</div>
                      </Link>
                    </div>
                  </Item>
                )
              })}
            </List>
          </Content_container>
        )}
      </Content_wrapper>
    </Layout>
  )
}

export default Classroom_page
