export interface IExpertise {
  title: string;
  text: string[];
  image: string;
  classImg: string;
}

export const EXPERTISE_ENUM: IExpertise[] = [
  {
    title: "UX/UI Design",
    text: [
      "Storytelling Through Design",
      "Experimental Interfaces",
      "Emotional Design",
      "Artistic Expression",
      "Collaborative Creativity",
      "Sensory Feedback",
      "Personalized Experiences",
    ],
    image: "/example.png",
    classImg: "expertise-center-img",
  },
  {
    title: "Branding",
    text: [
      "Identity Establishment",
      "Brand Recognition",
      "Emotional Connection",
      "Market Differentiation",
      "Consistent Messaging",
      "Increased Perceived Value",
    ],
    image: "/example.png",
    classImg: "expertise-right-img",
  },
  {
    title: "Web Design",
    text: [
      "User Experience (UX)",
      "Visual Appeal",
      "Mobile Responsiveness",
      "Page Speed and Performance",
      "SEO",
      "Brand Consistency",
    ],
    image: "/example.png",
    classImg: "expertise-center-img",
  },
  {
    title: "Motion Design",
    text: [
      "Customized Motion Graphics",
      "Immersive 3D Animations",
      "Short Brand Films",
      "Technical Expertise",
      "3d Packaging Design",
    ],
    image: "/example.png",
    classImg: "expertise-right-img",
  },
];
