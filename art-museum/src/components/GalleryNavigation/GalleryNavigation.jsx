import { NavLink } from 'react-router-dom';
import './GalleryNavigation.css'

const GalleryNavigation = ({galleries}) => {
  return (
  <nav>
    <h1>Galleries</h1>
      {galleries.map((record)=>(
        // console.log(record)
        <NavLink key={record.id} to={`/galleries/${record.id}`}>{record.name}</NavLink>
      ))}
  </nav>
  )
}

export default GalleryNavigation;
