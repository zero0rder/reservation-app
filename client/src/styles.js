import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(()=>({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
    },
    contentContainer: {
        paddingTop: '25px',
    },
    formGrid: {
        maxWidth: '525px',
    },
    accountHeader: {
        width: '100%',
        textAlign: 'center',
        padding: '15px',
        marginBottom: '10px',
        fontSize: '24px',
        fontWeight: 'bold',
    },
    signInHeader: {
        textAlign: 'center',
        padding: '15px',
        marginBottom: '10px',
        fontSize: '24px',
        fontWeight: 'bold',
    },
    signInForm: {
        '& button': {
            color: 'white',
            backgroundColor: '#073591',
            margin: '0 10px',
        }
    },
    signUpHeader: {
        textAlign: 'center',
        padding: '15px',
        marginBottom: '10px',
        fontSize: '24px',
        fontWeight: 'bold',
    },
    signUpForm: {
        display: 'flex',
        flexDirection: 'column',
        width: '75%',
        margin: '0 auto',

        '& button': {
            width: '100px',
            margin: '10px 0',
            color: 'white',
            backgroundColor: '#073591',

            '&.Mui-disabled': {
                backgroundColor: '#FF5733',
            },
        }
    }
    
}));