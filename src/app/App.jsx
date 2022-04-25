import React, {lazy, Suspense} from 'react'
import {Routes, Route} from 'react-router-dom'
import {ErrorBoundary} from 'react-error-boundary'
import Header from '../components/Header'
import Footer from '../components/Footer'

import loading from '../assets/img/loading.gif'


const HomePage = lazy(() => import('../pages/HomePage'))
const FoundPage = lazy(() => import('../pages/FoundPage'))
const LostPage = lazy(() => import('../pages/LostPage'))
const LostCreatePage = lazy(() => import('../pages/LostCreatePage'))
const FoundCreatePage = lazy(() => import('../pages/FoundCreatePage'))
const CreatePage = lazy(() => import('../pages/CreatePage'))
const PayPage = lazy(() => import('../pages/PayPage'))
const OrganizationPage = lazy(() => import('../pages/OrganizationPage'))
const AutomaticPage = lazy(() => import('../pages/AutomaticPage'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'))
const AboutPage = lazy(() => import('../pages/AboutPage'))
const OfferPage = lazy(() => import('../pages/OfferPage'))
const RulesPage = lazy(() => import('../pages/RulesPage'))
const SecurityPage = lazy(() => import('../pages/SecurityPage'))
const PrivacyPage = lazy(() => import('../pages/PrivacyPage'))
const ErrorPage = lazy(() => import('../pages/ErrorPage'))


const App = () => {
    return (
        <ErrorBoundary
          FallbackComponent={ErrorPage}
          onReset={() => {
          // reset the state of your app so the error doesn't happen again
          }}
        >
          <Header />   
            <main>
              <Suspense fallback={<div style={{height: '100vh', background: `url(${loading}) center no-repeat`}}></div>}>
                <Routes>
                    <Route index element={<HomePage />}/>
                    <Route path='/' element={<HomePage />}/>
                    <Route path='/found' element={<FoundPage />}/>
                    <Route path='/lost' element={<LostPage />}/>
                    <Route path='/lost/create' element={<LostCreatePage />}/>
                    <Route path='/found/create' element={<FoundCreatePage />}/>
                    <Route path='/found/create/:id' element={<CreatePage />}/>
                    <Route path='/lost/pay/:id' element={<PayPage lost/>}/>
                    <Route path='/organization' element={<OrganizationPage />}/>
                    <Route path='/automatic' element={<AutomaticPage />}/>
                    <Route path='/automatic/pay/:id' element={<PayPage />}/>
                    <Route path='/about' element={<AboutPage />}/>
                    <Route path='/offer' element={<OfferPage />}/>
                    <Route path='/rules' element={<RulesPage />}/>
                    <Route path='/security' element={<SecurityPage />}/>
                    <Route path='/privacy' element={<PrivacyPage />}/>
                    <Route path='/*' element={<NotFoundPage />}/>
                </Routes>
              </Suspense>
            </main> 
          <Footer />
        </ErrorBoundary>
     
    )
}

export default App
