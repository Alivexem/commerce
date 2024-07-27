import { useState } from 'react'
import './App.css'
const Body = ({all, one, two, three, four, five}) => {
    const [oneValue, setOnevalue] = useState(1)
    const [twoValue, setTwovalue] = useState(1)
    const [threeValue, setThreevalue] = useState(1)
    const [fourValue, setFourvalue] = useState(1)
    const [fiveValue, setFivevalue] = useState(1)
    const oneInput = (e) => {
        
        setOnevalue(e.target.value)
        if(oneValue < 1){
            setOnevalue(1)
            return
        }
    }
    const twoInput = (e) => {
        setTwovalue(e.target.value)
        if(twoValue < 1){
            setTwovalue(1)
            return
        }
    }
    const threeInput = (e) => {
        setThreevalue(e.target.value)
        if(threeValue < 1){
            setThreevalue(1)
            return
        }
    }
    const fourInput = (e) => {
        setFourvalue(e.target.value)
        if(fourValue < 1){
            setFourvalue(1)
            return
        }
    }
    const fiveInput = (e) => {
        setFivevalue(e.target.value)
        if(fiveValue < 1){
            setFivevalue(1)
            return
        }
    }
    return (
        <>
            <div className='body'>
                <img className='background' src='beauty.jpg' />
                <div className='moval'>
                    <h2 style={{ color: 'black', fontWeight: 'bold' }}>WELCOME TO OUR PET SUPPLY SHOP</h2>
                   <a href='#navigate'> <button onClick={all}>start shopping</button> </a>
                </div>
            </div>
            
            <div className='aligner'>
                <div className='first'>
                    <div className='contentnow'>
                        <h2 style={{ color: 'black' }}>Deal of the week</h2>
                        <p>50% off</p>
                        <h4 style={{ color: 'black',fontWeight: 'bold'}}>on dog treats</h4>
                        <a href='#navigate'> <button onClick={one} className='shopnow'>shop now</button></a>
                    </div>
                </div>
                <div className='second'>
                    <div className='contentnow'>
                        <h2 style={{color: 'black'}}>Dogs</h2>
                        <h4 style={{color: 'black', fontWeight: 'bold'}}>Studies found that dog owners are happier!</h4>

                        <a href='#navigate'> <button onClick={one}  className='shopnow'>shop now</button></a>
                    </div>
                </div>
                <div className='third'>
                    <div className='contentnow'>
                        <h2 style={{color: 'black'}}>cats</h2>
                        <h4 style={{color: 'black',fontWeight: 'bold'}}>cute, caring and loving</h4>

                        <a href='#navigate'><button onClick={two} className='shopnow'>shop now</button></a>
                    </div>
                </div>

            </div>

            <div className='aligner'>
                <div className='fourth'>
                    <div className='contentnow'>
                        <h2 style={{color: 'white'}}>Birds</h2>
                        <p>50% off</p>
                        <h4>Your feathery companion</h4>
                        <a href='#navigate'><button onClick={three} className='shopnow'>shop now</button></a>
                    </div>
                </div>
                <div className='fifth'>
                    <div className='contentnow'>
                        <h2 style={{color: 'white'}}>Fish</h2>
                        <h4>In an aquarium? They still make your home beautiful</h4>

                        <a href='#navigate'><button onClick={four} className='shopnow'>shop now</button></a>
                    </div>
                </div>
                <div className='sixth'>
                    <div className='contentnow'>
                        <h2 style={{color: 'white'}}>Bunnies</h2>
                        <h4>You should give them a try</h4>

                        <a href='#navigate'><button onClick={five} className='shopnow'>shop now</button></a>
                    </div>
                </div>

            </div>
            <hr style={{ margin: '10px 15px 35px 15px' }} />
            <h1 style={{ color: 'rgba(243, 82, 23)', textAlign: 'center', marginBottom: '40px' }}>YOUR PET'S CHOICE</h1>
            <div className='salesarrange'>
            <div className='mysales'>
                <img src='catmouse.webp' height={170} width={220} />
                <h3> Cat Toy Mouse </h3>
                <div className='liner'></div>
                <p style={{ color: 'gray', fontFamily: 'monospace', fontSize: '1rem', fontWeight: '100' }}>$12</p>
                <div className="input-container">
                    <input onChange={oneInput} type="number" className="centered-input" value={oneValue} />
                </div>
                <button className='sellone'>Add to cart</button>
            </div>
            <div className='mysales'>
                <img src='fakebone.webp' height={170} width={220} />
                <h3> Synth Bone </h3>
                <div className='liner'></div>
                <p style={{ color: 'gray', fontFamily: 'monospace', fontSize: '1rem', fontWeight: '100' }}>$7</p>
                <div className="input-container">
                    <input onChange={twoInput} type="number" className="centered-input" value={twoValue} />
                </div>
                <button className='sellone'>Add to cart</button>
            </div>
            <div className='mysales'>
                <img src='foodbowl.webp' height={170} width={220} />
                <h3> Food Bowl </h3>
                <div className='liner'></div>
                <p style={{ color: 'gray', fontFamily: 'monospace', fontSize: '1rem', fontWeight: '100' }}>$15</p>
                <div className="input-container">
                    <input onChange={threeInput} type="number" className="centered-input" value={threeValue} />
                </div>
                <button className='sellone'>Add to cart</button>
            </div>
            <div className='mysales'>
                <img src='dogtie.webp' height={170} width={220} />
                <h3> Dog Tie </h3>
                <div className='liner'></div>
                <p style={{ color: 'gray', fontFamily: 'monospace', fontSize: '1rem', fontWeight: '100' }}>$6</p>
                <div className="input-container">
                    <input onChange={fourInput} type="number" className="centered-input" value={fourValue} />
                </div>
                <button className='sellone'>Add to cart</button>
            </div>
            <div className='mysales'>
                <img src='catplay.webp' height={170} width={220} />
                <h3> Paw Toy </h3>
                <div className='liner'></div>
                <p style={{ color: 'gray', fontFamily: 'monospace', fontSize: '1rem', fontWeight: '100' }}>$1</p>
                <div className="input-container">
                    <input onChange={fiveInput} type="number" className="centered-input" value={fiveValue} />
                </div>
                <button className='sellone'>Add to cart</button>
            </div>

            </div>
            
        </>
    )
}

export default Body