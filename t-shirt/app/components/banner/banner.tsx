import Image from "next/image"
import Container from "@/app/baseComponents/container"
import { Heart, Search, Shop_bug, User } from "@/app/SVG_components/SVG_sprite"
import { montserratBold, jostNormal } from '@/app/fonts/fonts'
import styles from './banner.module.css'


const Banner = () => {

    return (
        <section className="w-full h-screen flex relative bg-[#00001180]">
            <Image
                src='/banner.png'
                alt="banner"
                fill
                sizes="100vh"
                style={{ objectFit: 'cover' }}
                className="hidden md:block -z-1000 opacity-65"
                priority={true}
            />

            <Container>
                <div className="w-full flex flex-col ">
                    <div className="w-full flex justify-center ">

                        <ul className={`${jostNormal.className} text-white w-full flex flex-row justify-between pt-5 pb-2`}>
                            <li className={`${styles.underline}`}>NEW SALE</li>
                            <li className={`${styles.underline}`}>КАТАЛОГ</li>
                            <li className={`${styles.underline}`}>КОЛЛФБОРАЦИИ</li>
                            <li className={`${styles.underline}`}>LOOKBOOK</li>
                        </ul>

                    </div>
                    <div className={`w-full pt-40 flex flex-row justify-between`}>
                        <div>
                            <h1 className={`${montserratBold.className}  text-white text-5xl tracking-tighter`}>TEESHKA</h1>
                            <p className={`${jostNormal.className} text-white text-3xl tracking-tighter w-1/2 mt-25`}>Ваш стиль — как чистая тишина и безмятежность ясного дня, где голос истинной свободы разносится легко и далеко.</p>
                        </div>

                        <ul className="flex flex-col items-center w-12,5 gap-y-10 ">
                            <li className="cursor-pointer"><Search /></li>
                            <li className="cursor-pointer"><User /></li>
                            <li className="cursor-pointer"><Heart /></li>
                            <li className="cursor-pointer"><Shop_bug /></li>
                        </ul>
                    </div>
                    <div className={`${styles.arrow__con}`}>
                        <a href="#" className="relative">
                            <div className={`${styles.arrow} `}>

                            </div>
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    )

}

export default Banner