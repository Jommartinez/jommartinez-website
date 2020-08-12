import styled from "@emotion/styled"

export const SectionTitleRightStyled = styled.section`
  background-color: var(--dark);
  color: var(--light);
  font-family: var(--manrope);
  padding-top: 2.063rem;
  padding-bottom: 2.063rem;
  @media screen and (min-width: 576px) {
    padding-top: 2.813rem;
    padding-bottom: 2.813rem;
  }
  @media screen and (min-width: 768px) {
    padding-top: 3.25rem;
    padding-bottom: 3.25rem;
  }
  @media screen and (min-width: 1920px) {
    padding-top: 8.75rem;
    padding-bottom: 5rem;
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  .blockTitle {
    flex: 0 0 100%;
    text-align: right;
    order: 1;

    @media screen and (min-width: 1200px) {
      order: 2;
      flex: 0 0 50%;
    }
    @media screen and (min-width: 1920px) {
      flex: 0 0 40%;
    }
  }
  h2 {
    font-size: var(--fontSizeH2);
    font-family: var(--butler);
  }
  a {
    text-decoration: none;
    display: flex;
    margin-top: 0.938rem;
    margin-bottom: 0.938rem;
    justify-content: flex-end;
    @media screen and (min-width: 576px) {
      margin-top: 1.375rem;
      margin-bottom: 1.375rem;
    }
    @media screen and (min-width: 768px) {
      margin-top: 1.563rem;
      margin-bottom: 1.563rem;
    }
    @media screen and (min-width: 1920px) {
      margin-top: 4.75rem;
      margin-bottom: 0;
    }
    span {
      color: var(--dark);
      font-family: var(--manrope);
      background-color: var(--light);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 29px;
      width: 120px;
      font-size: 0.75rem;
      border-radius: 25px 0 0 25px;
      background-color: var(--light);
      @media screen and (min-width: 576px) {
        font-size: 0.938rem;
        height: 34px;
        width: 141px;
      }
      @media screen and (min-width: 768px) {
        font-size: 1.125rem;
        height: 38px;
        width: 157px;
      }
      @media screen and (min-width: 1920px) {
        height: 50px;
        width: 212px;
        font-size: 1.375rem;
      }
      &.icon {
        display: inline-block;

        height: 29px;
        width: 34px;
        border: 4px solid var(--light);
        transform: rotate(180deg);
        border-radius: 25px 0 0 25px;
        background-color: var(--dark);
        color: var(--light);
        font-family: var(--manropeBold);
        font-size: 1.25rem;
        margin-left: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        @media screen and (min-width: 576px) {
          font-size: 1.563rem;
          height: 34px;
          width: 40px;
          margin-left: 8px;
        }
        @media screen and (min-width: 768px) {
          font-size: 1.875rem;
          height: 38px;
          width: 45px;
          margin-left: 8px;
        }
        @media screen and (min-width: 1920px) {
          height: 50px;
          width: 61px;
          font-size: 2.25rem;
          margin-left: 10px;
        }
      }
    }
  }
  p {
    flex: 0 0 100%;
    font-size: var(--fontSizeP);
    line-height: var(--lineHeightP);
    order: 2;
    @media screen and (min-width: 1200px) {
      order: 1;
      flex: 0 0 50%;
      max-width: 540px;
    }
    @media screen and (min-width: 1920px) {
      flex: 0 0 60%;
      max-width: 866px;
    }
  }
`
