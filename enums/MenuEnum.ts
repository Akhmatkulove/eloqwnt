export interface IMenuEnum {
  link: string;
  title: string;
  id?: string;
}
export const MENU_ENUM: IMenuEnum[] = [
  {
    link: "about",
    title: "About",
    id: "01",
  },
  {
    link: "works",
    title: "Works",
    id: "02",
  },
  {
    link: "contacts",
    title: "Contacts",
    id: "03",
  },

  {
    link: "articles",
    title: "Our blog",
    id: "05",
  },
];
