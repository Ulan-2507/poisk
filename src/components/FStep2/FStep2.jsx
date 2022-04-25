import React, {useState} from 'react'

const FStep2 = ({handleFormData, show, next, lost}) => {
    const [status, setStatus] = useState('is-last')
    const [formPay, setFormPay] = useState('4')
    const [price, setPrice] = useState(0)
    const [error, setError] = useState(false)

    const rewards = {
        '1': 'Верну бесплатно',
        '2': 'На усмотрение владельца',
        '3': 'По договорённости',
        '4': 'Верну за вознаграждение',
    }
    const data = {
        reward: formPay === '4' ? price : rewards[formPay]
    }

    const handleNext = () => {
        if(formPay === '4' && !price) {
            return setError(true)
        }
        handleFormData(data)
        next()
        setStatus('step-done')
    }

    return (
        <div 
            className={"step step2 step-reward  " + (show ? status : '')} 
            style={{display: `${show ? 'block' : 'none'}`}}
        >
            <div className="step-result">
                <div className="title">Вознаграждение</div>
                <p>{status === 'step-done' ? rewards[formPay] : null}</p>
                <span className="edit" onClick={() => setStatus('')}>Редактировать</span>
            </div>

            <div className="step-in">
                <div className="icon">
                    <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M37.3101 6.6586C37.3101 10.3304 34.323 13.3174 30.6513 13.3174C26.9798 13.3174 23.9927 10.3304 23.9927 6.6586C23.9927 2.98705 26.9797 0 30.6513 0C34.323 0 37.3101 2.98705 37.3101 6.6586ZM36.2589 6.65854C36.2589 3.56647 33.7433 1.05115 30.6513 1.05115C27.5593 1.05115 25.0439 3.56652 25.0439 6.65854C25.0439 9.75055 27.5593 12.2661 30.6513 12.2661C33.7433 12.2661 36.2589 9.75061 36.2589 6.65854ZM45.0027 6.8297C44.4358 6.71496 43.8521 6.65698 43.2678 6.65698V7.70819C43.7823 7.70819 44.2959 7.75928 44.7943 7.85987L45.0027 6.8297ZM46.3845 7.2301C47.6831 7.72669 48.8618 8.53975 49.7935 9.58144L49.0097 10.2821C48.1894 9.36489 47.1518 8.64886 46.0093 8.21203L46.3845 7.2301ZM28.534 20.3451L27.9288 19.4854C27.5346 19.7628 27.1604 20.0749 26.8165 20.4131L27.5536 21.1625C27.8567 20.8645 28.1865 20.5896 28.534 20.3451ZM12.1746 44.272H8.37679V46.6341H0V45.5829H7.32559V27.0115H0V25.9603H8.37679V28.3224H12.1746V30.1505H24.1L29.851 36.6084L45.8871 31.8621C47.3792 31.4062 48.9935 32.1978 49.5604 33.6645C50.1006 35.0706 49.5488 36.6312 48.2484 37.3765L27.5272 49.3101L16.9073 43.3121H12.1746V44.272ZM23.6282 31.2017H12.1746V42.2609H17.1834L27.522 48.0997L47.7249 36.4648C48.5731 35.9788 48.9322 34.9601 48.5795 34.0424C48.2107 33.0877 47.16 32.5726 46.1899 32.8688L30.5932 37.4818C31.4544 38.6509 31.3603 40.2879 30.3104 41.3377C29.1488 42.4998 27.2571 42.499 26.0958 41.3377L22.0375 37.2858L22.7803 36.5421L26.8388 40.5942C27.5913 41.3462 28.8152 41.3465 29.5672 40.5945C30.2927 39.869 30.3219 38.7054 29.6341 37.9452L29.2869 37.5589L23.6282 31.2017ZM8.37677 29.3737H11.1234V43.2208H8.37677V29.3737ZM6.88373 41.7671C6.88373 40.3885 5.76217 39.267 4.38389 39.267C3.00529 39.267 1.88373 40.3885 1.88373 41.7671C1.88373 43.1454 3.00529 44.267 4.38389 44.267C5.76223 44.267 6.88373 43.1454 6.88373 41.7671ZM3.1709 41.7671C3.1709 41.0984 3.71517 40.5541 4.38391 40.5541C5.05265 40.5541 5.5966 41.0984 5.5966 41.7671C5.5966 42.4358 5.05265 42.9798 4.38391 42.9798C3.71517 42.9798 3.1709 42.4358 3.1709 41.7671ZM24.804 50.3944L20.1641 47.7293L20.6876 46.8179L25.3275 49.483L24.804 50.3944ZM18.4604 45.5276L17.937 46.439L19.2963 47.2198L19.8197 46.3084L18.4604 45.5276ZM17.323 27.8872H22.7614V28.9384H17.323V27.8872ZM16.1268 27.8872H14.5153V28.9384H16.1268V27.8872ZM36.143 46.3219L36.7001 47.2133L34.8188 48.3892L34.2617 47.4977L36.143 46.3219ZM46.1913 40.0085L37.3876 45.5108L37.9448 46.4022L46.7485 40.9L46.1913 40.0085ZM25.2505 26.6505H24.1993C24.1993 24.6984 24.8304 22.8504 26.0245 21.3057L26.856 21.9488C25.8056 23.3074 25.2505 24.9333 25.2505 26.6505ZM39.612 26.6504C39.612 30.3219 36.6249 33.309 32.9534 33.309C29.2816 33.309 26.2946 30.3219 26.2946 26.6504C26.2946 22.9786 29.2816 19.9916 32.9534 19.9916C36.6249 19.9916 39.612 22.9786 39.612 26.6504ZM38.5608 26.6505C38.5608 23.5584 36.0454 21.0428 32.9534 21.0428C29.8614 21.0428 27.3458 23.5585 27.3458 26.6505C27.3458 29.7425 29.8613 32.2578 32.9534 32.2578C36.0454 32.2578 38.5608 29.7425 38.5608 26.6505ZM43.2678 22.0697C46.9393 22.0697 49.9263 19.0826 49.9263 15.4109C49.9263 11.7391 46.9393 8.75208 43.2678 8.75208C39.596 8.75208 36.6089 11.7391 36.6089 15.4109C36.6089 19.0826 39.596 22.0697 43.2678 22.0697ZM43.2678 9.80322C46.3598 9.80322 48.8751 12.3188 48.8751 15.4108C48.8751 18.5028 46.3598 21.0184 43.2678 21.0184C40.1757 21.0184 37.6602 18.5029 37.6602 15.4109C37.6602 12.3189 40.1757 9.80322 43.2678 9.80322ZM23.1142 8.25181C23.0044 7.73183 22.9487 7.19598 22.9487 6.65881H21.8975C21.8975 7.26883 21.9609 7.87784 22.0856 8.46888L23.1142 8.25181ZM27.0652 13.4745L26.574 14.4041C24.6464 13.3855 23.1735 11.6998 22.4269 9.65794L23.414 9.29712C24.0712 11.0942 25.3678 12.5778 27.0652 13.4745ZM6.7894 23.7391H3.48126V24.7903H6.7894V23.7391ZM1.38623 23.7391H2.58145V24.7903H1.38623V23.7391ZM29.7412 8.08631C29.7412 8.588 30.1495 8.99634 30.6512 8.99634C31.1532 8.99634 31.5615 8.58794 31.5615 8.08626C31.5615 7.58457 31.1532 7.17623 30.6512 7.17623C29.5698 7.17623 28.69 6.29647 28.69 5.21499C28.69 4.31674 29.3003 3.5657 30.1256 3.33413V2.24255H31.1768V3.33418C32.0022 3.56565 32.6127 4.31679 32.6127 5.21505H31.5615C31.5615 4.7131 31.1532 4.30476 30.6512 4.30476C30.1495 4.30476 29.7412 4.71304 29.7412 5.21505C29.7412 5.71674 30.1495 6.12508 30.6512 6.12508C31.7327 6.12508 32.6127 7.00483 32.6127 8.08631C32.6127 8.98456 32.0022 9.73549 31.1768 9.96697V11.0749H30.1256V9.96697C29.3004 9.73549 28.69 8.98456 28.69 8.08631H29.7412ZM43.2678 17.7486C42.7658 17.7486 42.3575 17.3402 42.3575 16.8385H41.3063C41.3063 17.7368 41.9168 18.4877 42.7422 18.7192V19.8271H43.7934V18.7192C44.6187 18.4877 45.229 17.7368 45.229 16.8385C45.229 15.7571 44.3493 14.8773 43.2678 14.8773C42.7658 14.8773 42.3575 14.469 42.3575 13.967C42.3575 13.4653 42.7658 13.057 43.2678 13.057C43.7695 13.057 44.1778 13.4653 44.1778 13.967H45.229C45.229 13.0688 44.6186 12.3178 43.7934 12.0864V10.9946H42.7422V12.0864C41.9168 12.3178 41.3063 13.0688 41.3063 13.967C41.3063 15.0485 42.1863 15.9285 43.2678 15.9285C43.7695 15.9285 44.1778 16.3369 44.1778 16.8385C44.1778 17.3402 43.7695 17.7486 43.2678 17.7486ZM32.0433 28.0779C32.0433 28.5798 32.4516 28.9882 32.9534 28.9882C33.4551 28.9882 33.8634 28.5799 33.8634 28.0779C33.8634 27.5762 33.4551 27.1679 32.9534 27.1679C31.8719 27.1679 30.9921 26.2881 30.9921 25.2066C30.9921 24.3084 31.6025 23.5575 32.4278 23.326V22.2343H33.479V23.326C34.3042 23.5575 34.9146 24.3084 34.9146 25.2066H33.8634C33.8634 24.705 33.455 24.2966 32.9534 24.2966C32.4517 24.2966 32.0433 24.705 32.0433 25.2066C32.0433 25.7083 32.4516 26.1167 32.9534 26.1167C34.0348 26.1167 34.9146 26.9964 34.9146 28.0779C34.9146 28.9762 34.3043 29.7272 33.479 29.9588V31.0665H32.4278V29.9588C31.6025 29.7272 30.9921 28.9762 30.9921 28.0779H32.0433Z" fill="#FF9419"></path>
                    </svg>
                </div>
                <h3 className="sn-form__title">Вознаграждение</h3>

                <div className="fsearch">
                    <div>
                        <div className="fsearch">
                        <div>
                            <div className="fsearch__top">
                            <div className="fsearch__heading">выберите из списка:</div>

                            <ul className="auth-form__radios">
                                {!lost?
                                    <li>
                                        <label className="auth-form__label">
                                            <input 
                                                type="radio" value="1" data-val="true" 
                                                data-val-required="The RewardType field is required." 
                                                id="RewardType" name="RewardType"
                                                checked={formPay === '1'}
                                                onChange={(e) => setFormPay(e.target.value)}
                                            />
                                            <span></span>
                                            <span>Верну бесплатно</span>
                                        </label>
                                    </li>
                                    :null
                                }
                                <li>
                                    <label className="auth-form__label">
                                        <input 
                                            type="radio" value="2" data-val="true" 
                                            data-val-required="The RewardType field is required." 
                                            id="RewardType" name="RewardType" 
                                            checked={formPay === '2'}
                                            onChange={(e) => setFormPay(e.target.value)}
                                        />
                                        <span></span>
                                        <span>По договорённости</span>
                                    </label>
                                </li>
                                {!lost ?
                                    <li>
                                    <label className="auth-form__label">
                                        <input 
                                            type="radio" value="3" 
                                            id="RewardType" name="RewardType"
                                            checked={formPay === '3'}
                                            onChange={(e) => setFormPay(e.target.value)}
                                        />
                                        <span></span>
                                        <span>По договорённости</span>
                                    </label>
                                    </li>
                                    : null
                                }
                                <li>
                                    <label className="auth-form__label">
                                        <input 
                                            type="radio" value="4" 
                                            id="RewardType" name="RewardType" 
                                            checked={formPay === '4'}
                                            onChange={(e) => setFormPay(e.target.value)}
                                        />
                                        <span></span>
                                        <span>Введите сумму</span>
                                    </label>
                                </li>
                            </ul>

                            <div className="auth-form__wsum cash-fields" style={{display: `${formPay === '4' ? "block" : "none"}`}}>
                                <input 
                                    type="number" className={ "js-hide-cash " + (error && !price && 'error')} 
                                    data-val="true" data-val-required="The Reward field is required." 
                                    id="Reward" name="Reward" value={price} 
                                    onChange={(e) => setPrice(e.target.value)}
                                /> 
                                <span>сом</span>
                                <p>Введите желаемую сумму</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="next-step js-next" onClick={handleNext}>Далее</div>
                <div className="count-step">{'Шаг 2 из ' + (lost ? '4' : '3')}</div>
            </div>
        </div>
    )
}

export default FStep2
