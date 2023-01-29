import styled from "styled-components";

export const MenuItemUI = styled.a`
  font-family: "Montserrat", "Verdana", sans-serif;
  font-size: 18px;
  line-height: 1;
  color: ${({ theme }) => theme.color?.text ?? "#3E3B2D"};
  cursor: pointer;
  transition: 200ms ease-out;
  font-variation-settings: "wght" 500;
  text-decoration: none;
  &:hover,
  &:active {
    font-variation-settings: "wght" 600;
  }
  &:active {
    color: #c3630a;
  }

  &.menuitem--active {
    font-variation-settings: "wght" 600;
    color: #c3630a;
  }
`;
