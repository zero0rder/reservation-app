import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { Success } from './success'
import styles from '../../../utils/styles'
import 'react-datepicker/dist/react-datepicker.css'
export interface PlaceFormProps {
    place: {
        name: string | undefined;
        addy: string | undefined;
        phone: string | undefined;
    };
}

export type FormState = {
    name: string;
    guests: string;
    phone: string;
    date: Date | null;
    time: string;
}

export const PlaceForm: React.FC<PlaceFormProps> = ({ place }) => {
    const [formState, setFormState] = useState<FormState>({name: '', guests: '1', phone: '', date: new Date(), time: '5:00 PM'})
    const [isValid, setIsValid] = useState<boolean>(false)
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        //todo: -> check form validation
        setIsValid(true) 
    }

    return (
        isValid 
        ? <Success user={formState} place={place}/>
        : <form className='flex flex-col space-y-4 w-full'>
            <label htmlFor='name'>
                <span className='block font-medium pb-1'>Name</span>
                <input name='name' id='name' 
                className={`${styles.inputTheme} w-48 text-sm`} value={formState.name} 
                onChange={e => setFormState({...formState, name: e.target.value})}/>
            </label>
            <label htmlFor='guests'>
                <span className='block font-medium pb-1'>Guests</span>
                <select name='guests' id='guests' 
                className={`${styles.inputTheme}`}
                value={formState.guests}
                onChange={e => setFormState({...formState, guests: e.target.value})}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>6+</option>
                </select>
            </label>
            <label htmlFor='phone'>
                <span className='block font-medium pb-1'>Phone</span>
                <input name='phone' type='tel' id='phone' 
                value={formState.phone}
               className={`${styles.inputTheme} w-48 text-sm`}
               onChange={e => setFormState({...formState, phone: e.target.value})}/>
            </label>
            <label htmlFor='date'>
                <span className='block font-medium pb-1'>Date</span>
                <DatePicker name='date' id='date' 
                //todo: -> onSelect={} close picker
                selected={formState.date}
                onChange={d => setFormState({...formState, date: d})} 
                className={`${styles.inputTheme} w-48 text-sm`}
                autoComplete='off'/>
            </label>
            <label htmlFor='time'>
                <span className='block font-medium pb-1'>Time</span>
                <select name='time' id='time' 
                className={`${styles.inputTheme}`}
                value={formState.time}
                onChange={e => setFormState({...formState, time: e.target.value})}>
                    <option>5:00 PM</option>
                    <option>6:00 PM</option>
                    <option>7:00 PM</option>
                    <option>8:00 PM</option>
                    <option>9:00 PM</option>
                    <option>10:00 PM</option>
                </select>
            </label>
            <div className='text-center'>
                <button type='submit' onClick={e => handleSubmit(e)} 
                className='p-2 w-6/12 mt-10 rounded-full bg-blue-400 border-blue-500 text-white hover:bg-green-500'>Submit</button>
            </div>
        </form>
    )
}