import Card from "./components/Card"
import './App.css'

function App() {
  

  return (
    <>
      <h1 className='bg-green-400 text-black'>TailWind test</h1>
      <Card username="Dev" btnText="click me"/>
      <Card username="Dutta" />
    </>
  )
}

export default App
