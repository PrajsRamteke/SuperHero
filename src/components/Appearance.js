import React from 'react'

export default function Appearance({value}) {

  return (
    <div className="Appearance">
      <div className='miniData'>
        <span>GENDER</span>
        <span>{value.appearance.gender}</span>
      </div>
      <div className='miniData'>
        <span>RACE</span>
        <span>{value.appearance.race}</span>
      </div>
      <div className='miniData'>
        <span>HEIGHT</span>
        <span>{value.appearance.height[0]}/{value.appearance.height[1]}</span>
      </div>
      <div className='miniData'>
        <span>WEIGHT</span>
        <span>{value.appearance.weight[0]}/{value.appearance.weight[1]}</span>
      </div>
      <div className='miniData'>
        <span>EYE COLOR</span>
        <span>{value.appearance.eyeColor}</span>
      </div>
      <div className='miniData'>
        <span>HAIR COLOR</span>
        <span>{value.appearance.hairColor}</span>
      </div>
    </div>
  )
}
