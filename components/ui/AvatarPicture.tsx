'use client';

import {AVATAR} from '../../assets/img';
import Image from 'next/image'
const AvatarPicture = () =>{
    return(
        <section className='pb-4'>
            <Image
                src={AVATAR.src}
                className='filter grayscale rounded-full max-h-32'
                alt="Tomás Hernández Picture"
                width={128}
                height={128}
                priority={true}
           />
        </section>
    )
}

export default AvatarPicture;