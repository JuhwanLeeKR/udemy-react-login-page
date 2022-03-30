import React from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import Button from '../UI/Button/Button';

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>어서오세요 반갑습니다 😀</h1>
      <Button onClick={props.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
