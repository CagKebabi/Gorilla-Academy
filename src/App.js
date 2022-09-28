import './Reset.css';
import Home from './componentss/home';
import Login from './componentss/login';
import Register from './componentss/register';
import EditProfile from './componentss/editprofile';
import CreateContent from './componentss/createcontent';
import ContentShow from './componentss/contentshow';
import Privateroute from './componentss/privateroute';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    // <div className="App">
    //   <Header/>
    //   <div style={{display: "flex"}} >
    //   <SideBar/>
    //   <Main/>
    //   </div>
    // </div>
    <>
      <Routes>
        {/* <Route path='/' element={<Home/>} /> */}
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/editprofile' element={<EditProfile/>} />
        <Route path='/createcontent' element={<CreateContent/>} />
        <Route path='/contentshow' element={<ContentShow/>} />
        <Route path='/' element={<Privateroute><Home/></Privateroute>} />
        <Route path='/' element={<Privateroute><Home/></Privateroute>} />
      </Routes>
    </>
  );
}

export default App;
