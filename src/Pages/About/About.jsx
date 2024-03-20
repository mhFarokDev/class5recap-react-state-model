import React, { useEffect, useRef } from 'react'

import "./About.scss"
const About = () => {

    const title = useRef(null)
    const peragrap = useRef(null)
    useEffect(()=>{
        console.log(title.current.innerHTML);
        alert(peragrap.current.innerHTML)
    },[title, peragrap])
    // console.log(title.current.innerHTML);
    // title.current.onclick = (e) =>{
    //     alert("UseRef to get an element in react.")
    // }

    // alert(peragrap.current.innerHTML)
  return (
    <div>
        <h1 ref={title}>Hello UseRef</h1>
        <p ref={peragrap}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, nobis officia adipisci enim quam consequatur? Enim suscipit repudiandae vitae sunt consectetur sed aliquid quo dolorum dolorem soluta nulla accusamus illum asperiores odit aperiam, amet quia! Cum quidem a incidunt debitis exercitationem modi eius sint laborum harum fuga assumenda tempora ipsam autem minus, recusandae porro aperiam alias in ad delectus. Aut ratione quas qui minus! Eveniet blanditiis maxime at, enim alias facere modi velit rerum dolore cum explicabo beatae itaque deleniti animi odit pariatur numquam illum provident eius accusantium non nostrum ipsam? Repudiandae modi temporibus deleniti ex quidem nemo amet optio?</p>
    </div>
  )
}

export default About