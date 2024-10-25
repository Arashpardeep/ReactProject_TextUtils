import React from 'react'

export default function About(props) {
  return (
    <div className='container' style={{backgroundColor: props.mode === 'dark' ? props.darkColor : props.lightColor, color: props.mode === 'dark' ? 'white' : 'black'}}>
      <h1 className='my-3'>About Us</h1>
      <div className="accordion" id="accordionExample" style={{backgroundColor: props.mode === 'dark' ? props.darkColor : props.lightColor, color: props.mode === 'dark' ? 'white' : 'black'}}>
        <div className="accordion-item" style={{border: props.mode === 'light' ? '2px solid black' : '2px solid white'}}>
          <h2 className="accordion-header" style={{border: props.mode === 'light' ? '1px solid black' : '1px solid white'}}>
            <button className="accordion-button" style={{backgroundColor: props.mode === 'dark' ? props.darkColor : props.lightColor, color: props.mode === 'dark' ? 'white' : 'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{backgroundColor: props.mode === 'dark' ? props.darkColor : props.lightColor, color: props.mode === 'dark' ? 'white' : 'black'}}>
              TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count, copy text, convert to uppercase, lowercase or camelcase, etc.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{border: props.mode === 'light' ? '2px solid black' : '2px solid white'}}>
          <h2 className="accordion-header" style={{border: props.mode === 'light' ? '1px solid black' : '1px solid white'}}>
            <button className="accordion-button collapsed" style={{backgroundColor: props.mode === 'dark' ? props.darkColor : props.lightColor, color: props.mode === 'dark' ? 'white' : 'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Free To Use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{backgroundColor: props.mode === 'dark' ? props.darkColor : props.lightColor, color: props.mode === 'dark' ? 'white' : 'black'}}>
              TextUtils is a free text manipulator tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus, it is suitable for writing text with word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{border: props.mode === 'light' ? '2px solid black' : '2px solid white'}}>
          <h2 className="accordion-header" style={{border: props.mode === 'light' ? '1px solid black' : '1px solid white'}}>
            <button className="accordion-button collapsed" style={{backgroundColor: props.mode === 'dark' ? props.darkColor : props.lightColor, color: props.mode === 'dark' ? 'white' : 'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{backgroundColor: props.mode === 'dark' ? props.darkColor : props.lightColor, color: props.mode === 'dark' ? 'white' : 'black'}}>
              This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button onClick={toggleStyle} type='button' className="btn btn-primary">{btnText}</button>
      </div> */}
    </div>
  )
}
