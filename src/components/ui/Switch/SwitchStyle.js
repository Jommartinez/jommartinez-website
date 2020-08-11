import styled from "@emotion/styled"
export const SwitchStyled = styled.div`
  .switch {
    border: 2px solid var(--yellow);
    border-radius: 12px;
    width: 40px;
    height: 17px;
    box-sizing: border-box;
    margin-left: 1.5rem;
    position: relative;
    cursor: pointer;
    @media screen and (min-width: 768px) {
      width: 46px;
      height: 20px;
    }
    @media screen and (min-width: 1920px) {
      width: 56px;
      height: 24px;
    }
  }
  .selected {
    position: absolute;
    transition: all 0.35s ease;
    top: -1px;
    width: 0.8rem;
    height: 0.8rem;
    @media screen and (min-width: 768px) {
      width: 0.9rem;
      height: 0.9rem;
      top: 0;
    }
    @media screen and (min-width: 1920px) {
      width: 1.3rem;
      height: 1.3rem;
      top: 2px;
    }
    &.moon {
      right: 1px;
    }
    &.sun {
      right: 23px;
      @media screen and (min-width: 768px) {
        right: 27px;
      }
      @media screen and (min-width: 1920px) {
        right: 31px;
      }
    }
    svg {
      width: 100%;
      height: 15px;
    }
  }
`
