import React from "react"
import { Theory_con } from "./theory_styles"

const Theory = props => {
  const { title, theoryText, sources } = props.step
  return (
    <>
      <Theory_con>
        <h3>{title}</h3>
        <p>{theoryText}</p>
        {!sources ? (
          ""
        ) : (
          <div>
            <h4>Sources</h4>
            <hr />
            {sources.map((e, i) => {
              return (
                <a key={i} href={e.url} target="_blank">
                  {e.title}
                </a>
              )
            })}
          </div>
        )}
      </Theory_con>
    </>
  )
}

export default Theory
