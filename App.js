import './App.css';
import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {getCatsFetch} from './CatState';


function App() {
  
  const cats = useSelector(state => state.cats.cats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsFetch());
  },[dispatch]);

  console.log(cats);
  return (
    <div className="App">
      <h1>CAT SPECIES GALLERY</h1>
      <p>Images of different species of cats.</p>
      <hr/>
      <div className="Gallery">
        {cats.map(cat =>
          
        <div key={cat.id} className="row">
          <div className="column column-left">
            <img
            alt={cat.name}
            src={cat.image.url}
            width="200"
            height="200"
            />
            </div>
            <div className="column column-right">
              <h2>{cat.name}</h2>
              <h3>Temperament: {cat.temperament}</h3>
              <p>{cat.description}</p>

            </div>
          </div>
          )}
        </div>
      </div>
      
  );
}
      
export default App;
