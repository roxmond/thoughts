import { NavBar } from '@/components/navbar/navbar'
import { PostCard } from '@/components/postCard/postCard'
import { NewThought } from '@/components/newThought/newThought'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

export default function Home() {
  return (
    <div>
      <NavBar id='top' />

      <div className='body'>
        <NewThought />
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