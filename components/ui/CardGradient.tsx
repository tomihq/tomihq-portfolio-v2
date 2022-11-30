import {ReactElement} from 'react';
interface CardGradientProps {
  children?: React.ReactNode
}
export const CardGradient = ({children}:CardGradientProps):ReactElement => {
  return (
    <div className="rounded-xl mx-auto  mt-10 bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
        <div className="flex flex-col justify-between h-full bg-white dark:bg-black text-white rounded-lg p-4 relative items-center">
            {children}
        </div>
    </div>
  )
}
