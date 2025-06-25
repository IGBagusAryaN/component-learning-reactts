import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './component/counter'
import { ButtonProps } from './component/button-props'
import toast, { Toaster } from 'react-hot-toast'
import { Searching } from './component/searching'
import { Sorting } from './component/sorting'
import { Filter } from './component/filter'
import { DebounceInput } from './component/debounce-input'
import { SearchingCombination } from './component/searching-combination'
import { Login } from './component/login'
import { SearchingNew } from './component/learn'
import { FetchData } from './component/fetch'
import { ToggleTheme } from './component/toggle-theme'
import { PropsDrillingDodge } from './component/props-drilling-dodge'
import { FetchWithError } from './component/fetch-w-error-handling'
import { ConditionalRendering } from './component/conditional-rendering'
import { Mapping } from './component/mapping'
import { FetchCustomHooks } from './component/fetch-w-customhooks'



function App() {

  return (
    <>
    <div className='mb-40 ml-5'>
      <Toaster/>
      <Counter/>
      <div className='flex items-center my-5 '>
        <ButtonProps variant='danger' size='lg' onClick={() => toast.success('Danger')}>ButtonProps Danger</ButtonProps>
        <ButtonProps variant='primary' size='md' onClick={() => toast.success('Primary')}>ButtonProps Primary</ButtonProps>
        <ButtonProps variant='secondary' size='sm' onClick={() => toast.success('Secondary')}>ButtonProps Secondary</ButtonProps>
      </div>
      <div className='flex'>

      <Searching/>
      <Sorting/>
      <Filter/>
      <DebounceInput/>
      </div>
      <SearchingCombination/>
      <Login/>
      <SearchingNew/>
      <FetchData/>
      <ToggleTheme/>
      <PropsDrillingDodge/>
      <FetchWithError/>
      <div className='mt-5'>
        <div className='font-bold'>Conditional Rendering</div>
        <ConditionalRendering isLoggedIn={true}/>
        <ConditionalRendering isLoggedIn={false}/>
      </div>
      <Mapping/>
      <FetchCustomHooks/>
    </div>
    </>
  )
}

export default App
