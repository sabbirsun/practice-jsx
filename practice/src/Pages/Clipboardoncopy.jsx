import React from 'react'

function Clipboardoncopy() {
    const CopyText = ()=>{
      alert("Text Copies");
    }
    
    const OnCutText = ()=>{
      alert("Text Cuted Successfully");
    }

    const OnPasteText=()=>{
      alert("On Paste Successfully");
      document.write("Text Paste Done");
    }
  return (
    <div>
      <p onCopy={CopyText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sapiente?</p>

      <h1 onCut={OnCutText}>This is Clipboard page you hav ecut some text from here</h1>

      <input type="text" onPaste={OnPasteText} placeholder='Put Your Text Here' />
    </div>
  )
}

export default Clipboardoncopy