import ProfileInfo from "./profile-info/index";

export default function Article() {
  return (
    <article className="w-full h-full flex justify-center items-center">
      <section className="w-[80%] h-[80%] bg-gray-500/20 rounded-[2rem] flex items-center justify-center gap-6 p-6">
        <ProfileInfo />
        <div className="w-[50%] h-full flex flex-col gap-6">
          <div className="w-full bg-white h-[50%] rounded-[2rem] flex justify-center items-center">
            info...
          </div>
          <div className="w-full bg-white h-[50%] rounded-[2rem] flex justify-center items-center">
            info...
          </div>
        </div>
      </section>
    </article>
  );
}
