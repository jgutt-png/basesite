"use client";
import React from "react";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import { Button } from "./button";
export const CTA = () => {
  return (
    <section className="py-20 pb-0 w-full overflow-hidden relative z-30 mb-[-8rem]">
      <div className="bg-transparent">
        <div
          className="mx-auto w-full relative z-20 sm:max-w-[40rem]  md:max-w-[48rem] lg:max-w-[64rem] xl:max-w-[80rem] sm:rounded-2xl"
          style={{
            backgroundImage: "url(https://base-ai-portal.s3.us-east-1.amazonaws.com/1d336166-4e8a-4b06-8abd-d7f1f4429dba.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative -mx-6   sm:mx-0 sm:rounded-2xl overflow-hidden px-6  md:px-8 ">

            <div className="relative px-2 pb-14 pt-20 sm:px-4 sm:pb-20 lg:px-8">
              <h2 className="  text-center text-balance mx-auto text-3xl md:text-5xl font-semibold tracking-[-0.015em] text-white">
                Ready to signup and join the waitlist?
              </h2>
              <p className="mt-4 max-w-[26rem] text-center mx-auto text-lg text-neutral-200">
                <Balancer>
                  Get on the waitlist and be the first to know<br />when BΛSE is available.
                </Balancer>
              </p>

              <div className="relative z-10 mx-auto flex justify-center mt-6">
                <Link
                  href="/contact"
                  className="flex flex-col items-center justify-center w-[180px] h-[56px] bg-[#f95738] hover:bg-[#f95738]/90 border-[1.25px] border-[#f95738] rounded-[16px] px-6 py-2 transition-colors duration-200 cursor-pointer"
                >
                  <h2 className="text-[18px] font-bold text-[#f7f9fd] text-center tracking-[-0.4px]">
                    Get Started
                  </h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
