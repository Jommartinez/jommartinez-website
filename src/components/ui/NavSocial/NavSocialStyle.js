import styled from "@emotion/styled"

export const NavSocialStyled = styled.div`
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
          width: 2rem;
        }
        text-decoration: none;
      }
    }
  }
`
