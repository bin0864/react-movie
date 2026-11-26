import React, {useState} from 'react'
import './MovieItem.css'

const toInputDate = (time) => {
    const d = new Date(time)
    const mm = String(d.getMonth() + 1).padStart(2, '0')
    const dd = String(d.getDate()).padStart(2, '0')

    return `${d.getFullYear()}-${mm}-${dd}`
}

const MovieItem = ({
    id, isDone, title, rating, date, onUpdate, onDelete
}) => {

    const [isEdit, setIsEdit] = useState(false)
    const [editTitle, setEditTitle] = useState(title)
    const [editRating, setEditRating] = useState(rating)
    const [editDate, setEditDate] = useState(toInputDate(date))

    const onChangeCheck = () => {
        onUpdate(id, {isDone: !isDone})
    }

    const onClickUpdate = () => {
        if(isEdit){
            if(!editTitle.trim() || !editDate) return

            onUpdate(id, {
                title: editTitle,
                rating: Number(editRating),
                date: new Date(editDate + 'T00:00:00').getTime()
            })
        }

        setIsEdit(!isEdit)
    }

    const onClickDeleteButton = () => {
        onDelete(id)
    }

    return (
        <div className={`MovieItem ${isDone ? "isDone" : ""}`}>
            <input
                type="checkbox"
                checked={isDone}
                onChange={onChangeCheck}
            />

            {isEdit ? (
                <>
                    <input
                        type="text"
                        className="title"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                    />

                    <select
                        className="rating"
                        value={editRating}
                        onChange={(e) => setEditRating(e.target.value)}
                    >
                        <option value={5}>★★★★★</option>
                        <option value={4}>★★★★☆</option>
                        <option value={3}>★★★☆☆</option>
                        <option value={2}>★★☆☆☆</option>
                        <option value={1}>★☆☆☆☆</option>
                    </select>

                    <input
                        type="date"
                        className="date"
                        value={editDate}
                        onChange={(e) => setEditDate(e.target.value)}
                    />
                </>
            ) : (
                <>
                    <div className="title">{title}</div>

                    <div className="rating">
                        {'★'.repeat(rating)}
                        {'☆'.repeat(5-rating)}
                    </div>

                    <div className="date">
                        {new Date(date).toLocaleDateString()}
                    </div>
                </>
            )}

            <div className="btns-wrap">
                <button
                    className="updateBtn"
                    onClick={onClickUpdate}
                >
                    {isEdit ? '저장' : '수정'}
                </button>

                <button
                    className="deleteBtn"
                    onClick={onClickDeleteButton}
                >
                    삭제
                </button>
            </div>
        </div>
    )
}

export default MovieItem