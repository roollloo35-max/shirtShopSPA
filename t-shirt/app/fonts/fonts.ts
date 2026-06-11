import { Montserrat, Roboto, Jost } from "next/font/google";


  const montserratBold = Montserrat({subsets: ["latin"], weight: '700'})
  const montserratNormal = Montserrat({subsets: ["latin"], weight: '400'})
  const jostBold = Jost({subsets: ["cyrillic"], weight: '700'})
  const jostNormal = Jost({subsets: ["cyrillic"], weight: '400'})
  const robotoBold = Roboto({subsets: ["cyrillic"], weight: '700'})
  const robotoNormal = Roboto({subsets: ["cyrillic"], weight: '400'})


export {montserratBold, montserratNormal, jostBold, jostNormal, robotoBold, robotoNormal}