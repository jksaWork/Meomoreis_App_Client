import React from "react";

function Pagination({ pages = 3, dispatch, getData, current_page }) {
  return (
    <div className="my-3">
      <ul className="list-style-none flex items-center justify-center p-3 shadow-2xl">
        <li>
          <a className="pointer-events-none relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400">
            Previous
          </a>
        </li>
        {(() => {
          const pageslinks = new Array(pages).fill("1").map((el, index) => (
            <li
              onClick={() => dispatch(getData(index + 1))}
              aria-current={true && "page"}
            >
              <a
                className={`relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
                  current_page == index + 1 && "bg-neutral-100"
                }`}
                href={`#page=${index + 1}`}
              >
                {index + 1}
                {true && (
                  <span class="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                    (current)
                  </span>
                )}
              </a>
            </li>
          ));
          console.log(pageslinks);
          return pageslinks;
        })()}

        <li>
          <a
            className="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
            href="#!"
          >
            Next
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
