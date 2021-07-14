import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Home from './Home';



function App() {
  return (
    <div className="App">

      <NavBar />
      <div id="body-content" >
      <header className="site-banner">
        <div className="container" style={{ padding: '80px' }}>
          <h1> החזרי מס מעולם לא היו פשוטים יותר</h1>
          <div className="row align-items-center justify-content-center">
            <div className="col-md-5">
              <p> החזר מס של 8,000 ש”ח מגיעה לרובנו ולא צריכה להיות כאב ראש ובזבוז זמן מיותר. יחד נוכל להשלים את התהליך בפחות מחמש דקות </p>
            </div>
            <figure className="col-md-4">
              <img src="" alt="Image" />
            </figure>
          </div>
        </div>
      </header>

      <div className="section bg-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-xl-4 section-block">
              <h2 className="section-heading">משכתם קופת גמל /קרן השתלמות</h2>
              <p className="mb-0 mx-auto"> משכתם קופת גמל או קרן השתלמות לפני המועד ושילמתם מס ? יתכן ואתם זכאים להחזר מס. </p>
            </div>
            <div className="col-xl-4 section-block">
              <h2 className="section-heading">מפוטרים/ יצאתם לחל"ת</h2>
              <p className="mb-0 mx-auto"> פוטרתם או הוציאו אתכם לחל"ת, והרווחתם משכורת חודשית של מעל 8,000ש”ח ? יתכן ואתם זכאים להחזר מס  </p>
            </div>
            <div className="col-xl-4 section-block">
              <h2 className="section-heading">שכירים</h2>
              <p className="mb-0 mx-auto"> שכירים ומרוויחים משכורת חודשית של מעל 8,000 ש”ח? יתכן ואתם זכאים להחזר מס </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row text-center">
            <div className="col-xl-4 section-block">
              <img className="width200" src="" alt="Image" />
              <h3>למה דווקא איתנו?</h3>
              <h2>משרדנו מתמחה בהחזרי מס</h2>
              <p> הצוות שלנו כולל רואי חשבון ויועצי מס בעלי ניסיון עשיר ביותר בהחזרי מס אשר יוכלו להשיג עבורכם את המקסימום שתוכלו לקבל </p>
            </div>
          </div>

          <div className="col-xl-4 section-block">
            <img className="width200" src="" alt="Image" />
            <h3>לא זוכיתם, לא שילמתם</h3>
            <h2>משלמים רק אם מקבלים החזר</h2>
            <p> ללא דמי רישום או עמלת פתיחת תיק , ללא תשלום מראש , ללא סיכונים, או אפשרות להפסיד. התשלום עבור השירות מתבצע רק לאחר קבלת ההחזר בחשבון הבנק שלכם </p>
          </div>

          <div className="col-xl-4 section-block">
            <img className="width200" src="" alt="Image" />
            <h3>גלו אם אתם עומדים בתנאי הסף</h3>
            <h2>ממלאים את השאלון מהנייד</h2>
            <p> אנחנו נעזור לכם לבדוק האם אתם עומדים בתנאי הסף לקבלת החזר מס. מלאו את השאלון וגלו האם גם אתם זכאים </p>
          </div>
        </div>
      </div>

      <div id="about-us" className="section">
        <div className="conatiner">
          <div className="row-align-items-center">
            <figure className="col-xl-6 text-left">
              <img src="" alt="Image" />
            </figure>
            <div className="col-xl-6">
              <h2>מסייעים לכם לקבל החזרי מס</h2>
              <p> אנו מתמחים זמן רב בטיפול החזרי מס לשכירים וגמלאים. הצוות שלנו כולל רואי חשבון ויועצי מס בעלי ניסיון עשיר ביותר בהחזרי מס, אשר יוכלו להשיג עבורכם את המקסימום שתוכלו לקבל . </p>
              <p> אחד מיתרונותיו הבולטים של משרדנו הינו הטיפול עבור הלקוח מול כל הגורמים הרלוונטיים לצורך קבלת ההחזר, צוות עובדים מקצועי, אמין ודיסקרטי המסייע ללקוח באיסוף כל החומר הנדרש וער מניסיונו לכל הפרטים החשובים אשר ימקסמו את ההחזר עבור הלקוח וכל זאת ביעילות ובמהירות. </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section pt-0">
        <div className="conatiner">
          <div className="row text-center">
            <div className="col-xl-6">
              <h2>החזון שלנו</h2>
              <p>לתת מענה מקצועי ואישי לכל השכירים בארץ , אנו שמים את הדגש על הקשר עם הלקוח , תוך מתן שירות נאמן ,יעיל ואיכותי , זאת במטרה לספק לכל אחד מלקחותינו פתרון יעיל וממוקד על ידי עמידה בסטנדרטים גבוהים של אחריות ומוסר.</p>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-xl-6">
              <h2>מדיניות האיכות שלנו</h2>
              <p>מדיניות האיכות של משרדנו באה להבטיח כי בכל אלמנט של שירות החזר המס יממשו דרישות האיכות ,הישימות והמחויבות בצורה קפדנית ורצופה כדי ליצור את התשתית הנחוצה להשגת איכות מקצועית ,דייקנות, אמינות ושביעות רצון מלאה של הלקוחות.</p>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-xl-6">
              <h2>אין חכם כבעל ניסיון</h2>
              <p>לאורך השנים צברנו ניסיון רב בטיפול אישי ומקצועי בתיקים רבים של לקוחות ממגזרי עבודה שונים ביניהם ארגוני עובדים הגדולים בישראל.</p>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-xl-6">
              <h2>המומחיות שלנו</h2>
              <p>המומחיות של משרדנו בנושא החזרי מס, המקצוענות, ניסיון רב ואמינות ללא פשרות מעמידים את משרדנו בשורה הראשונה בתחומה.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section bg-light">
        <div className="conatiner">
          <div className="text-center">
            <h3>אז איך זה עובד ?</h3>
            <h2>5 – שלבים של תהליך קצר ופשוט</h2>
          </div>

          <div className="row text-center">
            <div className="col-auto">
              <strong>05</strong>
              <p> אנחנו נעדכן אתכם בתגובה ההחזר שמגיע לכם ונגיש את הדוחות למס הכנסה והכסף יועבר לחשבון הבנק שלך </p>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-auto">
              <strong>04</strong>
              <p> חותמים דיגיטלית על הסכם התקשרות ,ייפוי כוח למס הכנסה וביטוח לאומי ומעלים צילום ת.ז ואישור ניהול חשבון בנק אליו תרצו שהכספים יכנסו </p>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-auto">
              <strong>03</strong>
              <p>המערכת החכמה מחשבת האם יש לכם סיכוי להחזר מס</p>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-auto">
              <strong>02</strong>
              <p>ממלאים שאלון קצר לוודא האם מגיע לכם החזר מס</p>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-auto">
              <strong>01</strong>
              <p>אימות פרטים אישים</p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-us">
        <div className="container">
          <div className="justify-content-center">
            <div>
              <div>
                <h3>רוצים לברר אם גם אתם זכאים?</h3>
                <h2>בדקו אם אתם זכאים להחזר </h2>
                <p> אנחנו נעזור לכם לבדוק האם אתם עומד בתנאי הסף לקבלת החזר מס. מלאו את השאלון וגלו האם גם אתם זכאים. </p>
                <button>לבדיקה חינם</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button class="btn btn-cta btn-secondary btn--floating">לבדיקה חינם</button>
      </div>
  
      <footer id="footer">
        <div className="container">
          <div className="row"></div>
        </div>
      </footer>
    </div>


  );
}

export default App;
