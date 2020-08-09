import styled from "@emotion/styled"
export const HeaderStyled = styled.section`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9;
  padding: 2rem 0;
  background: var(--dark);
  color: var(--light);
  .content {
    margin-top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
