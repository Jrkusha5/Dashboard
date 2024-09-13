import { motion } from "framer-motion"

import { cardData } from "../../constants"
import Title from "../../Ui/Title"
import RevenueCard from "./RevenueCard"

const Revenue = () => {

    const containerVariants ={
        hidden: { opacity:0 },
        show:{
         opacity:1,
         transition:{
           staggerChildren:0.1,
         }
        }
     }
     
     const itemVariants ={
       hidden: {opacity : 0, y:20},
       show:{ opacity:1,
         y:0,
         transition:{
           duration:0.6,
           case:"caseOut"
         }
     
       }
     }
     
  return (
    <div className="w-[350px]">
       <Title>Result</Title> 

       <motion.div className="flex flex-col gap-3"  variants={containerVariants}
      initial="hidden" animate="show">
        {cardData.map((card,index)=>(
            <motion.div key={index} variants={itemVariants}>
               <RevenueCard card={card}/>
            </motion.div>
        ))}
       </motion.div>
    </div>
  )
}

export default Revenue