export default function ProfileInfo() {
  return (
    <div className="w-[450px] h-[530px] bg-white rounded-[2rem] p-[30px] flex flex-col justify-between gap-y-5">
      <div>
        <img
          className="rounded-[2rem]"
          src="/media/images/avatar.jpg"
          alt="avatar"
        />
      </div>
      <div className="w-full h-[50%] flex flex-col gap-2">
        <h3 className="text-2xl font-medium">My profile</h3>
        <div className="flex gap-6 font-medium text-lg">
          <div className="w-[50%] h-[40px] border-b-[0.5px] border-gray-500 flex items-center">
            Simon Stake
          </div>
          <div className="w-[50%] h-[40px] border-b-[0.5px] border-gray-500 flex items-center">
            +374 88 77 66 55
          </div>
        </div>
        <div className="w-full h-[40px] border-b-[0.5px] border-gray-500 flex items-center font-medium text-lg">
          s.menchoilik@gmail.com
        </div>
      </div>
      <div className="w-full flex justify-center">
        <button className="w-[90px] h-[40px] text-2xl rounded-[2rem] bg-green-400 p-4 flex justify-center items-center">
          Save
        </button>
      </div>
    </div>
  );
}
