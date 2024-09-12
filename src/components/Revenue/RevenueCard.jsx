import React from "react"
const RevenueCard = ({card}) => {
  return (
    <div className={`${card.bgColor} p-2 flex gap-3 rounded-xl
     items-center h-[125px]`}>
        <card.image className="text-6xl bg-white rounded-lg text-gray-500
         p-3"/>
        <div className="flex flex-col gap-2">
            <span className="text-gray-500">{card.title}</span>

            <div className="flex gap-3 items-center">
                <h1 className="font-bold text-3xl">{card.revenue}</h1>
                <span className={`flex gap-1 items-center ${card.growth.color}`}>
                    <card.growth.icon />
                    {card.growth.percentage}
                </span>
            </div>
            <a href={card.linkHref} className="font-semibold
            text-xs text-blue-800">{card.linkText}</a>
        </div>
    </div>
  )
}

export default RevenueCard