import styled from "@emotion/styled"

export const NavStyled = styled.nav`
  font-size: var(--fontSizeP);
  font-family: var(--manrope);
  @media screen and (min-width: 992px) {
    font-size: 0.938rem;
    p,
    button {
      display: none;
    }
  }
  @media screen and (min-width: 1200px) {
    font-size: 1.125rem;
  }
  @media screen and (min-width: 1920px) {
    font-size: 1.375rem;
  }
  .menu-m,
  button {
    display: none;
  }
  @media (max-width: 991px) {
    .menu-m,
    button {
      z-index: 999;
      position: relative;
      display: block;
      cursor: pointer;
      background: none;
      border: none;
      color: var(--text);
      font-size: var(--fontSizeP);
      font-family: var(--manrope);
      outline: none;
    }
  }
  ul {
    display: flex;
    list-style: none;

    @media screen and (min-width: 992px) {
      display: flex;
    }
    li {
      margin-right: 2.5rem;
      a {
        text-decoration: none;
        color: var(--light);
        transition: all 0.35s ease-in-out;
        &.current {
          color: var(--yellow);
        }
        &:hover {
          span {
            color: var(--yellow);
          }
        }
      }
    }
    @media screen and (max-width: 991px) {
      display: flex;
      position: fixed;
      z-index: 9;
      flex-direction: column;
      top: 0;
      width: 100vw;
      height: 100vh;
      background: var(--dark);
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      padding: 0 30px;
      opacity: 1;
      left: 105%;
    }
    @media screen and (max-width: 575px) {
      li {
        margin-right: 0;
        margin-bottom: 1.25rem;
        &:last-child {
          margin-bottom: 0;
        }
        a {
          font-family: var(--butler);
          font-size: 1.875rem;
          line-height: 3.5rem;
          padding: 1.5rem;
          color: transparent;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: var(--light);
          &.current {
            color: transparent;
            -webkit-text-stroke-color: var(--yellow);
          }
        }
      }
    }
    @media screen and (min-width: 576px) and (max-width: 991px) {
      li {
        margin-right: 0;
        margin-bottom: 1.875rem;
        &:last-child {
          margin-bottom: 0;
        }
        a {
          font-family: var(--butler);
          font-size: 3.125rem;
          line-height: 4.5rem;
          padding: 0.5rem 0;
          color: transparent;
          -webkit-text-stroke-width: 2px;
          -webkit-text-stroke-color: var(--light);
          &.current {
            color: transparent;
            -webkit-text-stroke-color: var(--yellow);
          }
        }
      }
    }
  }
`
