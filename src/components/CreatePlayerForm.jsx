import React, { useState } from 'react';
import axios from 'axios'; 

export default function CreatePlayerForm() {

  const [formData, setFormData] = useState({
    name: '', 
    breed: '', 
    status: '',
    imageUrl: '', 
  })

  const handleChange = (e) => { 
    const { name, value } = e.target 
    const lowerCaseValue = value.toLowerCase() 
    setFormData((prevData) => ({
      ...prevData,
      [name]: lowerCaseValue, 
    }))
  }


const handleSubmit = async (e) => { 
  e.preventDefault() 
  console.log(formData)
  try {
    await axios.post('https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-B/players', formData)

    setFormData({
      name: '',
      breed: '',
      status: '',
      imageUrl: '',
    })
  } catch(error) { 
    console.error('Error creating player:', error)
  }
}

  return (
    <div className='form-container'>
        <h1 className='form-title'>Create New Player</h1>
        <form onSubmit={handleSubmit} className='form'>
          <label className='form-label'>
            Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className='form-input'
                /> 
          </label>
          <label className='form-label'>
            Breed:
              <input
                type="text"
                name="breed"
                value={formData.breed}
                onChange={handleChange}
                className='form-input'
                /> 
          </label>
          <label className='form-label'>
          Status:
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className='form-input'
          >
            <option value="">Select Status</option>
            <option value="bench">bench</option>
            <option value="field">field</option>
          </select>
        </label>
          <label className='form-label'>
            Image URL:
              <input
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                className='form-input'
                /> 
          </label>
          <button type="submit" className='submit-button'>Submit New Player</button>
        </form>
    </div>
  );
}
