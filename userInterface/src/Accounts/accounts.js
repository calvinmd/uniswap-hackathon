import React, { useEffect } from "react";
import { getAccount} from "../ethereumFunctions";
import {
 Container,
 Grid,
 IconButton,
 makeStyles,
 Paper,
 Typography,
} from "@material-ui/core";

const styles = (theme) => ({

 title: {
   textAlign: "center",
    padding: theme.spacing(0.1),
   marginBottom: theme.spacing(3),
   color : "#3b3c36",
 },
});
const useStyles = makeStyles(styles);

function Accounts(){
 const classes = useStyles();
 const [accounts, setAccounts] = React.useState(''); 
 const [count, setCount] = React.useState(0);

 useEffect(() => {
  getAccount().then((account) => {
    setAccounts(account);
    console.log(account);
    setCount(count +1);
  });
},[accounts,count]);

 return (
  <div>
       <Grid
        container
        className={classes.title}
        direction="row"
        justifyContent="center"
        alignItems="flex-end"
      >
        <Typography variant ="h6" >
        Account: {accounts}
 
        </Typography>
      </Grid>

  </div>
 )
}

export default Accounts;