import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
  },
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = STYLES[size];
  if (!styles) {
    throw new Error(`Unknown size passed to PrgressBar: ${size}`);
  }
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--size": styles.iconSize + "px" }}>
        <Icon id={icon} size={16} />
      </IconWrapper>

      <TextInput
        {...delegated}
        style={{
          "--width": width + "px",
          "--height": styles.height + "px",
          "--border-thickness": styles.borderThickness + "px",
          "--font-size": styles.fontSize / 16 + "rem",
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
    font-weight: 700;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  height: var(--size);
  margin: auto 0;
`;

const TextInput = styled.input`
  height: var(--height);
  width: var(--width);
  font-size: var(--font-size);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  padding-left: var(--height);
  font-weight: 700;
  outline-offset: 2px;
  color: inherit;
  &::placeholder {
    color: ${COLORS.gray700};
    font-weight: 400;
  }
`;

export default IconInput;
