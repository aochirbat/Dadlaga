import * as React from 'react';
import {Paper,TableCell,Grid,TextField ,CardActions,makeStyles,Button,withStyles,Typography} from '@material-ui/core';
import { darken, fade, lighten } from '@material-ui/core/styles/colorManipulator';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import classNames from 'clsx';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import {
  Scheduler,
  MonthView,
  Appointments,
  Toolbar,
  DateNavigator,
  AppointmentTooltip,
  AppointmentForm,
  EditRecurrenceMenu,
  Resources,
  DragDropProvider,
} from '@devexpress/dx-react-scheduler-material-ui';
import WbSunny from '@material-ui/icons/WbSunny';
import DateFnsUtils from '@date-io/date-fns';
import {FilterDrama,Add, Save} from '@material-ui/icons';
import Opacity from '@material-ui/icons/Opacity';
import Schedule from '@material-ui/icons/Schedule';
import { parse } from 'date-fns';
//import { owners } from '../../../demo-data/tasks';

const resources = [{
  fieldName: 'ownerId',
  title: 'Owners',
  instances: [{dwa:"daw"},{dw:'daw'}],
}];

const getBorder = theme => (`1px solid ${
  theme.palette.type === 'light'
    ? lighten(fade(theme.palette.divider, 1), 0.88)
    : darken(fade(theme.palette.divider, 1), 0.68)
}`);
const DayScaleCell = props => (
  <MonthView.DayScaleCell {...props} style={{ textAlign: 'center', fontWeight: 'bold' }} />
);
const styles = theme => ({
  cell: {
    color: '#78909C!important',
    position: 'relative',
    userSelect: 'none',
    verticalAlign: 'top',
    padding: 0,
    height: 100,
    borderLeft: getBorder(theme),
    '&:first-child': {
      borderLeft: 'none',
    },
    '&:last-child': {
      paddingRight: 0,
    },
    'tr:last-child &': {
      borderBottom: 'none',
    },
    '&:hover': {
      backgroundColor: 'white',
    },
    '&:focus': {
      backgroundColor: fade(theme.palette.primary.main, 0.15),
      outline: 0,
    },
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
  },
  text: {
    padding: '0.5em',
    textAlign: 'center',
  },
  sun: {
    color: '#FFEE58',
  },
  cloud: {
    color: '#90A4AE',
  },
  rain: {
    color: '#4FC3F7',
  },
  sunBack: {
    backgroundColor: '#FFFDE7',
  },
  cloudBack: {
    backgroundColor: '#ECEFF1',
  },
  rainBack: {
    backgroundColor: '#E1F5FE',
  },
  opacity: {
    opacity: '0.5',
  },
  appointment: {
    borderRadius: '10px',
    '&:hover': {
      opacity: 0.6,
    },
  },
  apptContent: {
    '&>div>div': {
      whiteSpace: 'normal !important',
      lineHeight: 1.2,
    },
  },
  flexibleSpace: {
    flex: 'none',
  },
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  tooltipContent: {
    padding: theme.spacing(3, 1),
    paddingTop: 0,
    backgroundColor: theme.palette.background.paper,
    boxSizing: 'border-box',
    width: '400px',
  },
  tooltipText: {
    ...theme.typography.body2,
    display: 'inline-block',
  },
  title: {
    ...theme.typography.h6,
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightBold,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  icon: {
    color: theme.palette.action.active,
    verticalAlign: 'middle',
  },
  circle: {
    width: theme.spacing(4.5),
    height: theme.spacing(4.5),
    verticalAlign: 'super',
  },
  textCenter: {
    textAlign: 'center',
  },
  dateAndTitle: {
    lineHeight: 1.1,
  },
  titleContainer: {
    paddingBottom: theme.spacing(2),
  },
  container: {
    paddingBottom: theme.spacing(1.5),
  },
});
const WeatherIcon = ({ classes, id }) => {
  switch (id) {
    case 0:
      return <Opacity className={classes.rain} fontSize="large" />;
    case 1:
      return <WbSunny className={classes.sun} fontSize="large" />;
    case 2:
      return <FilterDrama className={classes.cloud} fontSize="large" />;
    default:
      return null;
  }
};
const CellBase = React.memo(({
  classes,
  startDate,
  formatDate,
  otherMonth,
}) => {
  const iconId = Math.abs(Math.floor(Math.sin(startDate.getDate()) * 10) % 3);
  const isFirstMonthDay = startDate.getDate() === 1;
  const formatOptions = isFirstMonthDay
    ? { day: 'numeric', month: 'long' }
    : { day: 'numeric' };
  return (
    <TableCell
      tabIndex={0}
      className={classNames({
        [classes.cell]: true,
        [classes.rainBack]: iconId === 0,
        [classes.sunBack]: iconId === 1,
        [classes.cloudBack]: iconId === 2,
        [classes.opacity]: otherMonth,
      })}
    >
      <div className={classes.content}>
        <WeatherIcon classes={classes} id={iconId} />
      </div>
      <div className={classes.text}>
        {formatDate(startDate, formatOptions)}
      </div>
    </TableCell>
  );
});
const TimeTableCell = withStyles(styles, { name: 'Cell' })(CellBase);
const Appointment = withStyles(styles, { name: 'Appointment' })(({ classes, ...restProps }) => (
  <Appointments.Appointment
    {...restProps}
    className={classes.appointment}
  />
));
const AppointmentContent = withStyles(styles, { name: 'AppointmentContent' })(({ classes, ...restProps }) => (
  <Appointments.AppointmentContent {...restProps} className={classes.apptContent} />
));
const FlexibleSpace = withStyles(styles, { name: 'ToolbarRoot' })(({ classes, ...restProps }) => (
  <Toolbar.FlexibleSpace {...restProps} className={classes.flexibleSpace}>
    <div className={classes.flexContainer}>
      <Schedule fontSize="large" htmlColor={'#68d4d0'} />
      <Typography variant="h5" style={{ marginLeft: '10px' }}>Sport Scheduler</Typography>
    </div>
  </Toolbar.FlexibleSpace>
));


export default function(props){
   const [data,setData]=React.useState([
    {
      id: 0,
      title: 'Дасгал 1',
      startDate: new Date(2018, 6, 23, 9, 30),
      endDate: new Date(2018, 6, 23, 11, 30),
      ownerId: 1,
    }, {
      id: 1,
      title: 'Дасгал 1',
      startDate: new Date(2018, 5, 28, 9, 30),
      endDate: new Date(2018, 5, 28, 11, 30),
      ownerId: 1,
    }, {
      id: 2,
      title: 'Дасгал 1',
      startDate: new Date(2018, 6, 9, 12, 0),
      endDate: new Date(2018, 6, 9, 13, 0),
      ownerId: 2,
    }, {
      id: 3,
      title: 'Дасгал 1',
      startDate: new Date(2018, 6, 18, 14, 30),
      endDate: new Date(2018, 6, 18, 15, 30),
      ownerId: 2,
    }, {
      id: 4,
      title: 'Дасгал 1',
      startDate: new Date(2018, 6, 20, 12, 0),
      endDate: new Date(2018, 6, 20, 13, 35),
      ownerId: 6,
    }, {
      id: 5,
      title: 'Дасгал 1',
      startDate: new Date(2018, 6, 6, 13, 0),
      endDate: new Date(2018, 6, 6, 14, 0),
      rRule: 'FREQ=WEEKLY;BYDAY=FR;UNTIL=20180816',
      exDate: '20180713T100000Z,20180727T100000Z',
      ownerId: 2,
    }, {
      id: 6,
      title: 'Дасгал 1',
      startDate: new Date(2018, 5, 28, 12, 0),
      endDate: new Date(2018, 5, 28, 12, 30),
      rRule: 'FREQ=WEEKLY;BYDAY=TH;UNTIL=20180727',
      exDate: '20180705T090000Z,20180719T090000Z',
      ownerId: 5,
    }, {
      id: 7,
      title: 'Дасгал 1',
      startDate: new Date(2018, 6, 3, 11, 0),
      endDate: new Date(2018, 6, 3, 12, 0),
      rRule: 'FREQ=WEEKLY;BYDAY=TU;UNTIL=20180801',
      exDate: '20180710T080000Z,20180724T080000Z',
      ownerId: 3,
    }, {
      id: 8,
      title: 'Дасгал 1',
      startDate: new Date(2018, 6, 9, 11, 0),
      endDate: new Date(2018, 6, 9, 12, 0),
      ownerId: 3,
    },
  ])
   const [date,setDate]=React.useState(new Date('2014-08-18T21:11:54'))
   const [date2,setDate2]=React.useState(new Date('2014-08-18T21:11:54'))
   const [note,setNote]=React.useState('')
  function commitChanges({ added, changed, deleted }) {
      if (added) {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        setData([...data,{ id: startingAddedId, ...added }]);
        console.log(JSON.stringify(data))
      }
      if (changed) {
        setData(data.map(appointment => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment)))
          console.log(JSON.stringify(data))
      }
      if (deleted !== undefined) {
        setData(data.filter(appointment => appointment.id !== deleted))
        console.log(JSON.stringify(data))
      }   
  }
  const handleNoteChange=(event)=>{
     setNote(event.target.value)
  }
  const handleDateChange=(date)=>{
    setDate(date)
 }
 const handleDate2Change=(date)=>{
  setDate2(date)
}
function Save(){
   alert(parseInt(date.getFullYear)+date.getMonth+date.getDay+date.getHours+date.getMinutes)
   const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
   setData([...data,{ id: startingAddedId,title:note,startDate:new Date(date.getFullYear,date.getMonth,date.getDay,date.getHours,date.getMinutes),endDate:new Date(date2.getFullYear,date2.getMonth,date2.getDay,date2.getHours,date2.getMinutes),ownerId:1}]);
  console.log(JSON.stringify(data))

  }
    return (
      <Paper>
        <Grid container xs={12} spacing={2}>
           <Grid item xs={3}>
            <Paper >
                <div style={{flex:1,flexDirection:'column',display:'flex'}}>
                   <MuiPickersUtilsProvider utils={DateFnsUtils} style={{flexDirection:'row'}}>
                      <Grid container justify='flex-start' spacing={1}>
                          <Grid item xs={6}>
                          <KeyboardDatePicker
                            disableToolbar={false}
                            style={{marginLeft:20}}
                            variant='inline'
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date picker inline"
                            value={date}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                              'aria-label': 'change date',
                            }}
                          /></Grid>
                          <Grid item xs={6}>
                          <KeyboardDatePicker
                          disableToolbar={false}
                            variant="inline"
                            style={{marginRight:20}}
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date picker inline"
                            value={date2}
                            onChange={handleDate2Change}
                            KeyboardButtonProps={{
                              'aria-label': 'change date',
                            }}
                          />
                          </Grid>
                      </Grid>
                    </MuiPickersUtilsProvider>
                    <TextField id="outlined-basic" label="Тэмдэглэл" variant="outlined" 
                       value={note}
                       onChange={handleNoteChange} rowsMax={4}  multiline />
                       <Button
                        variant="contained"
                        color="default"
                        onClick={()=>Save()}
                        style={{ margin:1,width:'30%',color:'white',background:'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'}}                      
                        >     
                          Нэмэх
                      </Button>
                    </div>           
            </Paper>
           </Grid>
           <Grid item xs={9}>
           <Paper>
                <Scheduler
                  data={data}
                >
                  <EditingState
                    onCommitChanges={commitChanges}
                  />
                  <ViewState
                    defaultCurrentDate="2018-07-17"
                  />
                  <MonthView
                    timeTableCellComponent={TimeTableCell}
                    dayScaleCellComponent={DayScaleCell}
                  />
                  <Appointments
                    appointmentComponent={Appointment}
                    appointmentContentComponent={AppointmentContent}
                  />
                  <Resources
                    data={resources}
                  />
                  <Toolbar
                    flexibleSpaceComponent={FlexibleSpace}
                  />
                  <DateNavigator />
                  <EditRecurrenceMenu />
                  <AppointmentTooltip
                    showCloseButton
                    showDeleteButton
                    showOpenButton
                  />
                  <AppointmentForm />
                  <DragDropProvider />
                </Scheduler>
            </Paper>
           </Grid>
        </Grid>
      </Paper>
    );
  }
