import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Nav = ({displays, setDisplays, name, setName, resetNow, setResetNow, contactus, setContact}) => {
    const [oneValue, setOnevalue] = useState(1)
    const [twoValue, setTwovalue] = useState(1)
    const [threeValue, setThreevalue] = useState(1)
    const [fourValue, setFourvalue] = useState(1)
    const [fiveValue, setFivevalue] = useState(1)
    const [sixValue, setSixvalue] = useState(1)
    const [sevenValue, setSevenvalue] = useState(1)
    const [eightValue, setEightvalue] = useState(1)
    const [nineValue, setNinevalue] = useState(1)
    const [tenValue, setTenvalue] = useState(1)

    const [elevenValue, setElevenvalue] = useState(1)
    const [twelveValue, setTwelvevalue] = useState(1)
    const [thirteenValue, setThirteenvalue] = useState(1)
    const [fourteenValue, setFourteenvalue] = useState(1)
    const [fifteenValue, setFifteenvalue] = useState(1)
    const [seventeenValue, setSeventeenvalue] = useState(1)
    const [sixteenValue, setSixteenvalue] = useState(1)
    const [eighteenValue, setEighteenvalue] = useState(1)
    const [nineteenValue, setNineteenvalue] = useState(1)
    const [twentyValue, setTwentyvalue] = useState(1)

    const [openView, setOpenview] = useState(false)

    const view = () => {
        setOpenview(prev => !prev)
    }
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
    const sixInput = (e) => {
        
        setSixvalue(e.target.value)
        if(sixValue < 1){
            setSixvalue(1)
            return
        }
    }
    const sevenInput = (e) => {
        setSevenvalue(e.target.value)
        if(sevenValue < 1){
            setSevenvalue(1)
            return
        }
    }
    const eightInput = (e) => {
        setEightvalue(e.target.value)
        if(eightValue < 1){
            setEightvalue(1)
            return
        }
    }
    const nineInput = (e) => {
        setNinevalue(e.target.value)
        if(nineValue < 1){
            setNinevalue(1)
            return
        }
    }
    const tenInput = (e) => {
        setTenvalue(e.target.value)
        if(tenValue < 1){
            setTenvalue(1)
            return
        }
    }
    

    const elevenInput = (e) => {
        
        setElevenvalue(e.target.value)
        if(elevenValue < 1){
            setElevenvalue(1)
            return
        }
    }
    const twelveInput = (e) => {
        setTwelvevalue(e.target.value)
        if(twelveValue < 1){
            setTwelvevalue(1)
            return
        }
    }
    const thirteenInput = (e) => {
        setThirteenvalue(e.target.value)
        if(thirteenValue < 1){
            setThirteenvalue(1)
            return
        }
    }
    const fourteenInput = (e) => {
        setFourteenvalue(e.target.value)
        if(fourteenValue < 1){
            setFourteenvalue(1)
            return
        }
    }
    const fifteenInput = (e) => {
        setFifteenvalue(e.target.value)
        if(fifteenValue < 1){
            setFifteenvalue(1)
            return
        }
    }
    const sixteenInput = (e) => {
        
        setSixteenvalue(e.target.value)
        if(sixteenValue < 1){
            setSixteenvalue(1)
            return
        }
    }
    const seventeenInput = (e) => {
        setSeventeenvalue(e.target.value)
        if(seventeenValue < 1){
            setSeventeenvalue(1)
            return
        }
    }
    const eighteenInput = (e) => {
        setEighteenvalue(e.target.value)
        if(eighteenValue < 1){
            setEighteenvalue(1)
            return
        }
    }
    const nineteenInput = (e) => {
        setNineteenvalue(e.target.value)
        if(nineteenValue < 1){
            setNineteenvalue(1)
            return
        }
    }
    const twentyInput = (e) => {
        setTwentyvalue(e.target.value)
        if(twentyValue < 1){
            setTwentyvalue(1)
            return
        }
    }
    const shopAll = () => {
        setDisplays([true, true, true, true, true])
        setName('All Products')
        setResetNow(false)
        setContact(false)
      }
    const dogs = () => {
        setDisplays([true, false, false, false, false])
        setName('Dogs')
        setResetNow(false)
        setContact(false)
        
    }
    const cats = () => {
        setDisplays([false, true, false, false, false])
        setName('Cats')
        setResetNow(false)
        setContact(false)
    }
    const birds = () => {
        setDisplays([false, false, true, false, false])
        setName('Birds')
        setResetNow(false)
        setContact(false)
    }
    const fish = () => {
        setDisplays([false, false, false, true, false])
        setName('Aquatics')
        setResetNow(false)
        setContact(false)
    }
    const bunnies = () => {
        setDisplays([false, false, false, false, true])
        setName('Bunnies')
        setResetNow(false)
        setContact(false)
    }
    const reset = () => {
        setResetNow(true)
    }
    const showCon = () => {
        setContact(true)
        if (contactus) {
            setResetNow(true)
        }
    }
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <>

            <div className='round'>
                <div className='petlist'>
                    <p onClick={shopAll}>SHOP ALL</p>
                    <p onClick={dogs}>DOGS</p>
                    <p onClick={cats}>CATS</p>
                    <p onClick={birds}>BIRDS</p>
                    <p onClick={fish}>FISH & AQUATICS</p>
                    <p onClick={bunnies}>BUNNIES</p>
                    <p onClick={showCon}>CONTACT</p>
                </div>
                <div className='profilediv'>
                    <FontAwesomeIcon icon={faUserCircle} size='2x' />
                    <p>LOG IN</p>
                </div>
            </div>

            <div style={{display: contactus === true ? 'flex' : 'none'}} className='secDiv'>
                <h1>Throw us
                    a question,
                    we promise
                    to fetch</h1>
                <div className="form-container">
                    <h2>Contact Us</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone:</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <div id='navigate' style={{ display: resetNow || contactus === true ? 'none' : 'flex' }} className='capture'>
                <div style={{
                    marginTop: (() => {
                        if (displays[0] === true && displays[1] === false) {
                            return '20px';
                        } else if (displays[0] === true && displays[1] === true) {
                            return '-122.5%';
                        } else {
                            return '20px';
                        }
                    })()

                }} className='allproducts'>
                    <p onClick={reset} style={{ fontSize: '0.9rem' }}>Home &gt; Product</p>
                    <h3 style={{ marginTop: '5px', fontWeight: '600' }}>Browse by</h3>
                    <div className='longline'></div>
                    <p onClick={shopAll}>All products</p>
                    <p onClick={dogs}>Dog food</p>
                    <p onClick={cats}>Cat toy</p>
                    <p onClick={birds}>Bird house</p>
                    <p onClick={fish}>Fish aquarium</p>
                    <p onClick={bunnies}>Bunny litter</p>
                </div>
                <div className='self'>
                    <h1>{name}</h1>
                    <div style={{ display: displays[0] === true ? 'flex' : 'none' }} className='salesarrangement'>
                        <div className='newsale'>
                            <img src='catmouse.webp' height={150} width={200} />
                            <h3> Cat Toy Mouse </h3>
                            <div className='liner'></div>
                            <p style={{ color: 'gray', fontFamily: 'monospace', fontSize: '1rem', fontWeight: '100' }}>$12</p>
                            <div className="input">
                                <input onChange={oneInput} type="number" className="centered" value={oneValue} />
                            </div>
                            <button className='sellit'>Add to cart</button>
                        </div>
                        <div className='newsale'>
                            <img src='fakebone.webp' height={150} width={200} />
                            <h3> Synth Bone </h3>
                            <div className='liner'></div>
                            <p style={{ color: 'gray', fontFamily: 'monospace', fontSize: '1rem', fontWeight: '100' }}>$7</p>
                            <div className="input">
                                <input onChange={twoInput} type="number" className="centered" value={twoValue} />
                            </div>
                            <button className='sellit'>Add to cart</button>
                        </div>
                        <div className='newsale'>
                            <img src='foodbowl.webp' height={150} width={200} />
                            <h3> Food Bowl </h3>
                            <div className='liner'></div>
                            <p style={{ color: 'gray', fontFamily: 'monospace', fontSize: '1rem', fontWeight: '100' }}>$15</p>
                            <div className="input">
                                <input onChange={threeInput} type="number" className="centered" value={threeValue} />
                            </div>
                            <button className='sellit'>Add to cart</button>
                        </div>
                        <div className='newsale'>
                            <img src='dogtie.webp' height={150} width={200} />
                            <h3> Dog Tie </h3>
                            <div className='liner'></div>
                            <p style={{ color: 'gray', fontFamily: 'monospace', fontSize: '1rem', fontWeight: '100' }}>$6</p>
                            <div className="input">
                                <input onChange={fourInput} type="number" className="centered" value={fourValue} />
                            </div>
                            <button className='sellit'>Add to cart</button>
                        </div>
                    </div>
                    <div style={{ display: displays[1] === true ? 'flex' : 'none' }} className='salesarrangement'>
                        <div className='newsale'>
                            <img src='catplay.webp' height={150} width={200} />
                            <h3> Cat Toy </h3>
                            <div className='liner'></div>
                            <p style={{ color: 'gray', fontFamily: 'monospace', fontSize: '1rem', fontWeight: '100' }}>$1</p>
                            <div className="input">
                                <input onChange={fiveInput} type="number" className="centered" value={fiveValue} />
                            </div>
                            <button className='sellit'>Add to cart</button>
                        </div>
                        <div className='newsale'>
                            <img src='doghouse.webp' height={150} width={200} />
                            <h3> Dog House </h3>
                            <div className='liner'></div>
                            <p style={{ color: 'gray', fontFamily: 'monospace', fontSize: '1rem', fontWeight: '100' }}>$40</p>
                            <div className="input">
                                <input onChange={sixInput} type="number" className="centered" value={sixValue} />
                            </div>
                            <button className='sellit'>Add to cart</button>
                        </div>
                        <div className='newsale'>
                            <img src='birdhouse.webp' height={150} width={200} />
                            <h3> Bird House </h3>
                            <div className='liner'></div>
                            <p style={{ color: 'gray', fontFamily: 'monospace', fontSize: '1rem', fontWeight: '100' }}>$32</p>
                            <div className="input">
                                <input onChange={sevenInput} type="number" className="centered" value={sevenValue} />
                            </div>
                            <button className='sellit'>Add to cart</button>
                        </div>
                        <div className='newsale'>
                            <img src='treadmill.webp' height={150} width={200} />
                            <h3> Tread Mill </h3>
                            <div className='liner'></div>
                            <p style={{ color: 'gray', fontFamily: 'monospace', fontSize: '1rem', fontWeight: '100' }}>$21</p>
                            <div className="input">
                                <input onChange={eightInput} type="number" className="centered" value={eightValue} />
                            </div>
                            <button className='sellit'>Add to cart</button>
                        </div>
                    </div>
                    <div style={{ display: displays[2] === true ? 'flex' : 'none' }} className='salesarrangement'>
                        <div className='newsale'>
                            <img src='rabhome.webp' height={150} width={200} />
                            <h3> Rabbit Home </h3>
                            <div className='liner'></div>
                            <p style={{ color: 'gray', fontFamily: 'monospace', fontSize: '1rem', fontWeight: '100' }}>$65</p>
                            <div className="input">
                                <input onChange={nineInput} type="number" className="centered" value={nineValue} />
                            </div>
                            <button className='sellit'>Add to cart</button>
                        </div>
                        <div className='newsale'>
                            <img src='framehome.webp' height={150} width={200} />
                            <h3> Frame House </h3>
                            <div className='liner'></div>
                            <p style={{ color: 'gray', fontFamily: 'monospace', fontSize: '1rem', fontWeight: '100' }}>$43</p>
                            <div className="input">
                                <input onChange={tenInput} type="number" className="centered" value={tenValue} />
                            </div>
                            <button className='sellit'>Add to cart</button>
                        </div>
                        <div className='newsale'>
                            <img src='aquarium.webp' height={150} width={200} />
                            <h3> Aquarium </h3>
                            <div className='liner'></div>
                            <p style={{ color: 'gray', fontFamily: 'monospace', fontSize: '1rem', fontWeight: '100' }}>$90</p>
                            <div className="input">
                                <input onChange={elevenInput} type="number" className="centered" value={elevenValue} />
                            </div>
                            <button className='sellit'>Add to cart</button>
                        </div>
                        <div className='newsale'>
                            <img src='quickbelt.webp' height={150} width={200} />
                            <h3> Pet Belt </h3>
                            <div className='liner'></div>
                            <p style={{ color: 'gray', fontFamily: 'monospace', fontSize: '1rem', fontWeight: '100' }}>$76</p>
                            <div className="input">
                                <input onChange={twelveInput} type="number" className="centered" value={twelveValue} />
                            </div>
                            <button className='sellit'>Add to cart</button>
                        </div>
                    </div>
                    <div style={{ display: displays[3] === true ? 'flex' : 'none' }} className='salesarrangement'>
                        <div className='newsale'>
                            <img src='natureone.webp' height={150} width={200} />
                            <h3> Synth Tree </h3>
                            <div className='liner'></div>
                            <p style={{ color: 'gray', fontFamily: 'monospace', fontSize: '1rem', fontWeight: '100' }}>$54</p>
                            <div className="input">
                                <input onChange={thirteenInput} type="number" className="centered" value={thirteenValue} />
                            </div>
                            <button className='sellit'>Add to cart</button>
                        </div>
                        <div className='newsale'>
                            <img src='bulb.webp' height={150} width={200} />
                            <h3> Bulb </h3>
                            <div className='liner'></div>
                            <p style={{ color: 'gray', fontFamily: 'monospace', fontSize: '1rem', fontWeight: '100' }}>$67</p>
                            <div className="input">
                                <input onChange={fourteenInput} type="number" className="centered" value={fourteenValue} />
                            </div>
                            <button className='sellit'>Add to cart</button>
                        </div>
                        <div className='newsale'>
                            <img src='stoneone.jpg' height={150} width={200} />
                            <h3> Synth Stone </h3>
                            <div className='liner'></div>
                            <p style={{ color: 'gray', fontFamily: 'monospace', fontSize: '1rem', fontWeight: '100' }}>$120</p>
                            <div className="input">
                                <input onChange={fifteenInput} type="number" className="centered" value={fifteenValue} />
                            </div>
                            <button className='sellit'>Add to cart</button>
                        </div>
                        <div className='newsale'>
                            <img src='bodyscrub.webp' height={150} width={200} />
                            <h3> Pet Scrub </h3>
                            <div className='liner'></div>
                            <p style={{ color: 'gray', fontFamily: 'monospace', fontSize: '1rem', fontWeight: '100' }}>$54</p>
                            <div className="input">
                                <input onChange={sixteenInput} type="number" className="centered" value={sixteenValue} />
                            </div>
                            <button className='sellit'>Add to cart</button>
                        </div>
                    </div>
                    <div style={{ display: displays[4] === true ? 'flex' : 'none' }} className='salesarrangement'>
                        <div className='newsale'>
                            <img src='toyskate.webp' height={150} width={200} />
                            <h3> Toy Skate </h3>
                            <div className='liner'></div>
                            <p style={{ color: 'gray', fontFamily: 'monospace', fontSize: '1rem', fontWeight: '100' }}>$12</p>
                            <div className="input">
                                <input onChange={seventeenInput} type="number" className="centered" value={seventeenValue} />
                            </div>
                            <button className='sellit'>Add to cart</button>
                        </div>
                        <div className='newsale'>
                            <img src='tub.webp' height={150} width={200} />
                            <h3> Pet Tub </h3>
                            <div className='liner'></div>
                            <p style={{ color: 'gray', fontFamily: 'monospace', fontSize: '1rem', fontWeight: '100' }}>$87</p>
                            <div className="input">
                                <input onChange={eighteenInput} type="number" className="centered" value={eighteenValue} />
                            </div>
                            <button className='sellit'>Add to cart</button>
                        </div>
                        <div className='newsale'>
                            <img src='hanger.webp' height={150} width={200} />
                            <h3> Pet Hangon </h3>
                            <div className='liner'></div>
                            <p style={{ color: 'gray', fontFamily: 'monospace', fontSize: '1rem', fontWeight: '100' }}>$62</p>
                            <div className="input">
                                <input onChange={nineteenInput} type="number" className="centered" value={nineteenValue} />
                            </div>
                            <button className='sellit'>Add to cart</button>
                        </div>
                        <div className='newsale'>
                            <img src='jumptru.webp' height={150} width={200} />
                            <h3> Jumptru </h3>
                            <div className='liner'></div>
                            <p style={{ color: 'gray', fontFamily: 'monospace', fontSize: '1rem', fontWeight: '100' }}>$75</p>
                            <div className="input">
                                <input onChange={twentyInput} type="number" className="centered" value={twentyValue} />
                            </div>
                            <button className='sellit'>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='cartDiv'>
                <div className='cartButton'>
                    <button onClick={view}>view cart</button>
                </div>
                <div style={{display: openView ? 'flex' : 'none'}} className='myProducts'>
                    <div className='nowProducts'>
                        <div className='myDiv'>
                            <img src='rabhome.webp' height={50} width={50} />
                        </div>
                        <div>
                            <p>Rabbit home</p>
                            <p style={{fontWeight: '600'}}>$12</p>
                            <p>Amount: 1</p>
                        </div>
                        <button>x</button>
                    </div>

                     <div className='nowProducts'>
                        <div className='myDiv'>
                            <img src='toyskate.webp' height={50} width={50} />
                        </div>
                        <div>
                            <p>Rabbit home</p>
                            <p style={{fontWeight: '600'}}>$6</p>
                            <p>Amount: 1</p>
                        </div>
                        <button>x</button>
                    </div>
                    <h3>TOTAL: $18</h3>
                    <button className='checkout'>Purchase</button>
                </div>
            </div>
        </>
    )
}
export default Nav