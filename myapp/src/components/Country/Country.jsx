import React, {useState, useEffect} from 'react';
import {countryData} from '../../api';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from './Country.module.css';

const Country = () =>{
    const [usData, setUsData] = useState([]);

    useEffect(() => {
        const fetchUsData = async() => {
            setUsData(await countryData());
        }

        fetchUsData();
    })

    function calculateDeathRate(death, confirmed){
        let deathRate = (death/confirmed*100).toFixed(2);
        return deathRate;
    }
    

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Canada Covid-19 Status</h1>
            </div>
            <TableContainer component={Paper}>
                <Table className={styles.table}>
                    <TableHead>
                        <TableRow>
                        <TableCell>States</TableCell>
                            <TableCell align="right">Confirmed</TableCell>
                            <TableCell align="right">Recovered</TableCell>
                            <TableCell align="right">Deaths</TableCell>
                            <TableCell align="right">Deaths Rate</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {usData.map((usData) =>(
                            <TableRow key={usData.state}>
                                <TableCell component='th' scope='row'>
                                    {usData.state}
                                </TableCell>
                                <TableCell align='right'>{usData.confirmed}</TableCell>
                                <TableCell align='right'>{usData.recovered}</TableCell>
                                <TableCell align='right'>{usData.deaths}</TableCell>
                                <TableCell align="right">{calculateDeathRate(usData.deaths,usData.confirmed)}%</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Country;