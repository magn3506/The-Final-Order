import React from "react"
import { Navigation_con } from "./navigation_styles"
// ICONS
import { IoIosArrowDropleft } from "react-icons/io"
import { IoIosArrowDropright } from "react-icons/io"

const Navigation = props => {
  // PROPS
  const tq = props.tq
  const step = props.step
  const nr_of_steps = props.nr_of_steps
  const isPrevActive = props.isPrevActive
  // HANDLE CLICK
  const next = props.next
  const prev = props.prev
  const handleSetLectureEnd = props.handleSetLectureEnd

  return (
    <Navigation_con isPrevActive={isPrevActive}>
      <button
        className="prev"
        onClick={step == 1 && tq == 1 ? null : e => prev(e)} // INACTIVE WHEN FIRST STEP 1
      >
        <IoIosArrowDropleft size="30px" /> <div>PREV</div>
      </button>
      <button
        className="next"
        onClick={
          tq == nr_of_steps * 2 ? e => handleSetLectureEnd(e) : e => next(e)
        } // INACTIVE WHEN LaST STEP 1
      >
        <div>NEXT</div>
        <IoIosArrowDropright size="30px" />
      </button>
    </Navigation_con>
  )
}

export default Navigation
