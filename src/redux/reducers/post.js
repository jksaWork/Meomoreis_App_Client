const initPostSettings = {
  posts: [],
  update_post_id: null,
  loading: true,
  form: {
    title: "",
    message: "",
    tags: "",
    creator: "",
  },
};

export default (postsSettings = initPostSettings, action) => {
  //  Destuction Posts

  const { posts } = postsSettings;
  switch (action.type) {
    case "FETCH_ALL_POST":
      return { ...postsSettings, loading: false, posts: action.payload };
      break;
    case "CREATE_POST":
      return { ...postsSettings, posts: [...posts, action.payload] };
      break;
    case "EDIT_POST":
      const post = posts.find((el) => el._id == action.payload);
      // console.log(post);
      return {
        ...postsSettings,
        form: {
          title: post.title,
          message: post.message,
          tags: post.tags.toString(),
          creator: post.creator,
        },
        update_post_id: action.payload,
      };
      break;
    case "UPDATE_POST":
      return {
        ...postsSettings,
        posts: posts.map((el) => {
          console.log(action.payload, el);
          if (el._id == action.payload._id) {
            return action.payload;
          }
          return el;
        }),
      };
      break;
    default:
      return postsSettings;
      break;
  }
};
