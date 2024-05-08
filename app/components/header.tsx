import React, { Dispatch, SetStateAction } from "react";
import { Page } from "../page";

type HeaderProps = {
  setPage: Dispatch<SetStateAction<Page>>;
  page: string;
};

export default function Header({ setPage, page }: HeaderProps) {
  return (
    <header className="w-3/4 mx-auto py-8 flex justify-between">
      <div className="w-14 h-14 rounded-full bg-white shadow-lg-blur"></div>
      <div className="bg-background p-3 shadow-lg-blur rounded-full flex justify-around items-center">
        <a
          className={`font-medium cursor-pointer px-6 py-3 rounded-full  ${
            page === Page.work
              ? "bg-white text-gray-800 font-semibold"
              : "text-gray-500"
          }`}
          onClick={() => setPage(Page.work)}
        >
          Work
        </a>
        <a
          className={`font-medium cursor-pointer  px-6 py-3 rounded-full ${
            page === "blog"
              ? "text-gray-800 font-semibold bg-white"
              : "text-gray-500"
          }`}
          onClick={() => setPage(Page.blog)}
        >
          Blog
        </a>
      </div>
      <div className="w-14 h-14 rounded-full bg-white shadow-lg-blur"></div>
    </header>
  );
}
