import React from "react"

import {
  Classroom_container_mobile,
  Top_mobile,
  Bottom_mobile,
  Stats_mobile,
} from "./classroom_details_styles"

import { Classroom_container_laptop } from "./classroom_details_styles"

const Classroom_details_comp = props => {
  // REACIEVES AN OBJECT
  const { title, description, owner } = props.classroomData

  return (
    <>
      <Classroom_container_mobile>
        <Top_mobile>
          <div className="classroom_img_container">
            <img
              className="classroom_img"
              src="https://i.picsum.photos/id/1029/200/200.jpg"
              alt="clasroom image"
            />
          </div>
          <div className="teacher">
            <div>
              <img
                className="teacher_img"
                src="https://www.fillmurray.com/100/100"
                alt="User image"
              />
            </div>
            <h5>{owner}</h5>
          </div>
        </Top_mobile>
        <Bottom_mobile>
          <div className="description">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <Stats_mobile />
        </Bottom_mobile>
      </Classroom_container_mobile>
      <Classroom_container_laptop>hahe</Classroom_container_laptop>
    </>
  )
}

export default Classroom_details_comp
