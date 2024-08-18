import { useNavigate } from "react-router-dom";

useNavigate;
const Index = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/sign-up");
  };

  const login = () => {
    navigate("/main/dashboard");
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col">
      <div className="mb-[53px]">
        <h2 className="text-[36px] font-semibold text-[#4F4F4F]">
          Welcome, Log into you account
        </h2>
      </div>
      <div className="max-w-[512px] min-h-[494px] pt-[72px] pb-[100px] pr-[129px] pl-[132px] bg-white">
        <div className="mb-[34px]">
          <h3 className="text-[16px] font-medium leading-[25px] text-center text-[#667085]">
            It is our great pleasure to have you on board!
          </h3>
        </div>
        <div>
          <form className="w-full flex flex-col gap-y-[14px] mb-[34px]">
            <input
              className="w-full h-[42px] p-[13px] text-[#000] text-[14px] font-medium leading-[17.36px] placeholder:#8A8A8A rounded-[4px] border-[1px] border-[#A7A7A7]"
              type="text"
              placeholder="Create your Login"
              required
              name="user-name"
            />
            <input
              className="w-full h-[42px] p-[13px] text-[#000] text-[14px] font-medium leading-[17.36px] placeholder:#8A8A8A rounded-[4px] border-[1px] border-[#A7A7A7]"
              type="password"
              placeholder="Create your Password"
              required
              name="user-password"
            />
          </form>
          <button
            onClick={login}
            type="submit"
            className="w-full h-[42px] mb-[14px] bg-[#2D88D4] border-[transparent] border text-white font-bold text-[14px] leading-[17.36px] rounded transition ease-in hover:bg-transparent hover:text-[#2D88D4] hover:border-[#2D88D4] active:relative active:top-[1px]"
          >
            Login
          </button>
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full h-[42px] text-[#2D88D4] font-bold text-[14px] leading-[17.36px] active:relative active:top-[1px] hover:text-black"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
