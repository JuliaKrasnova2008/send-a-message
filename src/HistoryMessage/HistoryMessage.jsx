import React from 'react'
import './HistoryMessage.css'

export default function HistoryMessage() {
    return (
        <>
            <h2 className='history-message__title'>Отправленные сообщения</h2>

            <div className='history-message'>
                <table>
                    <thead>
                        <tr>
                            <th className='table__th'>Дата</th>
                            <th className='table__th'>Тема</th>
                            <th className='table__th table__th_status'>Статус</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='table__tr-td'>
                            <td className='table__td'>30 сентября</td>
                            <td className='table__td table__td_t'>Тема письма, которая не поместится в эту строку, потому чdbfbdnvfsdbnfvsbnfvsbnfvsdfnbs</td>
                            <td className='table__td table__td_sended'>Отправлено</td>
                        </tr>
                        <tr className='table__tr-td'>
                            <td className='table__td'>30 сентября</td>
                            <td className='table__td'>Тема письма, которая не поместится в эту строку, потому чfbdnfbsdmnfbdsmnfbsmnfbsdmnf</td>
                            <td className='table__td table__td_queue'>В очереди</td>
                        </tr>
                        <tr className='table__tr-td'>
                            <td className='table__td'>30 сентября</td>
                            <td className='table__td'>Тема письма, которая не поместится в эту строку, потому чfbdnfbsdmnfbdsmnfbsmnfbsdmnf</td>
                            <td className='table__td table__td_error'>Ошибка</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* если сообщений не было, отрисовать:
            <p className='history-message__empty'>Сообщения ещё не отправлялись</p> */}
        </>

    )
}
