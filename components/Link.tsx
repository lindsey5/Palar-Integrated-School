'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export function RedLink({ path, children } : { path : string, children : React.ReactNode }){
    const pathname = usePathname();

    return (
        <Link className={`text-red-800 font-semibold py-2 px-4 rounded-lg ${path === pathname && 'text-white bg-red-800'}`} href={path}>
            {children}
        </Link>
    )
}