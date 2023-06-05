import React, { useState } from "react";
import { LoadingPost, PostCard } from "./index";
import { cards } from "../constants";
function Posts() {
  const [Loading, setLoading] = useState(false);

  return Loading ? (
    <div>
      {cards.map((el) => (
        <LoadingPost key={el.title} />
      ))}
    </div>
  ) : (
    <div class="px-3">
      {cards.map((el) => (
        <PostCard key={el.title} item={el} />
      ))}
    </div>
  );
}

export default Posts;
