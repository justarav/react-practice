import { useState } from "react";
import "./App.css";
import Home from "./Home";
import { 
  BrowserRouter, 
  Routes, 
  Route, 
  Link, 
  NavLink, 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider,
  redirect,
  useNavigate } from "react-router-dom";
import About from "./About";
import Vans from "./Vans";
import VanInfo from "./VanInfo";
import NotFound from "./NotFound";
import Login, {loader as loginLoader, action as loginAction} from "./Login";
import HostDashboard from "./HostDashboard";
import HostVans from "./HostVans";
import HostReviews from "./HostReviews";
import HostIncome from "./HostIncome";
import HostNav from "./HostNav";
import HostVan from "./HostVan";
import HostVanDetails from "./HostVanDetails";
import HostVanPhotos from "./HostVanPhotos";
import HostVanPricing from "./HostVanPricing";
import Layout from "./Layout";
import Error from "./Error";
import { auth, checkAuth } from "./Utility";

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<Layout />} >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={ <Vans /> } errorElement={<Error />} />
      <Route path="vans/:id" element={<VanInfo />} errorElement={<Error />} />
      <Route path="*" element={<NotFound />} />
      <Route path="login" element={<Login />} loader={loginLoader} action={loginAction}/>
      <Route path="host" element={<HostNav />} errorElement={<Error />} loader={async ({ request }) => await checkAuth(request)}>
        <Route index element={<HostDashboard />} loader={async ({ request }) => await checkAuth(request)}/>
        <Route path="income" element={<HostIncome />} loader={async ({ request }) => await checkAuth(request)}/>
        <Route path="vans" element={<HostVans />} loader={async ({ request }) => await checkAuth(request)}/>
        <Route path="vans/:id" element={<HostVan />} loader={async ({ request }) => await checkAuth(request)}> 
          <Route index element={<HostVanDetails />} loader={async ({ request }) => await checkAuth(request)}/>
          <Route path="photos" element={<HostVanPhotos />} loader={async ({ request }) => await checkAuth(request)}/>
          <Route path="pricing" element={<HostVanPricing />} loader={async ({ request }) => await checkAuth(request)}/>
        </Route>
        <Route path="reviews" element={<HostReviews />} loader={async ({ request }) => await checkAuth(request)}/>
      </Route>
    </Route>
  </>
));

function App() {
  return (
    <>
      <RouterProvider router = {router} />
    </>
  );
}

export default App;
