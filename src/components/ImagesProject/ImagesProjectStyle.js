import styled from "@emotion/styled"

export const ImagesProjectStyled = styled.section`
  background-color: var(--dark);

  padding: 2.188rem 0 0;
  @media screen and (min-width: 576px) {
    padding: 2.5rem 0 0;
  }
  @media screen and (min-width: 768px) {
    padding: 3.125rem 0 0;
  }
  @media screen and (min-width: 992px) {
    padding: 3.75rem 0 0;
  }
  @media screen and (min-width: 1200px) {
    padding: 10rem 0 0;
  }
  @media screen and (min-width: 1920px) {
    padding: 8.75rem 0 0;
  }
  img {
    width: 100%;
  }
  .dual-images {
    display: flex;
    flex-wrap: wrap;
  }
  .dual-images .image {
    flex: 0 0 100%;
    @media screen and (min-width: 576px) {
      flex: 0 0 50%;
    }
  }
`
