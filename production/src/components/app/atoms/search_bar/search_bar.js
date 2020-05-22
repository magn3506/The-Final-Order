import React from "react"
import styled from "styled-components"
import { colors } from "../../../../styles/global/colors"
import { bodyText } from "../../../../styles/global/typography"
import { FiSearch } from "react-icons/fi"
import { IoIosCloseCircle } from "react-icons/io"

const Search = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: none;
  padding: 0px 60px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  ${bodyText.normalTextReg_16px};
  color: ${colors.grey};

  ::placeholder {
    color: ${colors.grey};
    ${bodyText.normalTextReg_16px};
  }
`
const Icon_search = styled.div`
  position: relative;
  height: 0px;
  svg {
    position: absolute;
    top: -40px;
    left: 10px;
  }
`
const Icon_delete = styled.div`
  position: relative;
  height: 0px;
  svg {
    position: absolute;
    top: -35px;
    right: 10px;
  }
`

const Search_bar = () => {
  return (
    <>
      <Search type="text" placeholder="Search classrooms.." />
      <Icon_search>
        <FiSearch size="30px" color={colors.grey} />
      </Icon_search>
      <Icon_delete>
        <IoIosCloseCircle size="20px" color={colors.orange} />
      </Icon_delete>
    </>
  )
}

export default Search_bar
