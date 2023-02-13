import axios from "axios";
export const deleteTask = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/api/v1/tasks/${id}`);
  } catch (error) {
    console.log(error);
  }
};
