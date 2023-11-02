import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  // code here
  let data = imageData();
  let images = [];
  for(let i=0; i < data.length; i+=2){
    let firstImg = data[i];
    let secondImg = data[i+1];
    images.push(
      <div className='img-style'>
        <img src={firstImg.img} alt="" />
        <img src={secondImg.img} alt="" />
      </div>
    );
  }
  return <div>{images}</div>
}

export default App;
