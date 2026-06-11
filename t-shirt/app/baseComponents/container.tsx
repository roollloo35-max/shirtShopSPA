import { ReactNode } from "react"

interface wrapper {
    children: ReactNode,
}


export default function Container ({children}: wrapper) {
    return(
        <div className="w-full grid grid-cols-[minmax(16,1fr)_minmax(320,1200px)_minmax(16,1fr)] p-1 box-border overflow-hidden" >
            <div className="w-full col-2"> 
            {children}
            </div>
        </div>
    )
}