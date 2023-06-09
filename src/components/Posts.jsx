import React, { useState } from "react";
import { AppDenied, LoadingPost, PostCard } from "./index";
import { cards } from "../constants";
import { useSelector } from "react-redux";
import noFound from "./../assets/no_found.svg";
import { FcPlus, FcLike } from "react-icons/fc";

function Posts() {
  const { posts, loading, search_term } = useSelector((s) => s.posts);
  const { UserData } = useSelector((s) => s.users);
  const user_id = UserData ? UserData[0] : "";
  if (loading == false && posts.length == 0) {
    if (search_term == null)
      return <AppDenied img={noFound} mes="No Memories Right Now !!" />;
    else
      return <AppDenied img={noFound} mes="No Result For this Search Now !!" />;
  }

  return loading ? (
    <div>
      {cards.map((el, index) => (
        <LoadingPost key={`${el.title} ${index}`} />
      ))}
    </div>
  ) : (
    <div className="px-3">
      {search_term && (
        <div className="text-xl mt-3">
          {" "}
          Search Result For{" "}
          <span className="text-IndigoColor"> {search_term}</span>{" "}
        </div>
      )}

      {posts.map((el, index) => (
        <PostCard key={`${el._id} ${index}`} item={el} user_id={user_id} />
      ))}
    </div>
  );
}

export default Posts;
