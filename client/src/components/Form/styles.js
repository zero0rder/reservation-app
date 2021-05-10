import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
          },
    },
    paper: {
        padding: theme.spacing(2),
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    formCtrl: {
        padding: theme.spacing(4),
    },
    buttonSubmit: {
        marginBottom: '10px',
    },
    buttonGrid: {
        marginTop: '15px',
    },
    localSelect: { 
        width: '95px',
        paddingRight: '12px',
    },
    timeSelect: {
        width: '95px',
        paddingRight: '12px',
    },
}));