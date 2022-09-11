import { makeStyles } from "@material-ui/core";
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    purple: {
        marginTop: '20px',
        marginBottom: '20px',
        width: '200px',
        height:' 200px',
        position: 'relative',
        zIndex: '100',
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
        
      },
    card: {
        position: 'fixed',
        marginTop: '240px',
        borderRadius: 15,
        width: '300px',
        height: '400px',
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
    },
    ButtonGroup: {
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        width: '70%'
    },
    VideosCard: {
        width: '700px',
        height: '700px',
        marginTop: '150px',
        marginLeft: '45%',
        borderRadius: '50px'
    },
    Form: {
        borderRadius: '50px'
    }
}))