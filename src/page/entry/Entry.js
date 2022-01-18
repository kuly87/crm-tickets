import React, {useState} from 'react';
import Forget from '../../components/login/Forget';
import Login from '../../components/login/Login';
import './Entry.css'

export const Entry = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [load, setLoad] = useState('login')

    const handleChange = e =>{
        const {name, value} = e.target
        switch(name){
            case 'email':
                setEmail(value)
                break
            case 'password':
                setPassword(value)
                break
            default:
                break
        }
        console.log(name, value);
        
    }
    const handleSubmit = e =>{
        e.preventDefault();
        if(!email || !password){
          return  alert('Fill up all the fields')
        }
    }
    const handleResetSubmit = e =>{
        e.preventDefault();
        if(!email){
          return  alert('Provide the email')
        }
        console.log('Done!!!');
        
    }
    const formSwitcher = type =>{
        setLoad(type)
    }
    return(
        <div className='entry-page bg-info'>
            <div className='jumbotron'>
                {load === 'login' ?
                <Login 
                handleChange = {handleChange} 
                email={email} 
                password={password}
                handleSubmit={handleSubmit}
                formSwitcher={formSwitcher}
                />
                :
                  <Forget 
                handleChange = {handleChange} 
                email={email} 
                handleResetSubmit={handleResetSubmit}
                formSwitcher={formSwitcher}
                />
    }
            </div>
            
        </div>
    )
}