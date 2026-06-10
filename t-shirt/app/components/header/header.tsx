import Image from "next/image"
import Container from "@/app/baseComponents/container"


const Header = () => {

    return (
        <header className="w-full h-dvh flex bg-[#333] ">
            <Container >
                <div>
                    
                </div>
            </Container>

            <Image
                src='/banner.png'
                alt="banner"
                fill
                sizes="100vh"
                style={{ objectFit: 'cover' }}
                className="hidden md:block"
                priority={true}
            />

        </header>
    )

}

export default Header