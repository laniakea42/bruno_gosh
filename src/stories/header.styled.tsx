import styled from "styled-components";

export const HeaderUI = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      #ffffff 97%,
      rgba(255, 255, 255, 0) 100%
    );
    opacity: 0;
    transition: 300ms ease-out;
    z-index: -1;
  }
  &.filled {
    &::before {
      opacity: 1;
    }
  }
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    padding: 50px 15px;
    @media (max-width: 1440px) {
      padding: 15px 15px;
    }
  }

  nav {
    padding-left: 26px;
  }

  .bone {
    transition: 100ms ease-out;
    &:hover {
      fill: rgb(241 124 18);
    }
  }
`;
