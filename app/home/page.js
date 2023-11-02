import { NavBar } from '../components/navbar'
import { PostCard } from '../components/postCard'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

export default function Home() {
  return (
    <div>
      <NavBar id='top' />

      <div className='body'>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />

        <div className="scroll-to-top">
          <a href="#top"><BsFillArrowUpCircleFill className='top-arrow'/></a>
        </div>
      </div>

    </div>
  )
}