function Student(props){
    return(
        <div className="student">
            <p>Name is : {props.name}</p>
            <p>age: {props.age}</p>
            <p>Student : {props.isStudent===true?"Yes":"No"}</p>
        </div>
    );
}
export default Student;
