import React from 'react'
import './Dispatching.css'
import HistoryMessage from '../HistoryMessage/HistoryMessage'

export default function Dispatching() {
    return (
        <>
            <div className='dispatching'>
                <h4 className='info__title'>Сообщение поставлено в очередь на отправку</h4>
                <p className='info__subtitle'>Совсем скоро сообщение вылетит из сервера, и будет двигаться в сторону почты
                    получателя
                    <span className='info__mail'> «abc@my.com» </span>
                    со скоростью электронов.</p>
            </div>
            <HistoryMessage />
        </>

    )
}
