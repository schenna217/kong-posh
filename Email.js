import {useState} from 'react';

const Email = () => {
    const[email, setEmail] = useState('')
    return {email, setEmail}
}
export default Email