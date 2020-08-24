import styled from "@emotion/styled"
export const AccordeonBlockStyled = styled.section``
export const AccordeonServiceStyled = styled.article`
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  img {
    position: absolute;
    width: 100%;
    height: 120%;
    object-fit: cover;
    top: 0;
  }
  h2 {
    font-family: var(--butler);
    padding: 2rem 0;
    position: relative;
    color: var(--yellow);
    font-size: 1.875rem;
    &.left {
      text-align: left;
    }
    &.right {
      text-align: right;
    }
    @media screen and (min-width: 576px) {
      font-size: var(--fontSizeH1);
      padding: 2.5rem 0;
    }
    @media screen and (min-width: 768px) {
      padding: 3.1rem 0;
    }
    @media screen and (min-width: 992px) {
      padding: 4.1rem 0;
    }
    @media screen and (min-width: 992px) {
      padding: 5.6rem 0;
    }
    @media screen and (min-width: 1920px) {
      padding: 7.4rem 0;
    }
  }
  .wrapper {
    .content {
      position: relative;
      &::before {
        content: "";
        z-index: 9;
        position: absolute;
        width: 30px;
        height: 55px;
        background: var(--dark);
        top: -12px;
        right: 0;
        border-radius: 0 0 25px 25px;
        @media screen and (min-width: 768px) {
          width: 35px;
          height: 65px;
        }
        @media screen and (min-width: 992px) {
          width: 40px;
          height: 80px;
        }
        @media screen and (min-width: 1200px) {
          width: 45px;
          height: 100px;
        }
        @media screen and (min-width: 1920px) {
          border-radius: 0 0 50px 50px;
          width: 90px;
          height: 150px;
        }
      }
      &::after {
        content: "";
        z-index: 9;
        position: absolute;
        width: 30px;
        height: 55px;
        background: var(--dark);
        top: -12px;
        right: 45px;
        border-radius: 0 0 25px 25px;
        @media screen and (min-width: 768px) {
          right: 55px;
          width: 35px;
          height: 65px;
        }
        @media screen and (min-width: 992px) {
          right: 60px;
          width: 40px;
          height: 80px;
        }
        @media screen and (min-width: 1200px) {
          right: 65px;
          width: 45px;
          height: 100px;
        }
        @media screen and (min-width: 1920px) {
          right: 130px;
          border-radius: 0 0 50px 50px;
          width: 90px;
          height: 150px;
        }
      }
    }
  }
`
export const AccordeonTextStyled = styled.article`
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
