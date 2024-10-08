import { PiDotsThreeOutlineLight } from "react-icons/pi";
import Title from "../../Ui/Title";
import { motion } from "framer-motion";
import { categories } from "../../constants";
import CategoryItem from "./CategoryItem";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Categories = () => {
  return (
    <div className="px-5 py-5">
      <div className="flex justify-between items-center">
        <Title>Categories</Title>
        <PiDotsThreeOutlineLight className="cursor-pointer hover:text-gray6500" />
      </div>

      <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3" variants={containerVariants} initial="hidden" animate="show">
        {categories.map((category, index) => (
          <motion.div key={index} variants={itemVariants}>
            <CategoryItem name={category.name} icon={category.icon} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Categories;
