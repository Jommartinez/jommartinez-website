import styled from "@emotion/styled"
export const HeroStyled = styled.section`
  background: var(--dark);
  color: var(--light);
  padding: 25.25rem 0 6.25rem 0;
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 13.75rem;
  }
  p {
    font-family: "manrope-light", sans-serif;
    font-size: 2.125rem;
    line-height: 2.875rem;
    max-width: 482px;
    span {
      margin-top: 2.188rem;
      display: block;
      color: var(--yellow);
    }
  }
  .name {
    position: relative;
    h1 {
      font-family: "butler";
      font-size: 12.188rem;
      line-height: 8rem;
      span {
        display: block;
        color: transparent;
        -webkit-text-stroke-width: 4px;
        -webkit-text-stroke-color: var(--light);
      }
    }
    p {
      position: absolute;
      right: 0;
      margin-top: 15px;
      width: 100px;
      height: 20px;
      border: 4px solid var(--yellow);
    }
  }
  .social {
    ul {
      list-style: none;
      li {
        a {
          color: var(--light);
          text-decoration: none;
        }
      }
    }
  }
`
