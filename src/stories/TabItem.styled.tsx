import styled from "styled-components";

export const TabItemUI = styled.button`
  border-radius: 49px;
  padding: 22px 12px;
  background: transparent;
  transition: 200ms ease-out;
  color: #3e3b2d;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  border: 0;
  outline: 0;
  display: block;
  cursor: pointer;
  max-width: 150px;
  min-width: 136px;
  font-family: "Montserrat", "Verdana", sans-serif;

  &:hover {
    background: rgba(181, 207, 211, 0.2);
  }
  &.tab__item--active {
    background: #b5cfdd;
    color: #fff;
  }
`;
