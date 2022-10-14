import React, { useState, useEffect } from 'react';
import './style.css';

const Password = () => {
    const [password, setPassword] = useState('');
    const [passwordLength, setPasswordLength] = useState(6);
    const [initialText,setInitialText] = useState ('');
    const [initialTextStatus,setInitialTextStatus] = useState (false);
    const [uppercase, setUppercase] = useState(true);
    const [lowercase, setLowercase] = useState(true);
    const [numbers, setNumbers] = useState(true);
    const [symbols, setSymbols] = useState(true);
    const [errors, setErrors] = useState({});
    const [checkCount,setCheckCount] = useState(4);
    const [status,setStatus] = useState('');
    const [className,setClassName]= useState('');

    const HandleInitialText = (e) =>{
        setInitialText(e.target.value);
        if(initialText.length > 0){
            setInitialTextStatus(false);
        }else{
            setInitialTextStatus(true);
        }  
    }
    const HandleUpperCase = (e)=>{
        setUppercase(e.target.checked);
        if(uppercase === true){
            setCheckCount(checkCount - 1)
        }else if(uppercase === false){
            setCheckCount(checkCount + 1)
        }
    }
    const HandleLowerCase = (e)=>{
        setLowercase(e.target.checked);
        if(lowercase === true){
            setCheckCount(checkCount - 1)
        }else if(lowercase === false){
            setCheckCount(checkCount + 1)
        }
    }
    const HandleNumbers = (e)=>{
        setNumbers(e.target.checked);
        if(numbers === true){
            setCheckCount(checkCount - 1)
        }else if(numbers === false){
            setCheckCount(checkCount + 1)
        }
    }
    const HandleSymbols = (e)=>{
        setSymbols(e.target.checked);
        if(symbols === true){
            setCheckCount(checkCount - 1)
        }else if(symbols === false){
            setCheckCount(checkCount + 1)
        }
    }

  const generatePassword = () => {
    setErrors({})
    if (!uppercase && !lowercase && !numbers && !symbols) {
      return setErrors('At least one character type must be selected')
    } else if (passwordLength < 6) {
      return setErrors('Password length must be atleast 6')
    } else if (passwordLength === '') {
      return setErrors('Invalid password length')
    } else if (passwordLength > 80) {
      return setErrors('Password length cannot exceed 80 characters')
    }

    let password =''
    for (let i = 0; i < passwordLength - initialText.length; i++) {
      let choice = random(0, 3)
      if (lowercase && choice === 0) {
        password += randomLower();
      } else if (uppercase && choice === 1) {
        password += randomUpper()
      } else if (symbols && choice === 2) {
        password += randomSymbol()
      } else if (numbers && choice === 3) {
        password += random(0, 9)
      } else {
        i--
      }
    }
    setPassword(initialText + password)
    if(checkCount === 1 && !initialTextStatus){
        setStatus('Weak Password');
        setClassName('weak');
    }else if(checkCount === 1 && initialTextStatus){
        setStatus('Average Password');
        setClassName('average');
    }else if (checkCount === 2 && !initialTextStatus){
        setStatus('Medium Password');
        setClassName('medium');
    }else if(checkCount === 2 && initialTextStatus){
        setStatus('Strong Password');
        setClassName('strong');
    }else if(checkCount >= 3 || initialTextStatus){
        setStatus('Very Strong Password');
        setClassName('verystrong');
    }
  }

  const random = (min = 0, max = 1) => {
    return Math.floor(Math.random() * (max + 1 - min) + min)
  }

  const randomLower = () => {
    return String.fromCharCode(random(97, 122))
  }

  const randomUpper = () => {
    return String.fromCharCode(random(65, 90))
  }

  const randomSymbol = () => {
    const symbols = "~*$%@#^&!?*'-=/,.{}()[]<>"
    return symbols[random(0, symbols.length - 1)]
  }

  useEffect(() => {
    generatePassword()
    // eslint-disable-next-line
  }, [])

  return (
    <>
    <div className='app'>
      <span>Password Generator</span>
      <div className='password'>{password}</div>
      <div id='status' className={className}>{status}</div>
      <div className='container'>
        <div className='subContainer'>
          <div className='option'>
            <label>Password length</label>
            <input
              type='number'
              name='length'
              min='4'
              max='50'
              defaultValue={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
            />
          </div>
          <div className='option'>
            <label>Add Initial Text</label>
            <input
              type='text'
              name='initialText'
              onChange={HandleInitialText}
            />
          </div>
          <div className='option'>
            <label>Include Uppercase Letters</label>
            <input
              type='checkbox'
              name='uppercase'
              defaultChecked={uppercase}
              onChange={HandleUpperCase}
            />
          </div>
          <div className='option'>
            <label>Include Lowercase Letters</label>
            <input
              type='checkbox'
              name='lowercase'
              defaultChecked={lowercase}
              onChange={HandleLowerCase}
            />
          </div>
          <div className='option'>
            <label>Include Numbers</label>
            <input
              type='checkbox'
              name='numbers'
              defaultChecked={numbers}
              onChange={HandleNumbers}
            />
          </div>
          <div className='option'>
            <label>Include Symbols</label>
            <input
              type='checkbox'
              name='symbols'
              defaultChecked={symbols}
              onChange={HandleSymbols}
            />
          </div>
          {errors.length && <li className='error'>{errors}</li>}
          <div className='button'>
            <input
              type='submit'
              name='generate'
              value='Generate Password'
              onClick={generatePassword}
            />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Password;