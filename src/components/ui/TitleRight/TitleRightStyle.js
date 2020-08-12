import styled from "@emotion/styled"
export const TitleRightStyled = styled.section`
  background-color: var(--dark);
  h3 {
    font-family: var(--butler);
    font-size: var(--fontSizeH1);
    display: block;
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: var(--light);
    @media screen and (min-width: 992px) {
      -webkit-text-stroke-width: 2px;
    }
  }
`
