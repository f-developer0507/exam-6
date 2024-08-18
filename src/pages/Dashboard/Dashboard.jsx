import React from "react";

import icon from "../../assets/images/icons/icon-notification.svg";
import arrowDown from "../../assets/images/icons/arrow-down.svg";
import support from "../../assets/images/icons/support.svg";
import img01 from "../../assets/images/dashboard/img-01.svg";
import img02 from "../../assets/images/dashboard/img-02.svg";
import img03 from "../../assets/images/dashboard/img-03.svg";

const Dashboard = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col">
      <header className="site-header w-full h-[95px] flex items-center pt-[34px] pb-[15px] justify-center bg-[#FCFAFA]">
        <div className="w-[947px] flex justify-between pl-[23px]">
          <div className="max-w-[536px]">
            <div className="text-[16px] text-[#424242]">
              <span className="font-semibold">Learn how to launch faster</span>
              <br /> watch our webinar for tips from our experts and get a
              limited time offer.
            </div>
          </div>
          <div className="flex items-center gap-x-[48px]">
            <span>
              <img src={icon} alt="icon-notification" />
            </span>
            <button
              type="submit"
              className="pt-[11px] pb-[11px] w-[120px] h-[40px] flex items-center justify-center bg-[#509CDB] text-[#fff] text-[14px] font-semibold rounded-[8px]"
            >
              Log out
            </button>
          </div>
        </div>
      </header>
      <div className="w-full h-full flex justify-center bg-white pt-[53px] pb-[79px]">
        <div className="w-[952px]">
          <div className="">
            <div className="text-[#4F4F4F] font-semibold">
              <h2 className="mb-[24px] text-[36px] leading-[45px]">
                Welcome to your dashboard, Udemy school
              </h2>
              <p className="ml-[105px] text-[24px] leading-[30px]">
                Uyo/school/@teachable.com
              </p>
            </div>
          </div>
          <div className="w-full relative">
            <ul className="w-[758px] pt-[68px] pb-[62px] pr-[98px] pl-[90px] text-[#4F4F4F]">
              <li className="flex items-start mb-[51px] gap-x-[19px]">
                <img src={img01} alt="img01" />
                <div>
                  <h3 className="mb-[16px] block text-[24px] leading-[30px] font-medium">
                    Add other admins
                  </h3>
                  <p className="text-[14px] leading-[133%]">
                    Create rich course content and coaching products for your
                    students. When you give them a pricing plan, they’ll appear
                    on your site!
                  </p>
                </div>
              </li>
              <li className="flex items-start mb-[34px] gap-x-[19px]">
                <img src={img02} alt="img02" />
                <div>
                  <h3 className="mb-[16px] block text-[24px] leading-[30px] font-medium">
                    Add classes
                  </h3>
                  <p className="text-[14px] leading-[133%]">
                    Create rich course content and coaching products for your
                    students. When you give them a pricing plan, they’ll appear
                    on your site!
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-x-[19px]">
                <img src={img03} alt="img03" />
                <div>
                  <h3 className="mb-[16px] block text-[24px] leading-[30px] font-medium">
                    Add students
                  </h3>
                  <p className="text-[14px] leading-[133%]">
                    Create rich course content and coaching products for your
                    students. When you give them a pricing plan, they’ll appear
                    on your site!
                  </p>
                </div>
              </li>
            </ul>
            <button
              type="button"
              className="support absolute right-0 bottom-[85px] pt-[21px] pb-[21px] pr-[24px] pl-[25px] w-[181px] h-[60px] flex items-center bg-[#152259] text-[#FCFAFA] rounded-[30px]"
            >
              <img src={support} alt="support" className="mr-[8px]" />
              Support
              <img src={arrowDown} alt="arrowDown" className="ml-[38px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
