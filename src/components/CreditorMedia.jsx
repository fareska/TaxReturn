import lucky from '../images/lucky.png'
import TermsCheck from './TermsCheck'
import React from 'react';
import '../styles/lucky.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width:'100%',
        // maxWidth: 345,
        backgroundColor: 'red',
        color: 'white',
    },
    media: {
        height: 140,
    },
    
    typography: {
        color: 'white',
    },
    
    outlinedPrimary : {
        
        color: 'white',
        width: '100px',
    },

    remember: {
        fontSize: 30,
      },
});

export default function CreditorMedia() {
    const classes = useStyles();
    return (
        <div id="luckContainer">
            
            <Card className={classes.root}>
                <CardActionArea>
                    {/* <CardMedia
                        className={classes.media}
                        image={lucky}
                        title="Contemplative Reptile"
                    /> */}
                    <img id="luckyIcon" src={lucky} alt="Image" />
                    <CardContent>
                        <Typography  gutterBottom variant="h5" component="h1">
                            مبروووككككك
                        </Typography>
                        <Typography className={classes.typography} variant="body2" color="textSecondary" component="p">
                            נראה כי ישנו סיכוי גבוה שמגיע לך החזר מס.
                            בעזרת המערכת החכמה שבנינו נוכל לאסוף את כל המסמכים מהנייד ולהגיש את הבקשה שלך להחזר מס תוך זמן קצר.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                    <TermsCheck/>
                <Typography className={classes.remember} variant="body2" component="p">
                    <strong>منحب نذكرك!!</strong>
          
        </Typography>
                <Typography variant="body2" component="p">
          {'השירות שלנו על בסיס הצלחה בלבד! אין דמי רישום או עמלת פתיחת תיק! התשלום עבור השירות הינו רק במידה וקיבלת את הכסף בגין החזר המס לחשבון הבנק שלך.'}
        </Typography>

                <div id="lucky-btnContainer">    
             <Button className="lucky-btn" className={classes.outlinedPrimary} variant="outlined" color="primary">
                 الرجوع
               </Button>
       
               <Button className="lucky-btn"  variant="contained" color="primary">
                 موافقة
               </Button>
             </div>
            </Card>
        </div>
    );
}