import React from 'react'
import './Explain.css'

const Explain = () => {
  return (
    <div className='explain'>
        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#00b300" id="sheets-icon">
            <path d="M267.69-60v-303.61L134.23-580l172.69-280h346.16l172.69 280-133.46 216.39V-60L480-131.92 267.69-60Zm60-84.85L480-195.54l152.31 50.69V-300H327.69v155.15ZM340.38-800l-136 220 136 220h279.24l136-220-136-220H340.38ZM438-431.23 310.23-558 353-600.77l85 85 169-170L649.77-644 438-431.23ZM327.69-300h304.62-304.62Z"></path>
        </svg>
        <span className='explain-text font-press-start-2p'>Now what? - <a href="/sales-pipeline-review" id="interpret">Interpret your Score learn more.</a></span>
</div>

  )
}

export default Explain
