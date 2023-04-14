import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons"

const Showdrop = ({quest, ans}) => {
    const [show, setshow] = useState(true)
  return (
    <div>
          <div className='showdown'>
              <div className='quest' onClick={(e)=>setshow(!show)}>
                {quest}
                <FontAwesomeIcon icon={show===true? faCaretDown : faCaretUp}/>
                </div>
              {
                show === true ?
                <div className='ans'>{ans}</div>
                :
                ''
              }
              
          </div>
          </div>
  )
}

export default Showdrop