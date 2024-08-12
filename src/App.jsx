import { useState } from 'react'
import './App.css'

function App() {
  const [inputText, setInputText] = useState('')
  const [result, setResult] = useState('')
  
  const isPalindrome = (str) =>{
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g,'')
    const revStr = cleanStr.split('').reverse('').join('')
    return cleanStr === revStr;
  }

  const checkPalindrome = () =>{
    if(isPalindrome(inputText)){
      setResult("Entered text is palindrome !")
    }else{
      setResult("Entered text is not a palindrome !")
    }
    setInputText('');
  }

  return (
    <div className='bg-gray-400 min-h-screen max-w-screen flex justify-center items-center'>
      <div className='bg-white p-8 rounded-lg shadow-lg'>
        <h1 className='text-center text-2xl font-bold mb-4'>Palindrome Checker</h1>
        <div className='flex flex-col items-center'>
          <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder='Enter the text' className='p-2 rounded mb-4 w-full'/>
          <button onClick={checkPalindrome} className='px-[10px] py-[5px] text-xl cursor-pointer bg-blue-700 text-white rounded p-1'>Check</button>
          {result && (
          <div className='p-[8px] mt-[5px]'>
            {result}
          </div>)}
        </div>
      </div>
      </div>
  )
}

export default App
