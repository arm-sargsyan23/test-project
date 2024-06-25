export default function ProfileInfo() {
  return (
    <div className="w-full md:w-[450px] max-h-max bg-white rounded-[2rem] max-xs:p-[5px]  p-[30px] max-sm:flex-col flex md:flex-col justify-between gap-5">
      <div className="sm:w-[90%] md:w-full h-full flex items-center">
        <img
          className="rounded-[2rem]"
          src="/media/images/avatar.jpg"
          alt="avatar"
        />
      </div>
      <div className="w-full h-[50%] flex flex-col gap-6">
        <h3 className="sm:text-2xl font-medium text-xl">My profile</h3>
        <div className="flex gap-6 font-medium sm:text-lg text-md max-xs:text-xs">
          <div className="w-[50%] h-[40px] border-b-[0.5px] border-gray-500 flex items-center">
            Simon Stake
          </div>
          <div className="w-[50%] h-[40px] border-b-[0.5px] border-gray-500 flex items-center">
            +374 88 77 66 55
          </div>
        </div>
        <div className="w-full h-[40px] border-b-[0.5px] border-gray-500 flex items-center font-medium sm:text-lg text-md max-xs:text-xs">
          s.menchoilik@gmail.com
        </div>
        <div className="w-full flex justify-center ">
          <button className="w-[70px] h-[30px] sm:w-[90px] sm:h-[40px] max-xs:text-xs text-lg sm:text-2xl rounded-[2rem] bg-green-400 p-4 flex justify-center items-center">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
