'use client';

import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import './courseEnroll.css';
import PeopleIcon from '@mui/icons-material/People';
import VideocamIcon from '@mui/icons-material/Videocam';
import EnrollForm from '../FormEnroll/EnrollForm';

const CourseEnroll = () => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  return (
    <Card sx={{ maxWidth: 600, margin: 'auto', mt: 4 }} className='main_card'>
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
                <VideocamIcon />
                <Typography variant="body1" sx={{ color: 'red' }}>
                  Live In
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ p: 2 }}>
                <Typography variant="body1" className='customTypography'>
                  User Enrolled
                </Typography>
                <PeopleIcon style={{ marginRight: '8px' }} />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClick}
            className='button_enroll'
          >
            {showForm ? 'Cancel Enroll' : 'Course Enroll'}
          </Button>
        </Box>
        {showForm && <EnrollForm />}
      </CardContent>
    </Card>
  );
};

export default CourseEnroll;
