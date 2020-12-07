import fetch from "node-fetch";
import { BlockMapType } from "react-notion";
import { HashnodeResponse, Post } from "../types/blog";

export const getBlogTable = async <T>(blogId: string): Promise<T[]> =>
  fetch(`https://notion-api.splitbee.io/v1/table/${blogId}`).then(res =>
    res.json()
  );

export const getBlogList = async (): Promise<{ data: HashnodeResponse }> => {
  const query = `
    query {
      user(username: "utkarshbhimte") {
        publication {
          posts(page: 0) {
            title
            brief
            slug
            cuid
            coverImage
            dateAdded
          }
        }
      }
    }
  `;
  const url = "https://api.hashnode.com/";
  const opts = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
  };

  return fetch(url, opts)
    .then(res => res.json())
}

export const getPageBlocks = async (pageId: string): Promise<BlockMapType> => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/page/${pageId}`
  ).then(res => res.json());
};

export const getPageViews = async (path: string): Promise<number> => {
  const res = await fetch(
    `https://api.splitbee.io/public/timo.sh?path=${path}`
  ).then(res => res.json());
  return res.count || 0;
};

export const getDateStr = (date: Date | string) => {
  return new Date(date).toLocaleString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });
};
