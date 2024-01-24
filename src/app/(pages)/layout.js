import React from 'react'
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import FeedBack from "@/components/feedback/FeedBack";

const PageLayout = ({children}) => {
  return (
    <>
      <Navbar />
      <section className={'max-w-[1200px] mx-auto'}>
        {children}
        <FeedBack />
      </section>
      <Footer />
    </>
  )
}
export default PageLayout
