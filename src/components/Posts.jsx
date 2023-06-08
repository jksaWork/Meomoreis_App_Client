import React, { useState } from "react";
import { AppDenied, LoadingPost, PostCard } from "./index";
import { cards } from "../constants";
import { useSelector } from "react-redux";
import noFound from "./../assets/no_found.svg";
import { FcPlus, FcLike } from "react-icons/fc";

function Posts() {
  const { posts, loading } = useSelector((s) => s.posts);
  if (loading == false && posts.length == 0)
    return <AppDenied img={noFound} mes="No Memories Right Now !!" />;

  return loading ? (
    <div>
      {cards.map((el, index) => (
        <LoadingPost key={`${el.title} ${index}`} />
      ))}
    </div>
  ) : (
    <div className="px-3">
      {posts.map((el, index) => (
        <PostCard key={`${el._id} ${index}`} item={el} />
      ))}
    </div>
  );
}

export default Posts;
