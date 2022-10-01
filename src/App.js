import './Reset.css';
import Home from './componentss/home';
import Login from './componentss/login';
import Register from './componentss/register';
import EditProfile from './componentss/editprofile';
import CreateContent from './componentss/createcontent';
import ContentShow from './componentss/contentshow';
import Privateroute from './componentss/privateroute';
import Categories from './componentss/categories';
import {Routes, Route} from 'react-router-dom'
import CategoriesList from './componentss/categorieslist';
import CategoriesContentList from './componentss/categoriescontentlist';
import Blog from './componentss/blog';

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
        <Route path='/blog' element={<Blog/>} />
        <Route path='/categories' element={<Categories/>}>
          <Route path='list' element={<CategoriesList/>}/>
          <Route path='contents' element={<CategoriesContentList/>}/>
        </Route>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/editprofile' element={<EditProfile/>} />
        <Route path='/createcontent' element={<CreateContent/>} />
        <Route path='/contentshow' element={<ContentShow/>} />
        <Route path='/' element={<Privateroute><Home/></Privateroute>} />
        {/* <Route path='/' element={<Privateroute><Home/></Privateroute>} /> */}
      </Routes>
    </>
  );
}

export default App;
