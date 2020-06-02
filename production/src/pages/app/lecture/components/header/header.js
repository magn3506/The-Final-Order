import React from "react"
import { Header } from "./header_styles"
import { Link } from "gatsby"
import { AiFillCloseCircle } from "react-icons/ai"

const Slider_header = props => {
  return (
    <Header>
      <div className="details">
        <div className="step">
          Step {props.step}/{props.lecture.steps.length}
        </div>
        <h2> {props.lecture.title}</h2>
        <Link
          to={"app/classroom"}
          state={{
            classroom_id: props.location.state.classroom_id,
          }}
        >
          <AiFillCloseCircle size="30px" />
        </Link>
      </div>
      <div className="progress">
        <div style={{ width: `${props.progress}%` }}></div>
      </div>
    </Header>
  )
}

export default Slider_header
