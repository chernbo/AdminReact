import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import menus from "./menus";

// 路由渲染组件
const RouterView = () => {
  const renderRoute = (menus) => {
    return menus.map((item) => {
      if (item.children) {
        return renderRoute(item.children);
      } else {
        return item.path === "/" ? null : (
          <Route
            path={item.path}
            key={item.path}
            exact
            component={item.component}
          />
        );
      }
    });
  };
  console.log(123);
  return (
    <Suspense>
      <Switch>{renderRoute(menus)}</Switch>
    </Suspense>
  );
};

export default RouterView;
