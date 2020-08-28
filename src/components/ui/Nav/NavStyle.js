import styled from "@emotion/styled"

export const NavStyled = styled.nav`
  font-size: var(--fontSizeP);
  font-family: var(--manrope);
  @media screen and (min-width: 992px) {
    font-size: 0.938rem;
    p {
      display: none;
    }
  }
  @media screen and (min-width: 1200px) {
    font-size: 1.125rem;
  }
  @media screen and (min-width: 1920px) {
    font-size: 1.375rem;
  }
  .menu-m {
    display: none;
  }
  @media (max-width: 768px) {
    .menu-m {
      z-index: 999;
      position: relative;
      display: block;
    }
  }
  ul {
    display: flex;
    list-style: none;

    @media (max-width: 768px) {
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
    @media screen and (min-width: 992px) {
      display: flex;
    }
    li {
      margin-right: 2.5rem;
      a {
        text-decoration: none;
        color: var(--light);
      }
    }
  }
`
