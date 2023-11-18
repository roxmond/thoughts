import { CiBellOn, CiSearch, CiChat2 } from "react-icons/ci";
import Image from 'next/image'
import Link from "next/link"

import '@/components/navbar/navbar.css'


export const NavBar = () => {

   

    return (
        <div className="navbar md:max-xl:w-full">
          <div className="logo">
            <a href="#top">
              <Image src='/thoughts.png' width={364.5} height={106.5} alt='Logo' className='md:32 sm:16' />
            </a>
          </div>
    
          <div className="menu">
            <div className="menu-search">
              <CiSearch  className='menu-item' />
            </div>
    
            <div className="menu-notifications">
              <CiBellOn className='menu-item' />
            </div>
    
            <div className="menu-chat">
              <CiChat2  className='menu-item'/>
            </div>
            
            <Link href='profile' >
              <div className="menu-profile">
                <Image src='/profile-pic-1.png' width={46} height={46} alt="profile pic" className='menu-item'/>  
              </div>
            </Link>
          </div>
        </div>
      )
    }