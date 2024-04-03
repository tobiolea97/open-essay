import { Outlet, Link, useLoaderData, Form, redirect, NavLink, useNavigation, useSubmit,} from "react-router-dom";
import HeaderComponent from "../components/Header";
import "../styles/styles.css"

export default function Root() {
  return (
    <div className="app">
      <HeaderComponent />
      <Outlet />
    </div>
  );
}