import { PiDotsThreeOutlineLight } from "react-icons/pi"
import Title from "../../Ui/Title"
import { categories } from "../../constants"
import CategoryItem from "./CategoryItem"


const Categories = () => {
  return (
    <div className="px-10 py-5 flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <Title>Categories</Title>
          <PiDotsThreeOutlineLight className="cursor-pointer hover:text-gray6500" />
    </div>

    <div className="flex gap-3">
        {
            categories.map((category, index)=>(
                <div key={index}>
                    <CategoryItem name={category.name} icon={category.icon}/>
                </div>
            ))
        }
    </div>
    </div>
  )
}

export default Categories