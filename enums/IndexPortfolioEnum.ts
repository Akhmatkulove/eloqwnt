export interface IIndexPortfolio {
  title: string;
  desc: string;
  year: string;
  video?: string;
  class?: string;
  textClass: string;
  imgClass: string;
  id: string;
}
export const INDEX_PORTFOLIO_ENUM: IIndexPortfolio[] = [
  {
    title: "Web Design",
    desc: "Lorem ipsum dolor dicta dolores eveniet id itaque iure magni molestiae molestias numquam provident quae quam quis ut vero voluptate vam ",
    year: "2024",
    class: "right",
    textClass: "index-content-text-left",
    imgClass: "image-right",
    id: "01",
  },
  {
    title: "UX/UI Design",
    desc: "Lorem ipsum dolor dicta dolores eveniet id itaque iure magni molestiae molestias numquam provident quae quam quis ut vero voluptate vam ",
    year: "2024",
    class: "left",
    textClass: "index-content-text-right",
    imgClass: "image-left",

    id: "02",
  },
  {
    title: "Branding",
    desc: "Lorem ipsum dolor dicta dolores eveniet id itaque iure magni molestiae molestias numquam provident quae quam quis ut vero voluptate vam ",
    year: "2024",
    class: "right",
    textClass: "index-content-text-left",
    imgClass: "image-right",

    id: "03",
  },
  {
    title: "UX/UI Design",
    desc: "Lorem ipsum dolor dicta dolores eveniet id itaque iure magni molestiae molestias numquam provident quae quam quis ut vero voluptate vam ",
    year: "2024",
    class: "left",
    textClass: "index-content-text-right",
    imgClass: "image-left",
    id: "04",
  },
];
