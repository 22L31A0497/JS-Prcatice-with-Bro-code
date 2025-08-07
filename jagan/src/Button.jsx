function Button() {
  let count =0;
  function HandleClick(props) {
    console.log(`Button clicked! by ${props} ☠️`);
    // alert(`Button clicked! by ${props} ☠️`);
    count+=1;
    console.log(`${props} clicked the button ${count} times`);


  }

  function Clicked(e){
    e.target.textContent = `CLiked me ☆*: .｡. o(≧▽≦)o .｡.:*☆`;
    
  }


  return (
    // <button onClick={() => HandleClick("Jagan")}>
    //   Click me if you dare ☠️
    // </button>
    <button onDoubleClick={(e) =>Clicked(e)}>
      Click me if you dare ☠️
    </button>
  );
}
export default Button;
