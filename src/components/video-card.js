import React from 'react'
import Image from './image'

const VideoCard = ({imageUrl}) => {
  return (
    <div 
        style={{
            textAlign: 'center',
            borderRadius: 5,
        }}
    >
        <Image src={imageUrl} alt="video preview" />
    </div>
  )
}

export default VideoCard