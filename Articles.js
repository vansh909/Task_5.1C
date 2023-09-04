import React from 'react'
import "./Articles.css";
function Articles() {
  return (
    <div className="Container">
        <h2 className='heading'> What Do You Like To Share</h2>
        <form className='form'> 
            Title <input className='input' type="text" />
        
            <div className='problem'>
             DESCRIBE YOUR PROBLEM:
            </div>
            {/* <textarea name="" id="text" cols="30" rows="10"></textarea> */}
            <input type="text" id='prob' />
        </form>
        <div className="tags">
          Tags
        <input className='tags_input' type="" placeholder='Please add upto 3 tags to describe your article' />
    </div>
        <button className='btn '>Post</button>
    </div>


  );
}

export default Articles
