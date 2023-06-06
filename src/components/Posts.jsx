import React, { useState } from "react";
import { AppDenied, LoadingPost, PostCard } from "./index";
import { cards } from "../constants";
import { useSelector } from "react-redux";
import noFound from "./../assets/no_found.svg";
function Posts() {
  const posts = useSelector((s) => s.posts);
  const [Loading, setLoading] = useState(false);
  if (posts.length < 1)
    return <AppDenied img={noFound} mes="No Memories Right Now !!" />;

  return posts ? (
    <div>
      {cards.map((el) => (
        <LoadingPost key={el.title} />
      ))}
    </div>
  ) : (
    <div className="px-3">
      {cards.map((el) => (
        <PostCard key={el.title} item={el} />
      ))}
    </div>
  );
}

export default Posts;
