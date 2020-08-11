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

  ul {
    display: flex;
    list-style: none;
    display: none;
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
