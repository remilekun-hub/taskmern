import axios from "axios";

export const getTask = async (id) => {
  try {
    const { data } = await axios.get(
      `http://localhost:5000/api/v1/tasks/${id}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
