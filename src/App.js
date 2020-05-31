import React, { Component } from 'react';
import logo from './logo.svg';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box';
import './App.css';

class App extends Component {
    constructor () {
    super();
    this.state = {
        // name: 'Assoua Albert'
        monsters: [],
        searchField: '',
        text: ''
    }
    // this.handleChange = this.handleChange.bind(this);
    }
    async componentDidMount() {
        let users = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
        this.setState({monsters : users});
    }
    // handleChange (e) {
    //     this.setState({searchField: e.target.value });
    // }
    handleChange = (e) => {
        this.setState({searchField: e.target.value, text: e.target.value});
    }
    render() {
        const {monsters, searchField, text} = this.state;
        const results = monsters.filter(monster => 
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        )
        return (
        <div className="App">
            <h1>
                Monster Rolodex
            </h1>
            <SearchBox 
            placeholder='Search Bots'
            handleChange= {this.handleChange}
            />
            <CardList 
            monsters={results}>
            </CardList>
    </div>
    );
    }
}

export default App;
