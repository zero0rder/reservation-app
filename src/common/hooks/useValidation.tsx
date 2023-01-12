import React, { useState } from 'react'

type ValidationStatus = 'valid' | 'invalid' | 'none'
const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

export const UseValidation = () => {
    const [validationProps, setValidation] = useState<{phone:ValidationStatus, name:ValidationStatus}>({name:'none', phone:'none'})
    const validate = (name:string, phone:string):ValidationStatus => {
        let phoneValid = 0, nameValid = 0

        if(phoneRegex.test(phone)){
            phoneValid += 1
            setValidation((prev) => ({...prev, phone: 'valid'})) 
        } else {
            setValidation((prev) => ({...prev, phone: 'invalid'})) 
        }
    
        if(name !== ''){
            nameValid += 1
            setValidation((prev) => ({...prev, name: 'valid'}))
        } else {
            setValidation((prev) => ({...prev, name: 'invalid'}))
        }
    
        if(nameValid && phoneValid){
            setValidation(() => ({phone: 'valid', name: 'valid'}))
            return 'valid'
        }

        return 'invalid'

    }

    return {
        validate,
        validationProps
    }
}
