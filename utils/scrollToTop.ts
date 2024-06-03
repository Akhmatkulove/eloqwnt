export default (elementId: string) => {
  let scrollElement = document.getElementById(elementId);
  if (scrollElement) scrollElement.scrollIntoView();
};
