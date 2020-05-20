import React from "react"
import Layout from "../../../components/app/layout/layout"
import styled from "styled-components"

const My_classrooms = () => {
  const Box = styled.div`
    height: 2000px;
    background-color: grey;
    margin: 0 auto;
    border: 1px solid red;
  `

  return (
    <Layout>
      <Box>
        Maecenas dignissim, neque ut consequat consequat, nibh elit vulputate
        velit, pulvinar tristique erat quam eget neque. Duis eget diam risus.
        Maecenas ornare odio sit amet ultrices sagittis. Duis scelerisque ipsum
        sit amet nisi lobortis, eu malesuada neque aliquam. Aenean nec pulvinar
        odio, quis dapibus nisl. Proin porta blandit turpis at varius.
        Pellentesque accumsan mauris ac sem imperdiet, a vestibulum ante
        laoreet. Nam sed vehicula orci. Ut nec magna nec eros tincidunt
        ultricies eget ac metus. Phasellus at justo in lacus accumsan pretium.
        Vivamus non ligula leo.
      </Box>
    </Layout>
  )
}

export default My_classrooms
