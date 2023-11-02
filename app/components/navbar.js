import {AiOutlineSearch} from 'react-icons/ai'
import {BsChatRightDots} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import {MdOutlineNotificationsNone} from 'react-icons/md'
import {BsSendPlus} from 'react-icons/bs'

import Image from 'next/image'


export const NavBar = () => {
    return (
        <div className="navbar">
          <div className="logo">
            <a href="#top">
              <Image src='/thoughts.png' width={364.5} height={106.5} alt='Logo' />
            </a>
          </div>

          <div className='thoughts-bar'>
            <div className='flex justify-center'>

              <form action="/" id="newThought" className='new-form'>
              <textarea rows="1" 
                        cols="50"
                        className='new-thought'
                        form="newThought"
                        defaultValue='Write your thoughts...'
              />
          
              <BsSendPlus type='submit' className='post-icon'/>
              </form>
            </div>
          </div>
    
          <div className="menu">
            <div className="menu-search">
              <AiOutlineSearch className='menu-item' />
            </div>
    
            <div className="menu-notifications">
              <MdOutlineNotificationsNone className='menu-item' />
            </div>
    
            <div className="menu-chat">
              <BsChatRightDots className='menu-item'/>
            </div>
    
            <div className="menu-profile">
              <CgProfile className='menu-item'/>
            </div>
          </div>
        </div>
      )
    }