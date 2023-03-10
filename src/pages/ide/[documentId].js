import React from 'react'
import ReactAce from 'react-ace-editor';
import Headers from '../../Components/header';

function Ide() {

  return (
    <div>
      <Headers/>
      <ReactAce
        mode="java"
        theme="monokai"
        setReadOnly={false}
        style={{ height: "100vh" }}
       // Let's put things into scope
      />
    </div>
  )
}

export default Ide;