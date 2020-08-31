import styled from "@emotion/styled"

export const CursorStyled = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid var(--yellow);
  border-radius: 100%;
  position: absolute;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9999;
  transition: all 150ms ease;
  transition-property: opacity, background-color, transform;
  &.cursor {
    &&--hidden {
      opacity: 0;
    }
    &&--link-hovered {
      transform: translate(-50%, -50%) scale(3);
      border: 1px solid var(--yellow);
    }
    &&--clicked {
      transform: translate(-50%, -50%) scale(2);
    }
  }
`
