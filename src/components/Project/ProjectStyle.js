import styled from "@emotion/styled"

export const ProjectStyled = styled.article`
  flex: 0 0 100%;
  position: relative;
  overflow: hidden;

  @media screen and (min-width: 576px) {
    flex: 0 0 calc(100% / 3);
  }
  @media screen and (min-width: 768px) {
    flex: 0 0 calc(100% / 3);
  }
  img {
    width: 100%;
  }
  .cover {
    position: absolute;
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: bottom 0.35s ease-in-out;
    @media screen and (min-width: 992px) {
      bottom: -100%;
      height: 100%;
    }
    .mask {
      position: absolute;
      background-color: var(--yellow);
      opacity: 0.85;
      width: 100%;
      height: 100%;
    }
    .content {
      position: relative;
      z-index: 2;
      text-align: center;

      margin-top: 0;
      opacity: 1;
      transition: all 0.6s ease-in;
      p {
        font-family: var(--butler);
        color: var(--dark);
        font-size: var(--fontSizeP);
        span {
          color: var(--light);
          display: block;
          font-family: var(--manropeRegular);
        }
      }
    }
  }
  @media screen and (min-width: 992px) {
    .cover {
      .content {
        margin-top: 20px;
        opacity: 0;
      }
    }
    &:hover {
      .cover {
        bottom: 0;
        .content {
          margin-top: 0;
          opacity: 1;
        }
      }
    }
  }
`
