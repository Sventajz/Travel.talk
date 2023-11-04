import axios from "axios";
const url = "http://localhost:5000/api/posts";
class PostService {
  //get post
  static getPosts() {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        console.log("this is res data", data);
        resolve(
          data.map((post) => ({
            ...post,
            createdAt: new Date(post.createdAt),
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  static searchResult(query) {
    console.log("search result func query: ", this.query);
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.get(url);
        const data = result.data;
        console.log("this is search data: ", data[0].userName);
        var srcresult = data.map((post) => {
          if ((post.userName = query)) post.userName;
          else console.log("no user found");
        });
        console.log("this is search result: ", srcresult);
        resolve(srcresult);
      } catch (err) {
        reject(err);
      }
    });
  }
  //create post
  static createPost(userName, text, place) {
    return axios.post(url, {
      userName,
      text,
      place,
    });
  }

  // delete post
  static deletePost(id) {
    return axios.delete(`${url}/${id}`);
  }
}
export default PostService;
