import React, { useState, useCallback, useEffect } from 'react'
import { AutoInputProps, PlaceProps, ReservationConfirm } from '../../interfaces'
import { Card, Typography, Input, Col, Rate, Button, Drawer, Form, InputNumber, DatePicker, TimePicker, Divider } from 'antd'
const { Text, Title, Paragraph } = Typography

export const AutoInput: React.FC<AutoInputProps> = ({ setLocation }) => {
    const [place, setPlace] = useState<PlaceProps | null>(null)

    let autocomplete: any
    const initAutocomplete = useCallback(() => {
        autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete') as HTMLInputElement, 
        {   types: ['restaurant', 'food'],
            fields: ['name', 'place_id', 'geometry', 'rating', 'formatted_phone_number', 'opening_hours', 'user_ratings_total', 'formatted_address'],
            componentRestrictions: {country: ['US']}
        })

        autocomplete.addListener('place_changed', onPlaceChanged)

    }, [autocomplete])

    const onPlaceChanged = () => {
        let details = autocomplete.getPlace()
        if(details.geometry){
            setPlace(() => details)
            setLocation({
                lat: details?.geometry.location.lat(), 
                lng: details?.geometry.location.lng(), 
                name: details?.name 
            })
        }
    }

    useEffect(() => initAutocomplete(), [])

    return (
        <Col span={12} style={{ marginBottom: '3rem' }}>
            <Input id='autocomplete' type='text'/>
            { place && <PlaceCard data={place}/> }
        </Col>
    )
}

const format = 'h:mm a'
const PlaceCard: React.FC<{data: PlaceProps}> = ({ data }) => {
    const [drawerOpen, setDrawerOpen] = useState<boolean | undefined>(false)
    const [reservation, setReservation] = useState<ReservationConfirm | null>(null)
    const [confirmation, setConfirmation] = useState<boolean>(false)
    const openDrawer = () => setDrawerOpen(true)
    const onClose = () => setDrawerOpen(false)
    const handleSubmit = (e: ReservationConfirm) => {
        setReservation({...reservation, name: e.name, guests: e.guests, phone: e.phone, date: e.date._d})
        setConfirmation(true)
    }
    const onChange = (time: any, timeString: string) => setReservation({...reservation, time: timeString})

    return (
    confirmation 
        ? <Card className='confirm-card'>
            <Title><span>Confirmation</span></Title>
            <Text className='confirm-name'>{reservation?.name}</Text>
            <Text className='confirm-guests'>{reservation?.guests} Guest(s)</Text>
            <Divider/>
            <Text className='confirm-place'>@ {data.name}</Text>
            <Text className='confirm-addy'>{data?.formatted_address}</Text>
            <Divider/>
            <Text className='confirm-date'>{new Date(reservation?.date).toDateString()}</Text>
            <Text className='confirm-time'>{reservation?.time}</Text>
            </Card> 
        : <Card className='place-card'>
            <Title style={{ marginBottom: '0.5rem' }}>{ data.name }</Title>
            <Text style={{ fontSize: '1rem', display: 'block' }}>{ data.formatted_address }</Text>
            <Text style={{ fontSize: '0.9rem', fontStyle: 'italic', textDecoration: 'underline' }}>Phone: { data.formatted_phone_number }</Text>
            <Text style={{ padding: '0.5rem', display: 'block' }}><Rate allowHalf value={data.rating} style={{ margin: 0 }}/></Text>
            <Paragraph>
                <Text style={{ fontSize: '1rem', fontWeight: 'bold', textDecoration: 'underline' }}>Hours:</Text><br/>
                <ul style={{listStyle: 'none', marginBottom: '1.5rem' }}>{ data.opening_hours.weekday_text.map((txt, i) => <li key={i} style={{ margin: 0 }}>{txt}</li>)}</ul>
            </Paragraph>
            <Button className='app-btn' type='primary' htmlType='submit' onClick={() => openDrawer()}>Reserve Now</Button>
            <Drawer
                title={'Reservation at ' + data.name}
                placement='right'
                onClose={onClose}
                open={drawerOpen}
                getContainer={false}>
                <Form
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
                onFinish={handleSubmit}
                autoComplete='off'>
                    <Form.Item
                    label='name'
                    name='name'
                    rules={[{ required: true, message: 'Please input your name!' }]}>
                        <Input type='text'/>
                    </Form.Item>
                    <Form.Item 
                    label='number of guests'
                    name='guests'
                    rules={[{ required: true, message: 'Please select number of guests!' }]}>
                        <InputNumber min={1} max={12}/>
                    </Form.Item>
                    <Form.Item
                    label='phone'
                    name='phone'
                    rules={[{ required: true, message: 'Please input phone number!' }]}>
                        <Input type='tel'/>
                    </Form.Item>
                    <Form.Item
                    label='date'
                    name='date'
                    rules={[{ required: true, message: 'Please select date!' }]}>
                        <DatePicker/>
                    </Form.Item>
                    <Form.Item
                    label='time'
                    name='time'
                    rules={[{ required: true, message: 'Please select time!' }]}>
                        <TimePicker format={format} use12Hours onChange={onChange}/>
                    </Form.Item>
                    <Form.Item wrapperCol={{ span: 24 }} style={{ marginTop: '1rem' }}>
                        <Button className='app-btn' type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </Drawer>
        </Card>
    )
} 