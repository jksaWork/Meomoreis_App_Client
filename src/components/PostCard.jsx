import React, { useState } from "react";
import { FcPlus, FcLike, FcLikePlaceholder } from "react-icons/fc";
import {
  MdDragIndicator,
  MdDeleteSweep,
  MdOutlineEditNote,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { DeletePost, editPost, likePost } from "../redux/actions/post";
import { openModalFun } from "../redux/actions/settings";
import { Link } from "react-router-dom";
function PostCard({ item, user_id }) {
  // const id  = _id;
  const { relativeclass } = useSelector((s) => s.settings);
  // relativeclass();

  const { _id, selectedFiled, title, message, LikeCount } = item;

  const [ShowMenu, setShowMenu] = useState(false);
  const [Likes, setLikes] = useState(item.likes.length);
  const dispatch = useDispatch();
  // Handel Open From

  const [ISLiked, setIslinked] = useState(
    item.likes.find((el) => el == user_id)
  );
  // console.log(relativeclass);
  const SubmitLike = (id) => {
    setIslinked(!ISLiked);
    if (!ISLiked) setLikes(Likes + 1);
    else setLikes(Likes - 1);
    dispatch(likePost(id));
    console.log(id);
  };

  const HandelEditFrom = (id) => {
    dispatch(editPost(id));
    dispatch(openModalFun());
  };

  return (
    <Link to={`show/post/${item._id}`}>
      <div className="w-full mt-6  bg-card p-3 overflow-hidden  rounded-md">
        <div className={`${!relativeclass ? "relative" : ""} group`}>
          <img src={selectedFiled} className="w-[100%] h-[200px] rounded-lg" />
          {!relativeclass && (
            <div className="options group-hover:block hidden absolute top-0 right-0 bg-black bg-opacity-20 w-full h-full ">
              <div className="p-3 float-right">
                <span
                  className="cursor-pointer"
                  onClick={() => setShowMenu((p) => !p)}
                >
                  <MdDragIndicator size="20" />
                </span>
                {ShowMenu && (
                  <div className="w-[150px] transition-all duration-1000 bg-white rounded-md absolute top-8 right-6">
                    <div
                      onClick={() => HandelEditFrom(item._id)}
                      className="text-black p-1 px-2 flex items-center gap-2 hover:bg-[#ddd] cursor-pointer"
                    >
                      <span className="">
                        <MdOutlineEditNote />
                      </span>{" "}
                      Edit{" "}
                    </div>

                    <div
                      onClick={() => dispatch(DeletePost(item._id))}
                      className="text-black p-1 px-2 flex items-center gap-2 hover:bg-[#ddd]  cursor-pointer"
                    >
                      <span>
                        <MdDeleteSweep />
                      </span>
                      <span>Delete</span>{" "}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-between items-center">
          <div className="">
            <h2 className="text-2xl font-cairo mt-3 ">{title}</h2>
            <p className="text-xl font-cairo ">{message}</p>
          </div>
          <div>
            <span
              className="p-2 cursor-pointer"
              onClick={() => SubmitLike(item._id)}
            >
              <div className="flex items-center gap-2 justify-center">
                <span className="text-2xl text-bold">{Likes}</span>

                {ISLiked > 0 ? (
                  <FcLike size={30} />
                ) : (
                  <FcLikePlaceholder size={30} />
                )}
              </div>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
