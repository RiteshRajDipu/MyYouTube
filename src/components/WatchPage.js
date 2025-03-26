import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('v'));
 
  useEffect(() => {
   dispatch(closeMenu())
  },[dispatch])

  return (
    <div className='mx-5 my-1'>
      <iframe 
        width="800" 
        height="350" 
        src={"https://www.youtube.com/embed/" + searchParams.get('v')}
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
      </iframe>
    </div>
  )
}

export default WatchPage