import React from 'react'
import { MapProps } from '../../interfaces'
import { Col, Spin } from 'antd'

export const ReservationMap: React.FC<MapProps> = ({ geostate }) => {
    return (
        <Col span={24} style={{ textAlign: 'center', margin: '2rem' }}>
            { geostate !== null 
            ? <img src={`https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=600x300&maptype=roadmap&markers=color:red%7C${geostate.lat},${geostate.lng}&key=AIzaSyCHjLmTXwcCSL-4E5P9qsBR9lpboJtA8ro`} /> 
            : <Spin/>}
        </Col>
    )
}