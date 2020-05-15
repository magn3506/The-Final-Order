import React from "react"
import { colors } from "../../../../styles/global/colors"
// IMPORT STYLES
import { Container, Box } from "./color_palette_styles"

const Color_palette = () => {
  // GO THOUGH COLORS OBJ, AND CREATE AN ARRAY OF COLORS
  let colorsArr = []
  for (let [key, value] of Object.entries(colors)) {
    const obj = {
      name: "",
      HEXCode: "",
    }
    obj.name = key
    obj.HEXCode = value
    colorsArr.push(obj)
  }

  // CREATE BOXES FOR EACH COLOR
  const colorBoxes = colorsArr.map(col => (
    // PASS HEXCode to styled_component "Box"
    <Box bg_color={col.HEXCode}>
      <div>
        <div>{col.name}</div>
        <div>{col.HEXCode}</div>
      </div>
    </Box>
  ))

  return (
    <div>
      <Container>{colorBoxes}</Container>
    </div>
  )
}

export default Color_palette
