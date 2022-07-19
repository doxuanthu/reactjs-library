import Home from "../pages/Home/Home";
import JazzMovies, {
  TvShow,
  Trailer,
  TvShowTrailer,
} from "../pages/JazzMovies";
import LandingPage from "../pages/LandingPage";
import Ecommerce from "../pages/Ecommerce";
import { JazzMoviesLayout } from "../layouts";
export const publicRoutes = [
  { path: "/", component: Home },
  {
    path: "/tv-show",
    component: TvShow,
    layout: JazzMoviesLayout,
  },
  { path: "/jazzmovies", component: JazzMovies, layout: JazzMoviesLayout },
  {
    path: "/trailer/:id",
    component: Trailer,
    layout: JazzMoviesLayout,
  },
  {
    path: "/tvshow/:id",
    component: TvShowTrailer,
    layout: JazzMoviesLayout,
  },
  {
    path: "/landing-page",
    component: LandingPage,
  },
  {
    path: "/ecommerce",
    component: Ecommerce,
  },
];
