import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import {Route, Routes} from 'react-router-dom';
import Layout from "./Component/layout/Layout";
import CrudApp from "./pages/CrudApp";

function App(){
  // localhost:3000
  return(
  <>
  <Layout>
    <Routes>
      <Route path='/' element={ <AllMeetupsPage />} />
      <Route path='/new-meetup' element={<NewMeetupPage />} />
      <Route path='/favorites' element={<FavoritesPage />} />
      <Route path="/crud" element={<CrudApp />} />
    </Routes>
  </Layout>
  </>);
}
export default App;
