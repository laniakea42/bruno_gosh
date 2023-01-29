import styled from "styled-components";

export const ButtonUI = styled.button`
  font-family: "Montserrat", "Verdana", sans-serif;
  font-weight: 600;
  border: 0;
  outline: 0;
  cursor: pointer;
  display: block;
  line-height: 1;
  transition: 300ms ease-out;

  &.button--primary {
    color: #fff;
    background: ${({ theme }) => theme.color?.primary ?? "#C4630A"};
    &:hover,
    &:active {
      background: ${({ theme }) => theme.color?.active.main ?? "#d77f2e"};
    }
  }

  &.button--dashed {
    position: relative;
    &:before {
      content: " ";
      position: absolute;
      top: -11px;
      left: -10px;
      bottom: -11px;
      right: -10px;
      background: transparent;
      border: 2px dashed ${({ theme }) => theme.color?.primary ?? "#C4630A"};
      border-radius: inherit;
      z-index: -1;
    }

    &:hover,
    &:active {
      background: ${({ theme }) => theme.color?.active.main ?? "#d77f2e"};
      &::before {
        border: 2px dashed ${({ theme }) => theme.color?.active ?? "#d77f2e"};
      }
    }
  }

  &.button--secondary {
    background: ${({ theme }) => theme.color?.secondary ?? "#B5CFDD"};
    color: #fff;
    &:hover {
      background: ${({ theme }) => theme.color?.active.secondary ?? "#A9C7D8"};
    }
    &.button--dashed::before {
      border: 2px dashed ${({ theme }) => theme.color?.secondary ?? "#B5CFDD"};
      &:hover,
      &:active {
        border: 2px dashed
          ${({ theme }) => theme.color?.active.secondary ?? "#A9C7D8"};
      }
    }
  }

  &.button--small {
    font-size: 18px;
    padding: 26px 26px;
    border-radius: 53px;
  }
  &.button--medium {
    font-size: 18px;
    padding: 36px 42px 33px;
    border-radius: 100px;
  }
  &.button--large {
    font-size: 18px;
    padding: 82px 20px;
    width: 360px;
    border-radius: 150px;
  }
`;
