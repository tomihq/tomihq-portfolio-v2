import {ReactElement} from 'react';
interface CardProps {
  children?: React.ReactNode
}
export const Card = ({children}:CardProps):ReactElement => {
  return (
    <div className="rounded-xl m-auto  border-2  h-96  dark:border-stone-600 w-full  lg:w-96  ">
        <div className="flex flex-col gap-2 h-full bg-white dark:bg-[#060607] text-white rounded-lg p-8  relative  ">
            {children}
        </div>
    </div>
  )
}
