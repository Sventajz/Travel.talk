import axios from "axios";
const url = "http://localhost:5000/api/";
class PostService {
  //get post
  static getPosts() {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        console.log(data[0].post._id)
        resolve(
          data.map((item) => ({
            text: item.post.text,
            userName: item.userName,
            place: item.post.place,
            _id: item.post._id,
            createdAt: new Date(item.post.createdAt)
          }))
        );
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
  static deletePost(postID) {
    console.log(postID)
    return axios.delete(`${url}/${postID}`);
  }
}
export default PostService;
