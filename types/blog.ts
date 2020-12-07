export interface HashnodeResponse {
  user: User;
}

interface User {
  publication: Publication;
}

interface Publication {
  posts: Post[];
}

export interface Post {
  title: string;
  brief: string;
  slug: string;
  dateAdded: string;
  coverImage: string;
  cuid: string;
}