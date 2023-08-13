function world(hebrow, english,categorya) {
    this.hebrow = hebrow;
    this.english = english;
    this.statos = 0;
    this.categorya = categorya;

}

const worlds = [];
worlds[0] = new world('מספר /כמה','a couple of',1);
worlds[1] = new world('הרבה','a good deal',1);
worlds[2] = new world('מספר של', 'a number of',1);
worlds[3] = new world('יכולת', 'ability', 1);
worlds[4] = new world('יכול', 'able', 1);
worlds[5] = new world('נעדר', 'absent', 1);
worlds[6] = new world('באופן מוחלט', 'absolutely', 1);
worlds[7] = new world('לקבל', 'accept', 1);
worlds[8] = new world('לפי', 'according to', 1);
worlds[9] = new world('חשבון)בנק)', 'account', 1);
worlds[10] = new world('לפעול', 'act', 1);
worlds[11] = new world('פעיל', 'active', 1);
worlds[12] = new world('פעילות', 'activity', 1);
worlds[13] = new world('למעשה', 'actually', 1);
worlds[14] = new world('להוסיף', 'add', 1);
worlds[15] = new world('להודות ב', 'admit', 1);
worlds[16] = new world('מבוגר', 'adult', 1);
worlds[17] = new world('יתרון /מעלה', 'advantage', 1);
worlds[18] = new world('לפרסם', 'advertise', 1);
worlds[19] = new world('פרסומת', 'advertisement', 1);
worlds[20] = new world('עצה', 'advice', 1);
worlds[21] = new world('לייעץ', 'advise', 1);
worlds[22] = new world('להרשות לעצמי', 'afford', 1);
worlds[23] = new world('אחרי הכל', 'after all', 1);
worlds[24] = new world('נגד', 'against', 1);
worlds[25] = new world('ראש ה..', 'ahead', 1);
worlds[26] = new world('לכוון למטרה', 'aim', 1);
worlds[27] = new world('אויר', 'air', 1);
worlds[28] = new world('חי', 'alive', 1);
worlds[29] = new world('כל הזמן', 'all the time',1);
worlds[30] = new world('לאורך', 'along',2);
worlds[31] = new world('יחד עם', 'along with',2);
worlds[32] = new world('אלף בית', 'alphabet',2);
worlds[33] = new world('חילופי', 'alternative',2);
worlds[34] = new world('למרות ש..', 'although',2);
worlds[35] = new world('לגמרי', 'altogether',2);
worlds[36] = new world('בין/בתוך', 'among',2);
worlds[37] = new world('כמות', 'amount',2);
worlds[38] = new world('וכן הלאה', 'and so on',2);
worlds[39] = new world('הכרזה /הודעה', 'announcement',2);
worlds[40] = new world('אחר/נוסף', 'another',2);
worlds[41] = new world('בכל זמן', 'any time',2);
worlds[42] = new world('בכל מקום', 'anywhere',2);
worlds[43] = new world('חוץ מ../מלבד', 'apart from',2);
worlds[44] = new world('דירה', 'apartment',2);
worlds[45] = new world('להתנצל', 'apologize',2);
worlds[46] = new world('הופעה/מראה', 'appearance',2);
worlds[47] = new world('לפנות אל../להתייחס ל..', 'apply to',2);
worlds[48] = new world('ערבי', 'arab',2);
worlds[49] = new world('אזור', 'area',2);
worlds[50] = new world('להתווכח', 'argue',2);
worlds[51] = new world('ויכוח', 'argument',2);
worlds[52] = new world('צבא', 'army',2);
worlds[53] = new world('מסביב', 'around',2);
worlds[54] = new world('לארגן/לסדר', 'arrange',2);
worlds[55] = new world('הסדר', 'arrangement',2);
worlds[56] = new world('להגיע', 'arrive',2);
worlds[57] = new world('אומנות', 'art',2);
worlds[58] = new world('מאמר', 'article',2);
worlds[59] = new world('כש...', 'as',2);
worlds[60] = new world('כתוצאה מכך', 'as a result of',3);
worlds[61] = new world('עד כמה ש...', 'as far as',3);
worlds[62] = new world('כאילו', 'as if',3);
worlds[63] = new world('כל עוד ש..', 'as long as',3);
worlds[64] = new world('ברגע ש..', 'as soon as',3);
worlds[65] = new world('כרגיל', 'as usual',3);
worlds[66] = new world('כמו', 'as as',3);
worlds[67] = new world('להרדם', 'asleep',3);
worlds[68] = new world('הערכה', 'assessment',3);
worlds[69] = new world('בתחילה', 'at first',3);
worlds[70] = new world('לבסוף', 'at last',3);
worlds[71] = new world('בבת אחת', 'at once',3);
worlds[72] = new world('כרגע', 'at present',3);
worlds[73] = new world('באותו זמן', 'at the same time',3);
worlds[74] = new world('בעבודה / בפעולה', 'at work',3);
worlds[75] = new world('זמין/מצוי', 'available',3);
worlds[76] = new world('להתעורר', 'awake',3);
worlds[77] = new world('להיות מודע ל..', 'aware of',3);
worlds[78] = new world('נורא', 'awful',3);
worlds[79] = new world('לבסס', 'base',3);
worlds[80] = new world('מבוסס על', 'based on',3);
worlds[81] = new world('בסיסי', 'basic',3);
worlds[82] = new world('בסיס', 'basis',3);
worlds[83] = new world('יש סיכוי ל..', 'be likely to',3);
worlds[84] = new world('להיות רגיל ל..', 'be used to',3);
worlds[85] = new world('להביס', 'beat',3);
worlds[86] = new world('להיות', 'become',3);
worlds[87] = new world('בדואים', 'beduim',3);
worlds[88] = new world('להתנהג', 'behave',3);
worlds[89] = new world('התנהגות', 'behavior',3);
worlds[90] = new world('שייך ל ..', 'belong to',4);
worlds[91] = new world('בתחתית/ מתחת', 'below',4);
worlds[92] = new world('מאחורי/מעבר', 'beyond',4);
worlds[93] = new world('להאשים', 'blame',4);
worlds[94] = new world('דם', 'blood',4);
worlds[95] = new world('לנשוב', 'blow',4);
worlds[96] = new world('סירה', 'boat',4);
worlds[97] = new world('גבול', 'border',4);
worlds[98] = new world('גם וגם', 'both and',4);
worlds[99] = new world('להפריע', 'bother', 4);
worlds[100] = new world('בתחתית', 'bottom',4);
worlds[101] = new world('מח', 'brain',4);
worlds[102] = new world('סניף/ענף', 'branch',4);
worlds[103] = new world('גשר', 'bridge',4);
worlds[104] = new world('זוהר/מבריק', 'bright',4);
worlds[105] = new world('רחב /גדול', 'broad',4);
worlds[106] = new world('עסקים', 'business',4);
worlds[107] = new world('בטעות', 'by accident',4);
worlds[108] = new world('במקרה', 'by chance',4);
worlds[109] = new world('ברגע ש', 'by the time',4);
worlds[110] = new world('דרך אגב', 'by the way',4);
worlds[111] = new world('לוח שנה', 'calendar',4);
worlds[112] = new world('מצלמה', 'camera',4);
worlds[113] = new world('מחנה', 'camp',4);
worlds[114] = new world('לבטל', 'cancel',4);
worlds[115] = new world('עיר בירה', 'capital',4);
worlds[116] = new world('כרטיס', 'card',4);
worlds[117] = new world('לשאת /לסחוב', 'carry',4);
worlds[118] = new world('לבצע', 'carry out',4);
worlds[119] = new world('מקרה', 'case',4);
worlds[120] = new world('מזומן', 'cash',5);
worlds[121] = new world('לגרום', 'cause',5);
worlds[122] = new world('לחגוג', 'celebrate',5);
worlds[123] = new world('חגיגה', 'celebration',5);
worlds[124] = new world('המאה ה', 'century',5);
worlds[125] = new world('בטוח/ודאי', 'certain',5);
worlds[126] = new world('סיכוי/הזדמנות', 'chance',5);
worlds[127] = new world('פרק', 'chapter',5);
worlds[128] = new world('דמות/ אופי', 'character',5);
worlds[129] = new world('לבדוק', 'check',5);
worlds[130] = new world('בחירה', 'choice',5);
worlds[131] = new world('לבחור', 'choose',5);
worlds[132] = new world('עיגול/ מעגל', 'circle',5);
worlds[133] = new world('עיר', 'city',5);
worlds[134] = new world('חכם', 'clever',5);
worlds[135] = new world('אקלים', 'climate',5);
worlds[136] = new world('לתפוס', 'climb',5);
worlds[137] = new world('בגדים', 'clothes',5);
worlds[138] = new world('ענן', 'cloud',5);
worlds[139] = new world('מועדון', 'club',5);
worlds[140] = new world('רמז', 'clue',5);
worlds[141] = new world('חוף', 'coast',5);
worlds[142] = new world('מעיל', 'coat',5);
worlds[143] = new world('קוד', 'code',5);
worlds[144] = new world('לאסוף', 'collect',5);
worlds[145] = new world('נח', 'comfortable',5);
worlds[146] = new world('שכיח/מצוי', 'common',5);
worlds[147] = new world('תקשרת', 'communication', 5);
worlds[148] = new world('כפתור', 'button', 4);
worlds[149] = new world('חברה', 'company', 6);
worlds[150] = new world('להשוות', 'compare', 6);
worlds[151] = new world('להתלונן', 'complain', 6);
worlds[152] = new world('שלם', 'complete', 6);
worlds[153] = new world('להשלים', 'complete', 6);
worlds[154] = new world('תנאי /מצב', 'condition', 6);
worlds[155] = new world('לחבר', 'connect', 6);
worlds[156] = new world('חיבור/קשר', 'connection', 6);
worlds[157] = new world('להחשיב', 'consider', 6);
worlds[158] = new world('ליצור קשר', 'contact', 6);
worlds[159] = new world('תוכן', 'contents', 6);
worlds[160] = new world('להמשיך', 'continue', 6);
worlds[161] = new world('שליטה', 'control', 6);
worlds[162] = new world('לשלוט', 'control', 6);
worlds[163] = new world('שיחה', 'converstion', 6);
worlds[164] = new world('לבשל', 'cook', 6);
worlds[165] = new world('פינה', 'corner', 6);
worlds[166] = new world('נכון/מתוקן', 'correct', 6);
worlds[167] = new world('יכל', 'could', 6);
worlds[168] = new world('זוג', 'couple', 6);
worlds[169] = new world('קורס', 'course', 6);
worlds[170] = new world('לכסות', 'cover', 6);
worlds[171] = new world('משוגע', 'crazy', 6);
worlds[172] = new world('קרם', 'cream', 6);
worlds[173] = new world('ליצור', 'create', 6);
worlds[174] = new world('כרטיס אשראי', 'credit card', 6);
worlds[175] = new world('פשע', 'crime', 6);
worlds[176] = new world('המון העם/קהל', 'crowd', 6);
worlds[177] = new world('תרבות', 'culture', 6);
worlds[178] = new world('ארון', 'cupboard', 6);
/*worlds[158] = new world('', '', 6);*/





