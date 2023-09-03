import { Component } from "react";
import Image from './multi.png';
import checkOne from './checkNo.png';

export default class Discription extends Component {
    state = {
          inputUser: '',
          massiw: []
}

onChangeInpnt(e) {
    this.setState({inputUser: e})
}

onClickAdd(inpu) {
    if (this.state.inputUser === '') {
        alert('Ви не записали справу!')
    }
    else{
    let listArray = this.state.massiw;
    listArray.push(inpu);
    this.setState({massiw: listArray, inputUser:''})
}}

ThrouthLine(event) {
    const li = event.target;
    li.classList.toggle('crossed');
}

onDelete() {
    let listArray = this.state.massiw;
    listArray = [];
    this.setState ({massiw: listArray})
}

formSubmit(e) {
   e.preventDefault();
}

render() {
    return(

        <form onSubmit={this.formSubmit}>
            <div className="Container">
            
           <img className="Picture" src={Image} alt="Pictu"/>
                
            <h1>СПИСОК СПРАВ</h1>
           
           <input type='text' placeholder="Які справи хочете додати?"
           onChange={(e) => {this.onChangeInpnt(e.target.value)}}
           value={this.state.inputUser} />
        
           <button className="Add" onClick={() => this.onClickAdd(this.state.inputUser)}>ДОДАТИ</button>

           <ul>
            {this.state.massiw.map((item,index) => 
            <li onClick = {this.ThrouthLine} key={index}><img src={checkOne} alt="photo" width='40px' /> {item}
            </li>
            )}
           </ul>

           <button className="Delete" onClick={() => this.onDelete()}>ВИДАЛИТИ</button>
            </div> 
        </form> 
    )
}
}