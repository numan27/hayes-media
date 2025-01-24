import { routeConstant } from "./constants";

const commonRoutes: any = [
  {
    path: routeConstant.home.path,
    title: routeConstant.home.title,
  },
];

const publicRoutes: any = [...commonRoutes];

const privateRoutes: any = [
  ...commonRoutes,
  // {
  //   path: routeConstant.createIsoListing.path,
  //   title: routeConstant.createIsoListing.title,
  // },
  // {
  //   path: routeConstant.dashboard.path,
  //   title: routeConstant.dashboard.title,
  // },
];

export { privateRoutes, publicRoutes };
