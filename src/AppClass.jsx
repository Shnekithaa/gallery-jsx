import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
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

  // code here
  render(){
    let data = this.imageData();
    let rows = [];
    for(let i = 0; i < data.length; i += 2){
      let firstImg = data[i];
      let secondImg = data[i+1];
      rows.push(
        <div className="img-style">
          <img src={firstImg.img} alt="" />
          <img src={secondImg.img} alt="" />
        </div>
      );
    }
    return <div>
      {rows}
    </div>
  }

}
