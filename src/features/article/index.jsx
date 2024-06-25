import ProfileInfo from "./profile-info/index";

export default function Article() {
  return (
    <article className="w-full h-full flex justify-center items-center max-sm:p-[10px]">
      <section className="w-full sm:w-[80%] min-h-[90%] bg-gray-500/20 rounded-[2rem] max-md:flex-col md:items-center md:justify-center gap-6 p-6 flex">
        <ProfileInfo />
        <div className="w-full md:w-[50%] h-full flex flex-col gap-6">
          <div className="w-full h-[300px] bg-white rounded-[2rem] flex justify-center items-center">
            Info...
          </div>
          <div className="w-full h-[300px] bg-white rounded-[2rem] flex justify-center items-center">
            Info...
          </div>
        </div>
      </section>
    </article>
  );
}
