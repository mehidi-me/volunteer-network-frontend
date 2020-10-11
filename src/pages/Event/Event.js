import { Button, Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Event.css';

const Event = () => {
    const sessionData = JSON.parse(localStorage.getItem("userInfo")).email;
    useEffect(() => {
        fetch(`https://volunteer-network-123.herokuapp.com/registerperson/${sessionData}`)
        .then(res => res.json())
        .then(v => setEvent(v))
    })

    const rowDeleted = (id) => {
        if(window.confirm('Are You Sure?')){
          fetch('https://volunteer-network-123.herokuapp.com/userdelete',{
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({id})
            })
            .then(res => res.json())
            .then(data => alert(data.msg))
        }
    }
    const [event, setEvent] = useState('')
    return (
        <>
        <Navbar></Navbar>

        <Container>
        <Grid container spacing={3}>


         {
             
             event ?
             event.length > 0 ?
            event.map(v => {

              return  <Grid key={v._id} item xs={12} md={6}>
            <div className="event-box">
                <div className="event-image">
                    <img src={v.category[0].image} alt="event"/>
                </div>
              <h4>{v.category[0].title}</h4>
                <p>{v.date}</p>
                <Button onClick={() => rowDeleted(v._id)}  variant="contained">Censel</Button>
            </div>
        </Grid>

            })
            : <h1>No Event Found!</h1>
             : <h1>Loding...</h1>
         }   
        



</Grid>
        </Container>
            
        </>
    );
};

export default Event;