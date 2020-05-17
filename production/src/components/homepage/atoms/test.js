import React from "react"
import useFetch from "../../../hooks/useFetch"

const Test = () => {
  // FETCH DATA
  const res = useFetch(`/private/api/classrooms/get-classrooms.php`, {})

  // HANDLE LOADING
  if (!res.response) {
    return <div>Loading...</div>
  }

  // MAP THOUGH DATA
  const list = res.response.map((e, i) => {
    return <li key={i}>{e.title}</li>
  })

  return (
    <div>
      <ul>{list}</ul>
    </div>
  )
}

export default Test
