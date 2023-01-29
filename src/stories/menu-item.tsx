import { MenuItemUI } from "./menu-item.styled";

interface MenuItemProps {
  /**
   * Item is active?
   */
  active?: boolean;
  /**
   * Item contents
   */
  label: string;
  /**
   * Click handler
   */
  onClick?: () => void;
}

export const MenuItem = ({
  active = false,
  label,
  ...props
}: MenuItemProps) => {
  const isActive = active ? "menuitem--active " : "";

  return (
    <MenuItemUI className={isActive} {...props}>
      {label}
    </MenuItemUI>
  );
};
