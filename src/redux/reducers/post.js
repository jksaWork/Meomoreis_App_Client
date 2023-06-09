const initPostSettings = {
  posts: [],
  update_post_id: null,
  loading: true,
  number_of_page: null,
  search_term: null,
  current_page: null,
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
      return {
        ...postsSettings,
        loading: false,
        number_of_page: action.payload.number_of_page,
        posts: action.payload.posts,
        current_page: action.payload.current_page,
      };
      break;
    case "LOADING":
      return { ...postsSettings, loading: true };
      break;
    case "SEARCHING_IN_POST":
      return {
        ...postsSettings,
        posts: action.payload.data,
        search_term: action.payload.term,
        loading: false,
      };
      break;
    case "CREATE_POST":
      return {
        ...postsSettings,
        posts: [...posts, action.payload],
        form: {
          title: "",
          message: "",
          tags: "",
          creator: "",
        },
      };
      break;
    case "EDIT_POST":
      const post = posts.find((el) => el._id == action.payload);
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
        form: {
          title: "",
          message: "",
          tags: "",
          creator: "",
        },
        posts: posts.map((el) => {
          if (el._id == action.payload._id) {
            return action.payload;
          }
          return el;
        }),
      };
      break;

    case "DELETE_POST":
      const new_posts = posts.filter((el) => {
        return el._id != action.payload;
      });
      return {
        ...postsSettings,
        posts: new_posts,
      };
      break;
    default:
      return postsSettings;
      break;
  }
};
