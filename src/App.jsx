import { useState } from "react";
import "./App.css";
import Home from "./Home";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import About from "./About";
import Vans from "./Vans";
import VanInfo from "./VanInfo";
import NotFound from "./NotFound";
import Login from "./Login";
import HostDashboard from "./HostDashboard";
import HostVans from "./HostVans";
import HostReviews from "./HostReviews";
import HostIncome from "./HostIncome";
import HostNav from "./HostNav";

function App() {
  return (
    <>
      <BrowserRouter>
      <div className="w-[548.15px] relative z-50 bg-orange-50">
        <header className="pl-[26px] pr-[25.82px] pt-9 pb-[34.62px] left-[0.02px] top-0 absolute bg-orange-50 justify-center items-center gap-[235.21px] inline-flex">
            <Link to='/' className="w-[144.51px] text-black text-[25.35px] font-black font-['Inter'] leading-10">
                #VANLIFE
            </Link>
            <div className="grow shrink basis-0 self-stretch relative">
              <Link to='/host' className="w-[51.83px] h-[22.92px] left-[-64.78px] top-0 absolute text-right text-neutral-900 text-base font-semibold font-['Inter'] leading-[22.92px]">
                Host
              </Link>
              <Link to='/about' className="w-[51.83px] h-[22.92px] left-0 top-0 absolute text-right text-neutral-900 text-base font-semibold font-['Inter'] leading-[22.92px]">
                  About
              </Link>
              <Link to='/vans' className="w-[51.83px] h-[22.92px] left-[64.78px] top-0 absolute text-right text-neutral-900 text-base font-semibold font-['Inter'] leading-[22.92px]">
                  Vans
              </Link>
            </div>
        </header>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={ <Vans /> } />
        <Route path="/vans/:id" element={<VanInfo />} />
        <Route path="/vans/tier/:tier" element={<Vans />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route element={<HostNav />}>
          <Route path="/host" element={<HostDashboard />} />
          <Route path="/host/income" element={<HostIncome />} />
          <Route path="/host/vans" element={<HostVans />} />
          <Route path="/host/reviews" element={<HostReviews />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
