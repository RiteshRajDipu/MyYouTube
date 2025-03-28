import React from 'react'

const VideoCard = ({ info }) => {

  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;

  return (
    <div className='p-2 m-2 w-60 shadow-lg'>
      <img className='rounded-lg' alt='thumbnail-sallu' src={thumbnails.medium.url} />
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  )
}

export const AdVideoCard = ({info}) => {
   return (
    <div className='border border-red-900'>
      <VideoCard info={info} />
    </div>
   );
};

export default VideoCard