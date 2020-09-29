import React from 'react';
import {Cards, Charts, Country} from './components'
import styles from './app.module.css';
import { fetchData } from './api';

class App extends React.Component {
    state = {
        data:{},
    }

    async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({data: fetchedData});

    }
    render(){
        const { data } = this.state;

        return(
            <div className={styles.container}>
                <div>
                    <h1>Covid-19 Tracker</h1>
                </div>
                <Cards data={data}/>
                <div className={styles.lastUpdated}>
                    <p>Last updated: {new Date(data.lastUpdate).toDateString()}</p>
                </div>
                <Charts />
                <Country />
            </div>
        )
    }
}

export default App;