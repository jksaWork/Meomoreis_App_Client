import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPost } from "../redux/actions/post";
import PostCard from "./PostCard";
import LoadingPost from "./LoadingPost";
import Posts from "./Posts";

function ShowPost() {
  const { posts, post } = useSelector((e) => e.posts);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { UserData } = useSelector((s) => s.users);
  const user_id = UserData ? UserData[0] : "";
  const [ShowMenu, setShowMenu] = useState(false);
  useEffect(() => {
    dispatch(getPost(id));
  });
  const relativeclass = true;
  if (!post) return <LoadingPost />;
  const item = post.data;
  console.log(item);
  return (
    <div className="">
      <div className="w-full mt-6 flex-row flex  bg-card p-3 overflow-hidden  rounded-md">
        <div className="flex justify-between   flex-1 w-2/3 ">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-cairo mt-3 ">{item.title}</h2>
              <p className="text-xl font-cairo ">{item.message}</p>
              <p className="text-xl font-cairo ">author: {item.creator}</p>
              {/* <h2 className="text-2xl font-cairo mt-3 ">{item.title}</h2> */}
              <p className="text-xl font-cairo ">
                like count : {item.likes.length}
              </p>
              <p className="text-sm font-cairo mt-3">
                {item.tags.map((el) => (
                  <span className="bg-IndigoColor text-white rounded-md px-2">
                    {el}
                  </span>
                ))}
              </p>
            </div>
            <p className="text-md font-cairo ">{item.createdAt}</p>
          </div>
        </div>
        <div className={`${!relativeclass ? "relative" : ""} w-1/3 group`}>
          <img
            src={item.selectedFiled}
            className="w-[100%] h-[200px] rounded-lg"
          />
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
      </div>
      <div className=" mt-3">
        <span className="text-2xl mt-3">See Too :</span>
        <Posts />
      </div>
    </div>
  );
}

export default ShowPost;
