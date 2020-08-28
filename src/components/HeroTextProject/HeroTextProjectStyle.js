import styled from "@emotion/styled"
export const HeroTextProjectStyled = styled.section`
  background: var(--dark);
  color: var(--light);
  padding: 4.375rem 0 2.188rem 0;
  @media screen and (min-width: 576px) {
    padding: 8.438rem 0 5.625rem 0;
  }
  @media screen and (min-width: 768px) {
    padding: 9.375rem 0 5.625rem 0;
  }
  @media screen and (min-width: 992px) {
    padding: 11.438rem 0 7.563rem 0;
  }
  @media screen and (min-width: 1200px) {
    padding: 12.5rem 0 7.5rem 0;
  }
  @media screen and (min-width: 1920px) {
    padding: 15rem 0 12rem 0;
  }
  h1 {
    font-family: var(--butler);
    font-size: 1.875rem;
    display: block;
    color: var(--light);
    padding-bottom: 0.938rem;
    @media screen and (min-width: 576px) {
      font-size: var(--fontSizeH1);
      padding-bottom: 1.625rem;
    }
    @media screen and (min-width: 768px) {
      padding-bottom: 2.063rem;
    }
    @media screen and (min-width: 992px) {
      padding-bottom: 1.875rem;
    }
    @media screen and (min-width: 1200px) {
      padding-bottom: 2.5rem;
    }
  }
  p {
    color: var(--yellow);
    font-family: var(--butler);
    font-size: var(--fontSizeP);
  }
  svg {
    margin-top: 5rem;
  }
`
