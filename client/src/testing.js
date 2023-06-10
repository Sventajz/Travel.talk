import axios from "axios";

async function getPost() {
  try {
    const response = await axios.get("http://localhost:5000/api/posts");
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

console.log("this is testing.js", await getPost());
