import {useState} from 'react'
import "./regfrm.css";

export const RegFrm = () => {
    const [user,setUser] = useState({
        name:"Ram Kumar",
        age:25,
        gender:"Male",
        isMarried:true,
        country:"India",
    });

    function changeHandler(e){
        const name=e.target.name;
        const value=e.target.type==="checkbox" ? e.target.cheked : e.target.value;
        setUser({...user,[name]:value});

    }

  return (
    <>
       <table>
        <tbody>
            <tr>
                <td>Name</td>
                <td>{user.name}</td>    
            </tr>
            <tr>
                <td>Age</td>
                <td>{user.age}</td>
            </tr>
            <tr>
                <td>Gender</td>
                <td>{user.gender}</td>
            </tr>
            <tr>
                <td>Marital Status</td>
                <td>{user.isMarried ? "Married" : "Not Married"}</td>
            </tr>
            <tr>
                <td>Country</td>
                <td>{user.country}</td>
            </tr>

        </tbody>
       </table>
       <form>
        <input type="text" placeholder='Full Name' value={user.name} onChange={changeHandler} 
        name="name"/>
        <input type="text" placeholder='Age' value={user.age} onChange={changeHandler}
        name="age" />
        <div className='gender'>
            <label htmlFor='male'>
                <input type="radio" name="gender" id="male" onChange={changeHandler}
                checked={user.gender=="Male"} value="Male"/>Male
            </label>
            <label htmlFor='female'>
                <input type="radio" name="gender" id="female" onChange={changeHandler}
                checked={user.gender=="Female"} value="Female"/>Female
            </label>
        </div>
        <label htmlFor='isMarried'>
            <input type="checkbox"  id="isMarried" name="isMarried" onChange={changeHandler}
            checked={user.isMarried} />isMarried
        </label>
        <div>
        <label htmlFor='country'>Select Country : </label>
        <select name="country" id="country" className='select-div'
        value={user.country} onChange={changeHandler}>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
        </select>
        </div>
       </form>
    </>
  );
};