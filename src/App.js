import { useEffect , useState } from 'react';
import './App.css';
import Axios from 'axios';
import Coin from './components/Coin';

function App() {

  const [state ,setState] = useState([]);
  const[search,setSearch] = useState("");

useEffect(() => {

  Axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=10').then((response)=>{

  setState(response.data.coins);
  })

},[]);


const filteredCoins = state.filter((coin)=>{
  return coin.name.toLowerCase().includes(search.toLowerCase());

})

  return (
    <div className="App">
      <h1>Welcome to cryptoApp</h1>
      <div className='cryptoHeader'>

        <input type='text' placeholder='Enter your coin here'
        onChange={(event)=>{
          setSearch(event.target.value);
        }}
        ></input>
      </div>
      <div className='cryptoDisplay'>
        {filteredCoins.map((coin) => {
          return <Coin  name={coin.name}
          price={coin.price}
          symbol={coin.symbol}
          icon={coin.icon}
          
          />

        })}
      </div>
    </div>
  );
}

export default App;
