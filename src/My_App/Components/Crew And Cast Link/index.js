import React from 'react'

function CrewCastLink({ name }) {


    return (
        <p className='cast_original_name'>
            <a
                href="#" className='cast_person_link'>
                {name}
            </a>
        </p>
    )
}

export default CrewCastLink