const worldHebrow = document.querySelector('#worldHebrow');
const worldEnglish = document.querySelector('#worldEnglish');
const melel = document.querySelector('#melel');
const count = document.querySelector('#count');
const categorya = document.querySelector('#categorya');

let cnt =0;
change();


worldEnglish.addEventListener('keydown', check);
    function check(e) {
        if (e.key == "Enter") {
            if (worlds[cnt].statos == 0) {
                if (worlds[cnt].english == worldEnglish.value) {
                    worlds[cnt].statos = 1;

                }
                else
                    melel.innerHTML += worlds[cnt].english + "-" + worlds[cnt].hebrow + '<br>';
            }
            cnt++;
            change();
                }

    }


function change() {
    while (cnt <worlds.length&&worlds[cnt].statos != 0) {
        cnt++;
    }
    categorya.innerText ="categorya: "+ worlds[cnt].categorya;
    count.innerText = worlds.length + " / " + (cnt + 1);
    if (cnt < worlds.length) {
        worldHebrow.innerText = worlds[cnt].hebrow; 
        worldEnglish.value = "";
    }
    else 
        if (confirm('סיימת! האם ברצונך לנסות את מה שלא הצלחת ?')) {
            cnt = 0;
            change();
            melel.innerHTML = "";

        }   
}






