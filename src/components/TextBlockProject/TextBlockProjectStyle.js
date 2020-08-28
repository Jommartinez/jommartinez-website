import styled from "@emotion/styled"

export const TextBlockProjectStyled = styled.section`
  background-color: var(--dark);
  color: var(--light);
  font-family: var(--manrope);
  font-size: var(--fontSizeP);
  padding: 2.188rem 0;
  .client-project,
  .detail-project {
    margin-bottom: 1.875rem;
  }
  @media screen and (min-width: 576px) {
    padding: 2.813rem 0;
  }
  @media screen and (min-width: 768px) {
    padding: 3.75rem 0;
  }
  @media screen and (min-width: 992px) {
    padding: 4.063rem 0;
    .client-project,
    .detail-project {
      margin-bottom: 2.5rem;
    }
  }
  @media screen and (min-width: 1200px) {
    padding: 5rem 0;
  }
  @media screen and (min-width: 1920px) {
    padding: 4.375rem 0;
    .client-project,
    .detail-project {
      margin-bottom: 4.375rem;
    }
  }
`
