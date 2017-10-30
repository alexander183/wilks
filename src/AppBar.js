import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const WilksAppBar = () => (
    <AppBar position="static">
        <Toolbar>
            <Typography type="title" color="inherit">
                Wilks Calculator
      </Typography>
        </Toolbar>
    </AppBar>
)
export default WilksAppBar
