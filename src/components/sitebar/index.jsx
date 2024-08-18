import { NavLink, useLocation } from "react-router-dom";

import logo from "../../assets/images/sitebar/logo.svg";
import newIcon from "../../assets/images/sitebar/new.svg";
import bank from "../../assets/images/sitebar/bank.svg";
import links from "../../router/routes";

import "./style.css";
const Index = () => {
  const { pathname } = useLocation;
  return (
    <div className="w-[260px] bg-[#152259] h-[100vh] flex flex-col">
      <div className="flex flex-col text-center items-center pb-[40px] pt-[26px] border-b border-b-[#BDBDBD]">
        <div className="w-[65px] h-[65px] mb-[12px]">
          <img src={logo} alt="logo" className="w-full h-full" />
        </div>
        <strong className="text-[14px] font-semibold leading-[17.36px] text-[#fff]">
          Udemy Inter. school
        </strong>
      </div>
      <div className="mb-[116px]">
        <ul className="pt-[15px] pl-[25px] pr-[24px] flex flex-col gap-y-2">
          {links.map((item, index) => (
            <li key={index} className="flex items-center">
              <NavLink
                to={item.path}
                className={
                  item.path === pathname
                    ? "active"
                    : "links flex items-center w-full rounded"
                }
              >
                {item.img}
                {item.content}
                {item.icon}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="pl-[25px] pr-[24px]">
        <ul className="">
          <li className="w-full flex items-center justify-center text-[#fff]">
            <NavLink to="/main/features" className={"flex items-center pt-[11px] pr-[18px] pb-[12px] pl-[16px] text-[14px] rounded"}>
              <img src={bank} alt="img" className="mr-[16px]"/>
              Features
              <img src={newIcon} alt="newIcon" className="ml-[23px]"/>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Index;
