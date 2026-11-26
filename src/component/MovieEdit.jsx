import React, {useState, useRef} from 'react'
import './MovieEdit.css'

const MovieEditor = ({onCreate}) => {
    const [title, setTitle] = useState('')
    const [rating, setRating] = useState(5)
    const inputRef = useRef()

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const onChangeRating = (e) => {
        setRating(e.target.value)
    }

    const onKeyDown = (e) => {
        if(e.key === 'Enter'){
            onSubmit()
        }
    }

    const onSubmit = () => {
        if(title.trim() === ''){
            inputRef.current.focus()
            return
        }

        onCreate(title, rating)
        setTitle('')
        setRating(5)
    }

    return (
        <div className='MovieEditor'>
            <input
                type="text"
                ref={inputRef}
                value={title}
                onChange={onChangeTitle}
                onKeyDown={onKeyDown}
                placeholder="영화 제목을 입력하세요"
            />

            <select value={rating} onChange={onChangeRating}>
                <option value={5}>★★★★★</option>
                <option value={4}>★★★★☆</option>
                <option value={3}>★★★☆☆</option>
                <option value={2}>★★☆☆☆</option>
                <option value={1}>★☆☆☆☆</option>
            </select>

            <button onClick={onSubmit}>추가</button>
        </div>
    )
}

export default MovieEditor