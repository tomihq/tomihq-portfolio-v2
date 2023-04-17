'use client';
import Link from 'next/link';
import React from 'react'
import { GitHubIcon, Link as LinkSVG } from '../../../assets';


interface ILinkWithSVG {
    url: string;
    icon: string;
    ariaLabel: string;
}

interface Icons {
  id: string;
  component: JSX.Element;
}

const icons:Icons[] = [
  {id: "github", component: <GitHubIcon className='hover:scale-150 duration-300 transition-all text-black dark:text-white scale-125'/>}, 
  {id: 'link', component: <LinkSVG className="hover:scale-150 duration-300 transition-all text-black dark:text-white 
  scale-125"/>}
]

export const LinkWithSVG = ({url, icon, ariaLabel}:ILinkWithSVG) => {

  return (
    <Link href={url}  aria-label={ariaLabel} className='w-fit' passHref >
           {icons.find((value) => { return value.id === icon})?.component}
    </Link>
  )
}
