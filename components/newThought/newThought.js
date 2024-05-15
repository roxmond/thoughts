import { CiLocationArrow1  } from "react-icons/ci"
import '@/components/newThought/new-thought.css'


export const NewThought = () => {
    return (

<div className='thoughts-bar '>
            <div className='flex justify-center'>

              <form action="/" id="newThought" className='new-form'>
              <textarea rows="1" 
                        cols="50"
                        className='new-thought'
                        form="newThought"
                        placeholder="Write your thoughts..."
              />
          
              <CiLocationArrow1  type='submit' className='post-icon'/>
              </form>
            </div>
          </div>
        )
    }