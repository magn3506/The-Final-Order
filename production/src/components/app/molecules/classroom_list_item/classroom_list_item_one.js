import React from "react"
import { Link } from "gatsby"
// GLOBALS
import { colors } from "../../../../styles/global/colors"
// ICONS
import { Li, Top, Bottom } from "./classroom_list_item_one_styles"

const Classroom_list_item_one = props => {
  const { title, description, owner, id } = props.classroom

  return (
    <Li>
      <Top>
        <img
          src="https://picsum.photos/seed/picsum/70/70"
          alt="classroom image"
        />
        <div>
          <h3>{title}</h3>
          <h4>By {owner}</h4>
        </div>
      </Top>
      <Bottom>
        <p>{description}</p>
        <Link to={"app/classroom"} state={{ classroom_id: id }}>
          GO TO ROOM
        </Link>
      </Bottom>
    </Li>
  )
}

export default Classroom_list_item_one
