import React, { useState, useCallback, useEffect } from 'react'
import { AutoInputProps, PlaceProps } from '../interfaces'
import { Card, Typography, Input, Col, Rate, Button } from 'antd'
const { Text, Title, Paragraph } = Typography

export const AutoInput: React.FC<AutoInputProps> = ({ setLocation }) => {
    const [place, setPlace] = useState(null)

    let autocomplete: any
    const initAutocomplete = useCallback(() => {
        autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete') as HTMLInputElement, 
        {   types: ['restaurant', 'food'],
            fields: ['name', 'place_id', 'geometry', 'rating', 'formatted_phone_number', 'opening_hours', 'user_ratings_total'],
            componentRestrictions: {country: ['US']}
        })

        autocomplete.addListener('place_changed', onPlaceChanged)

    }, [autocomplete])

    const onPlaceChanged = () => {
        let details = autocomplete.getPlace()
        if(!details.geometry){
          //user did not select a prediction: Reset the input field
          let ac = document.getElementById('autocomplete') as HTMLInputElement 
              ac.placeholder = 'search a place...'
        } else {
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
        <Col span={12}>
            <Input id='autocomplete' type='text'/>
            { place && <PlaceCard data={place}/> }
        </Col>
    )
}

const PlaceCard: React.FC<{data: PlaceProps}> = ({ data }) => {
    return (
        <Card style={{ textAlign: 'center' }}>
            <Title style={{ marginBottom: '0.5rem' }}>{ data.name }</Title>
            <Text style={{ fontSize: '1rem' }}>Phone: { data.formatted_phone_number }</Text>
            <div>
                <Text style={{ padding: '0.5rem' }}><Rate allowHalf value={data.rating} style={{ fontSize: '1rem', margin: 0 }}/></Text>
            </div>
            <Paragraph><Text>Hours:</Text><br/>{ data.opening_hours.weekday_text }</Paragraph>
            <Button type='primary' htmlType='submit'>Reserve Now</Button>
        </Card>
    )
} 