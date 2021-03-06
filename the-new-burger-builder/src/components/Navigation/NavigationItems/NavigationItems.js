import React from 'react';
//import { Link } from 'react-router-dom';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' exact>
            Burger Builder
        </NavigationItem>
        <NavigationItem link='/orders/'>
            Orders
        </NavigationItem>
    </ul>
);

export default navigationItems;