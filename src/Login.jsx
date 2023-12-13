import React from "react";

export default function Login(){
    return (
        <>
        <div className="w-[548px] h-[617px] relative bg-orange-50">
            <div className="h-[161px] left-[27px] top-[235px] absolute flex-col justify-start items-start gap-[22px] inline-flex">
                <form className="self-stretch h-[84px] bg-white rounded-md border border-gray-300 flex-col justify-start items-start flex">
                    <input id="email" placeholder="Email Adress" className="self-stretch px-[13px] py-[9px] bg-white rounded-tl-md rounded-tr-md shadow justify-start items-center inline-flex" />
                    {/* <label htmlFor="email" className="text-neutral-600 text-base font-normal font-['Inter'] leading-normal">
                        Email address
                    </label> */}
                    <input id="password" placeholder="Password" className="self-stretch px-[13px] py-[9px] bg-white rounded-bl-md rounded-br-md shadow border border-gray-300 justify-start items-center inline-flex" />
                    {/* <label htmlFor="password" className="text-neutral-600 text-base font-normal font-['Inter'] leading-normal">
                        Password
                    </label> */}
                </form>
                <div className="w-[494px] pl-56 pr-[217px] pt-[18px] pb-[17px] bg-orange-400 rounded-md shadow justify-end items-center inline-flex">
                    <div className="text-white text-base font-bold font-['Inter'] leading-tight">
                        Sign in
                    </div>
                </div>
            </div>
            <div className="w-[494.33px] left-[27.12px] top-[443px] absolute text-center">
                <span className="text-neutral-900 text-base font-medium font-['Inter'] leading-normal">
                    Don’t have an account? 
                </span>
                &nbsp;
                <span className="text-orange-400 text-base font-bold font-['Inter'] leading-normal">
                    Create one now
                </span>
            </div>
            <footer className="w-[548.15px] h-[74.75px] pl-[106px] pr-[106.28px] pt-[25.68px] pb-[25.15px] left-0 top-[542px] absolute bg-neutral-800 justify-center items-center inline-flex">
                <div className="w-[335.87px] h-[23.92px] text-center text-neutral-400 text-sm font-medium font-['Inter'] leading-[22.92px]">
                    Ⓒ 2022 #VANLIFE
                </div>
            </footer>
        </div>
        </>
    )
}