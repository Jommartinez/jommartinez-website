import styled from "@emotion/styled"
export const HeroStyled = styled.section`
  background: var(--dark);
  color: var(--light);
  padding: 8rem 0 3rem 0;

  @media screen and (min-width: 992px) {
    padding: 13.75rem 0 3rem 0;
  }
  @media screen and (min-width: 1200px) {
    padding: 15rem 0 5rem 0;
  }
  @media screen and (min-width: 1920px) {
    padding: 21.875rem 0 12rem 0;
  }
`
