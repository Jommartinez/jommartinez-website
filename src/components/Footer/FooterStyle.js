import styled from "@emotion/styled"

export const FooterStyled = styled.section`
  font-family: var(--manrope);
  font-size: var(--fontSizeP);
  line-height: var(--lineHeightP);
  background-color: var(--dark);
  color: var(--light);
  padding-bottom: 2.188rem;
  padding-top: 2.188rem;
  @media screen and (min-width: 576px) {
    padding-bottom: 2.813rem;
    padding-top: 2.813rem;
    .wrapper {
      display: flex;
      justify-content: space-between;
      ul {
        display: flex;
        flex-direction: column;
        li {
          margin-bottom: 0.688rem;
        }
      }
    }
  }
  @media screen and (min-width: 768px) {
    padding-bottom: 3.125rem;
    padding-top: 3.125rem;
  }
  @media screen and (min-width: 992px) {
    padding-bottom: 3.75rem;
    padding-top: 3.75rem;
  }
  @media screen and (min-width: 1200px) {
    padding-bottom: 4.75rem;
    padding-top: 4.75rem;
  }
  @media screen and (min-width: 1920px) {
    padding-bottom: 4.375rem;
    padding-top: 8.75rem;
  }
  a {
    color: var(--light);
    text-decoration: none;
  }
  .content {
    p {
      margin-bottom: 1.25rem;
      @media screen and (min-width: 992px) {
        margin-bottom: 1.875rem;
      }
      &.legal {
        color: var(--yellow);
        @media screen and (min-width: 1200px) {
          margin-top: 3.125rem;
        }
      }
    }
  }
`
