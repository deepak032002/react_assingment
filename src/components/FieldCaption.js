import React from 'react'
import { useState } from 'react'
import DropdownMenu from './DropdownMenu'

const FieldCaption = ({ fieldCaption, hasChild, typeId, child }) => {
    const [caption, setCaption] = useState(fieldCaption)

    const handleDelete = () =>{
        setCaption(fieldCaption)
    }

    return (
        <>
                <span className='underline italic cursor-pointer firstOpenMenu relative'>
                    {caption}
                    {
                        hasChild === 1 && <DropdownMenu setCaption={setCaption} typeId={typeId} child={child} />
                    }
                </span>
                 
                {caption !== fieldCaption && <button className='text-blue-500 mx-2' onClick={handleDelete}><i className="fa-solid fa-delete-left"></i></button>}
        </>
    )
}

export default FieldCaption