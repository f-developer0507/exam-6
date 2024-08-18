import home from "../assets/images/sitebar/home.svg";
import bank from "../assets/images/sitebar/bank.svg";
import exam from "../assets/images/sitebar/exam.svg";
import setting from "../assets/images/sitebar/setting.svg";
import students from "../assets/images/sitebar/students.svg";
import icon from "../assets/images/sitebar/icon.svg";

const links = [
  {
    path: "/main/dashboard",
    img: <img src={home} alt="home" className="img" />,
    content: "Dashboard",
  },
  {
    path: "/main/teachers",
    img: <img src={home} alt="home" className="img" />,
    content: "Teachers",
    icon: <img src={icon} alt="icon" className="icon" />,
  },
  {
    path: "/main/students",
    img: <img src={students} alt="students" className="img" />,
    content: "Students",
    icon: <img src={icon} alt="icon" className="icon" />,
  },
  {
    path: "/main/billing",
    img: <img src={bank} alt="bank" className="img" />,
    content: "Billing",
    icon: <img src={icon} alt="icon" className="icon" />,
  },
  {
    path: "/main/settings",
    img: <img src={setting} alt="setting" className="img" />,
    content: "Settings and profile",
    icon: <img src={icon} alt="icon" className="icon" />,
  },
  {
    path: "/main/exams",
    img: <img src={exam} alt="exam" className="img" />,
    content: "Exams",
    icon: <img src={icon} alt="icon" className="icon" />,
  },
];
export default links;
