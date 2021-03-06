import { Post } from "../types/blog";

const generateRssItem = (post: Post): string => `
<item>
  <guid>https://workwithutkarsh.com/blog/${post.slug}</guid>
  <title>${post.title}</title>
  <link>https://workwithutkarsh.com/blog/${post.slug}</link>
  <description>${post.brief}</description>
  <pubDate>${new Date(post.dateAdded).toUTCString()}</pubDate>
</item>
`;

export const generateRss = (posts: Post[]): string => `
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Timo Lins – Blog</title>
  <link>https://workwithutkarsh.com/blog</link>
  <description>Writing about coding, design and things I like</description>
  <language>en</language>
  <lastBuildDate>${new Date(posts[0].dateAdded).toUTCString()}</lastBuildDate>
  <atom:link href="https://workwithutkarsh.com/api/blog.xml" rel="self" type="application/rss+xml"/>
  ${posts.map(generateRssItem).join("")}
</channel>
</rss>
`;
