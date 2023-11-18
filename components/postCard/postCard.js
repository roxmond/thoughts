import Image from "next/image"
import { CiCircleChevUp , CiCircleChevDown, CiCircleMore, CiSaveUp2 } from 'react-icons/ci'
import '@/components/postCard/post-card.css'

export const PostCard = () => {
 

    return (
      <div className="post-card">
        <div className="post-name flex items-center">
            <Image src='/profile-pic-2.png' width={42} height={42} alt="profile card pic" className="post-profile-pic" priority />
            <div className="post-details">
                <p className="post-profile-name">Teo Economidis</p>
                <p className="post-date">25/12/2023 - 12:11PM</p>
            </div>
        </div>

        <div className="post-body">
        🎵 We wish you a merry Christmas!
        We wish you a merry Christmas!
        We wish you a merry Christmas and a Happy New Year! 🎵🎄
        </div>

        <div className="post-actions flex justify-between">
            <CiCircleChevUp className="post-button like"/>
            <CiCircleChevDown className="post-button deslike" />
            <CiCircleMore className="post-button" />
            <CiSaveUp2 className="post-button rotate" />

        </div>
      </div>
      )
    }