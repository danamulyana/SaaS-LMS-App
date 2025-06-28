"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Companions', href: '/companions' },
  { name: 'My Journey', href: '/my-journey' },
//   { name: 'Sign In', href: '/sign-in' },
];

const NavItems = () => {
    const pathname = usePathname();
    
    return (
        <nav className='flex items-center gap-4'>
            {
            navItems.map(item => (
                <Link key={item.name} href={item.href} className={cn(pathname === item.href &&  'text-primary font-semibold')}>
                {item.name}
                </Link>
            ))
            }
        </nav>
    )
}

export default NavItems