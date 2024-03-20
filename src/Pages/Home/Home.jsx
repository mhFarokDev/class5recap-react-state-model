import React, { useState } from 'react'
import "./Home.scss"
import Model from '../../components/Model/Model'
const Home = () => {

    const [bg, setBg] = useState("red")
    const [count, setCount] = useState(0)
    const [showModel, setShowModel] = useState(false)
  return (
    <>
    {showModel && <Model setShowModel={setShowModel}/>}
    
    <center><h1>React State</h1></center>
        <div className="color-boxes">
            <div className="box" style={{backgroundColor:`${bg}`}}></div>
            <div className="buttons">
                <button style={{backgroundColor:"red"}} onClick={()=>setBg("red")}>Red</button>
                <button style={{backgroundColor:"green"}} onClick={()=>setBg("green")}>Green</button>
                <button style={{backgroundColor:"blue"}} onClick={()=>setBg("blue")}>Blue</button>
                <button style={{backgroundColor:"orange"}} onClick={()=>setBg("orange")}>Orange</button>
            </div>
        </div>

        <div className='counter'>
            <h1>Counter</h1>
                <div className="num">{count}</div>
                <button onClick={()=>setCount(count <= 0 ? 0 : count-1)}>--</button>
                <button onClick={()=>setCount(count+1)}>++</button>
                <button onClick={()=>setCount(0)}>Reset</button>

        </div>


        <div className='modal-section'>
            <h1>Modal Quick View</h1>
            <button onClick={()=>setShowModel(true)}>Show Model</button>

        </div>
    </>
  )
}

export default Home