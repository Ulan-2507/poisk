import React from 'react'




const PageTop = ({title, subtitle, bigImg, smallImg}) => {
    return (
        <div className="page-top">
            <div className="page-top__bg">
                <img src={bigImg} alt="bg found board"/>
                <img src={smallImg} alt="bg found board"/>
            </div>
            <div className="container">
                <h2 className="page-top__title">{title}</h2>
                <p className="page-top__subtitle">
                    {subtitle}
                </p>
            </div>
        </div>
    )
}

export default PageTop
