import { useEffect, useState } from 'react'
import './Experience.css'

import { Education } from '../../Data/Static/Education'
import { Experiences } from '../../Data/Static/Experience'

function Experience() {
    const [active,setActive] = useState(false)

    const handleChange = () =>{
        setActive(!active)
        console.log(active)
    }

    useEffect(()=>{
        console.log('...')
        // {console.log(Education[0].Grade)}
        {console.log(Experiences)}
    },[active])

  return (
    <div className='experience container'>
        <div className='experience__toggle-btn'>
            <button className={active=== false ? "active" : "none"} onClick={handleChange}>Experience</button>
            <button className={active=== true ? "active" : "none"} onClick={handleChange}>Education</button>
        </div>
        <div className='experience__card'>
        </div>
    </div>
  )
}

export default Experience