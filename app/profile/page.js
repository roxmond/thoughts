import { NewThought } from "@/components/newThought/newThought"
import { PostCard } from "@/components/postCard/postCard"
import Image from "next/image"
import Link from "next/link"
import { CiCircleChevLeft, CiSearch, CiLogout, CiSettings } from "react-icons/ci"
import './styles.css'

export default function Profile() {
  const name = "Mairy Jane Parker"
  const description = "The quick brown fox jumps over the lazy dog!"
  const birthdate = "24/01/1989"
  const location = "Avila Beach, CA"
  const job = "Thoughts Social Media"
  const followers = "1211"
  const following = "945"
  const thoughts = "97"
  const url = "https://github.com/roxmond/thoughts"

    return (
      <main className="profile-page">
        <div className="profile-bar">
          <Link href='/'>
            <CiCircleChevLeft className="back-icon"/>
          </Link>
          
          <p className="profile-name">{name}</p>
          <CiSearch className="search-icon"/>
        </div>

        <div className="profile-pics">
          <div className="profile-banner">
            <Image src='/profile-banner.png' width={1920} height={264} alt="Profile Banner" className="banner" />
            <div className="banner-settings">
              <CiLogout className="banner-settings-icon"/>
            </div>
          </div>

          <div className="profile-pic">
            <Image src='/profile-pic-1.png' width={164} height={164} alt="Profile Banner" className="picture" />
            <div className="pic-settings">
              <CiLogout className="pic-settings-icon"/>
            </div>
          </div>
        </div>

        <div className="profile-info">
          <div className="profile-settings">
            <CiSettings className="settings" />
          </div>  
        </div>

        <div className="profile-about">
          <><p className="description">{description}</p></>
          <><p className="info">{birthdate}</p></>
          <><p className="info">{location}</p></>
          <><p className="info">Working at {job}</p></>
          <><p className="url"><a href={`${url}`} target="_blank">{url}</a></p></>
        </div>

        <div className="profile-friends">
          <p className="follow-text">Thoughts {thoughts}</p> | <p className="follow-text">Followers {followers}</p> | <p className="follow-text">Following {following}</p>
        </div>

        <div className="profile-body">
          <div className="chat-window">
            
          </div>
          <NewThought className='profile-new-thought'/>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </main>
    )
  }