
import './App.css'
import Categories from './Components/Categories'
import Delivery from './Components/Delivery'
import Featured from './Components/Featured'
import Meal from './Components/Meal'
import TopNav from './Components/TopNav'
import TopPicks from './Components/TopPicks'

function App() {


  return (
    <>
     <TopNav></TopNav>
     <Featured></Featured>
     <Delivery></Delivery>
     <TopPicks></TopPicks>
     <Meal></Meal>
     <Categories></Categories>
    </>
  )
}

export default App
