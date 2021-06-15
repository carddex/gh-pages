import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import PaletteIcon from '@material-ui/icons/Palette';
import PublicIcon from '@material-ui/icons/Public';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { BorderColor } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '5px 5px',
    backgroundColor: '#001559',
    color: 'white',
    borderStyle: 'solid',
    borderWidth: '3px',
    borderColor:'#F441A5',
    maxWidth: '100%',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
      <TimelineItem>

        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined" >
            <PaletteIcon style={{ fontSize: 60 }}  />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            Q2 2021
            </Typography>
            <Typography>

              <ul>
                <li>
                  Design and refine UI of the complete project.
                </li>
                <li>
                  Creation of the CardDex whitepaper.
                </li>
                <li>
                  Social Media presence to engage with the CardDex community, and keep up to date on our progress.
                  <ul>
                    <li>
                      Twitter - Stay up to date with @CardDex updates on our Twitter.
                    </li>
                    <li>
                      Telegrams - Meet the dev, and engage with fellow CardDex DeFi mavericks on @CardDex.
                    </li>
                    <li>
                      Reddit - Engage with the CardDex community on our Subreddit page.
                    </li>
                  </ul>
                </li>
              </ul>

            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem >
        <TimelineSeparator>
          <TimelineDot color="primary">
            <LaptopMacIcon style={{ fontSize: 60 }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        
        <TimelineContent style={{textAlign: 'left'}}>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Q3 2021
            </Typography>
            <Typography>
              <ul>
                <li>
                  Create a functional demo & Confirm CardDex Functionality on Alonzo Testnet.
                </li>
                <li>
                  Launch/ICO (Initial Card Offering)
                </li>
              </ul>
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" >
            <PublicIcon style={{ fontSize: 60 }} />
          </TimelineDot>
          <TimelineConnector  />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Q4 2021
            </Typography>
            <Typography>
              <ul>
                <li>
                  Launch on Cardano Guguen Mainnet with the Plutus Smart Contracts Deployment.
                </li>
                <li>
                  Solidify niche in ADA ecosystem
                </li>
                <li>
                  Expand technical capabilities
                </li>
              </ul>
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <RepeatIcon style={{ fontSize: 60 }}/>
          </TimelineDot>
        </TimelineSeparator>

        <TimelineContent style={{textAlign: 'left'}}>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              2022 - Beyond
            </Typography>
            <Typography>Become the largest AMM DeX </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
