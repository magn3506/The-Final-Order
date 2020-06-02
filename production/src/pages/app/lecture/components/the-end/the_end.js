import React from "react"
import { Link } from "gatsby"
// STYLES
import { The_end_con } from "./the_end_styles"

const The_end = props => {
  return (
    <The_end_con>
      <h2>Congratulations</h2>
      <p>You have completed the lecutre.</p>
      <Link
        to={"app/classroom"}
        state={{
          classroom_id: props.location.state.classroom_id,
        }}
      >
        GO BACK TO CLASSROOM
      </Link>
    </The_end_con>
  )
}

export default The_end
