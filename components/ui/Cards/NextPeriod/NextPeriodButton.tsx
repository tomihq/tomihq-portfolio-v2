'use client';
import React from "react";
import Button from "../../Button";

interface INextPeriodButton{
    children: React.ReactElement | React.ReactElement[]
    handleIncrementPeriod: () => void;
}

export const NextPeriodButton = React.memo(({children, handleIncrementPeriod}:INextPeriodButton) =>{
    return(
        <Button onClick={handleIncrementPeriod} buttonClasses='border border-gray-700 bg-white  rounded-md px-4 py-2 m-1 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline dark:bg-black dark:border-neutral-400 dark:hover:bg-gray-800
        text-black dark:text-white' >
            {children}
        </Button>
    )
})


NextPeriodButton.displayName = "NextPeriodButton";
