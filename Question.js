import React from 'react'
import "./Question.css"

function Question() {
  return (
    <div className="Container">
    <h2 className='heading'> What Do You Like To Share</h2>
    <form className='form'> 
    <div className="title">
        Title <input className='input' type="text"  placeholder='Enter a descriptive title'/>
    </div>
    <div className="abst">
        Abstract
        <input className='abst_input' type="" />
    </div>
    <div className="art">
        Article Text
        <input className='art_input' type="" />
    </div>
    <div className="tags">
        Tags
        <input className='tags_input' type="" placeholder='Please add upto 3 tags to describe your article' />
    </div>
    <div>
      <button className='btn'>Post</button>
    </div>
    </form>
    </div>
  )
}

export default Question
