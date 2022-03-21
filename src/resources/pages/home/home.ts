import { IBlogPost } from "../../elements/blog-card/blog-card";
import { autoinject } from "aurelia-framework";
import { PostService } from "common/services/post-service";

@autoinject
export class Home {
  posts: IBlogPost[];

  constructor(private postService: PostService) {
    this.getPosts();
  }

  async getPosts() {
    const response = await this.postService.allPostPreviews();
    this.posts = response.posts;
  }
}
