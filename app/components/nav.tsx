import { SetStateAction } from "react";
import { Dispatch } from "react";
import { Page } from "../page";

type NavProps = {
  setPage: Dispatch<SetStateAction<Page>>;
  page: string;
};
export default function Nav({ page, setPage }: NavProps) {
  return (
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
  );
}
