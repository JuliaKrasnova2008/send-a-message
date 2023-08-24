import React from 'react'
import './PreviewFile.css'
import clip from '../images/icon-preview-file.svg'
import basket from '../images/basket.svg'

export default function PreviewFile() {
    return (
        <ul className='preview-file__list'>
            <li className='preview-file__item'>
                <div className='preview-file__file'>
                    <img className='preview-file__icon' src={clip} />
                    <h3 className='preview-file__title'>Название
                        <p className='preview-file__subtitle'>.jpg</p>
                    </h3>
                </div>
                <button className='preview-file__button'>
                    <img className='preview-file__button-img' src={basket} />
                    Удалить
                </button>
            </li>

            <li className='preview-file__item'>
                <div className='preview-file__file'>
                    <img className='preview-file__icon' src={clip} />
                    <h3 className='preview-file__title'>Название
                        <p className='preview-file__subtitle'>.jpg</p>
                    </h3>
                </div>
                <button className='preview-file__button'>
                    <img className='preview-file__button-img' src={basket} />
                    Удалить
                </button>
            </li>

        </ul>
    )
}
