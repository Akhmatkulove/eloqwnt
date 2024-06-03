import axios from "axios";

const useFormApi = () => {
  const objectToFormData = (obj: any) => {
    const formData = new FormData();
    for (const key in obj) {
      formData.append(key, obj[key]);
    }
    return formData;
  };
  const doPost = async (formData: {}) => {
    const data = objectToFormData(formData);
    axios
      .post(import.meta.env.VITE_SHEETS_URL, data, {
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      })
      .then((response) => {})
      .catch((error) => {
        // Обработка ошибки
      });
  };

  return {
    doPost,
  };
};
export default useFormApi;
