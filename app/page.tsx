"use client";
import Header from "./components/header";
import Work from "./partials/work";
import Blog from "./partials/blog";
import { useState } from "react";

export enum Page {
  work = "work",
  blog = "blog",
}

export default function Home() {
  const [page, setPage] = useState<Page>(Page.work);
  return (
    <>
      <Header page={page} setPage={setPage} />
      <main>
        {page === "work" && <Work />}
        {page === "blog" && <Blog />}
      </main>
    </>
  );
}
