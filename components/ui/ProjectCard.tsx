import dynamic from 'next/dynamic';
import React from 'react'
import { FiberManualRecordOutlinedIcon,  } from '../../assets';
import { ILink, IProject } from '../../interfaces';
import { Card } from './Cards';
import { LinkWithSVG } from './Links/LinkWithSVG';

const List = dynamic(() => import('./Lists/List'));

export const ProjectCard = (data: IProject  ) => {

  const {slug, title, description, tecnologies, links} = data;
  

  return (
    <div className=" text-black dark:text-white flex flex-col  mt-8 overflow-hidden" 
                key={slug} 
             
                >
                  <Card>
                    {
                      links && (
                        <ul className='flex flex-row gap-4'>
                          {
                            links.map((link: ILink) =>{
                              return <LinkWithSVG key={link.url} {...link}  />
                           })
                          }
                        </ul>
                      )
                    }
                    
                    <h3 className="text-black dark:text-white text-2xl font-semibold mt-3">{title}</h3>
                    
                      <div className={`back-card  flex flex-col `} >
                            <div className="text-black dark:text-white ">
                              <label htmlFor={`tecnologies-${slug}`} ><p className='font-semibold mb-4 text-lg'> Tecnologías utilizadas</p></label>
                                <List list={tecnologies}>
                                  <FiberManualRecordOutlinedIcon className='scale-50'/>
                                </List>
                            </div>
                          
                      </div>
                </Card>
    </div>
  )
}
