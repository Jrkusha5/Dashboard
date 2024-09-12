import ApexChart from '../Chart/ApexChart'
import Header from '../Header/Header'
import Categories from '../Categories/Categories'
const Main = () => {
  return (
    <div className='flex-1'>
      <Header/>
      <Categories/>
      <div className=' flex gap-4 p-10'>
        <ApexChart/>
      </div>
      </div>
  )
}

export default Main