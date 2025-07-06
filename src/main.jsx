import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Error from "./components/Error.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/Navcomponets/About";
import OurVentures from "./components/Navcomponets/OurVentures";
import Career from "./components/Navcomponets/Career";
import OurClients from "./components/Navcomponets/OurClients";
import ContactUs from "./components/Navcomponets/ContactUs";
import HomeSection from "./components/HomeSection";
import Digital from "./components/another/Digital";
// import Political from "./components/another/Political";
import "./App.css"

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/home",
    element: <HomeSection />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/ourventures",
    element: <OurVentures />,
  },
  {
    path: "/career",
    element: <Career />,
  },
  {
    path: "/clients",
    element: <OurClients />,
  },
  {
    path: "/contactus",
    element: <ContactUs />,
  },
  {
    path:"/product&services",
    element:<Digital/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
