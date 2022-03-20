export class BlogCard {
  blogPost: IBlogCard;

  constructor() {
    this.blogPost = {
      tags: ["aurelia", "typescript"],
      title: "Blog Title",
      shortDescription: "Blog Subtitle",
      date: "01/01/2019",
      image: "https://via.placeholder.com/300x200",
      author: "Author Name",
      id: "1",
      blogText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    };
  }
}

export interface IBlogCard {
  blogText: string;
  id: number | string;
  title: string;
  date: string;
  shortDescription: string;
  image: string;
  author: string;
  tags: string[];
}
