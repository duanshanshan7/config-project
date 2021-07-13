import Loadable from "react-loadable";
import Loading from "components/Loading";

const lazyComp = (loader: any) =>
  Loadable({
    loader,
    loading: Loading,
  });

interface routeItem {
  path: string;
  name: string;
  component: any;
}

export const loginComp = lazyComp(() => import("views/Login"));

const routeConfig: routeItem[] = [
  {
    path: "/home",
    name: "首页",
    component: lazyComp(() => import("views/Home")),
  },
  {
    path: "/about",
    name: "关于",
    component: lazyComp(() => import("views/About")),
  },
  {
    path: "/404",
    name: "404",
    component: lazyComp(() => import("views/404")),
  },
];
export default routeConfig;
