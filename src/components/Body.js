import React from 'react'


const Body = () => {
  return (
    <div className='h-dvh '>
    <h2 className='text-white text-7xl text-center mt-28 mb-16'> Just do it!!!</h2>
    <div className="flex justify-center ">
      <input className='px-4 p-2 my-4 bg-black text-white rounded-s-3xl w-2/5' placeholder='Add a task' />
      <button className='bg-white text-black px-4 my-4 rounded-e-3xl w-0.5/5'>Pin it</button>
    </div>
    <div className='todos ml-[26rem] w-1/2 justify-self-center border border-black mt-6' >
        <div className='todo flex justify-between py-3 shadow-2xl rounded-3xl bg-slate-600 text-white m-8 w-[26rem] ml-[14rem]'>
            <div className='pl-4'> Lorem ipsum dolor,sit amet </div>
                <button className='px-4'> <img className='w-4 h-6' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Checkmark_Symbol.svg/1024px-Checkmark_Symbol.svg.png' alt='Tick'/> </button>
            {/* <button> <img src="../delete.png" alt="delete"/> </button>
            <button><img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-xzqud&psig=AOvVaw2FXeAfq0gF3XSltwNcCku3&ust=1719522344470000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPiBrImW-oYDFQAAAAAdAAAAABAE' alt='Edit'/> </button> */}
        </div>
        <div className='todo flex justify-between py-3 shadow-2xl rounded-3xl bg-slate-600 text-white m-8 w-[26rem] ml-[14rem]'>
            <div className='pl-4'> Lorem ipsum dolor,sit amet </div>
                <button className='px-4'> <img className='w-4 h-6' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Checkmark_Symbol.svg/1024px-Checkmark_Symbol.svg.png' alt='Tick'/> </button>
            {/* <button> <img src="../delete.png" alt="delete"/> </button>
            <button><img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-xzqud&psig=AOvVaw2FXeAfq0gF3XSltwNcCku3&ust=1719522344470000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPiBrImW-oYDFQAAAAAdAAAAABAE' alt='Edit'/> </button> */}
        </div>
        <div className='todo flex justify-between py-3 shadow-2xl rounded-3xl bg-slate-600 text-white m-8 w-[26rem] ml-[14rem]'>
            <div className='pl-4'> Lorem ipsum dolor,sit amet </div>
                <button className='px-4'> <img className='w-4 h-6' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Checkmark_Symbol.svg/1024px-Checkmark_Symbol.svg.png' alt='Tick'/> </button>
            {/* <button> <img src="../delete.png" alt="delete"/> </button>
            <button><img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-xzqud&psig=AOvVaw2FXeAfq0gF3XSltwNcCku3&ust=1719522344470000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPiBrImW-oYDFQAAAAAdAAAAABAE' alt='Edit'/> </button> */}
        </div>
    </div>
    </div>
  )
}

export default Body;