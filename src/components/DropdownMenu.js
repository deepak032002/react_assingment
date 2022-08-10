import React from 'react'

const DropdownMenu = ({ typeId, child, setCaption }) => {

  const handleClick = (duration) => {
    setCaption(duration)
  }

  const handleMultiClick = (location) => {
    setCaption((prev) => {
      if (prev === 'Location') {
        return location
      } else {
        return prev + " " + location
      }
    })
  }

  return (
    <>
      {
        typeId === "3" && <ul className='absolute w-max top-0 left-full z-auto bg-white shadow-lg'>
          {
            child.$values.map((item) => {
              return (

                <li key={item.$id} onClick={item.HasChild === 0 ? () => handleClick(item.FieldCaption) : () => { }} className={`relative hover:bg-gray-300 text-black px-1 py-2 ${item.HasChild ? 'menu' : ''}`}>

                  {item.FieldCaption}
                  {
                    item.HasChild === 1 && <DropdownMenu setCaption={setCaption} typeId={item.TypeId} child={item.Childs} />
                  }
                </li>

              )
            })
          }
        </ul>
      }

      {
        typeId === "2" && <ul className='absolute w-max top-0 left-full z-auto bg-white shadow-lg'>
          {
            child.$values.map((item) => {
              return (

                <li key={item.$id} onClick={item.HasChild === 0 ? () => handleMultiClick(item.FieldCaption) : () => { }} className={`relative hover:bg-gray-300 text-black px-1 py-2 ${item.HasChild ? 'menu' : ''}`}>

                  {item.FieldCaption}
                  {
                    item.HasChild === 1 && <DropdownMenu setCaption={setCaption} typeId={item.TypeId} child={item.Childs} />
                  }
                </li>

              )
            })
          }
        </ul>
      }

    </>
  )
}

export default DropdownMenu