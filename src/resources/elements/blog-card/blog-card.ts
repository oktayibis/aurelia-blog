import { bindable } from "aurelia-framework";
export class BlogCard {
  @bindable blogPost: IBlogPost;
}

export interface IBlogPost {
  title: string;
  body: string;
  slug: string;
  author: string;
  tags: string[];
  createdAt: Date;
  shortDescription?: string;
  image?: string;
  id?: number | string;
}
