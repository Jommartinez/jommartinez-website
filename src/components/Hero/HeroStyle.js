import styled from "@emotion/styled"
export const HeroStyled = styled.section`
  background: var(--dark);
  color: var(--light);
  padding: 8rem 0 3rem 0;
  .info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-bottom: 3rem;
  }
  p {
    font-family: var(--manrope);
    font-size: var(--fontSizeP);
    line-height: var(--lineHeightP);
    max-width: 12.063rem;
    span {
      margin-top: 1rem;
      display: block;
      color: var(--yellow);
    }
  }
  .name {
    position: relative;
    margin-top: 2.5rem;
    h1 {
      font-family: var(--butler);
      font-size: var(--fontSizeH1);
      line-height: 2rem;
      span.nameT {
        margin-left: 0.35rem;
      }
      span.stroke {
        display: block;
        color: transparent;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: var(--light);
      }
    }
    p {
      position: absolute;
      right: 0;
      margin-top: 0.8rem;
      width: 2rem;
      height: 0.5rem;
      border: 1px solid var(--yellow);
    }
  }
  .social {
    ul {
      list-style: none;
      display: flex;
      li {
        margin-right: 0.75rem;
        a {
          svg {
            border: 1px solid var(--light);
            border-radius: 100%;
            fill: var(--light);
            width: 1.5rem;
          }
          text-decoration: none;
        }
      }
    }
  }
`
