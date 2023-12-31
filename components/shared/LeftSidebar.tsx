'use client';

import { sidebarLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useRouter, usePathname } from 'next/navigation';
import { SignOutButton, SignedIn } from '@clerk/nextjs';

function LeftSidebar() {

  const pathname = usePathname();
  const router = useRouter();

  return (
    <section className='custom-scrollbar leftsidebar'>
      <div className='flex w-full flex-1 flex-col gap-6 px-6'>
        {sidebarLinks.map((link)=>{
          const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;
          return(
          <Link href={link.route} key={link.label} className={`leftsidebar_link ${isActive && 'bg-primary-500'}`}>
            <Image src={link.imageURL} alt={link.label} width={24} height={24}/>
            <p className='text-light-1 max-lg:hidden'>{link.label}</p>
          </Link>
        )})}
      </div>
      <div className='mt-10 px-6'>
        
      <Image src='/assets/logout.svg' alt='logout' width={24} height={24}/>
      <SignedIn>
            <SignOutButton>
              <div className='flex cursor-pointer'>
                <Image src='/assets/logout.svg' alt='logout' width={24} height={24}/>
              </div>
            </SignOutButton>
          </SignedIn>
      </div>
    </section>
  )
}

export default LeftSidebar
