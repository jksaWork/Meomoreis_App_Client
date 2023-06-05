import React from "react";

function PostCard({ item: { img, title, description } }) {
  return (
    <div class="w-full mt-6  bg-[#64748b] p-3  rounded-lg">
      <img src={img} className="w-[100%] h-[200px] rounded-lg" />
      <h2 className="text-2xl font-cairo mt-3 ">{title}</h2>
      <p className="text-xl">{description}</p>
    </div>
  );
}

export default PostCard;
