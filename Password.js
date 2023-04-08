import {useState} from 'react';

const Password = () => {
    const[password, setPassword] = useState('')
    return {password, setPassword}
}
export default Password