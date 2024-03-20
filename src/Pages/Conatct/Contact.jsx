import React, { useState } from 'react'


import "./Contact.scss"
const Contact = () => {
    const [res, setRes] = useState(false)
    const [inp, setInp] = useState({
        name : "",
        email: "",
        call : ""
    })
    const HandleInpForm = (e) =>{
        setInp({
            ...inp,
            [e.target.name] : e.target.value
        })
    }

    const HandleSubmitForm = (e) =>{
        e.preventDefault()
        setRes(true)
    }
  return (
    <>
        <div className="contact-page">
            <form action="#" onSubmit={HandleSubmitForm}>
                <input type="text" name="name" placeholder='Name' value={inp.name} onChange={HandleInpForm}/>
                <input type="text" name="email" placeholder='Email' value={inp.email} onChange={HandleInpForm}/>
                <input type="text" name="call" placeholder='Call' value={inp.call} onChange={HandleInpForm}/>
                <button>Submit</button>
            </form>
            {res && <div className="ruselt">
                <div className="crose" onClick={()=>setRes(false)}>X</div>
                <h4>Name : {inp.name}</h4>
                <h4>Email : {inp.email}</h4>
                <h4>Call : {inp.call}</h4>
            </div>}
            
        </div>
    </>
  )
}

export default Contact