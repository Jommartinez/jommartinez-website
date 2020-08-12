import styled from "@emotion/styled"

export const ProjectStyled = styled.article`
  flex: 0 0 100%;
  position: relative;
  overflow: hidden;
  &:last-child {
    display: none;
  }
  @media screen and (min-width: 576px) {
    flex: 0 0 50%;
  }
  @media screen and (min-width: 768px) {
    flex: 0 0 33%;
    &:last-child {
      display: block;
    }
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
    &:hover {
      .cover {
        bottom: 0;
      }
    }
  }
`
