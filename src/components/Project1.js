import React from 'react'
import '../styles/project1.css'

export default function Project1() {
  return (
       <>

       <nav>
           <div>
           <img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' />
           <h4>ReactFacts</h4>
           </div>

           <h3>React Course Project-1</h3>
       </nav>

       <div className='content-box'>
        <h1>Fun Facts about React</h1>
        <ul>
            <li>First Was Released in 2013</li>
            <li>Was Created by Jordan Walke</li>
            <li>Has well over 100K stars of GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Used to create Thousands of Apps</li>
        </ul>
       </div>


       </>
  )
}
