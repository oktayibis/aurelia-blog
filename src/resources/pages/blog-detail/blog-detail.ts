import { autoinject } from "aurelia-framework";
import { IBlogPost } from "../../elements/blog-card/blog-card";
import { PostService } from "common/services/post-service";

@autoinject
export class BlogDetail {
  blogPost: IBlogPost;

  constructor(private postService: PostService) {}

  async activate(params: { slug: string }) {
    this.blogPost = await this.postService.find(params.slug);
  }
}
