import React, {useContext} from 'react'
import FieldCaption from './components/FieldCaption'
import { ContextProvider } from './context/Context'

const App = () => {

  const {data} = useContext(ContextProvider)

  return (
    <>
      <div className='w-full h-screen flex justify-center items-start my-4'>
        <div className="main w-11/12 border border-gray-300">
          <div className="top w-full h-8 bg-gray-200 flex justify-between px-2 items-center">
            <p className='text-gray-600'>Chest Pain</p>
            <p className='text-blue-500 font-bold'>Add Free Text</p>
          </div>
          <div className="down flex gap-1 px-2 text-base py-4">
            {
              data.Result && data.Result.map((item) => {
                return (
                  <span className='text-gray-400' key={item.$id}>
                    {item.StartText} <FieldCaption fieldCaption={item.FieldCaption} hasChild={item.HasChild} typeId={item.TypeId} child={item.Childs}  /> {item.EndText}
                  </span>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App