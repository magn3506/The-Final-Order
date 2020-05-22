import React, { useEffect, useState } from "react"
import Layout from "../../../components/app/layout/layout"
import { Link } from "gatsby"
// COMPONENTS
import Header from "./header"

// HOOKS
import useFetch from "../../../hooks/useFetch"

// IMPORT STYLED COMPONENTS
import { Content_container, List, Classroom } from "./my_classrooms_styles"

const My_classrooms = () => {
  // STATE
  const [isFollowedRoomsActive, setIsFollowedRoomsActive] = useState(true)
  const [isOwnedRoomsActive, setIsOwnedRoomsActive] = useState(false)

  // FETCH DATA
  const logged_in_user = "5" // TODO: GET lOGGED IN FROM COOKIES
  const owned_room_api =
    "/private/api/classrooms/get-owned-rooms-from-user.php?user_id=" +
    logged_in_user
  const owned_res = useFetch(owned_room_api, {})
  const owned_rooms_arr = owned_res.response

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
          isFollowedActive={isFollowedRoomsActive}
          isOwnedActive={isOwnedRoomsActive}
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
                const room = e.classroom
                return (
                  <Classroom>
                    <h3>{room.title}</h3>
                    <p>{room.description}</p>
                    <Link to="app/classroom" state={{ classroom_id: room.id }}>
                      see more
                    </Link>
                  </Classroom>
                )
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
                const room = e.classroom
                return (
                  <Classroom>
                    <h3>{room.title}</h3>
                    <p>{room.description}</p>
                    <Link to="app/classroom" state={{ classroom_id: room.id }}>
                      see more
                    </Link>
                  </Classroom>
                )
              })
            )}
          </List>
        )}
      </Content_container>
    </Layout>
  )
}

export default My_classrooms
