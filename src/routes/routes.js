import { Home, Posts, NewPost, PostDetail, Calculator } from "../pages";
import { PostsLayout, NewPostLayout, PostDetailLayout } from "../layouts";
export const publicRoutes = [
  { path: "/", component: Home },
  {
    path: "/posts",
    component: Posts,
    layout: PostsLayout,
  },
  {
    path: "/new-post",
    component: NewPost,
    layout: NewPostLayout,
  },
  {
    path: "/posts/:id",
    component: PostDetail,
    layout: PostDetailLayout,
  },
  {
    path: "/calculator",
    component: Calculator,
    layout: null,
  },
];
