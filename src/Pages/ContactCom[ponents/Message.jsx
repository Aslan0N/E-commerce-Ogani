import React from 'react'

const Message = () => {
  return (
    <>
        <section id='message'>
        <h2>Leave Message</h2>
            <form>
                <div className="container">
                    <div className="row g-3">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <input type="text" placeholder='Your Name' />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <input type="email" name="" id="" placeholder='Your Email' />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                            <textarea name="" id="" cols="30" rows="5" placeholder='Your Message'></textarea>
                        </div>
                    </div>
                </div>
                <button>SEND MESSAGE</button>
            </form>
        </section>
    </>
  )
}

export default Message