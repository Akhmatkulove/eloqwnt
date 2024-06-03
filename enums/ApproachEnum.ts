export interface IApproach {
  title: string;
  text: string;
  id?: string;
}

export const APPROACH_ENUM: IApproach[] = [
  {
    title: "Deep Dive",
    text: "In-depth exploration of business or product problems.",
    id: "01",
  },
  {
    title: "Analysis & Comprehension",
    text: "Understanding the data and information gathered",
    id: "03",
  },
  {
    title: "Proposing Solutions",
    text: "Coming up with potential solutions to the identified problems",
    id: "03",
  },
  {
    title: "Transferring solutions into design",
    text: "Developing a plan to implement the proposed solutions",
    id: "04",
  },
  {
    title: "Hypothesis Testing",
    text: "Evaluating the effectiveness of the proposed solutions through testing and experimentation",
    id: "05",
  },
];
