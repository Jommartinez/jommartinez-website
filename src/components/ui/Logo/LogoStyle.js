import styled from "@emotion/styled"

export const LogoStyled = styled.div`
  z-index: 999;
  position: relative;
  svg {
    width: 20px;
    .color-logo {
      stroke: var(--light);
      transition: all 0.35s ease-in-out;
    }
    &:hover {
      .color-logo {
        stroke: var(--yellow);
      }
    }
    @media screen and (min-width: 768px) {
      width: 32px;
    }
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 992px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
  }
`
