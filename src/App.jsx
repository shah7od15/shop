import './App.css'
import Sidebar from './sidebar/Sidebar'
import { useState, useEffect } from 'react';

function App() {
     let [mahsulotlar,setMahsulotlar]= useState([])
    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then((res)=> res.json())
        .then((data)=>setMahsulotlar(data.products))
    },[]);
    return (
        <div>

            <header>
                <div className="container">
                    <div>
                        <h1>Logo</h1>
                        <div className="div">
                            <i class="fa-solid fa-magnifying-glass" id='i'></i>
                            <input type="text" />
                        </div>
                        <p>Home</p>
                        <select>
                            <option value="">Explore</option>
                        </select>
                    </div>
                    <div className='h-left'>
                        <i class="fa-solid fa-bell"></i>
                        <i class="fa-solid fa-message"></i>
                        <button>Wallet</button>
                        <img src="./Ellipse 258.png" alt="" />
                    </div>
                </div>
            </header>

            <Sidebar></Sidebar>

             <main>
                <div className="container">
                    <div className="mainTop">
                        <p>571,632 items</p>
                        <div>
                            <select name="" id="">
                                <option value="">All Items</option>
                            </select>
                            <select name="" id="">
                                <option value="">Sort By</option>
                            </select>
                        </div>
                    </div>

                    <div className="cards">
                        {mahsulotlar.map((m,i)=>{
                            return(
                                <div className="card" key={i}>
                            <img src={m.images} alt="" />
                            <div>
                            <h3>Categories:{m.category}</h3>
                            <p>Rating:{m.rating}</p>
                            </div>
                            <div>
                            <h2>{m.tite}</h2>
                            <h2>price: {m.price}</h2>
                            </div>
                            <div>
                            <i class="fa-solid fa-heart"></i>
                            <button>Buy Now</button>
                            </div>
                        </div>
                            )
                        })}
                        
                    </div>
                </div>
             </main>






        </div>
    )
}

export default App