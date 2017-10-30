import React from 'react';
import Grid from 'material-ui/Grid';

const Layout = ({appbar, bodyweightinput, liftedweightinput, genderinput, output}) => (
    <Grid container>
        <Grid item xs={12} md={12}>
            {appbar}
        </Grid>
        <Grid item xs={8} md={5} lg={3}>
            {bodyweightinput}
        </Grid>
        <Grid item xs={8} md={5} lg={3}>
            {liftedweightinput}
        </Grid>
        <Grid item xs={5} md={5} lg={3}>
            {genderinput}
        </Grid>        
        <Grid item xs={12}>
            {output}
        </Grid>
    </Grid>
)
export default Layout