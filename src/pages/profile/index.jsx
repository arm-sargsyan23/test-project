import { Article, AsideBar } from "../../features/index";

export default function Profile() {
  return (
    <div className="w-screen h-screen flex">
      <AsideBar />
      <Article />
    </div>
  );
}
