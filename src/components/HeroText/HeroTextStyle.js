import styled from "@emotion/styled"
export const HeroTextStyled = styled.section`
  background: var(--dark);
  color: var(--light);
  padding: 8rem 0 5rem 0;
  @media screen and (min-width: 768px) {
    padding: 11rem 0 6rem 0;
  }
  @media screen and (min-width: 992px) {
    padding: 11.375rem 0 6rem 0;
  }
  @media screen and (min-width: 1200px) {
    padding: 12.5rem 0 7rem 0;
  }
  @media screen and (min-width: 1920px) {
    padding: 15rem 0 12rem 0;
  }
  h1 {
    font-family: var(--butler);
    font-size: 1.875rem;
    display: block;
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: var(--light);
    padding-bottom: 0.938rem;
    @media screen and (min-width: 576px) {
      font-size: var(--fontSizeH1);
      padding-bottom: 2.188rem;
    }
    @media screen and (min-width: 576px) {
      padding-bottom: 3.121rem;
    }
    @media screen and (min-width: 992px) {
      -webkit-text-stroke-width: 2px;
    }
    @media screen and (min-width: 1200px) {
      padding-bottom: 4rem;
    }
  }
  p {
    color: var(--light);
    font-family: var(--manrope);
    font-size: var(--fontSizeP);
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
  svg {
    margin-top: 5rem;
  }
`
