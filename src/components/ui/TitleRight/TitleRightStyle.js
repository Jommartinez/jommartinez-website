import styled from "@emotion/styled"
export const TitleRightStyled = styled.section`
  background-color: var(--dark);
  h3 {
    font-family: var(--butler);
    font-size: 1.875rem;
    display: block;
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: var(--light);
    padding-top: 2.188rem;
    padding-bottom: 0.938rem;
    @media screen and (min-width: 576px) {
      font-size: var(--fontSizeH1);
      padding-top: 2.188rem;
      padding-bottom: 2.188rem;
    }
    @media screen and (min-width: 576px) {
      padding-top: 3.121rem;
      padding-bottom: 3.121rem;
    }
    @media screen and (min-width: 992px) {
      -webkit-text-stroke-width: 2px;
    }
    @media screen and (min-width: 1200px) {
      padding-top: 4rem;
      padding-bottom: 4rem;
    }
  }
`
