import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const params = useParams()
    const {name} = params;

    return (
        <>
        <h1>This is {name}'s page</h1>
        </>
    )
}
