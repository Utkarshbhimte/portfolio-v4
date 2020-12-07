export type ProjectType = "design" | "code" | "video";

export interface Project {
  id: string;
  tagline: string;
  title: string;
  app_link: string;
  ph_link?: string;
  ph_post_id?: string;

  // types: ProjectType[];
  // images: {
  //   name: string;
  //   url: string;
  // }[];
  tech_stack: string[];
  slug: string;
  date: number;
  published: boolean;
  logo: NotionFile[];
  banner: NotionFile[];
}



interface NotionFile {
  name: string;
  url: string;
  rawUrl: string;
}