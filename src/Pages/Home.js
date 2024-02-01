import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  var [count,setCount]=useState(0);
  var [twice,setTwice]=useState(0);
  useEffect(a=>{
    setTwice(count**2);
  },[count])

  return (
     <div className="text-center">
            <Link to="/contact">Contact</Link><br />
      <h1>{count}</h1>
      <button className='btn btn-primary m-2' type='button' onClick={()=>setCount(count+1)} >Add</button>
      <button className='btn btn-primary m-2' type='button' onClick={()=>setCount(count-1)} >Sub</button>
      <h2>clicked {count} times.</h2>
      <h2>twice = {twice} </h2>
      <input value={count} onChange={e=>setCount(e.target.value)} />
    </div> 
  );
}

export default Home;
