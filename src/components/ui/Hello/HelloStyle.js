import styled from "@emotion/styled"
export const HelloStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-bottom: 4rem;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  p {
    font-family: var(--manrope);
    font-size: var(--fontSizeP);
    line-height: var(--lineHeightP);
    max-width: 12.063rem;
    @media screen and (min-width: 768px) {
      max-width: 14.867rem;
    }
    @media screen and (min-width: 992px) {
      max-width: 18.125rem;
    }
    @media screen and (min-width: 1920px) {
      max-width: 30.125rem;
    }
    span {
      margin-top: 0.8rem;
      display: block;
      color: var(--yellow);
      @media screen and (min-width: 768px) {
        margin-top: 2rem;
      }
    }
  }
  .name {
    position: relative;
    margin-top: 2.5rem;
    @media screen and (min-width: 576px) {
      margin-top: 0;
    }
    h1 {
      font-family: var(--butler);
      font-size: var(--fontSizeH1);
      line-height: 2rem;
      @media screen and (min-width: 768px) {
        line-height: 3.125rem;
      }
      @media screen and (min-width: 992px) {
        line-height: 3.825rem;
      }
      @media screen and (min-width: 1200px) {
        line-height: 5rem;
      }
      @media screen and (min-width: 1920px) {
        line-height: 8rem;
      }
      span.nameT {
        margin-left: 0.35rem;
      }
      span.stroke {
        display: block;
        color: transparent;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: var(--light);
        @media screen and (min-width: 992px) {
          -webkit-text-stroke-width: 2px;
        }
      }
    }
    p {
      position: absolute;
      right: 0;
      margin-top: 0.8rem;
      width: 2rem;
      height: 0.5rem;
      border: 1px solid var(--yellow);
      @media screen and (min-width: 768px) {
        width: 2.688rem;
      }
      @media screen and (min-width: 992px) {
        width: 3.188rem;
        height: 0.7rem;
      }
      @media screen and (min-width: 1920px) {
        width: 6rem;
        height: 1rem;
        border: 2px solid var(--yellow);
      }
    }
  }
`
