import styled from "@emotion/styled"

export const TextBlockStyled = styled.section`
  background-color: var(--dark);
  color: var(--light);
  font-family: var(--manrope);
  font-size: var(--fontSizeP);
  padding: 2.188rem 0;
  @media screen and (min-width: 576px) {
    padding: 2.5rem 0;
  }
  @media screen and (min-width: 768px) {
    padding: 3.125rem 0;
  }
  @media screen and (min-width: 992px) {
    padding: 3.75rem 0;
  }
  @media screen and (min-width: 1200px) {
    padding: 10rem 0;
  }
  @media screen and (min-width: 1920px) {
    padding: 8.75rem 0;
  }
  p.head {
    margin-bottom: 0.938rem;
    @media screen and (min-width: 576px) {
      margin-bottom: 1.25rem;
    }
    @media screen and (min-width: 1200px) {
      margin-bottom: 2.5rem;
    }
    @media screen and (min-width: 1920px) {
      margin-bottom: 4.313rem;
    }
  }
  p {
    margin-bottom: 1rem;
    @media screen and (min-width: 1200px) {
      margin-bottom: 1.5rem;
    }
    @media screen and (min-width: 1920px) {
      margin-bottom: 2.813rem;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
`
