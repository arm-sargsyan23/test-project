import { Link } from "react-router-dom";

export default function AsideBar() {
  const asideNavComponents = [
    { title: "My dashboard", to: "/" },
    { title: "Accounts", to: "/" },
    { title: "Mobile", to: "/" },
    { title: "Payments", to: "/" },
    { title: "Supports", to: "/" },
  ];

  return (
    <aside className="w-[30%] h-full py-5">
      <div className="w-full grid gap-y-[60px] font-medium">
        <div className="flex justify-center">
          <img
            className="w-[90px] h-[90px]"
            src="/media/images/logo.jpg"
            alt="person icon"
          />
        </div>
        <div className="w-full flex flex-col items-center gap-y-3">
          {asideNavComponents.map(({ title, to }) => (
            <Link
              to={to}
              className="text-2xl p-3 hover:bg-green-400 hover:scale-110 transition-all ease-in-out duration-500 rounded-[1rem]"
            >
              {title}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
