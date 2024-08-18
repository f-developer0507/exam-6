import icon from "../../assets/images/icons/icon-notification.svg";

const Teachers = () => {
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
              Add teacher
            </h2>
          </div>
          <div>
            <button
              form="submit"
              type="submit"
              className="pt-[12px] pb-[12px] w-[122px] h-[41px] flex justify-center items-center text-[14px] font-semibold leading-[17px] bg-[#509CDB] text-white rounded"
            >
              Save
            </button>
          </div>
        </div>
      </header>
      <div className="w-[980px]">
        <form id="submit" className="flex flex-col gap-y-[36px]">
          <div className="flex items-center justify-between">
            <label className="flex flex-col">
              <strong className="mb-[5px] text-[14px] text-[#8A8A8A] font-medium leading-[17px]">
                Full Name
              </strong>
              <input
                className="pt-[13px] pb-[12px] pl-[10px] pr-[10px] w-[407px] text-[14px] font-medium leading-[17px] border boredr-[#A7A7A7] rounded"
                type="text"
                placeholder="Full Name"
                required
                name="user-full-name"
              />
            </label>
            <label className="flex flex-col">
              <strong className="mb-[5px] text-[14px] text-[#8A8A8A] font-medium leading-[17px]">
                Class
              </strong>
              <input
                className="pt-[13px] pb-[12px] pl-[10px] pr-[10px] w-[407px] text-[14px] font-medium leading-[17px] border boredr-[#A7A7A7] rounded"
                type="text"
                placeholder="Class"
                required
                name="user-class"
              />
            </label>
          </div>
          <div className="flex items-center justify-between">
            <label className="flex flex-col">
              <strong className="mb-[5px] text-[14px] text-[#8A8A8A] font-medium leading-[17px]">
                Email address
              </strong>
              <input
                className="pt-[13px] pb-[12px] pl-[10px] pr-[10px] w-[407px] text-[14px] font-medium leading-[17px] border boredr-[#A7A7A7] rounded"
                type="text"
                placeholder="Email address"
                required
                name="user-email"
              />
            </label>
            <label className="flex flex-col">
              <strong className="mb-[5px] text-[14px] text-[#8A8A8A] font-medium leading-[17px]">
                Gender
              </strong>
              <input
                className="pt-[13px] pb-[12px] pl-[10px] pr-[10px] w-[407px] text-[14px] font-medium leading-[17px] border boredr-[#A7A7A7] rounded"
                type="text"
                placeholder="Gender"
                required
                name="user-gender"
              />
            </label>
          </div>
          <div className="flex items-center justify-between">
            <label className="flex flex-col">
              <strong className="mb-[5px] text-[14px] text-[#8A8A8A] font-medium leading-[17px]">
                Subject
              </strong>
              <input
                className="pt-[13px] pb-[12px] pl-[10px] pr-[10px] w-[407px] text-[14px] font-medium leading-[17px] border boredr-[#A7A7A7] rounded"
                type="text"
                placeholder="Subject"
                required
                name="user-subject"
              />
            </label>
            <label className="flex flex-col">
              <strong className="mb-[5px] text-[14px] text-[#8A8A8A] font-medium leading-[17px]">
                Age
              </strong>
              <input
                className="pt-[13px] pb-[12px] pl-[10px] pr-[10px] w-[407px] text-[14px] font-medium leading-[17px] border boredr-[#A7A7A7] rounded"
                type="text"
                placeholder="Age"
                required
                name="user-age"
              />
            </label>
          </div>
          <div className="flex items-start justify-between">
            <label className="flex flex-col">
              <strong className="mb-[5px] text-[14px] text-[#8A8A8A] font-medium leading-[17px]">
                About
              </strong>
              <textarea
                rows="10"
                cols="30"
                className="pt-[13px] pb-[12px] pl-[10px] pr-[10px] w-[407px] h-[172px] text-[14px] font-medium leading-[17px] border boredr-[#A7A7A7] rounded resize-none"
                placeholder="About"
                required
                name="user-about"
              />
            </label>
            <label className="flex justify-start mt-[23px] cursor-pointer w-[407px]">
              <strong className="mb-[5px] text-[18px] text-[#4F4F4F] font-medium leading-[22px]">
                Import Img
              </strong>
              <input className="hidden w-0 h-0" type="file" name="user-file" />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Teachers;
