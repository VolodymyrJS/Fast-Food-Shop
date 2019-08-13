import axios from "axios";

const instance = axios.create({
  baseURL: "https://fast-food-react-app.firebaseio.com/"
});

export default instance;
