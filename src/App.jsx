import './App.css'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import House from './components/House'
import Loading from './components/Loading'

function App() {

  const {data:houses=[],isLoading} = useQuery({
      queryKey: ['houses'],
      queryFn: async()=>{
        const response = await axios.get('https://wizard-world-api.herokuapp.com/houses')
        return response.data
      }
  })

  if (isLoading) {
    return <Loading/>
  }
  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col w-96 justify-center'>
        {houses.map(house=>(<House key={house.id} house={house}/>))}
      </div>
    </div>
  )
}

export default App
