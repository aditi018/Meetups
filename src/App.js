import {Route , Routes} from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetups";
import FavouriteMeetups from "./pages/Favourite";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path='/' element={<AllMeetupsPage/>} />
        <Route exact path='/newmeetups' element={<NewMeetupsPage/>}/>
        <Route exact path ='/favouritemeetups' element={<FavouriteMeetups />}/>
      </Routes>
    </Layout>
  );
}

export default App;
