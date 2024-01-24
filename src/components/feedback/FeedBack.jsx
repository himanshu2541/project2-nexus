"use client"
import React, {useState} from 'react'
import {motion} from "framer-motion";

const sendData = async (data) => {
  const response = await fetch('/api/feedback', {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(data)
  })

  if(response.ok){
    return true;
  }
  else if(!response.ok){
    return false;
  }
}
const FeedBack = () => {
  const [message, setMessage] = useState(false)
  const [buttonTrigger, setButtonTrigger] = useState(false);
  const submitFeedbackForm = async (event) => {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value
    }
    event.target.reset()
    // console.log(data);
    const res = await sendData(data);

    setButtonTrigger(true)
    if(res){
      setMessage(true)
      setTimeout(() => {
        setMessage(false)
        setButtonTrigger(false)
      }, 5000)
    }
    else{
      setMessage(false)
      setTimeout(() => {
        setButtonTrigger(false)
      }, 5000)
    }
  }
  return (
    <div className={'w-full my-12 px-4  flex items-center justify-center'}>
      <div className={'flex flex-col gap-4 items-center w-full bg-gradient-to-r from-[#f1e1c2] to-[#fcbc98] p-8 rounded-2xl'}>
        <div className={'text-3xl font-semibold'}>Feedback</div>
        <form className={'flex flex-col gap-4 items-center w-full sm:w-3/4'} onSubmit={submitFeedbackForm}>
          <input type={'text'} placeholder={'Name'} name={'name'} className={'p-4 rounded-xl w-full'} required/>
          <input type={'email'} placeholder={'Email'} name={'email'} className={'p-4 rounded-xl w-full'} required/>
          <textarea placeholder={'Message'} name={'message'} rows={10} className={'p-4 resize-none rounded-xl w-full'} required/>
          <button className={'px-12 py-4 bg-black text-white text-center w-fit rounded-xl'}>Submit</button>
        </form>
        <div className={'h-20'}>
          {
            <motion.p
              className={`${message ? 'bg-green-200 border-green-100': 'bg-red-200 border-red-300'}  border-2 rounded-2xl p-8`}
              variants={{
                hidden: {scale: 0, opacity: 0},
                show: {scale: 1, opacity: 1}
              }}
              initial={"hidden"}
              animate={buttonTrigger ? "show" : "hidden"}
            >
              {
                buttonTrigger && (
                  message ? 'Thank you! Your message received' : 'Sorry! Message not sent. Try Again'
                )
              }
            </motion.p>
          }
        </div>
      </div>
    </div>
  )
}
export default FeedBack
