import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import '../styles/creditPointsCheck.css'
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

export default function Creditor() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;


    const [state, setState] = React.useState({
        checkedA: false,

    });

    const confirmData = () => console.log(state);

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <div>

            <div id="creditorHeader">
                <img src="" alt="" />
                <h2>איזה כיף </h2>
                <p>נראה כי ישנו סיכוי גבוה שמגיע לך החזר מס.
                    בעזרת המערכת החכמה שבנינו נוכל לאסוף את כל המסמכים מהנייד ולהגיש את הבקשה שלך להחזר מס תוך זמן קצר.</p>
            </div>

            <div id="termsCheck">
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={state.checkedA}
                                onChange={handleChange}
                                name="checkedA"
                                color="primary"
                            />
                        }
                        label="קראתי ואישרתי את תקנון האתר"
                    />
                </FormGroup>
            </div>

            <div id="cardContainer">
            <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
            </div>
        </div>
    )

}
