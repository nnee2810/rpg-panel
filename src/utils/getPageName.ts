import { menu } from "configs/constants"
import { MenuItem } from "interfaces"

export function getPageName(path: string) {
  const pages: MenuItem[] = []
  menu.forEach((item) => item.children && pages.push(...item.children))
  return pages.find((item) => item.path === path)?.name
}
