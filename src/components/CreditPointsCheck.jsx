import React from 'react';
import '../styles/creditPointsCheck.css'
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function CreditPointsCheck() {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
    checkedF: false,
    checkedG: false,
    checkedH: false,
    checkedI: false,
    checkedJ: false,
    checkedK: false,
    checkedL: false,
    checkedM: false,
    checkedN: false,
    checkedP: false,
  });

  const confirmData = () => console.log(state);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (

    <div id="checksContainer">
        <div id="checksHeader">
            <p>
            אהלן אהלן, יש לסמן את המשפטים הנכונים לגביכים ביחס ל 6 שנים אחרונות
            </p>
        </div>
    <FormGroup     row>

      <div className="check" >         
      <FormControlLabel
        control={
            <Checkbox
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
            color="primary"
            />
        }
        label="הייתי שכיר ושילמתי מס הכנסה דרך תלוש השכר"
        />
      </div>

      <div className="check" >   
      <FormControlLabel
        control={
            <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
            />
        }
        label="הרווחתי מעל ל- 8000 שח לחודש"
        />
      </div>

      <div className="check" >
      <FormControlLabel
        control={
            <Checkbox
            checked={state.checkedC}
            onChange={handleChange}
            name="checkedC"
            color="primary"
            />
        }
        label="אני עצמאי ובעל עסק כיום "
        />
      </div>

      <div className="check" >
      <FormControlLabel
        control={
            <Checkbox
            checked={state.checkedD}
            onChange={handleChange}
            name="checkedD"
            color="primary"
            />
        }
        label="החלפתי מקום עבודה או לחילופין לא עבדתי מספר חודשים בשנה"
        />
      </div>

      <div className="check" >
      <FormControlLabel
        control={
            <Checkbox
            checked={state.checkedE}
            onChange={handleChange}
            name="checkedE"
            color="primary"
            />
        }
        label="קיבלתי דמי אבטלה, לידה, פגיעה או מילואים"
        />
      </div>

      <div className="check" >
      <FormControlLabel
        control={
            <Checkbox
            checked={state.checkedF}
            onChange={handleChange}
            name="checkedF"
            color="primary"
            />
        }
        label="משכתי קופת גמל/פנסיה או קיבלתי פיצויי פיטורין ושילמתי מס"
        />
      </div>

      <div className="check" >
      <FormControlLabel
        control={
            <Checkbox
            checked={state.checkedG}
            onChange={handleChange}
            name="checkedG"
            color="primary"
            />
        }
        label="הוצאתי תואר אקדמי או לימודי מקצוע"
        />
      </div>

      <div className="check" >
      <FormControlLabel
        control={
            <Checkbox
            checked={state.checkedH}
            onChange={handleChange}
            name="checkedH"
            color="primary"
            />
        }
        label="נולדו לי ילד או ילדה"
        />
      </div>

      <div className="check" >
      <FormControlLabel
        control={
            <Checkbox
            checked={state.checkedI}
            onChange={handleChange}
            name="checkedI"
            color="primary"
            />
        }
        label="יש לי ילד/ה המקבל/ת קצבת נכות מביטוח לאומי או עבר/ה ועדת השמה לחינוך מיוחד"
        />
      </div>

      <div className="check" >
      <FormControlLabel
        control={
            <Checkbox
            checked={state.checkedJ}
            onChange={handleChange}
            name="checkedJ"
            color="primary"
            />
        }
        label="התגוררתי ביישוב ספר או עיירת פיתוח"
        />
      </div>

      <div className="check" >
      <FormControlLabel
        control={
            <Checkbox
            checked={state.checkedK}
            onChange={handleChange}
            name="checkedK"
            color="primary"
            />
        }
        label="הוצאותי כוללות תשלומי מזונות"
        />
      </div>

      <div className="check" >
      <FormControlLabel
        control={
            <Checkbox
            checked={state.checkedL}
            onChange={handleChange}
            name="checkedL"
            color="primary"
            />
        }
        label="ביצעתי פעולות בשוק ההון"
        />
      </div>

      <div className="check" >
      <FormControlLabel
        control={
            <Checkbox
            checked={state.checkedM}
            onChange={handleChange}
            name="checkedM"
            color="primary"
            />
        }
        label="שילמתי עבור ביטוח חיים, אובדן כושר עבודה, ביטוח מנהלים או קופת גמל באופן עצמאי"
        />
      </div>

      <div className="check" >
      <FormControlLabel
        control={
            <Checkbox
            checked={state.checkedN}
            onChange={handleChange}
            name="checkedN"
            color="primary"
            />
        }
        label="נוכה לי מס שבח בגין מכירת דירה או נכס אחר"
        />
      </div>

      <div className="check" >
      <FormControlLabel
        control={
            <Checkbox
            checked={state.checkedP}
            onChange={handleChange}
            name="checkedP"
            color="primary"
            />
        }
        label="הוצאותי כוללות תשלומי משכנתא"
        />
      </div>

        </FormGroup>
             <div id="checks-btnContainer">    
             <Button className="detailsForm-btn" variant="outlined" color="primary">
                 الرجوع
               </Button>
       
               <Button onClick={confirmData} className="detailsForm-btn" variant="contained" color="primary">
                 موافقة
               </Button>
             </div>
             

             </div>
  );
}

