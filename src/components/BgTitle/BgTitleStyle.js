import styled from "@emotion/styled"

export const BgTitleStyled = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  img {
    position: absolute;
    width: 100%;
    height: 120%;
  }
  h2 {
    padding: 2rem 0;
    position: relative;
    color: var(--yellow);
    font-size: 1.875rem;
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
