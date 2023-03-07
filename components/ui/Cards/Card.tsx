import {ReactElement} from 'react';
interface CardProps {
  children?: React.ReactNode
  cardStyles?: string;
  childrenCardStyle?:string;
}
export const Card = ({children, cardStyles, childrenCardStyle}:CardProps):ReactElement => {
  return (
    <div className={`rounded-xl   border-2  h-96  dark:border-stone-600 w-full md:w-80 lg:w-96 ${cardStyles}  `}>
        <div className={`flex flex-col gap-2 h-full bg-white dark:bg-[#060607] text-white rounded-lg p-8  relative ${childrenCardStyle}  `}>
            {children}
        </div>
    </div>
  )
}
