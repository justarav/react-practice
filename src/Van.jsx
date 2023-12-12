import React from "react";

export default function Van(props) {
    return (
        <>
            <div className="w-[492.34px] h-[41.86px]">
                <img className="w-[229.23px] h-[229.23px] rounded-[5px]" src="/images/modest-explorer.png" />
                <div className="flex">
                    <div className="text-neutral-900 text-xl font-semibold font-['Inter'] leading-loose">
                        Modest Explorer
                    </div>
                </div>
                <div className="w-[85.71px] h-[33.89px] top-0 relative">
                    <div className="Rectangle140 w-[85.71px] h-[33.89px] left-0 top-0 absolute bg-red-400 rounded-[5px]" />
                    <div className="Simple w-[58.80px] h-[28.90px] left-[13.95px] top-[1.99px] absolute text-center text-orange-100 text-base font-semibold font-['Inter'] leading-loose">
                        {props.type}
                    </div>
                </div>
            </div>
        </>
    )
}