import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import MyScroll from '../components/MyScroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import  {setSearchField, requestRobots} from '../actions';

const mapStateToProps = (state) => {
    return {
        searchText: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        findRobotName: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}


class App extends Component {
      
    componentDidMount(){ //Como este metodo es propio de react no tiene que ser arrow function
        this.props.onRequestRobots();
    }
  
    render(){
        
        const { searchText , findRobotName, robots, isPending} = this.props;
        const robotsFiltered = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchText.toLocaleLowerCase());
        })
        if(isPending){
            return <h2>Loading...</h2>
        }else{
            return (
                <div className='tc'>
                    <h1 className="f1">RoboFriends V2</h1>
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

