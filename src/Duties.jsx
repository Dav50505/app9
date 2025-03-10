import {FaAngleDoubleRight} from 'react-icons/fa'
import {v4 as uuidv4} from 'uuid'

import React from 'react'

const Duties = ({duties}) => {
    console.log(duties);
    
  return (
    <div>
        {duties.map((duty, index)=>{
            const id = uuidv4();
            // console.log(id);
            
            return (
            <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon' />
                <p>{duty}</p>
            </div>
      );
    })};
    </div>
  )
}

export default Duties