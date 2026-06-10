import { ReactNode } from "react"

interface wrapper {
    children: ReactNode,
}


export default function Container ({children}: wrapper) {
    return(
        <div className="grid grid-cols-[minmax(16,1fr)_minmax(320, 1200px)] p-1">
            {children}
        </div>
    )
}