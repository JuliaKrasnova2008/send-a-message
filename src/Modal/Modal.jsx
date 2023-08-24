import React from 'react'
import './Modal.css'

export default function Modal() {
    return (
        <div className='modal__overlay'>
            <div className='modal'>
                <h4 className='info__title'>Бросайте файлы сюда, я ловлю</h4>
                <p className='info__subtitle'>Мы принимаем картинки (jpg, png, gif), офисные файлы (doc, xls, pdf) и zip-архивы. Размеры файла до 5 МБ</p>
            </div>
        </div>

    )
}
