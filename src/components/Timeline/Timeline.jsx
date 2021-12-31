import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';


export default function CustomizedTimeline({subjects}) {
    return (
        <Timeline position="alternate">
            {(subjects || []).map(({time, icon, title, text}) =>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{m: 'auto 0'}}
                        align="right"
                        variant="body2"
                        color="text.primary"
                        fontWeight={"bolder"}
                    >
                        <Typography variant="h6" component="span">
                            {title}
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector/>
                        <TimelineDot>
                            {icon}
                        </TimelineDot>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent sx={{py: '12px', px: 2}}>
                        {text.map(t => <Typography>{t}</Typography>)}
                    </TimelineContent>
                </TimelineItem>
            )}
        </Timeline>
    );
}