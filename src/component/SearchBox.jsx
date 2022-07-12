import React from 'react'

export const SearchBox = ({ searchChange }) => {
  return (
    <div className='pd2'>
      <input 
        className='pa3 ba b--green bg-lightest-blue'
        type='search' 
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  )
}
