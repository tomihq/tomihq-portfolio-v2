import avatarImg from '../../assets/img/tomi-2022.jpg';
export const AvatarPicture = () =>{
    return(
        <picture className='pb-4'>
                    <source srcSet={avatarImg.src}  type="image/jpg"/>
                    <img className='filter grayscale rounded-full max-h-32' src={avatarImg.src} alt="me-picture"/>
        </picture>
    )
}