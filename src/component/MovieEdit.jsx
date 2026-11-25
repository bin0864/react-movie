import React from 'react'
import './MovieEdit.css'

const MovieEdit=(params)=> {
  return (
    <div className='Editor'>
        <input placeholder='감상한 작품을 입력하세요' />
        <button>추가</button>
    </div>
  )
}

export default MovieEdit