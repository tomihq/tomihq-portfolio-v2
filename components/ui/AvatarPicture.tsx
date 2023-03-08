import {AVATAR} from '../../assets/img';
import Image from 'next/image'
export const AvatarPicture = () =>{
    return(
        <section>
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