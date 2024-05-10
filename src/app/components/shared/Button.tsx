import { FC } from "react"

const Button:FC<{text:string}> = ({text}) => {
  return (
    <button className="bg-[#00616C] text-white px-7 py-4  rounded-full hover:shadow-lg hover:scale-105 duration-300 text-xl font-medium">{text}</button>
  )
}

export default Button