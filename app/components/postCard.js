import Image from "next/image"
import { GrLike, GrDislike } from 'react-icons/gr'
import { FaRegCommentDots } from 'react-icons/fa'
import { PiShareLight } from 'react-icons/pi'

export const PostCard = () => {
    return (
      <div className="post-card">
        <div className="post-name flex items-center">
            <Image src='/profile-pic.png' width={35} height={35} className="post-profile-pic" priority />
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
            <GrLike className="post-button"/>
            <GrDislike className="post-button" />
            <FaRegCommentDots className="post-button" />
            <PiShareLight className="post-button" />

        </div>
      </div>
      )
    }