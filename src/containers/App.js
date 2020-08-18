import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import MyScroll from '../components/MyScroll';
import './App.css';




class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchtext: ''
        }
    }
    
    componentDidMount(){ //Como este metodo es propio de react no tiene que ser arrow function
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(users =>this.setState({robots:users}))
    }
    findRobotName = (event) =>{
        this.setState({searchtext:event.target.value});
    }
    render(){
        const {robots, searchtext} = this.state;
        const robotsFiltered = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchtext.toLocaleLowerCase());
        })
        if(!robots.length){
            return <h2>Loading...</h2>
        }else{
            return (
                <div className='tc'>
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox onchangeSearch={this.findRobotName}/>
                    <MyScroll>
                        <CardList robots={robotsFiltered}/>
                    </MyScroll>
                </div>
            );
        }
    }
};

export default App;

