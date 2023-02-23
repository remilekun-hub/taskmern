import axios from "axios";

export const getTasks = async () => {
  try {
    const { data } = await axios.get("http://localhost:5000/api/v1/tasks");
    return data;
  } catch (error) {
    console.log(error);
  }
};
