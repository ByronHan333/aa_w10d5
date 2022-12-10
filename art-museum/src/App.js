import harvardArt from './data/harvardArt'
import GalleryNavigation from './components/GalleryNavigation/GalleryNavigation';
import { Route } from 'react-router';
import GalleryView from './components/GalleryView/GalleryView';

function App() {
  return (
    <>
    <GalleryNavigation galleries={harvardArt.records} />
    <Route path={'/galleries/:galleryId'}> 
        <GalleryView data={harvardArt.records} />
    </Route>
    </>
  );
}

export default App;
