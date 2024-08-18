import icon from "../../assets/images/icons/icon-notification.svg";
import search from "../../assets/images/icons/search.svg";
import bg from "../../assets/images/teachers/bg.svg";
import arrowDown from "../../assets/images/icons/arrow-down.svg";
import support from "../../assets/images/icons/support.svg";
import { useNavigate } from "react-router-dom";

const Teachers = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/main/teachers/add");
  };

  return (
    <div className="h-[100vh] m-auto w-[1090px]">
      <header className="site-header min-h-[113px] pt-[19px] mb-[14px] flex flex-col">
        <div className="w-full h-[40px] flex justify-end pl-[23px] mb-[4px]">
          <div className="flex items-center gap-x-[3px]">
            <span>
              <img src={icon} alt="icon-notification" />
            </span>
            <button
              type="submit"
              className="pt-[11px] pb-[11px] w-[120px] h-[40px] flex items-center justify-center text-[#424242] text-[14px] font-semibold rounded-[8px] hover:text-[#509CDB]"
            >
              Log out
            </button>
          </div>
        </div>
        <div className="w-[1065px] flex items-center justify-between pt-[14px] pb-[14px]">
          <div>
            <h2 className="text-[20px] font-medium leading-[25px] text-[#4F4F4F]">
              Teachers
            </h2>
          </div>
          <div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="pt-[12px] pb-[12px] w-[122px] h-[41px] flex justify-center items-center text-[14px] font-semibold leading-[17px] bg-[#509CDB] text-white rounded"
            >
              Add Teachers
            </button>
          </div>
        </div>
      </header>
      <div className="w-[1061px] h-[49px] mb-[30px]">
        <form className="w-full h-full">
          <div className="w-full h-full flex items-center relative">
            <img src={search} alt="search" className="absolute left-[16px]" />
            <input
              className="pt-[16px] pb-[16px] pl-[48px] pr-[20px] w-full h-full text-[14px] leading-[17px] font-medium bg-[#FCFAFA]"
              type="text"
              placeholder="Search for a student by name or email"
              name="user-search"
              autoComplete="off"
            />
          </div>
        </form>
      </div>
      <div className="relative w-[1056px] min-h-[420px] flex justify-center text-center bg-[#FCFAFA] text-[#4F4F4F]">
        <div className="">
          <div>
            <img src={bg} alt="bg" />
          </div>
          <div>
            <h2 className="text-[28px] font-semibold">
              No Teachers at this time
            </h2>
            <p className="text-[14px] leading-[17px]">
              Teachers will appear here after they enroll in your school.{" "}
            </p>
          </div>
        </div>
        <button
          type="button"
          className="support absolute right-[19px] bottom-[85px] pt-[21px] pb-[21px] pr-[24px] pl-[25px] w-[181px] h-[60px] flex items-center bg-[#152259] text-[#FCFAFA] rounded-[30px]"
        >
          <img src={support} alt="support" className="mr-[8px]" />
          Support
          <img src={arrowDown} alt="arrowDown" className="ml-[38px]" />
        </button>
      </div>
    </div>
  );
};

export default Teachers;
