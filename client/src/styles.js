import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    bar: {
      marginBottom: "69px"
    },
    appBar: {
        //borderRadius: 15,
        margin: '0 0 30px',
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        color: 'rgba(0,0,0, 1)',
      },
      image: {
        marginLeft: '15px',
      },
}))