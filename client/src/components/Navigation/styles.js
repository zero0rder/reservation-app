import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    header: {
        backgroundColor: '#073591',
        flexDirection: 'row',
        justifyContent: 'space-between',
        '& ul li': {
            display: 'inline-block',
            margin: '0 8px',
        
            '& a': {
                color: 'white',
                textDecoration: 'none',
            },
        },
        '& button': {
            margin: '7px',
            color: 'white',
        }
    }

}));