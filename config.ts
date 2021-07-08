const githubToken = process.env.GITHUB_TOKEN;

// if (!githubToken) {
//   throw new Error("Missing environment variable GITHUB_TOKEN.");
// }

export const config = {
  name: "Utkarsh Bhimte",
  subtitle: "building solution over the web",
  birthday: "1995-09-10",
  blogHost: "https://blog.workofutkarsh.com",
  githubUsername: "utkarshbhimte",
  twitterbUsername: "bhimtebhaisaab",
  notionPageContentTableId: "3a50198c0a734812b24f7974b90d4e17",
  notionBlogTableId: "df5bd5bd72134521801e0ba9a0187f20",
  notionAchievementTableId: "32c730d4af034885a406751919174ec5",
  notionProjectTableId: "16f6f889a40b4912a209453eb54a5830",
  githubToken,
};
