import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './Page/Home';
import BudgetPage from './Page/BudgetPage';




function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "budgetpage",element: <BudgetPage /> },


    ],
  },
],
{ basename: "/BudgetBee" }
);


export default function App() {
  return <RouterProvider router={router} />;
}
