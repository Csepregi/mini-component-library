/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    borderRadius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    borderRadius: 4,
  },
  large: {
    height: 16,
    padding: 4,
    borderRadius: 8,
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];
  if (!styles) {
    throw new Error(`Unknown size passed to PrgressBar: ${size}`);
  }
  return (
    <>
      <Title>{size}</Title>
      <Wrapper
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-labelledby="loadinglabel"
        aria-valuenow={value}
        style={{
          "--padding": styles.padding + "px",
          "--radius": styles.borderRadius + "px",
        }}
      >
        <VisuallyHidden>{value}%</VisuallyHidden>
        <BarWrapper>
          <Bar
            style={{ "--width": value + "%", "--height": styles.height + "px" }}
          />
        </BarWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  padding: var(--padding);
`;

const Title = styled.span`
  position: relative;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;

  color: #000000;
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  /* trim off corners when progress is near the wall */
  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
  /* trim off corners when progress is near the wall */
  overflow: hidden;
`;

export default ProgressBar;
