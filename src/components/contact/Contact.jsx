'use client'
import React, {useState} from 'react'
import {motion} from "framer-motion";
import {RxCross2} from "react-icons/rx";

const sendData = async (data) => {
  const response = await fetch('/api/contact', {
    method: "POST", headers: {
      "Content-type": "application/json"
    }, body: JSON.stringify(data)
  })

  if (response.ok) {
    return true;
  } else if (!response.ok) {
    return false;
  }
}
const Contact = () => {
  const [message, setMessage] = useState(false)
  const [buttonTrigger, setButtonTrigger] = useState(false);
  const submitContactForm = async (event) => {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      subject: event.target.subject.value,
      message: event.target.message.value
    }

    event.target.reset()
    const res = await sendData(data);
    setButtonTrigger(true)
    setTimeout(() => {
      setButtonTrigger(false)
    }, 5000)

    if (res) {
      setMessage(true)
    }
    else {
      setMessage(false)
    }
  }
  return (<>
      <div className={'max-w-[1200px] mx-auto px-4 min-h-screen container flex-col gap-8 mt-16'}>
        <span className={'text-4xl font-bold'}>Contact Us</span>
        <form
          className={'flex flex-col gap-4 items-center w-full sm:w-3/4 border-2 border-orange-300 p-8 rounded-xl bg-orange-100'}
          onSubmit={submitContactForm}>
          <input type={'text'} placeholder={'Name'} name={'name'} className={'p-4 rounded-xl w-full bg-transparent border-2 border-orange-300'} required/>
          <input type={'email'} placeholder={'Email'} name={'email'} className={'p-4 rounded-xl w-full bg-transparent border-2 border-orange-300'} required/>
          <input type={'text'} placeholder={'Subject'} name={'subject'} className={'p-4 rounded-xl w-full bg-transparent border-2 border-orange-300'} required/>
          <textarea placeholder={'Message'} name={'message'} rows={10} className={'p-4 resize-none rounded-xl w-full bg-transparent border-2 border-orange-300'} required/>
          <button className={'px-12 py-4 bg-black text-white text-center w-fit rounded-xl'}>Submit</button>
        </form>
      </div>

      <motion.div
      variants={{
        hidden: {x: "100%", opacity: 0, scale: 0},
        show: {x: 0, opacity: 1, scale: 1}
      }}
      initial={'hidden'}
      animate={buttonTrigger ? 'show' : 'hidden'}
      className={`fixed bottom-0 right-0 p-4 m-8 container gap-4 max-w-fit ${message ? 'bg-green-400': 'bg-red-400'}`}
      >
        <span>{
          message ? 'Your message received' : 'Sorry! Your message not sent. Try Again'
        }</span>
        <span className={'text-xl'} onClick={() => {
          setButtonTrigger(false)
        }}>
          <RxCross2 className={'cursor-pointer'}/>
        </span>
      </motion.div>
    </>

  )
}
export default Contact
