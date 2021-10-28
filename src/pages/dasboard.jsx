import React,{useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Header from '../components/Header/Header';
import SideBar from '../components/SideBar/SideBar';
function Dashboard(props){
  const [sideBarExpand, setsideBarExpand] = useState((window.innerWidth > 880 ? true : false));
  const [render, setRender] = useState(0);
  const handleRender = (link) => {
    setsideBarExpand((window.innerWidth > 880 ? true : false));
    setRender(link + 1);
  }
  function logout(){
    Cookies.remove('email');
    Cookies.remove('password');
    props.history.push("/");
  }
  useEffect(()=>{
    let Signin = {
          
      email: Cookies.get('email'),
      password: Cookies.get('password')
      
      
  }

    
      axios.post('http://localhost:4000/regiss/signin',Signin).then(function(response){
          if(response.data.login===true){
            
              
              
          }else{
            props.history.push("/");
          }
      }).catch(function (error) {
          console.log(error);
      });
      Signin={
        email:"",
        password:""
      }
      
  },[])
  const handleChange = (a) => {
    switch (render) {
      case 1:
        setAllEvents(a);
        break;
      case 2:
        setAllEvents(a);
        break;
      case 3:
        setAllNotes(a);
        break;
      case 4:
        setAllTasks(a);
        break;
      default:
        console.log(a);
        break;
    }
  }
    return(
        <>
         <Header sideBar={() => { setsideBarExpand(!sideBarExpand) }} GoTo={handleRender} onHelp={() => { setRender(5) }} />
         <SideBar aside={sideBarExpand} GoTo={handleRender} />
      <h1 onClick={logout} >hi</h1>
        </>
    )
}
export default Dashboard;