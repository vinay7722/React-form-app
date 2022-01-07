import React, { useState } from 'react';
import './App.css';
import './index.css';



const App = () =>  {

  const [fullname,setfullName] = useState({
    fname : '',
    lname : '',
    email : '',
    mobile : '',
  });

  const inputEvent = (event) => {
    console.log(event.target.name)

    const {value, name} = event.target;
    
    setfullName ( (prevalue) => { 
          console.log(prevalue)

          return {
            ...prevalue,
            [name] : value,
          }
          /*if(name === 'fname')
          {
            return{
              fname : value,
              lname : prevalue.lname,
              email : prevalue.email,
              mobile : prevalue.mobile,
            }
          }
          else if(name === 'lname')
          {
            return{
              fname : prevalue.fname,
              lname : value,
              email : prevalue.email,
              mobile : prevalue.mobile,
            }
          }
          else if(name === 'email')
          {
            return{
              fname : prevalue.fname,
              lname : prevalue.lname,
              email : value,
              mobile : prevalue.mobile,
            }
          }
          else if(name === 'mobile')
          {
            return{
              fname : prevalue.fname,
              lname : prevalue.lname,
              email : prevalue.email,
              mobile : value,
            }
          }*/
    })
  }
 
  const onSubmits = (event) => {
    event.preventDefault();
    alert("edcesdx");
    }

  return (
      <div>
        <form onSubmit={onSubmits}>
          <div>
            <h1 >Hello {fullname.fname} {fullname.lname} {fullname.email} {fullname.mobile}</h1><br/>
            <input type="text"
              placeholder='enter Your name'
              name='fname'
              onChange={inputEvent} 
              value={fullname.fname}
            /><br/>
            <input type="text"
              placeholder='enter Your pwd'
              name='lname'
              onChange={inputEvent} 
              value={fullname.lname}
            /><br/>
            <input type="text"
              placeholder='Enter Your Email'
              name='email'
              onChange={inputEvent} 
              value={fullname.email}
            /><br/>
            <input type="text"
              placeholder='Enter Your MObile'
              name='mobile'
              onChange={inputEvent} 
              value={fullname.mobile}
            /><br/>
            <button type='submit'  >Submits Me 👍</button>
          </div>
        </form>
      </div>
  );
}

export default App;
 