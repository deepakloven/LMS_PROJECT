'use client'
// components/CustomCard.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import './deepak.css';
import PeopleIcon from '@mui/icons-material/People';

const CustomCard = () => {
  function handleclick(){
    alert("course enrolled")
  }

  return (
    <Card sx={{ maxWidth: 600, margin: 'auto', mt: 4}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center" className='title_class'>
          IELS
        </Typography>
        <CardMedia
          border-radius="10px"
          component="iframe"
          height="315"
          src="https://www.youtube.com/embed/your-video-id"
          title="video"
        />
        <Box sx={{ display: 'flex', mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box sx={{ p: 2 }}>
                <Typography variant="body1">
                  Webinar 
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'red' }}>
                    Live In
                  </Typography>
              </Box>
            </Grid>
            <Grid item xs={6 }>
              <Box sx={{ p: 2}}>
              <PeopleIcon style={{ marginRight: '8px' }} />
                <Typography variant="body1" className='customTypography'>
                  User Enrolled
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button variant="contained" color="primary" onClick={handleclick} className='button_enroll'>
            Course Enrolle
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CustomCard;

