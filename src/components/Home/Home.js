import React from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>어서오세요 반갑습니다 😀</h1>
    </Card>
  );
};

export default Home;
