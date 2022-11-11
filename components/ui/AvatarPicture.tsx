import {AVATAR} from '../../assets/img';
import Image from 'next/image'



export const AvatarPicture = () =>{
    return(
        <Image
            src={AVATAR.src}
            className='filter grayscale rounded-full max-h-32'
            alt="Tomás Hernández Picture"
           
        />
    )
}