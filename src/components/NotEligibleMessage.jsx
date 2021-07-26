import sorry from '../images/sorry.jpg'
import TermsCheck from './TermsCheck'
import React from 'react';
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
        width: '100%',
        color: 'black',
    },
    media: {
        height: 140,
    },

    typography: {
        color: 'black',
    },

    btn: {
        width:'200px',
        marginBottom: '10px'
    },

});

export default function CreditorMedia() {
    const classes = useStyles();
    return (
        <div id="luckContainer">

            <Card className={classes.root}>
                <CardActionArea>
                    <img id="sorryIcon" src={sorry} alt="Image" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h1">
                            ياسفنا اخبارك باننا لن نتابع عملية الفحص
                        </Typography>
                        <Typography className={classes.typography} variant="body2" color="textSecondary" component="p">
                            وفقا لاجابتك بلاستمارة التي ملات يبدو بانك لست مستحق لاسترجاع الضريبة على حساب السة سنوات الماضيةز نود ان نشكرك ىندعوك لاجراء الفحص بلسنوات القادمةظ
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <div id="sorry-btnContainer">

                    <Button className={classes.btn} variant="contained" color="primary">
                        الرجوع للصفحة الرئيسية
                    </Button>
                </div>
            </Card>
        </div>
    );
}