import { NavBar } from '@/components/navbar/navbar'
import { PostCard } from '@/components/postCard/postCard'
import { NewThought } from '@/components/newThought/newThought'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

export default function Home() {

  const profileImgMale = "/profile-pic-2.png"
  const profileImgFemale = "/profile-pic-1.png"

  const account = "Kevin McCalister"
  const date = "6/12/2023"
  const time = "11:53pm"
  const post = "🎵 We wish you a merry Christmas! We wish you a merry Christmas! We wish you a merry Christmas and a Happy New Year! 🎵🎄"

  return (
    <div>
      <NavBar id='top' />

      <div className='body'>
        <NewThought />
        <PostCard profileImg={profileImgMale} account={account} date={date} time={time} post={post} />
        <PostCard profileImg={profileImgMale} account="Teo Economidis" date="5/12/2023" time="11:11am" post="My first post here on Thoughts!!"/>
        <PostCard profileImg={profileImgMale} account="Elon Musk" date="27/4/2022" time="14:43pm" post="Next I'm buying Coca-Cola to put the cocaine back in"/>
        <PostCard profileImg={profileImgFemale} account="Dolly Parton" date="14/10/2021" time="12:03am" post="When her beauty is beyond compare with flaming locks of auburn hair 🚩🚩🚩"/>
        <PostCard profileImg={profileImgFemale} account="Kylie Jenner" date="19/9/2018" time="4:12am" post="last night i had cereal with milk for the first time. life changing."/>
        <PostCard profileImg={profileImgMale} account="Barack Obama" date="12/8/2017" time="9:24am" post="No one is born hating another person because of the color of his skin or his background or his religion..."/>
        <PostCard profileImg={profileImgMale} account="Ryan Raynolds" date="25/9/2016" time="3:22pm" post="Just want to wish Billy Ray Cyrus the most special, magical birthday ever. I love you with all my heart. Also, Happy Birthday to my wife."/>
        <PostCard profileImg={profileImgFemale} account="Lady Gaga" date="21/12/2012" time="4:11pm" post="why do people look at me like I'm crazy when i use coupons at grocery or try bargaining at retail, IM FROM NEW YORK WHERE IS THE SALE RACK"/>
        <PostCard profileImg={profileImgFemale} account="Kim Kardashian" date="22/2/2010" time="2:21am" post="Thanks guys! I had no idea a pickle was really a cucumber! U guys totally confirmed it!"/>


        <div className="scroll-to-top">
          <a href="#top"><BsFillArrowUpCircleFill className='top-arrow'/></a>
        </div>
      </div>

    </div>
  )
}