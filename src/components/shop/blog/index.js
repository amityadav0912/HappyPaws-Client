import React, { Fragment, createContext, useReducer } from "react";
import Layout from "../layout";

import { Navber , footer} from "../partials";

const BlogComponent = (props) => {
  return (
    <div className="flex flex-col items-center justify-center my-32">
      <span>
        <svg
          className="w-32 h-32 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
      <span className="text-center text-gray-700 text-4xl font-bold tracking-widest">
        NO Blogs Yet
      </span>
    </div>
  );
};

const Blog = (props) => {
  return (
    <Fragment>
        {/* <Navber /> */}
        <Layout children={<BlogComponent />} />
        {/* <footer/> */}
    </Fragment>
  );
};

export default Blog;
