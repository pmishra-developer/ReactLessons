
function Hello() {
  return (<div> Hello! <Hello2 /> </div> 
  );
  
}

function Hello2() {
  return (<div> Hello2! </div> );
}

export default Hello;