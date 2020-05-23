import React from "react"
// ICONS
import Create_classroom_icon from "../../../assets/icons/create_classroom_icon.png"
import { AiOutlinePlus } from "react-icons/ai"
// IMPORT STYLED COMPONENTS
import {
  Header,
  Btn,
  Btn_con,
  Create_CL_Btn_mobile,
  Create_CL_Btn_laptop,
} from "./my_classrooms_styles"

const Header_my_clasrooms = props => {
  return (
    <>
      <Header>
        <Btn_con>
          <Btn
            isActive={props.isFollowedRoomsActive}
            onClick={e => props.handleSetFollowdActive(e)}
          >
            Followed Rooms
          </Btn>
          <Btn
            isActive={props.isOwnedRoomsActive}
            onClick={e => props.handleSetOwnedActive(e)}
          >
            Owned Rooms
          </Btn>
        </Btn_con>
        <Create_CL_Btn_mobile to={"app/my-classrooms/create-classroom"}>
          <img src={Create_classroom_icon} alt="create classroom icon" />
        </Create_CL_Btn_mobile>
        <Create_CL_Btn_laptop to={"app/my-classrooms/create-classroom"}>
          <div>Create Classroom</div>
          <AiOutlinePlus size="30px" />
        </Create_CL_Btn_laptop>
      </Header>
    </>
  )
}

export default Header_my_clasrooms
