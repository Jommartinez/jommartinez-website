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
            transition: fill 0.35s ease-in-out;
          }
        }
        text-decoration: none;
        &:hover {
          svg {
            .backcolor {
              fill: var(--yellow);
            }
          }
        }
      }
    }
  }
`
