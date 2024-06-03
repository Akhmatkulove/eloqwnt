import { databases } from "../utils/appwrite";
import type { IWork } from "../interface/IWork";
const useWorkApi = () => {
  const getWorkList = async () => {
    let worksList;
    try {
      worksList = await databases.listDocuments(
        import.meta.env.VITE_DATABASE_ID,
        import.meta.env.VITE_WORKS_ID,
      );
    } catch (err) {
      worksList = null;
    }
    if (worksList) {
      return worksList.documents as IWork[];
    }
  };
  const getWorkItem = async () => {
    let workItem;
    try {
      workItem = await databases.listDocuments(
        import.meta.env.VITE_DATABASE_ID,
        import.meta.env.VITE_WORK_ITEM_ID,
      );
    } catch (err) {
      workItem = null;
    }
    if (workItem) {
      return workItem.documents as unknown as IWork;
    }
  };
  return {
    getWorkList,
    getWorkItem,
  };
};
export default useWorkApi;
