import Image from "next/image";
import Container from "@/app/baseComponents/container";
import { montserratBold, jostNormal } from '@/app/fonts/fonts'


const Catalog = () => {
    return (

        <Container>
            <div className="flex flex-col items-center">
                <h2 className={`${montserratBold.className} text-black text-5xl tracking-tighter`}>
                    НОВИНКИ
                </h2>
            </div>
        </Container>

    )
}

export default Catalog;