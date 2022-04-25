import React, {useState} from 'react'

import PageTop from '../components/PageTop'
import BcrumbsBox from '../components/BcrumbsBox'

import bg_img_pc from '../assets/img/faq/2348128.jpg'
import bg_img_mob from '../assets/img/faq/2348128-mob.png'
import tg from '../assets/img/tg.png'

const AboutPage = () => {
    const [open, setOpen] = useState(false)
    const [select, setSelect] = useState("- Выберите тему -")
    const [file, setFile] = useState()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSelect = (e) => {
        setSelect(e.target.textContent)
    }
    const selectFile = ({ target: { files: [file] } }) => {
        setFile(file)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({
            name,
            email,
            message
        })
    }
    return (
        <>
            <PageTop 
                title={'О нас'}
                subtitle={'Глобальный процесс возврата утерянных вещей - наша основная задача'}
                bigImg={bg_img_pc}
                smallImg={bg_img_mob}
            />  
            <BcrumbsBox navigate={[{linkname:'О нас'}]}/>   

            <div className="text-inner">
                <div className="container">
                    <div className="text-inner_in">
                        <p style={{textAlign: 'justify'}}><span>Тематика
                                бюро находок довольна стара, но до сегодняшнего дня сложность реализации
                                заключалась в сборе и быстрой обработке большого количества информации.
                                Поскольку нашей специализацией является разработка баз данных, мы приняли вызов
                                создать быстродействующий и оптимальный со стороны удобства пользования ресурс.</span></p>

                        <p style={{textAlign: 'justify'}}><span><span>Poisk.kg</span></span><span> система онлайн-поиска утерянных и
                                найденных
                                вещей по всему Кыргызстану, которая работает для Вас 24 часа в сутки / 7 дней в
                                неделю. </span></p>

                        <p style={{textAlign: 'justify'}}><span>Многие
                                вещи нам очень дороги и незаменимы. Поэтому, добросовестный гражданин
                                обнаруживший утерянную вещь, может действительно осчастливить её владельца
                                просто воспользовавшись сервисом </span><span><span>Poisk.kg</span></span><span>.</span></p>

                        <p style={{textAlign: 'justify'}}><span>Результатом
                                возврата тысячи потерянных вещей, будет тысяча счастливых их владельцев.</span></p>

                        <p style={{textAlign: 'justify'}}><span>Мы
                                живем в цифровую эпоху, когда информация взаимосвязана. Тем не менее, ящики с утерянными
                                и найденными вещами разбросаны по всей стране, а владелец не знает, где искать,
                                и потерял всякую надежду. Формы </span><span>Excel</span><span> или местные системы, используемые
                                организациями
                                для регистрации утерянного имущества, уже не соответствуют сегодняшнему дню.</span></p>

                        <p><span>Мы собираемся это изменить.</span></p>

                        <p style={{textAlign: 'justify'}}><span>Сервис
                            </span><span><span>Poisk.ua</span></span><span> играет ведущую роль по оказанию услуг поиска утерянного
                                имущества. Упрощая задачу для нашедшего, мы помогаем потерявшему. Знаете ли вы,
                                что 80% потерянных вещей опубликованные организациями через наш Портал, находят
                                своих владельцев? Мы нацелены на сотрудничество и реализацию своих сервисов для
                                отелей, муниципалитетов, общественного транспорта, мероприятий, фестивалей,
                                конгресс-холлов и стадионов. Мы связываем нашедших и владельцев с помощью нашего Портала. Организация глобального процесса возврата утерянных вещей - наша основная миссия.</span></p>

                        <p><span>С уважением</span></p>

                        <p><span>Команда </span><span>Poisk.kg</span></p>

                        <p><span>Контактные данные администрации: </span></p>

                        <p>
                            <span>Telegram-канал: 
                                <a href="https://t.me/poisk24kg">
                                    <img src={tg} alt='tg'/>
                                </a>
                            </span>
                        </p>

                        <p><span>Электронная почта: </span><span><a href="mailto:info@poisk.kg"><span>info@poisk.kg</span></a></span><span> </span></p>    
                        
                        <p>
                            Для простоты и удобства Вы можете воспользоваться формой обратной связи. Просто выберите тему, которая
                            вас интересует из списка, введите обратный адрес и сформулируйте ваш запрос, пожелание или отзыв.
                        </p> 
                        
                        <div className="form-callback">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-6">
                                        <label>Ваше имя</label>
                                        <input 
                                            type="text" placeholder="Введите Ваше имя" name="name"
                                            value={name} onChange={e => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <label>Ваш email</label>
                                        <input 
                                            type="text" placeholder="Введите Ваш email" name="email"
                                            value={email} onChange={e => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <label>выберите тему письма</label>
                                        <div 
                                            className={"fsearch__select " + (open ? 'fsearch__select_active' : '')} 
                                            onClick={() => setOpen(open => !open)}
                                        >
                                            <label>
                                                <input 
                                                    type="text" 
                                                    className="fsearch__select-input" 
                                                    value={select} 
                                                    onChange={()=>{}}
                                                    name="theme"
                                                />
                                            </label>
                                            <ul className="fsearch__select-list" onClick={handleSelect}>
                                                <li>Вопросы по управлению публикацией</li>
                                                <li>Вопросы по личному кабинету</li>
                                                <li>Вопросы по моей публикации</li>
                                                <li>Отзыв или предложение об улучшении функционала</li>
                                                <li>Найдена ошибка на ресурсе</li>
                                                <li>Предложения о деловом партнёрстве</li>
                                                <li>Удалить профиль в личном кабинете</li>
                                                <li>Не могу найти письмо-подтверждение о публикации</li>
                                                <li>Другие вопросы</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <label>Сообщение</label>
                                        <textarea 
                                            placeholder="Напишите Ваш вопрос, пожелание или отзыв" name="content"
                                            value={message} onChange={e => setMessage(e.target.value)}
                                        />
                                    </div>
                                </div>     
                                <div className="row">
                                    <div className="col-12">
                                        <label>Выберите файл для загрузки</label>
                                        <input 
                                            type="file" className="form-control-file" 
                                            name="upload" accept="image/jpeg, image/png, application/pdf, .doc, .docx, application/msword" 
                                            value={file} onChange={selectFile}
                                        />
                                    </div>
                                </div> 
                                
                                <button type="submit" className="btn-blue">Отправить</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AboutPage
