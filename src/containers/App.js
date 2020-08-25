import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import MyScroll from '../components/MyScroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import  {setSearchField} from '../actions';

const mapStateToProps = (state) => {
    return {
        searchText: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        findRobotName: (event) => dispatch(setSearchField(event.target.value))
    }
}


class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: []
        }
    }
    
    componentDidMount(){ //Como este metodo es propio de react no tiene que ser arrow function
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(users =>this.setState({robots:users}))
    }
  
    render(){
        
        const { robots } = this.state;
        const { searchText , findRobotName} = this.props;
        const robotsFiltered = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchText.toLocaleLowerCase());
        })
        if(!robots.length){
            return <h2>Loading...</h2>
        }else{
            return (
                <div className='tc'>
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox onchangeSearch={findRobotName}/>
                    <MyScroll>
                        <ErrorBoundary>
                            <CardList robots={robotsFiltered}/>
                        </ErrorBoundary>
                    </MyScroll>
                </div>
            );
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);

