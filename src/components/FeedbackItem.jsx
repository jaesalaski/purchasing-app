import {useState} from 'react'

export default function FeedbackItem() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('Item that a school would purchase')

    const handleClick = () => {
        setCount((oldCount) => {
            return oldCount + 1
        })
    }

    const clearCart = () => {
        setCount(0)
    }

    return (
        <div className='card'>
            <div className='num-display'>{count}</div>
            <div className='text-display'>{text}</div>
            <button onClick={handleClick}>Add to Cart</button>  
            <button onClick={clearCart}>Clear Cart</button>
        </div>
    )
}