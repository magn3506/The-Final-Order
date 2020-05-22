import React from 'react';
import { action } from '@storybook/addon-actions';
import styled from "styled-components";
import {colors} from "../../../styles/global/colors";
import {headings} from "../../../styles/global/typography";
import {breakpoints} from "../../../styles/global/breakpoints";

export default {
  title: 'Atoms/Test'
};

const Test = styled.div`
color: ${colors.dark};
${headings.heading2_40px}

@media ${breakpoints.minMouse} {
  ${headings.heading4_24px}
    }
`;

export const Text = () => <Test onClick={action('clicked')}>Hello Button</Test>;
