export default (posts = [], action) => {
  console.log(posts, action);
  switch (action.type) {
    case "FETCH_ALL_POST":
      return action.payload;
      break;
    case "CREATE_POST":
      console.log("done");
      return [...posts, action.payload];
    default:
      return posts;
      break;
  }
};
