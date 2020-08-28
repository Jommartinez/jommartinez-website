import styled from "@emotion/styled"

export const BgWhitoutTitleStyled = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 205px;
  .wrapper {
    position: absolute;
    top: 0;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
  @media screen and (min-width: 768px) {
    height: 273px;
  }
  @media screen and (min-width: 992px) {
    height: 350px;
  }
  @media screen and (min-width: 1200px) {
    height: 424px;
  }
  @media screen and (min-width: 1920px) {
    height: 678px;
  }
  img {
    position: absolute;
    width: 100%;
    height: 120%;
    object-fit: cover;
    top: 0;
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
