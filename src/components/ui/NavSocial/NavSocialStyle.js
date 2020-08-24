import styled from "@emotion/styled"

export const NavSocialStyled = styled.div`
  ul {
    list-style: none;
    display: flex;
    li {
      margin-right: 0.75rem;
      a {
        svg {
          width: 2.188rem;
          .backcolor {
            fill: var(--light);
          }
        }
        text-decoration: none;
      }
    }
  }
`
