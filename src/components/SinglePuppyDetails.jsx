import React from 'react'
import { useParams } from 'react-router-dom'

export default function SinglePuppyDetails({ players }) { 

    const { puppyId } = useParams() 

    // console.log('Players: ', players)
    // console.log('Puppy ID: ', puppyId)

    const selectedPuppy = players.find((player) => player.id === parseInt(puppyId))

    if (!selectedPuppy) {
        return <p>Puppy not found</p>
    }

    return ( 
        <div>
            <h1>Puppy Details</h1>
            <p>Name: {selectedPuppy.name}</p>
            <p>Breed: {selectedPuppy.breed}</p>
            <p>Status: {selectedPuppy.status}</p>
            <img src={selectedPuppy.imageUrl} alt={selectedPuppy.name} />
        </div>
    )

}