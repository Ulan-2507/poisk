import React, {useState, Suspense, lazy} from 'react'
import { useNavigate } from 'react-router-dom'

import PageTop from '../components/PageTop'
import BcrumbsBox from '../components/BcrumbsBox'

import bg_img_pc from '../assets/img/ap/0348128.png'
import bg_img_mob from '../assets/img/ap/0348128-mob.png'

const FStep1 = lazy(() => import('../components/FStep1'))
const FStep2 = lazy(() => import('../components/FStep2'))
const FStep4 = lazy(() => import('../components/FStep4'))

const FoundCreatePage = () => {
    const navigate = useNavigate()
    const [formData, setFormDate] = useState({})

    const [showStep2, setShowStep2] = useState(false)
    const [showStep4, setShowStep4] = useState(false)

    const handleFormData = (data) => {
        setFormDate(formData => setFormDate({...formData, ...data}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        // отправить данные на сервер получить id
        const id = 'jkfljdlksjl'

        navigate(`/found/create/${id}`)
    }
    return (
        <>
            <PageTop 
                title={'Публикация находки'}
                subtitle=''
                bigImg={bg_img_pc}
                smallImg={bg_img_mob}
            />  
            <BcrumbsBox navigate={[{path:'/found', linkname:'Доска находок'}]}/> 
            <div className="ap">
                <div className="container">
                    <div className="ap__box">
                        <div>
                        <form 
                            className="sn-form sn-form_blue sn-form_2 sn-form_blue--step"
                            onSubmit={handleSubmit}
                        >
                            <div className="sn-form__rows">
                            <Suspense fallback={null}>
                                <FStep1 handleFormData={handleFormData} next={() => setShowStep2(true)}/>
                                <FStep2 handleFormData={handleFormData} show={showStep2} next={() => setShowStep4(true)}/>
                                <FStep4 handleFormData={handleFormData} show={showStep4} />
                            </Suspense>
                            </div>
                        </form>
                        </div>
                        <div>
                            <div className="ap__text ap__text2">
                                <p>Проявите порядочность – верните находку ее законному владельцу и позвольте Вас отблагодарить. Кроме того, при публикации объявления предоставляется возможность заявить о размере ожидаемой благодарности.</p>
                                <ul>
                                    <li><i>
                                            <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M27.5044 27.0995L27.4636 27.1405V34.5072H1V9.26795L9.21802 1H27.4636V15.9481C27.6236 16.078 27.7804 16.2153 27.9286 16.3645C29.3856 17.8301 30.0413 20.0144 29.4605 22.1726L30.9311 23.6521L30.1636 24.4242L34.4488 28.7354C35.184 29.4746 35.1835 30.6715 34.4488 31.4106C33.7138 32.1501 32.5245 32.15 31.7896 31.4106L27.5044 27.0995ZM33.9479 30.9067C34.4059 30.4459 34.4059 29.6999 33.9479 29.2391L29.6627 24.9279L28.0051 26.5955L32.2903 30.9067C32.7327 31.3517 33.5048 31.3521 33.9479 30.9067ZM26.8947 24.8003L26.8962 24.7991C29.4064 22.8938 29.689 19.1432 27.4276 16.8682C25.3657 14.7916 22.0332 14.834 20.0115 16.8682C17.9704 18.9218 17.9707 22.2705 20.012 24.3332C21.86 26.1925 24.8192 26.3933 26.8947 24.8003ZM9.01232 9.06041V2.21473L2.20797 9.06041H9.01232ZM1.70824 33.7948H26.7552V27.8533L26.7362 27.8724L25.2539 26.381C23.2553 26.9129 21.0457 26.3813 19.5106 24.8366C17.1936 22.4956 17.1938 18.6952 19.5106 16.3645C21.4464 14.4168 24.4526 14.0711 26.7552 15.4474V1.71274H9.72046V9.77314H1.70824V33.7948ZM26.0036 26.1273L26.7363 26.8645L27.0037 26.5956L27.0031 26.595L29.6623 23.9198L29.6628 23.9203L29.9295 23.652L29.2065 22.9248C28.8068 23.883 28.1637 24.7291 27.3242 25.3667L27.3242 25.3668L27.3236 25.3672L27.3227 25.368L27.3226 25.3679C26.91 25.6844 26.4656 25.9349 26.0036 26.1273ZM23.1669 29.3383H10.4896V30.0509H23.1669V29.3383ZM5.2984 29.3383H8.32436V30.0509H5.2984V29.3383ZM17.699 25.3579H5.2984V26.0705H17.699V25.3579ZM11.0417 21.3777H16.9385V22.0903H11.0417V21.3777ZM8.7065 21.3777H5.2984V22.0903H8.7065V21.3777ZM5.2984 17.3973H17.2843V18.1099H5.2984V17.3973ZM23.167 13.4171H11.8912V14.1297H23.167V13.4171ZM5.2984 13.4171H9.40704V14.1297H5.2984V13.4171ZM20.3389 20.6005H19.6306C19.6306 18.2866 21.5017 16.404 23.8017 16.404V17.1166C21.8924 17.1166 20.3389 18.6794 20.3389 20.6005Z" fill="#4A90E2"></path>
                                                <path d="M27.4636 27.1405L27.1977 26.8761L27.0886 26.9858V27.1405H27.4636ZM27.5044 27.0995L27.7704 26.8351L27.5044 26.5675L27.2385 26.8351L27.5044 27.0995ZM27.4636 34.5072V34.8822H27.8386V34.5072H27.4636ZM1 34.5072H0.625V34.8822H1V34.5072ZM1 9.26795L0.734033 9.00359L0.625 9.11329V9.26795H1ZM9.21802 1V0.625H9.06203L8.95206 0.735639L9.21802 1ZM27.4636 1H27.8386V0.625H27.4636V1ZM27.4636 15.9481H27.0886V16.1267L27.2273 16.2393L27.4636 15.9481ZM27.9286 16.3645L27.6625 16.6287L27.6627 16.6289L27.9286 16.3645ZM29.4605 22.1726L29.0984 22.0752L29.0422 22.2838L29.1945 22.437L29.4605 22.1726ZM30.9311 23.6521L31.197 23.9164L31.4598 23.6521L31.197 23.3877L30.9311 23.6521ZM30.1636 24.4242L29.8976 24.1598L29.6348 24.4242L29.8976 24.6886L30.1636 24.4242ZM34.4488 28.7354L34.1828 28.9997L34.1829 28.9998L34.4488 28.7354ZM34.4488 31.4106L34.7148 31.675V31.675L34.4488 31.4106ZM31.7896 31.4106L31.5237 31.675L31.7896 31.4106ZM33.9479 29.2391L33.6819 29.5035V29.5035L33.9479 29.2391ZM33.9479 30.9067L34.2137 31.1712L34.2139 31.1711L33.9479 30.9067ZM29.6627 24.9279L29.9286 24.6636L29.6627 24.396L29.3967 24.6636L29.6627 24.9279ZM28.0051 26.5955L27.7391 26.3311L27.4764 26.5955L27.7391 26.8599L28.0051 26.5955ZM32.2903 30.9067L32.0244 31.1711L32.2903 30.9067ZM26.8962 24.7991L26.6695 24.5004L26.6661 24.503L26.8962 24.7991ZM26.8947 24.8003L27.123 25.0978L27.1248 25.0964L26.8947 24.8003ZM27.4276 16.8682L27.1615 17.1324L27.1617 17.1325L27.4276 16.8682ZM20.0115 16.8682L19.7455 16.6038L19.7455 16.6038L20.0115 16.8682ZM20.012 24.3332L19.7455 24.597L19.7461 24.5976L20.012 24.3332ZM9.01232 2.21473H9.38732V1.30551L8.74635 1.95037L9.01232 2.21473ZM9.01232 9.06041V9.43541H9.38732V9.06041H9.01232ZM2.20797 9.06041L1.94201 8.79605L1.30651 9.43541H2.20797V9.06041ZM26.7552 33.7948V34.1698H27.1302V33.7948H26.7552ZM1.70824 33.7948H1.33324V34.1698H1.70824V33.7948ZM26.7552 27.8533H27.1302V26.944L26.4892 27.5889L26.7552 27.8533ZM26.7362 27.8724L26.4702 28.1368L26.7362 28.4044L27.0021 28.1368L26.7362 27.8724ZM25.2539 26.381L25.5199 26.1167L25.367 25.9629L25.1575 26.0186L25.2539 26.381ZM19.5106 24.8366L19.244 25.1004L19.2446 25.101L19.5106 24.8366ZM19.5106 16.3645L19.7765 16.6288L19.7765 16.6288L19.5106 16.3645ZM26.7552 15.4474L26.5628 15.7693L27.1302 16.1085V15.4474H26.7552ZM26.7552 1.71274H27.1302V1.33774H26.7552V1.71274ZM9.72046 1.71274V1.33774H9.34546V1.71274H9.72046ZM9.72046 9.77314V10.1481H10.0955V9.77314H9.72046ZM1.70824 9.77314V9.39814H1.33324V9.77314H1.70824ZM26.7363 26.8645L26.4703 27.1289L26.7363 27.3965L27.0023 27.1289L26.7363 26.8645ZM26.0036 26.1273L25.8594 25.7812L25.3443 25.9958L25.7377 26.3917L26.0036 26.1273ZM27.0037 26.5956L27.2696 26.8599L27.5327 26.5952L27.2693 26.3309L27.0037 26.5956ZM27.0031 26.595L26.7372 26.3307L26.4741 26.5954L26.7375 26.8597L27.0031 26.595ZM29.6623 23.9198L29.9279 23.6551L29.662 23.3882L29.3963 23.6554L29.6623 23.9198ZM29.6628 23.9203L29.3972 24.185L29.6631 24.4519L29.9288 24.1847L29.6628 23.9203ZM29.9295 23.652L30.1954 23.9164L30.4582 23.652L30.1954 23.3877L29.9295 23.652ZM29.2065 22.9248L29.4725 22.6604L29.0767 22.2621L28.8605 22.7804L29.2065 22.9248ZM27.3242 25.3667L27.0974 25.0681L26.8524 25.2541L26.987 25.5308L27.3242 25.3667ZM27.3242 25.3668L27.5373 25.6754L27.8024 25.4924L27.6615 25.2027L27.3242 25.3668ZM27.3236 25.3672L27.1105 25.0586L27.0957 25.0689L27.0819 25.0805L27.3236 25.3672ZM27.3227 25.368L27.0575 25.6332L27.3011 25.8767L27.5644 25.6547L27.3227 25.368ZM27.3226 25.3679L27.5878 25.1027L27.3553 24.8703L27.0944 25.0704L27.3226 25.3679ZM10.4896 29.3383V28.9633H10.1146V29.3383H10.4896ZM23.1669 29.3383H23.5419V28.9633H23.1669V29.3383ZM10.4896 30.0509H10.1146V30.4259H10.4896V30.0509ZM23.1669 30.0509V30.4259H23.5419V30.0509H23.1669ZM8.32436 29.3383H8.69936V28.9633H8.32436V29.3383ZM5.2984 29.3383V28.9633H4.9234V29.3383H5.2984ZM8.32436 30.0509V30.4259H8.69936V30.0509H8.32436ZM5.2984 30.0509H4.9234V30.4259H5.2984V30.0509ZM5.2984 25.3579V24.9829H4.9234V25.3579H5.2984ZM17.699 25.3579H18.074V24.9829H17.699V25.3579ZM5.2984 26.0705H4.9234V26.4455H5.2984V26.0705ZM17.699 26.0705V26.4455H18.074V26.0705H17.699ZM16.9385 21.3777H17.3135V21.0027H16.9385V21.3777ZM11.0417 21.3777V21.0027H10.6667V21.3777H11.0417ZM16.9385 22.0903V22.4653H17.3135V22.0903H16.9385ZM11.0417 22.0903H10.6667V22.4653H11.0417V22.0903ZM5.2984 21.3777V21.0027H4.9234V21.3777H5.2984ZM8.7065 21.3777H9.0815V21.0027H8.7065V21.3777ZM5.2984 22.0903H4.9234V22.4653H5.2984V22.0903ZM8.7065 22.0903V22.4653H9.0815V22.0903H8.7065ZM17.2843 17.3973H17.6593V17.0223H17.2843V17.3973ZM5.2984 17.3973V17.0223H4.9234V17.3973H5.2984ZM17.2843 18.1099V18.4849H17.6593V18.1099H17.2843ZM5.2984 18.1099H4.9234V18.4849H5.2984V18.1099ZM11.8912 13.4171V13.0421H11.5162V13.4171H11.8912ZM23.167 13.4171H23.542V13.0421H23.167V13.4171ZM11.8912 14.1297H11.5162V14.5047H11.8912V14.1297ZM23.167 14.1297V14.5047H23.542V14.1297H23.167ZM9.40704 13.4171H9.78204V13.0421H9.40704V13.4171ZM5.2984 13.4171V13.0421H4.9234V13.4171H5.2984ZM9.40704 14.1297V14.5047H9.78204V14.1297H9.40704ZM5.2984 14.1297H4.9234V14.5047H5.2984V14.1297ZM19.6306 20.6005H19.2556V20.9755H19.6306V20.6005ZM20.3389 20.6005V20.9755H20.7139V20.6005H20.3389ZM23.8017 16.404H24.1767V16.029L23.8017 16.029L23.8017 16.404ZM23.8017 17.1166V17.4916H24.1767V17.1166H23.8017ZM27.7296 27.4049L27.7704 27.3638L27.2385 26.8351L27.1977 26.8761L27.7296 27.4049ZM27.8386 34.5072V27.1405H27.0886V34.5072H27.8386ZM1 34.8822H27.4636V34.1322H1V34.8822ZM0.625 9.26795V34.5072H1.375V9.26795H0.625ZM8.95206 0.735639L0.734033 9.00359L1.26597 9.53231L9.48399 1.26436L8.95206 0.735639ZM27.4636 0.625H9.21802V1.375H27.4636V0.625ZM27.8386 15.9481V1H27.0886V15.9481H27.8386ZM28.1947 16.1002C28.0345 15.9389 27.867 15.7926 27.6999 15.6569L27.2273 16.2393C27.3802 16.3634 27.5263 16.4916 27.6625 16.6287L28.1947 16.1002ZM29.8226 22.2701C30.4393 19.9786 29.7428 17.6575 28.1946 16.1001L27.6627 16.6289C29.0284 18.0027 29.6434 20.0502 29.0984 22.0752L29.8226 22.2701ZM31.197 23.3877L29.7265 21.9083L29.1945 22.437L30.6651 23.9164L31.197 23.3877ZM30.4295 24.6886L31.197 23.9164L30.6651 23.3877L29.8976 24.1598L30.4295 24.6886ZM34.7148 28.471L30.4295 24.1598L29.8976 24.6886L34.1828 28.9997L34.7148 28.471ZM34.7148 31.675C35.5947 30.7897 35.5954 29.3566 34.7147 28.4709L34.1829 28.9998C34.7725 29.5927 34.7722 30.5533 34.1828 31.1463L34.7148 31.675ZM31.5237 31.675C32.4052 32.5618 33.8331 32.562 34.7148 31.675L34.1828 31.1463C33.5945 31.7382 32.6439 31.7381 32.0556 31.1463L31.5237 31.675ZM27.2385 27.3638L31.5237 31.675L32.0556 31.1463L27.7704 26.8351L27.2385 27.3638ZM33.6819 29.5035C33.9946 29.818 33.9946 30.3278 33.6819 30.6423L34.2139 31.1711C34.8172 30.564 34.8173 29.5818 34.2139 28.9748L33.6819 29.5035ZM29.3967 25.1923L33.6819 29.5035L34.2139 28.9748L29.9286 24.6636L29.3967 25.1923ZM28.2711 26.8599L29.9286 25.1923L29.3967 24.6636L27.7391 26.3311L28.2711 26.8599ZM32.5563 30.6423L28.2711 26.3311L27.7391 26.8599L32.0244 31.1711L32.5563 30.6423ZM33.682 30.6422C33.3856 30.9402 32.852 30.9399 32.5563 30.6423L32.0244 31.1711C32.6133 31.7636 33.6241 31.7639 34.2137 31.1712L33.682 30.6422ZM26.6661 24.503L26.6646 24.5042L27.1248 25.0964L27.1264 25.0952L26.6661 24.503ZM27.1617 17.1325C29.2631 19.2467 28.999 22.7323 26.6695 24.5004L27.123 25.0978C29.8139 23.0554 30.1149 19.0398 27.6936 16.6038L27.1617 17.1325ZM20.2775 17.1325C22.1546 15.2438 25.2483 15.2055 27.1615 17.1324L27.6937 16.6039C25.4831 14.3776 21.9118 14.4242 19.7455 16.6038L20.2775 17.1325ZM20.2786 24.0694C18.3815 22.1525 18.3821 19.0395 20.2775 17.1325L19.7455 16.6038C17.5587 18.8041 17.5599 22.3885 19.7455 24.597L20.2786 24.0694ZM26.6664 24.5028C24.7409 25.9806 21.9934 25.7947 20.278 24.0689L19.7461 24.5976C21.7266 26.5902 24.8974 26.8059 27.123 25.0978L26.6664 24.5028ZM8.63732 2.21473V9.06041H9.38732V2.21473H8.63732ZM2.47394 9.32477L9.27829 2.47909L8.74635 1.95037L1.94201 8.79605L2.47394 9.32477ZM9.01232 8.68541H2.20797V9.43541H9.01232V8.68541ZM26.7552 33.4198H1.70824V34.1698H26.7552V33.4198ZM26.3802 27.8533V33.7948H27.1302V27.8533H26.3802ZM27.0021 28.1368L27.0212 28.1176L26.4892 27.5889L26.4702 27.6081L27.0021 28.1368ZM24.9879 26.6454L26.4702 28.1368L27.0021 27.6081L25.5199 26.1167L24.9879 26.6454ZM19.2446 25.101C20.8779 26.7444 23.2271 27.3085 25.3504 26.7434L25.1575 26.0186C23.2835 26.5173 21.2135 26.0182 19.7766 24.5723L19.2446 25.101ZM19.2446 16.1001C16.7822 18.5774 16.7828 22.6136 19.244 25.1004L19.7771 24.5729C17.6045 22.3776 17.6055 18.813 19.7765 16.6288L19.2446 16.1001ZM26.9476 15.1256C24.4984 13.6616 21.3029 14.0292 19.2446 16.1001L19.7765 16.6288C21.5899 14.8043 24.4068 14.4806 26.5628 15.7693L26.9476 15.1256ZM26.3802 1.71274V15.4474H27.1302V1.71274H26.3802ZM9.72046 2.08774H26.7552V1.33774H9.72046V2.08774ZM10.0955 9.77314V1.71274H9.34546V9.77314H10.0955ZM1.70824 10.1481H9.72046V9.39814H1.70824V10.1481ZM2.08324 33.7948V9.77314H1.33324V33.7948H2.08324ZM27.0023 26.6002L26.2696 25.863L25.7377 26.3917L26.4703 27.1289L27.0023 26.6002ZM26.7377 26.3312L26.4703 26.6002L27.0023 27.1289L27.2696 26.8599L26.7377 26.3312ZM26.7375 26.8597L26.738 26.8603L27.2693 26.3309L27.2688 26.3303L26.7375 26.8597ZM29.3963 23.6554L26.7372 26.3307L27.2691 26.8594L29.9282 24.1841L29.3963 23.6554ZM29.9285 23.6556L29.9279 23.6551L29.3966 24.1845L29.3972 24.185L29.9285 23.6556ZM29.6635 23.3877L29.3968 23.6559L29.9288 24.1847L30.1954 23.9164L29.6635 23.3877ZM28.9406 23.1891L29.6635 23.9164L30.1954 23.3877L29.4725 22.6604L28.9406 23.1891ZM27.551 25.6653C28.4446 24.9867 29.1281 24.0868 29.5526 23.0691L28.8605 22.7804C28.4855 23.6792 27.8829 24.4715 27.0974 25.0681L27.551 25.6653ZM27.6615 25.2027L27.6614 25.2027L26.987 25.5308L26.987 25.5308L27.6615 25.2027ZM27.5366 25.6758L27.5373 25.6754L27.1112 25.0582L27.1105 25.0586L27.5366 25.6758ZM27.5644 25.6547L27.5653 25.654L27.0819 25.0805L27.081 25.0813L27.5644 25.6547ZM27.0574 25.6331L27.0575 25.6332L27.5878 25.1028L27.5878 25.1027L27.0574 25.6331ZM26.1479 26.4735C26.6377 26.2694 27.1107 26.003 27.5508 25.6655L27.0944 25.0704C26.7093 25.3657 26.2935 25.6003 25.8594 25.7812L26.1479 26.4735ZM10.4896 29.7133H23.1669V28.9633H10.4896V29.7133ZM10.8646 30.0509V29.3383H10.1146V30.0509H10.8646ZM23.1669 29.6759H10.4896V30.4259H23.1669V29.6759ZM22.7919 29.3383V30.0509H23.5419V29.3383H22.7919ZM8.32436 28.9633H5.2984V29.7133H8.32436V28.9633ZM8.69936 30.0509V29.3383H7.94936V30.0509H8.69936ZM5.2984 30.4259H8.32436V29.6759H5.2984V30.4259ZM4.9234 29.3383V30.0509H5.6734V29.3383H4.9234ZM5.2984 25.7329H17.699V24.9829H5.2984V25.7329ZM5.6734 26.0705V25.3579H4.9234V26.0705H5.6734ZM17.699 25.6955H5.2984V26.4455H17.699V25.6955ZM17.324 25.3579V26.0705H18.074V25.3579H17.324ZM16.9385 21.0027H11.0417V21.7527H16.9385V21.0027ZM17.3135 22.0903V21.3777H16.5635V22.0903H17.3135ZM11.0417 22.4653H16.9385V21.7153H11.0417V22.4653ZM10.6667 21.3777V22.0903H11.4167V21.3777H10.6667ZM5.2984 21.7527H8.7065V21.0027H5.2984V21.7527ZM5.6734 22.0903V21.3777H4.9234V22.0903H5.6734ZM8.7065 21.7153H5.2984V22.4653H8.7065V21.7153ZM8.3315 21.3777V22.0903H9.0815V21.3777H8.3315ZM17.2843 17.0223H5.2984V17.7723H17.2843V17.0223ZM17.6593 18.1099V17.3973H16.9093V18.1099H17.6593ZM5.2984 18.4849H17.2843V17.7349H5.2984V18.4849ZM4.9234 17.3973V18.1099H5.6734V17.3973H4.9234ZM11.8912 13.7921H23.167V13.0421H11.8912V13.7921ZM12.2662 14.1297V13.4171H11.5162V14.1297H12.2662ZM23.167 13.7547H11.8912V14.5047H23.167V13.7547ZM22.792 13.4171V14.1297H23.542V13.4171H22.792ZM9.40704 13.0421H5.2984V13.7921H9.40704V13.0421ZM9.78204 14.1297V13.4171H9.03204V14.1297H9.78204ZM5.2984 14.5047H9.40704V13.7547H5.2984V14.5047ZM4.9234 13.4171V14.1297H5.6734V13.4171H4.9234ZM19.6306 20.9755H20.3389V20.2255H19.6306V20.9755ZM23.8017 16.029C21.2925 16.029 19.2556 18.0816 19.2556 20.6005H20.0056C20.0056 18.4915 21.711 16.779 23.8017 16.779L23.8017 16.029ZM24.1767 17.1166V16.404H23.4267V17.1166H24.1767ZM20.7139 20.6005C20.7139 18.8844 22.1016 17.4916 23.8017 17.4916V16.7416C21.6831 16.7416 19.9639 18.4745 19.9639 20.6005H20.7139Z" fill="#4A90E2"></path>
                                            </svg>
                                        </i> Бесплатное размещение объявления
                                    </li>
                                    <li><i>
                                            <svg width="36" height="38" viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19.4829 27.7942C19.4518 27.7942 19.4218 27.7909 19.3896 27.7864C19.0833 27.7354 18.8757 27.4446 18.9268 27.1382C19.1743 25.6554 20.3353 24.9184 21.2409 24.6287L19.7659 18.6818C19.3497 17.371 20.07 15.9637 21.3797 15.5353C22.696 15.1057 24.1167 15.8272 24.5474 17.1435L27.3654 25.7631C27.462 26.0583 27.2999 26.3768 27.0047 26.4734C26.7084 26.5711 26.3909 26.409 26.2944 26.1127L23.4763 17.4931C23.2388 16.7672 22.4552 16.3699 21.7293 16.6063C21.0045 16.8438 20.6061 17.6274 20.8436 18.3533C20.8469 18.3655 20.8503 18.3788 20.8547 18.3921L22.4718 24.9129C22.5107 25.0705 22.4807 25.2359 22.3886 25.369C22.2965 25.5022 22.1522 25.5899 21.9913 25.6088C21.9247 25.6165 20.2853 25.843 20.0378 27.3236C19.9923 27.5988 19.7537 27.7942 19.4829 27.7942Z" fill="#4A90E2"></path>
                                                <path d="M19.4829 27.7942C19.4518 27.7942 19.4218 27.7909 19.3896 27.7864C19.0833 27.7354 18.8757 27.4446 18.9268 27.1382C19.1743 25.6554 20.3353 24.9184 21.2409 24.6287L19.7659 18.6818C19.3497 17.371 20.07 15.9637 21.3797 15.5353C22.696 15.1057 24.1167 15.8272 24.5474 17.1435L27.3654 25.7631C27.462 26.0583 27.2999 26.3768 27.0047 26.4734C26.7084 26.5711 26.3909 26.409 26.2944 26.1127L23.4763 17.4931C23.2388 16.7672 22.4552 16.3699 21.7293 16.6063C21.0045 16.8438 20.6061 17.6274 20.8436 18.3533C20.8469 18.3655 20.8503 18.3788 20.8547 18.3921L22.4718 24.9129C22.5107 25.0705 22.4807 25.2359 22.3886 25.369C22.2965 25.5022 22.1522 25.5899 21.9913 25.6088C21.9247 25.6165 20.2853 25.843 20.0378 27.3236C19.9923 27.5988 19.7537 27.7942 19.4829 27.7942" stroke="#4A90E2" strokeWidth="0.3"></path>
                                                <path d="M29.9322 37C29.6209 37 29.369 36.747 29.369 36.4357V32.9137C29.369 32.4297 29.4537 31.9535 29.6209 31.4981L31.2587 27.0477C31.3962 26.6738 31.4479 26.2668 31.4094 25.8708L31.0618 22.3609C31.0046 21.7779 30.7516 21.2235 30.3491 20.7979L27.4584 17.74C27.2439 17.5145 27.2549 17.1582 27.4804 16.9437C27.7059 16.7303 28.0634 16.7402 28.2768 16.9668L31.1674 20.0246C31.7405 20.6296 32.1013 21.4204 32.1838 22.2498L32.5292 25.7597C32.5863 26.324 32.5115 26.9036 32.3158 27.436L30.679 31.8875C30.557 32.2175 30.4954 32.5628 30.4954 32.9137V36.4357C30.4954 36.747 30.2435 37 29.9322 37Z" fill="#4A90E2"></path>
                                                <path d="M29.9322 37C29.6209 37 29.369 36.747 29.369 36.4357V32.9137C29.369 32.4297 29.4537 31.9535 29.6209 31.4981L31.2587 27.0477C31.3962 26.6738 31.4479 26.2668 31.4094 25.8708L31.0618 22.3609C31.0046 21.7779 30.7516 21.2235 30.3491 20.7979L27.4584 17.74C27.2439 17.5145 27.2549 17.1582 27.4804 16.9437C27.7059 16.7303 28.0634 16.7402 28.2768 16.9668L31.1674 20.0246C31.7405 20.6296 32.1013 21.4204 32.1838 22.2498L32.5292 25.7597C32.5863 26.324 32.5115 26.9036 32.3158 27.436L30.679 31.8875C30.557 32.2175 30.4954 32.5628 30.4954 32.9137V36.4357C30.4954 36.747 30.2435 37 29.9322 37" stroke="#4A90E2" strokeWidth="0.3"></path>
                                                <path d="M20.6394 36.9998C20.328 36.9998 20.0764 36.7471 20.0764 36.4357V33.8471C20.0764 33.2956 19.8688 32.7704 19.4924 32.3688L17.8233 30.5802C17.2582 29.9763 16.8629 29.2308 16.6794 28.4246L16.0965 25.8685C16.0273 25.5655 16.2171 25.2635 16.5201 25.1943C16.8241 25.1251 17.1261 25.3149 17.1953 25.6179L17.7782 28.174C17.9166 28.7863 18.2175 29.3524 18.6463 29.8117L20.3154 31.5992C20.8879 32.2115 21.2024 33.0094 21.2024 33.8471V36.4357C21.2024 36.7471 20.9508 36.9998 20.6394 36.9998Z" fill="#4A90E2"></path>
                                                <path d="M20.6394 36.9998C20.328 36.9998 20.0764 36.7471 20.0764 36.4357V33.8471C20.0764 33.2956 19.8688 32.7704 19.4924 32.3688L17.8233 30.5802C17.2582 29.9763 16.8629 29.2308 16.6794 28.4246L16.0965 25.8685C16.0273 25.5655 16.2171 25.2635 16.5201 25.1943C16.8241 25.1251 17.1261 25.3149 17.1953 25.6179L17.7782 28.174C17.9166 28.7863 18.2175 29.3524 18.6463 29.8117L20.3154 31.5992C20.8879 32.2115 21.2024 33.0094 21.2024 33.8471V36.4357C21.2024 36.7471 20.9508 36.9998 20.6394 36.9998" stroke="#4A90E2" strokeWidth="0.3"></path>
                                                <path d="M21.0331 22.7492C20.8887 22.7492 20.7431 22.6939 20.6324 22.582L10.3631 12.185C7.65344 9.47541 7.65344 5.06084 10.3667 2.3476C13.0799 -0.365631 17.4945 -0.365631 20.2077 2.3476L21.6865 3.82515L23.1243 2.38732C25.8363 -0.325916 30.2521 -0.325916 32.9641 2.38732C35.6786 5.10055 35.6786 9.51512 32.9641 12.2283L26.6088 18.5849C26.3886 18.8039 26.0324 18.8039 25.8123 18.5849C25.5921 18.3647 25.5921 18.0074 25.8123 17.7872L32.1688 11.4318C34.4417 9.15776 34.4417 5.4579 32.1688 3.18383C29.8935 0.910973 26.1937 0.910973 23.9208 3.18383L22.0847 5.02113C21.9788 5.12581 21.8344 5.18597 21.6865 5.18597C21.5373 5.18597 21.3929 5.12581 21.287 5.02113L19.41 3.14413C17.1371 0.870066 13.4373 0.870066 11.1632 3.14413C8.88914 5.41819 8.88914 9.11806 11.1632 11.3909L21.435 21.7902C21.6528 22.0116 21.6504 22.369 21.429 22.5868C21.3195 22.6951 21.1763 22.7492 21.0331 22.7492Z" fill="#4A90E2"></path>
                                                <path d="M21.0331 22.7492C20.8887 22.7492 20.7431 22.6939 20.6324 22.582L10.3631 12.185C7.65344 9.47541 7.65344 5.06084 10.3667 2.3476C13.0799 -0.365632 17.4945 -0.365632 20.2077 2.3476L21.6865 3.82515L23.1243 2.38732C25.8363 -0.325917 30.2521 -0.325917 32.9641 2.38732C35.6786 5.10055 35.6786 9.51512 32.9641 12.2283L26.6088 18.5849C26.3886 18.8039 26.0324 18.8039 25.8123 18.5849C25.5921 18.3647 25.5921 18.0074 25.8123 17.7872L32.1688 11.4318C34.4417 9.15776 34.4417 5.4579 32.1688 3.18383C29.8935 0.910972 26.1937 0.910972 23.9208 3.18383L22.0847 5.02113C21.9788 5.12581 21.8344 5.18598 21.6865 5.18598C21.5373 5.18598 21.3929 5.12581 21.287 5.02113L19.41 3.14413C17.1371 0.870065 13.4373 0.870065 11.1632 3.14413C8.88914 5.41819 8.88914 9.11806 11.1632 11.3909L21.435 21.7902C21.6528 22.0116 21.6504 22.369 21.429 22.5868C21.3195 22.6951 21.1763 22.7492 21.0331 22.7492" stroke="#4A90E2" strokeWidth="0.3"></path>
                                                <path d="M20.807 22.517C20.7921 22.517 20.7772 22.5159 20.7623 22.5147L7.39061 21.476C4.02707 21.2138 1.50527 18.2659 1.76638 14.9035C1.97367 12.2317 3.86559 10.0271 6.47329 9.41901C6.77677 9.34801 7.07911 9.53697 7.15011 9.83931C7.21997 10.1428 7.03215 10.4451 6.72981 10.5161C4.60197 11.012 3.0582 12.81 2.88871 14.9906C2.67684 17.7334 4.73483 20.1395 7.47766 20.3525L20.8494 21.3913C21.1597 21.4153 21.3922 21.6867 21.3682 21.9971C21.3453 22.2926 21.0979 22.517 20.807 22.517Z" fill="#4A90E2"></path>
                                                <path d="M20.807 22.517C20.7921 22.517 20.7772 22.5159 20.7623 22.5147L7.39061 21.476C4.02707 21.2138 1.50527 18.2659 1.76638 14.9035C1.97367 12.2317 3.86559 10.0271 6.47329 9.41901C6.77677 9.348 7.07911 9.53697 7.15011 9.83931C7.21997 10.1428 7.03215 10.4451 6.72981 10.5161C4.60197 11.012 3.0582 12.81 2.88871 14.9906C2.67684 17.7334 4.73483 20.1395 7.47766 20.3525L20.8494 21.3913C21.1597 21.4153 21.3922 21.6867 21.3682 21.9971C21.3453 22.2926 21.0979 22.517 20.807 22.517" stroke="#4A90E2" strokeWidth="0.3"></path>
                                                <path d="M7.11376 27.3336C6.21358 27.3336 5.31773 27.1324 4.48139 26.7331C3.00778 26.0288 1.89445 24.7921 1.35023 23.2514C1.00185 22.2647 0.91096 21.2012 1.0884 20.1765C1.14141 19.8693 1.43354 19.6637 1.73973 19.7167C2.04592 19.7697 2.25149 20.0619 2.19956 20.368C2.05458 21.2044 2.12815 22.071 2.41378 22.876C2.85738 24.1332 3.76405 25.1416 4.96717 25.7161C6.16921 26.2906 7.52489 26.3631 8.78103 25.9184L20.8469 21.6545C21.139 21.5506 21.4614 21.7043 21.5653 21.9975C21.6692 22.2907 21.5145 22.6131 21.2223 22.717L9.15647 26.9809C8.48999 27.2168 7.80079 27.3336 7.11376 27.3336Z" fill="#4A90E2"></path>
                                                <path d="M7.11376 27.3336C6.21358 27.3336 5.31773 27.1324 4.48139 26.7331C3.00778 26.0288 1.89445 24.7921 1.35023 23.2514C1.00185 22.2647 0.91096 21.2012 1.0884 20.1765C1.14141 19.8693 1.43354 19.6637 1.73973 19.7167C2.04592 19.7697 2.25149 20.0619 2.19956 20.368C2.05458 21.2044 2.12815 22.071 2.41378 22.876C2.85738 24.1332 3.76405 25.1416 4.96717 25.7161C6.16921 26.2906 7.52489 26.3631 8.78103 25.9184L20.8469 21.6545C21.139 21.5506 21.4614 21.7043 21.5653 21.9975C21.6692 22.2907 21.5145 22.6131 21.2223 22.717L9.15647 26.9809C8.48999 27.2168 7.80079 27.3336 7.11376 27.3336" stroke="#4A90E2" strokeWidth="0.3"></path>
                                            </svg>
                                        </i> Благодарность гарантирована
                                    </li>
                                    <li><i>
                                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M29.75 7.30263H29.099L19.7976 2.312C18.5979 1.66839 17.2441 1.32812 15.8827 1.32812H5.57812V0.664062C5.57812 0.297301 5.28076 0 4.91406 0H0.664062C0.297367 0 0 0.297301 0 0.664062V11.7539C0 12.1207 0.297367 12.418 0.664062 12.418H4.91406C5.28076 12.418 5.57812 12.1207 5.57812 11.7539V10.7246H6.24219V20.1885C6.24219 20.5552 6.53955 20.8526 6.90625 20.8526H29.75C30.1167 20.8526 30.4141 20.5552 30.4141 20.1885V7.96669C30.4141 7.59993 30.1167 7.30263 29.75 7.30263ZM4.25 11.0898H1.32812V1.32812H4.25V11.0898ZM28.9875 8.63075C28.9705 8.63208 28.9535 8.63295 28.9362 8.63295H27.5711C27.7924 9.35511 28.3635 9.92554 29.0859 10.1461V8.63075H28.9875ZM6.2985 9.39655H5.57812V2.65625H15.8827C17.0258 2.65625 18.1624 2.94193 19.1697 3.48234L26.2899 7.30263H17.7397C17.7282 7.30263 17.7169 7.30342 17.7056 7.30421L17.7056 7.30421L17.6967 7.30482H16.3065C15.5202 7.30482 14.8805 7.94445 14.8805 8.7307C14.8805 9.231 15.1476 9.70063 15.5777 9.95636L18.2702 11.5571C18.6285 11.77 18.7576 12.2261 18.5643 12.5953C18.3743 12.9584 17.9458 13.1134 17.5674 12.9557L11.5536 10.4482C9.87986 9.75036 8.11179 9.39655 6.2985 9.39655ZM17.6358 16.5615C17.3067 16.45 17.0123 16.2561 16.7853 15.9931C16.5456 15.7156 16.5764 15.2962 16.854 15.0566C17.1316 14.8168 17.551 14.8477 17.7906 15.1253C17.9077 15.261 18.0976 15.3421 18.2984 15.3421C18.6339 15.3421 18.9174 15.1129 18.9174 14.8417C18.9174 14.5705 18.634 14.3414 18.2984 14.3414C18.2518 14.3414 18.2065 14.3364 18.1626 14.3273C18.0683 14.3403 17.9729 14.347 17.8768 14.347C17.6034 14.347 17.3251 14.2935 17.0562 14.1813L15.0556 13.3471C15.0015 13.5867 14.9732 13.8322 14.9732 14.0824C14.9732 15.9132 16.4627 17.4027 18.2935 17.4027C20.1243 17.4027 21.6138 15.9132 21.6138 14.0824C21.6138 12.7196 20.7883 11.5465 19.6114 11.0355C20.0407 11.6617 20.115 12.4967 19.7411 13.2111C19.6935 13.3019 19.6404 13.3878 19.5824 13.4687C19.9885 13.8041 20.2456 14.2951 20.2456 14.8417C20.2456 15.6315 19.7096 16.3058 18.9612 16.561C18.9476 16.9157 18.6565 17.1992 18.2985 17.1992C17.9407 17.1992 17.6497 16.9159 17.6358 16.5615ZM7.57031 19.5244V18.009C8.29348 18.2298 8.8649 18.8013 9.0857 19.5244H7.57031ZM27.5705 19.5244H29.0859V18.009C28.3628 18.2298 27.7913 18.8013 27.5705 19.5244ZM29.086 16.6443C27.629 16.9167 26.4782 18.0674 26.2058 19.5244H10.4505C10.1781 18.0674 9.02733 16.9167 7.57031 16.6443V10.7902C8.7623 10.9129 9.92568 11.2084 11.0425 11.674L13.8169 12.8308C13.7037 13.236 13.6451 13.6548 13.6451 14.0825C13.6451 16.6457 15.7304 18.7309 18.2935 18.7309C20.8567 18.7309 22.942 16.6457 22.942 14.0825C22.942 11.5194 20.8567 9.43407 18.2935 9.43407C18.0048 9.43407 17.7167 9.46243 17.4346 9.51515L16.2566 8.81476C16.2271 8.79723 16.2087 8.76496 16.2087 8.73069C16.2087 8.67677 16.2525 8.63295 16.3065 8.63295H26.2062C26.4794 10.0889 27.6297 11.2387 29.086 11.5109V16.6443ZM2.78468 8.74351H2.79338C3.16014 8.74351 3.45744 9.04081 3.45744 9.40757C3.45744 9.77434 3.16007 10.0716 2.79338 10.0716H2.78468C2.41798 10.0716 2.12062 9.77434 2.12062 9.40757C2.12062 9.04081 2.41798 8.74351 2.78468 8.74351ZM33.3359 21.582H29.0859C28.7192 21.582 28.4219 21.8794 28.4219 22.2461V23.5916L25.2888 22.5201C23.241 21.8197 21.0278 21.9264 19.0568 22.8206L14.595 24.845C14.0235 25.1043 13.5902 25.5719 13.3751 26.1616C13.1751 26.7101 13.1879 27.2991 13.4082 27.8344C13.2202 27.832 13.033 27.7854 12.866 27.6986L7.27135 24.7901C6.66028 24.4722 5.96341 24.416 5.30925 24.6315C4.65501 24.847 4.12808 25.3065 3.82546 25.9252C3.24063 27.1211 3.68734 28.5762 4.84248 29.2379L11.5702 33.0915C12.3761 33.5532 13.2906 33.7931 14.2124 33.7931C14.4983 33.7931 14.7852 33.7699 15.0694 33.7232L28.4219 31.5282V33.3359C28.4219 33.7026 28.7192 34 29.0859 34H33.3359C33.7026 34 34 33.7026 34 33.3359V22.2461C34 21.8794 33.7026 21.582 33.3359 21.582ZM28.4219 30.1823L14.8539 32.4129C13.9536 32.5608 13.022 32.3927 12.2304 31.9392L5.50269 28.0856C4.95284 27.7707 4.74021 27.0781 5.01859 26.5089C5.16262 26.2143 5.41337 25.9957 5.72482 25.8931C6.03613 25.7905 6.36776 25.8173 6.65869 25.9686L12.2535 28.8772C12.6135 29.0643 13.0181 29.1632 13.4238 29.1632H14.7754C14.7977 29.1632 14.8197 29.162 14.8415 29.1599C15.0699 29.2338 15.3099 29.2737 15.5538 29.2737C15.8004 29.2737 16.0506 29.2342 16.2956 29.1513L20.7544 27.6426C21.1018 27.525 21.2881 27.1481 21.1706 26.8007C21.053 26.4534 20.6762 26.267 20.3287 26.3845L15.8699 27.8931C15.3956 28.0537 14.8754 27.834 14.6596 27.3822C14.5442 27.1404 14.5311 26.8686 14.6229 26.6168C14.7148 26.3649 14.8997 26.1653 15.1438 26.0546L19.6056 24.0302C21.2671 23.2765 23.1327 23.1864 24.8589 23.7769L28.4219 24.9952V30.1823ZM29.75 32.6719H32.6719V22.9102H29.75V32.6719ZM31.2066 23.9284H31.2153C31.582 23.9284 31.8794 24.2257 31.8794 24.5924C31.8794 24.9591 31.582 25.2565 31.2153 25.2565H31.2066C30.8399 25.2565 30.5426 24.9591 30.5426 24.5924C30.5426 24.2257 30.8399 23.9284 31.2066 23.9284ZM12.1285 13.4215H10.7249C10.3582 13.4215 10.0609 13.7188 10.0609 14.0856C10.0609 14.4523 10.3582 14.7496 10.7249 14.7496H12.1285C12.4952 14.7496 12.7926 14.4523 12.7926 14.0856C12.7926 13.7188 12.4952 13.4215 12.1285 13.4215ZM24.461 13.4215H25.8646C26.2313 13.4215 26.5286 13.7188 26.5286 14.0856C26.5286 14.4523 26.2313 14.7496 25.8646 14.7496H24.461C24.0942 14.7496 23.7969 14.4523 23.7969 14.0856C23.7969 13.7188 24.0943 13.4215 24.461 13.4215ZM15.121 3.98438H10.1975C9.83085 3.98438 9.53348 4.28168 9.53348 4.64844C9.53348 5.0152 9.83085 5.3125 10.1975 5.3125H15.121C15.4877 5.3125 15.785 5.0152 15.785 4.64844C15.785 4.28168 15.4877 3.98438 15.121 3.98438ZM7.85785 3.98438C8.0331 3.98438 8.20383 4.05543 8.32728 4.17895C8.45146 4.30246 8.52191 4.47379 8.52191 4.64844C8.52191 4.82309 8.45146 4.99441 8.32728 5.11793C8.20383 5.24145 8.0325 5.3125 7.85785 5.3125C7.6832 5.3125 7.51194 5.24145 7.38836 5.11793C7.26478 4.99441 7.19379 4.82309 7.19379 4.64844C7.19379 4.47379 7.26484 4.30246 7.38836 4.17895C7.51188 4.05543 7.6832 3.98438 7.85785 3.98438Z" fill="#4A90E2"></path>
                                            </svg>
                                        </i> Вознаграждение за возврат
                                    </li>
                                </ul>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </>
    )
}

export default FoundCreatePage