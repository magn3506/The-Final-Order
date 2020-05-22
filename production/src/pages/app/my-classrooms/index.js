import React, { useEffect, useState } from "react"
import Layout from "../../../components/app/layout/layout"
import { Link } from "gatsby"
// COMPONENTS
import Header from "./header"
import Classroom_li from "../../../components/app/molecules/classroom_list_item/classroom_list_item_one"

// HOOKS
import useFetch from "../../../hooks/useFetch"

// IMPORT STYLED COMPONENTS
import { Content_container, List } from "./my_classrooms_styles"

const My_classrooms = () => {
  // STATE
  const [isFollowedRoomsActive, setIsFollowedRoomsActive] = useState(true)
  const [isOwnedRoomsActive, setIsOwnedRoomsActive] = useState(false)

  // FETCH DATA
  const logged_in_user = "1" // TODO: GET lOGGED IN FROM COOKIES
  const owned_room_api =
    "/private/api/classrooms/get-owned-rooms-from-user.php?user_id=" +
    logged_in_user
  const owned_res = useFetch(owned_room_api, {})
  const owned_rooms_arr = owned_res.response
  console.log("#######")
  console.log(owned_rooms_arr)

  const followed_room_api =
    "/private/api/classrooms/get-followed-rooms-from-user.php?user_id=" +
    logged_in_user
  const followed_res = useFetch(followed_room_api, {})
  const followed_rooms_arr = followed_res.response

  // HANDELERS
  const handleSetFollowdActive = e => {
    e.preventDefault()
    setIsFollowedRoomsActive(true)
    setIsOwnedRoomsActive(false)
  }
  const handleSetOwnedActive = e => {
    e.preventDefault()
    setIsOwnedRoomsActive(true)
    setIsFollowedRoomsActive(false)
  }

  return (
    <Layout page_title="My ClassRooms">
      <Content_container>
        <Header
          isFollowedRoomsActive={isFollowedRoomsActive}
          isOwnedRoomsActive={isOwnedRoomsActive}
          handleSetFollowdActive={handleSetFollowdActive}
          handleSetOwnedActive={handleSetOwnedActive}
        />
        {isFollowedRoomsActive ? (
          <List>
            {!followed_rooms_arr ? (
              <div>LOADING...</div>
            ) : followed_rooms_arr == "404" ? (
              <div>
                YOU DONT FOLLOW ANY ROOMS Go TO Browse Classrooms and get
                startet
              </div>
            ) : (
              followed_rooms_arr.map(e => {
                return <Classroom_li classroom={e.classroom} />
              })
            )}
          </List>
        ) : (
          <List>
            {!owned_rooms_arr ? (
              <div>LOADING...</div>
            ) : owned_rooms_arr == "404" ? (
              <div>
                You are not the creator for any calssrooms. Click
                CreateClassroom and start teaching
              </div>
            ) : (
              owned_rooms_arr.map(e => {
                return <Classroom_li classroom={e.classroom} />
              })
            )}
          </List>
        )}
      </Content_container>
    </Layout>
  )
}

export default My_classrooms
