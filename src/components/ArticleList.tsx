import React from "react";
import Link from "next/link";
import Image from "next/image";
import Pagination from "./Pagination";
import { Article } from "../types/article";
type Props = {
  articles: Article[];
  currentPage: number;
  totalPages: number;
};
export default function ArticleList({
  articles,
  totalPages,
  currentPage,
}: Props) {
  console.log(articles, "article");
  return (
    <div className="max-w-5xl mx-auto">
      <ul>
        {articles.map((article) => (
          <li key={article.article_id} className="py-4">
            <article className="px-4">
              <div className=" md:flex md:flex-row">
                <div className="md:shrink-0">
                  <img
                    className="md:w-72"
                    src={article.article_info.cover_image}
                    alt={article.article_info.title}
                  />
                </div>
                <div className="pl-8">
                  <div>
                    <h3 className="text-2xl font-bold leading-8 tracking-tight">
                      <Link
                        className="text-gray-900 dark:text-gray-100"
                        href={`/blog/${article.article_id}`}
                      >
                        <p>{article.article_info.title}</p>
                      </Link>
                    </h3>
                    <div className="mt-3 flex flex-wrap">
                      {article.tags.map((tag) => (
                        <Link
                          key={tag.tag_id}
                          className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          href={`/tags/${tag.tag_name}`}
                        >
                          {tag.tag_name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                    {article.article_info.brief_content}
                  </div>
                  <time className="text-xs text-gray-400">
                    {new Date(
                      +article.article_info.ctime * 1000
                    ).toLocaleDateString("zh-CN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
              </div>

              {/* <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  <span className="sr-only">Published on</span>
                 
                </dd> */}
            </article>
          </li>
        ))}
      </ul>
      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </div>
  );
}