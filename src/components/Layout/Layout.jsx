import { Outlet } from "react-router-dom";
import { AppBar } from "components/AppBar/AppBar";
import { Suspense } from "react";
import css from './Layout.module.css';

export const Layout = () => {
    return (
        <div className={css.container}>
          <AppBar/>
          <Suspense fallback={null}>
            <Outlet/>
          </Suspense>
        </div>
    )
}
