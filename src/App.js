import './App.css';

function App() {

  /** Algorithm
   * define a variable
   * use a variable
   */

  const heading = "Profiles";
  const age = 10;
  const verified = true;

  /** Algorithm
   * return name
   */

  // type 1
  function printName(){
    console.log("Vocab");
  }
  // printName()

  // type 2
  function getName(){
    const name = "Vocab";
    return name;
  }

  // type 3
  function printPassedName(name){
    console.log(name);
  }
  // printPassedName("nawaf")

  // type 4
  function add(a,b){
    const result = a + b;
    return result;
  }

  // For
  // Syntax:
    // for( initialization ; condition ; increment/decrement ){
    //   statement
    // }

  // type 1
    // for( let i=0; i < 3 ; i = i+1 ){
    //   console.log(i);
    // }

  // type 2
  // for( let i in [1,2,3] ){
  //   console.log(i);
  // }

  // ternary operator
  // syntax: (condition) ? statement1 : statement2

  // Map
  // numbers
  const numbers = [1,2,3,4,5];
  numbers.map((i) => {
    // console.log(i)
  });

  // string
  const names = ["Saad","Prince","Basheer","Nawaf"];
  names.map((name)=>{
    // console.log(name)
  })

  // objects
  const profiles = [
    {
      name: "Saad",
      age: 19
    },
    {
      name: "Prince",
      age: 29
    },
    {
      name: "Basheer",
      age: 99
    },
    {
      name: "Nawaf",
      age: 35
    }
  ];
  profiles.map((profile)=>{
    console.log(profile.name,profile.age)
  })

  return (
    <div className='App'>
      <h1>{heading}</h1>
      <div className='cards'>
        <p>Name: name1 </p>
      </div>
      <div className='cards'>
        <p>Name: name2 </p>
      </div>
      <div className='cards'>
        <p>Name: name3 </p>
      </div>

      {/* <p>Name: {getName()}</p>
      <p>Age: {age}</p>
      <p>Verified: {(verified == true) ? "yes" : "no"}</p>
      <p>Result: {add(10,10)}</p> */}
    </div>
  );
}

export default App;

  // // function
  // function getUserName(){
  //   const name = "Saad";
  //   return name;
  // }

  // function add(){
  //   const result = 2+2;
  //   return result;
  // }
  // function sub(){
  //   const result = 2-2;
  //   return result;
  // }
  // function mul(){
  //   const result = 2*2;
  //   return result;
  // }
  // function div(){
  //   const result = 2/2;
  //   return result;
  // }

{/* <p>Get Name Function: {getUserName()}</p>
<p>Add Function: {add()}</p>
<p>Sub Function: {sub()}</p>
<p>Mul Function: {mul()}</p>
<p>Div Function: {div()}</p> */}