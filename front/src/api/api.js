const API_BASE_URL = "http://localhost:3001";

const fetchData = async () => {
  try {
    const response = await fetch(API_BASE_URL + "/api/data");
    console.log("response", response.data);
    const jsonData = await response.json();
    console.log("jsonData", jsonData.data.result);
    return jsonData.data.result;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const deleteById = async (id) => {
  try {
    await fetch(API_BASE_URL + "/api/data/" + id, {
      method: "DELETE",
    });
  } catch (error) {
    console.error("Error deleting data:", error);
  }
};

export default fetchData;
