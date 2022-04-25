import React, {Suspense, lazy} from 'react'

import Main from '../components/Main/Main'

const Finds = lazy(() => import('../components/Finds/Finds'))
const Advantages = lazy(() => import('../components/Advantages'))
const Facilities = lazy(() => import('../components/Facilities'))


const HomePage = () => {
    return (
        <>
            <Main />
            <Suspense fallback={null}>
                <Finds />
                <Advantages />
                <Facilities />  
            </Suspense>
        </>
    )
}

export default HomePage
