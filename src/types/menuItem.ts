import { SubMenuItem } from "./subMenuItem";
export interface MenuItem {
  label: string;
  href: string;
  submenu?: SubMenuItem[];
}