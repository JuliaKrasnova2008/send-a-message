import React from 'react'
import './Forma.css'
import * as Yup from 'yup'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import paperclip from '../images/icon-paperclip.svg'
import PreviewFile from '../PreviewFile/PreviewFile'
import HistoryMessage from '../HistoryMessage/HistoryMessage'
import Modal from '../Modal/Modal'

export default function Forma() {
    const initialValues = {
        email: '',
        name: '',
        subject: '',
        message: '',
    }
    const loginSchema = Yup.object().shape({
        email: Yup.string('Введите корректный email').email('Введите корректный email').required('Email не может быть пустым').min(5, 'Короткий').max(25, 'Длинный'), //ключ email - это строка, эл/адрес, обязательное поле(не пустое), минималье кол-во и максимальное кол-во символов - эти методы взяты из библиотеки Yup
        name: Yup.string('Введите корректное имя').min(1, 'Короткий').max(25, 'Длинный').required('Имя не может быть пустым'),
    })
    const onSubmit = (values) => {
        console.log(values);
    }

    return (
        <>
            <div className='forma'>
                <h1 className='form__title'>Отправлялка сообщений</h1>
                <Formik
                    initialValues={initialValues} validationSchema={loginSchema} onSubmit={onSubmit}
                >
                    {(formik) => {
                        return <Form className='form'>
                            <label className='form__label'>От кого
                                <div className='form__fields'>
                                    <Field
                                        className="form__input form__input_name"
                                        id="input-name"
                                        name="name"
                                        type="name"
                                        autoComplete="off"
                                        placeholder="Имя"
                                    />
                                    <ErrorMessage name="name" component="div" className='error__message' />

                                    <Field
                                        className="form__input form__input_email"
                                        id="input-email"
                                        name="email"
                                        type="email"
                                        autoComplete="off"
                                        placeholder="Email"
                                    />
                                    <ErrorMessage name="email" component="div" className='error__message' />
                                </div>
                            </label>
                            <label className='form__label'>Кому
                                <div className='form__fields'>
                                    <Field
                                        className="form__input form__input_name"
                                        id="input-name"
                                        name="name"
                                        type="name"
                                        autoComplete="off"
                                        placeholder="Имя"
                                    />
                                    <ErrorMessage name="name" component="div" className='error__message' />
                                    <Field
                                        className="form__input form__input_email"
                                        id="input-email"
                                        name="email"
                                        type="email"
                                        autoComplete="off"
                                        placeholder="Email"
                                    />
                                    <ErrorMessage name="email" component="div" className='error__message' />
                                </div>
                            </label>
                            <label className='form__label'>Тема письма
                                <Field
                                    className="form__input"
                                    id="input-subject"
                                    name="subject"
                                    type="subject"
                                    autoComplete="off"
                                    placeholder="Моя тема письма"
                                />
                            </label>
                            <label className='form__label'>Сообщение
                                <Field
                                    className="form__input"
                                    id="input-message"
                                    name="message"
                                    type="message"
                                    autoComplete="off"
                                    placeholder="Введите сообщение"
                                />
                            </label>
                            {/* <Modal /> */}
                        </Form>
                    }}
                </Formik>
                <PreviewFile />
                <div className='form__attach-file'>
                    <img className='form__attach-file-icon' src={paperclip} />
                    <a className='form__attach-file-link'>Прикрепить файл</a>
                </div>
                <button className='form__button'>Отправить</button>
            </div>
            <HistoryMessage />
        </>

    )
}
