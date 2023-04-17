'use client';
import styled from "styled-components";
import { keyframes } from "styled-components";
import Link from "next/link"
import Button from "../../ui/Button";

const ContactSection = () => {
    const hue = keyframes`
    from {
      -webkit-filter: hue-rotate(0deg);
    }
    to {
      -webkit-filter: hue-rotate(-360deg);
    }
    `;
    const AnimatedGradientText = styled.span`
      color: #4f46e5;
      background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-animation: ${hue} 10s infinite linear;
      overflow-wrap: break-word;
      text-align: center;
      text-rendering: optimizelegibility;
      -moz-osx-font-smoothing: grayscale;
    `;

    
  return (
        <section className='mb-6'>
        <h2 className='font-bold text-3xl md:text-4xl text-black dark:text-white pr-8 mb-3 block'>Contacto</h2>
        <div className='flex flex-column'>
            <div>
                <span>
                ¿Quieres contactarme por trabajo y/o discutir algunas ideas que tengas en mente?
                Sentite libre de contactarme vía
                    <AnimatedGradientText> <b>
                    <Link href="mailto:hernandeztomas584@gmail.com">
                        email
                    </Link>
                    </b>
                    </AnimatedGradientText>.
                <br />

                También podés encontrarme en  
                <AnimatedGradientText> 
                    <b>
                        <Link href="https://www.linkedin.com/in/tomihq/" className="ml-1">
                            LinkedIn
                        </Link>
                    </b>
                </AnimatedGradientText>.
                </span>

            </div>
        </div>
        <Button
                buttonClasses='border border-gray-700 bg-black text-white  rounded-md mt-4 px-4 py-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline dark:bg-white dark:border-neutral-400 dark:hover:bg-gray-800
                text-black dark:text-black dark:hover:text-white'
                
            >
            <Link href="files/cv.pdf" passHref target="_blank" download="Tomás Hernández CV">
                    Download CV 
                </Link>
        </Button>

    </section>
  )
}

export default ContactSection