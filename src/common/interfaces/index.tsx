import React from 'react'

type TimeOpts = { day: number, time: string, hours: number, minutes: number }

export interface PlaceProps {
    formatted_phone_number: string;
    formatted_address: string;
    geometry: {
        location: { lat: Function; lng: Function; },
        viewport: { south: number; west: number; north: number; east: number; }
    };
    name: string;
    place_id: string;
    opening_hours: { 
        open_now: boolean;
        periods: { close: TimeOpts, open: TimeOpts }[];
        weekday_text: string[];
    };
    rating: number;
    user_ratings_total: number;
    html_attributions: [];
}

export interface AutoInputProps {
    setLocation: React.Dispatch<React.SetStateAction<{lat: number, lng: number} | null>>;
    setPlace: React.Dispatch<React.SetStateAction<PlaceProps | null>>;
}

export interface MapProps {
    geostate: { lat: number, lng: number, name?: string } | null;
    dimensions?: { w: number, h: number }
}

type GeolocationCoordinates = {
    accuracy: number;
    altitude: number | null;
    altitudeAccuracy: number | null;
    heading: number | null | typeof NaN;
    latitude: number;
    longitude: number;
    speed: number | null;
}

export interface GeolocationPosition {
    coords: GeolocationCoordinates;
    timestamp: number;
}

export interface ReservationConfirm {
    date?: any;
    name?: string;
    phone?: number;
    time?: string;
    guests?: number;
}