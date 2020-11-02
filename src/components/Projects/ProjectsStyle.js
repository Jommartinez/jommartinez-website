import styled from "@emotion/styled"

export const ProjectsStyled = styled.section`
  background-color: var(--dark);
  padding-bottom: 4.375rem;
  @media screen and (min-width: 576px) {
    padding-bottom: 2.188rem;
  }
  @media screen and (min-width: 768px) {
    padding-bottom: 6.25rem;
  }
  @media screen and (min-width: 992px) {
    padding-bottom: 3.75rem;
  }
  @media screen and (min-width: 1200px) {
    padding-bottom: 5rem;
  }
  @media screen and (min-width: 1920px) {
    padding-bottom: 0;
  }
  .wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  article {
    &:last-child {
      @media screen and (min-width: 768px) {
        display: block;
      }
    }
  }
`
