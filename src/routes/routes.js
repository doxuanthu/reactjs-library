import {
  Home,
  Shop,
  Admin,
  Travel,
  Consulting,
  TravelGuide,
  HotelInfo,
  StopWatch,
} from "../pages";
import { ShopLayout } from "../layouts";

export const publicRoutes = [
  { path: "/", component: Home, layout: null },
  { path: "/shop/admin", component: Admin, layout: ShopLayout },
  { path: "/shop", component: Shop, layout: ShopLayout },
  { path: "travel/consulting", component: Consulting, layout: null },
  { path: "/travel/guide", component: TravelGuide, layout: null },
  { path: "/travel/hotel-info", component: HotelInfo, layout: null },
  { path: "/travel", component: Travel, layout: null },
  { path: "/stopwatch", component: StopWatch, layout: null },
];
