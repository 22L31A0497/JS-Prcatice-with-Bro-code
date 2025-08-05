

function UserGreetings(props){
    if(props.isLoged){
     return <h2 className="ac">Hi welcome Dear : {props.name}</h2>
   }
   else{
      return  <h2 className="rg">{props.name} Please Login and Visit again</h2>
   }
}
export default UserGreetings;