import { ReactNode } from "react";
import { TabItemUI } from "./TabItem.styled";

interface TabItemProps {
  /**
   * Item is active?
   */
  active?: boolean;

  /**
   * Click handler
   */
  onClick?: () => void;
}

export const TabItem = ({ active = false, ...props }: TabItemProps) => {
  const isActive = active ? "tab__item--active " : "";

  return <TabItemUI className={isActive} {...props}></TabItemUI>;
};
