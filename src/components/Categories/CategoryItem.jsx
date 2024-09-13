

const CategoryItem = ({name, icon:Icon}) => {
  return (
    <div className="grid grid-col items-center">
        <div className="bg-gray-100 p-4 rounded-lg hover:bg-gray-300 duration-300
         cursor-pointer">
            <img src={Icon} alt="" className="w-20 text-gray-600 items-center" />
        </div>
        <span className="font-medium text-gray-600">{name}</span>
    </div>
  )
}

export default CategoryItem