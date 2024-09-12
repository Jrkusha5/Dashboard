import { RxDashboard } from "react-icons/rx"
import { IoNotificationsOutline } from "react-icons/io5"
const Header = () => {
  return (
    <div className="flex justify-between py-5 px-10 border-b
      border-gray-200">
      <h1 className="font-bold text-blue-700 text-xl uppercase flex
        items-center gap-3">
        Welcome Back , {""} <span className="font-bold text-blue-500">
           Tes Manker 
          </span></h1>

      <div className="flex gap-2 ">
        <RxDashboard className="border-2 border-gray-200 p-2 text-4xl rounded-lg
         hover:bg-gray-200 duration-300 cursor-pointer"/>
        <IoNotificationsOutline className="border-2 border-gray-200 p-2 text-4xl rounded-lg
         hover:bg-gray-200 duration-300 cursor-pointer"/>
      </div>
    </div>
  )
}

export default Header