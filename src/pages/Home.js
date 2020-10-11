import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import Navbar from "../components/Navbar/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "material-ui-search-bar";
import Card from "../components/Card/Card";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
  },
  heading: {
    fontWeight: "600",
    textTransform: "uppercase",
    fontSize: "36px",
  },
  searchbox: {
    width: "90%",
    margin: "48px auto",
    [theme.breakpoints.up("md")]: {
      width: "480px",
    },
  },
  searchbar: {
    border: "1px solid #d6d6d6",
  },
}));

const Home = () => {
  const classes = useStyles();

  const [CardData , setCardData] = useState()
useEffect(() => {
fetch('https://volunteer-network-123.herokuapp.com/showcategory')
.then(res => res.json())
.then(data => {
  setCardData(data)
})
},[])


  return (
    <>
      <Navbar></Navbar>
      <Container className={classes.container}>
        <Typography className={classes.heading} variant="h3" gutterBottom>
          I grow by helping people in need.
        </Typography>
        <div className={classes.searchbox}>
          <SearchBar className={classes.searchbar} />
        </div>
      </Container>
      <Container>
        <Grid container spacing={3}>
          {
            CardData ? CardData.map(v => <Card image={v.image} id={v._id} key={v._id} title={v.title}></Card>) : <h1>Loading....</h1>
          }
        </Grid>
      </Container>
    </>
  );
};

export default Home;
