const foxPostStyle=document.createElement("style");foxPostStyle.id="fox-post-styles";foxPostStyle.textContent="/* Scoped to Fox Post. Existing trainer typography and learning colours remain owned by the trainer. */\n#app .fp-game{--fp-ink:#23455E;--fp-paper:#FFFCF5;--fp-line:#DCCDB3;--fp-red:#AB5942;max-width:1120px;margin:0 auto;color:var(--fp-ink);font:400 16px/1.6 Arial,Helvetica,sans-serif;display:grid;grid-template-columns:minmax(0,1.13fr) minmax(0,1fr);gap:0 24px}\n#app .fp-game *,#app .fp-entry *{box-sizing:border-box}\n#app .fp-heading{display:flex;align-items:center;justify-content:space-between;gap:18px;margin-bottom:22px;grid-column:1/-1}\n#app .fp-overline{margin:0 0 5px;font-size:12px;line-height:1.5;letter-spacing:.09em;text-transform:uppercase;color:#805C3F}\n#app .fp-heading h1{margin:0;color:var(--fp-ink);font-size:clamp(30px,4vw,44px);font-weight:600;line-height:1.2;letter-spacing:-.03em}\n#app .fp-tools{display:flex;align-items:center;justify-content:flex-end;gap:8px;flex-wrap:wrap;max-width:430px}\n#app .fp-button{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:44px;padding:10px 17px;border:1px solid #C8B99C;border-radius:9px;background:#FFFCF5;color:#23455E;font:400 15px/1.4 Arial,Helvetica,sans-serif;text-align:center;cursor:pointer;box-shadow:none;transition:background .15s,border-color .15s,transform .15s}\n#app .fp-button:hover:not(:disabled){background:#F1E6D1;border-color:#9E845B}\n#app .fp-button:active:not(:disabled){transform:translateY(1px)}\n#app .fp-button:focus-visible,#app .fp-entry:focus-visible,#app .fp-game a:focus-visible,#app .fp-game summary:focus-visible{outline:3px solid #A96B2E;outline-offset:4px}\n#app .fp-button:disabled{opacity:.48;cursor:default}\n#app .fp-button.fp-primary{background:#23455E;border-color:#23455E;color:#FFFCF5;min-height:48px;padding:12px 23px}\n#app .fp-button.fp-primary:hover:not(:disabled){background:#18364D;border-color:#18364D}\n#app .fp-button[aria-pressed=\"true\"]{border-color:#23455E;box-shadow:inset 0 0 0 1px #23455E;background:#EEE4D1}\n#app .fp-world{position:relative;overflow:hidden;aspect-ratio:1.5;border-radius:16px 16px 0 0;background:#D7DBCA;grid-column:1;grid-row:2}\n#app .fp-world>img{display:block;position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 62%}\n#app .fp-world-caption{position:absolute;top:16px;left:18px;max-width:calc(100% - 36px);padding:6px 13px;background:rgba(255,252,245,.92);color:#23455E;border-radius:7px;font-size:14px;line-height:1.5;box-shadow:0 2px 12px #27332b14}\n#app .fp-map{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:0;border:1px solid var(--fp-line);border-top:0;border-radius:0 0 12px 12px;overflow:hidden;background:#FFFCF5;margin-bottom:18px;grid-column:1;grid-row:3;align-self:start}\n#app .fp-map>.fp-button{display:flex;flex-wrap:wrap;align-content:center;gap:5px 9px;min-height:68px;border:0;border-radius:0;position:relative;padding:12px 10px;box-shadow:none;font-size:15px}\n#app .fp-map>.fp-button+button{border-left:1px solid var(--fp-line)}\n#app .fp-map>.fp-button[aria-pressed=\"true\"]{background:#E8DDC8;box-shadow:inset 0 3px 0 #AB5942}\n#app .fp-map small{display:block;flex-basis:100%;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#65523A;line-height:1.3}\n#app .fp-stop-icon{font-size:21px;line-height:1}\n#app .fp-quest{display:flex;gap:8px 15px;align-items:center;flex-wrap:wrap;margin:0 0 22px;padding:12px 0;border-bottom:1px solid var(--fp-line);grid-column:1;grid-row:4;align-self:start}\n#app .fp-quest-label{color:#805C3F;font-size:12px;text-transform:uppercase;letter-spacing:.08em}\n#app .fp-quest p{margin:0;flex:1;min-width:180px;line-height:1.6}\n#app .fp-inventory{display:flex;gap:8px;flex-wrap:wrap;font-size:13px}\n#app .fp-inventory>span{padding:3px 9px;background:#E8DEC9;border-radius:5px;white-space:nowrap}\n#app .fp-task,#app .fp-book{padding:24px;border:1px solid var(--fp-line);border-radius:14px;background:#FFFCF5;min-height:260px;grid-column:2;grid-row:2/5;align-self:start;min-width:0}\n#app .fp-task h2,#app .fp-book h2{font-size:clamp(23px,3vw,29px);font-weight:500;line-height:1.3;letter-spacing:-.025em;margin:0 0 18px;color:#23455E}\n#app .fp-task p,#app .fp-book p{margin:0 0 16px;line-height:1.75}\n#app .fp-speech{position:relative;margin:0 0 20px;padding:0 0 0 17px;border-left:3px solid #B58C49;max-width:760px}\n#app .fp-speaker{display:block;color:#805C3F;font-size:12px;letter-spacing:.06em;text-transform:uppercase;margin-bottom:5px}\n#app .fp-speech p{margin:0;font-size:17px}\n#app .fp-analysis{display:grid;grid-template-columns:minmax(110px,.6fr) minmax(0,1.4fr);gap:24px;align-items:center;margin:20px 0;max-width:700px}\n#app .fp-analysis>div:first-child{align-self:center;min-height:210px;display:flex;justify-content:center;align-items:center}\n#app .fp-word{display:flex;align-items:center;justify-content:center;width:100%;min-width:0;padding:10px 7px}\n#app .fp-word .connected-word{display:block;max-width:100%;max-height:260px!important;min-height:100px;height:auto}\n#app .fp-word .letter-hit{cursor:pointer}\n#app .fp-analysis-copy{min-width:0}\n#app .fp-analysis-copy>.fp-overline{margin-bottom:10px}\n#app .fp-letters{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 15px}\n#app .fp-letters>.fp-button{min-width:52px;min-height:62px;flex-direction:column;gap:1px;padding:5px 11px}\n#app .fp-letters strong{font-size:24px;line-height:1.2;font-weight:600}\n#app .fp-letters small{font-size:11px;line-height:1.3;color:#716652}\n#app .fp-modern{font-size:31px;line-height:1.5!important;letter-spacing:.025em;margin-bottom:0!important}\n#app .fp-modern>span{display:inline-block;min-width:.55em;text-align:center;padding:0 2px;border-radius:3px;border:1px solid transparent}\n#app .fp-modern .fp-linked{border-color:#846D47;background:#F1E7D5}\n#app .fp-meaning{color:#65543C;font-size:16px;margin-top:2px!important;margin-bottom:12px!important}\n#app .fp-letter-note{padding-top:12px;border-top:1px solid #E6DAC3;font-size:16px;max-width:45ch}\n#app .fp-learned{font-size:14px;color:#65543C}\n#app .fp-feedback{min-height:0;color:#80513C;line-height:1.65;font-size:16px;margin:0 0 15px;max-width:750px}\n#app .fp-feedback:empty{display:none}\n#app .fp-feedback.success{color:#255E40}\n#app .fp-direction{display:grid;grid-template-columns:repeat(2,minmax(0,130px));justify-content:center;gap:38px;margin:24px auto;max-width:380px}\n#app .fp-direction-column{position:relative;display:flex;flex-direction:column;align-items:center;padding:8px 0;gap:0}\n#app .fp-direction-column:before{content:\"\";position:absolute;top:30px;bottom:30px;width:1px;background:#DCCDB3}\n#app .fp-direction-column>.fp-button{position:relative;width:48px;height:48px;border-radius:50%;font-size:22px}\n#app .fp-direction-column>.fp-button:has(.fp-firefly){border-color:#A27628;background:#F8E9A3;box-shadow:0 0 20px #D4B34A4D}\n#app .fp-direction-script{position:relative;min-height:145px;padding:8px 0;background:#FFFCF5;width:100%;display:flex;align-items:center;justify-content:center}\n#app .fp-direction-script .fp-word .connected-word{min-height:100px;max-height:140px!important}\n#app .fp-firefly{color:#9A6B16;line-height:1;font-size:29px}\n#app .fp-word-pair{display:grid;grid-template-columns:1fr;gap:10px}\n#app .fp-word-pair>div{min-width:0}\n#app .fp-word-pair .fp-analysis{grid-template-columns:100px minmax(0,1fr);gap:15px}\n#app .fp-word-pair .fp-letters>.fp-button{min-width:44px;min-height:55px;padding:4px 7px}\n#app .fp-word-pair .fp-letter-note{font-size:14px;line-height:1.6}\n#app .fp-parcels{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px;max-width:650px;margin:24px auto}\n#app .fp-parcel{position:relative;background:#EEE0C7;border:1px solid #C0A782;border-radius:8px;padding:15px 15px 20px;display:flex;align-items:center;flex-direction:column;gap:9px}\n#app .fp-parcel-ribbon{position:absolute;inset:0 48%;background:#AB5942;opacity:.36;pointer-events:none}\n#app .fp-parcel>.fp-word{position:relative;min-height:195px;background:#FFFCF5;border-radius:4px;max-width:115px;margin:2px 0 6px;box-shadow:0 3px 9px #68502518}\n#app .fp-parcel>.fp-button{position:relative;width:100%}\n#app .fp-actions{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin:16px 0}\n#app .fp-repair{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:25px;max-width:580px;margin:24px auto;text-align:center}\n#app .fp-blueprint,#app .fp-sign{padding:18px 14px;border:1px solid #DCCDB3;border-radius:9px}\n#app .fp-blueprint{background:#F0F2EF}\n#app .fp-sign{background:#FFFCF5}\n#app .fp-repair .fp-word{min-height:210px}\n#app .fp-repair .fp-overline{font-size:11px}\n#app .fp-book-heading{display:flex;gap:16px;justify-content:space-between;align-items:flex-start}\n#app .fp-book-heading>.fp-button{flex-shrink:0}\n#app .fp-book-tip{font-size:14px;color:#65543C;max-width:750px}\n#app .fp-book details{padding-top:10px;border-top:1px solid #E6DAC3;font-size:14px}\n#app .fp-book summary{cursor:pointer;min-height:44px;padding:8px 0;color:#23455E}\n#app .fp-game a{color:#23455E;text-decoration:underline;text-underline-offset:4px}\n#app .fp-ending{max-width:760px;margin:0 auto;text-align:center}\n#app .fp-ending .fp-speech{text-align:left;margin:22px auto}\n#app .fp-ending .fp-actions{justify-content:center}\n#app .fp-seal{width:64px;height:64px;display:inline-flex;justify-content:center;align-items:center;background:#E0E8D8;border:2px solid #587347;border-radius:50%;color:#426138;font-size:32px;margin:0 0 15px}\n#app .fp-achievements{display:flex;justify-content:center;gap:10px 20px;flex-wrap:wrap;font-size:14px;padding:13px 0;border-top:1px solid #DCCDB3;border-bottom:1px solid #DCCDB3;margin:20px 0}\n#app .fp-discovery{padding:12px 15px;background:#E4EAD9;border-radius:7px;color:#32553D}\n#app .fp-footer{display:flex;justify-content:space-between;gap:12px;align-items:center;flex-wrap:wrap;margin-top:19px;font-size:14px;grid-column:1/-1}\n#app .fp-footer>.fp-button{border-color:transparent;background:transparent;color:#716652;font-size:13px}\n#app .fp-reset{padding:18px;margin-top:12px;border:1px solid #C8B99C;border-radius:9px;background:#FFFCF5;grid-column:1/-1}\n#app .fp-reset>p{margin:0 0 12px}\n#app .fp-reset>.fp-button{margin-right:8px;margin-bottom:5px}\n#app .fp-save-warning{color:#80513C;margin:12px 0;font-size:14px;grid-column:1/-1}\n#app [data-map-toggle]{display:none}\n#app a.fp-entry{display:grid;grid-template-columns:240px minmax(0,1fr);overflow:hidden;margin:0 0 28px;border:1px solid #CDBE9F;border-radius:14px;background:#FFFCF5;text-decoration:none;color:#23455E;transition:border-color .2s}\n#app a.fp-entry:hover{border-color:#A37948}\n#app .fp-entry-art{display:block;position:relative;min-height:200px;background:#E4DFCA;overflow:hidden}\n#app .fp-entry-art>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:13% 66%}\n#app .fp-entry-copy{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;gap:9px;padding:24px 28px}\n#app .fp-entry-copy>strong{font-size:27px;line-height:1.2;font-weight:500;letter-spacing:-.025em}\n#app .fp-entry-copy>span:not(.fp-overline){font-size:15px;line-height:1.65;max-width:64ch;color:#5A584A}\n#app .fp-entry-copy>b{font-size:14px;color:#8B4B34;font-weight:500;margin-top:2px}\n@media(max-width:850px){#app .fp-heading{align-items:flex-start;flex-direction:column}#app .fp-tools{justify-content:flex-start;max-width:100%}#app .fp-world{aspect-ratio:1.9}#app .fp-word-pair .fp-analysis{grid-template-columns:80px minmax(0,1fr);gap:12px}#app .fp-word-pair{gap:15px}#app .fp-word-pair .fp-letters{gap:4px}#app .fp-word-pair .fp-letters>.fp-button{min-width:40px;padding:4px}}\n@media(max-width:620px){#app .fp-game{font-size:16px}#app .fp-world{aspect-ratio:1.55}#app .fp-world>img{object-position:center 70%}#app .fp-map>.fp-button{font-size:13px;gap:5px;min-height:76px;padding:10px 5px}#app .fp-map small{font-size:10px}#app .fp-map .fp-stop-icon{display:none}#app .fp-task,#app .fp-book{padding:19px 16px}#app .fp-analysis{grid-template-columns:88px minmax(0,1fr);gap:14px;margin:15px 0}#app .fp-analysis>div:first-child{min-height:210px}#app .fp-letters{gap:6px}#app .fp-letters>.fp-button{min-width:44px;padding:5px 8px}#app .fp-letters strong{font-size:22px}#app .fp-modern{font-size:29px}#app .fp-letter-note{font-size:15px}#app .fp-word-pair{grid-template-columns:1fr;gap:8px}#app .fp-word-pair>div+div{border-top:1px solid #DCCDB3;padding-top:12px}#app .fp-word-pair .fp-analysis{grid-template-columns:88px minmax(0,1fr);gap:14px}#app .fp-word-pair .fp-letter-note{font-size:15px}#app .fp-parcels{gap:11px}#app .fp-parcel{padding:10px 8px 14px}#app .fp-parcel>.fp-button{font-size:13px;padding:10px 8px}#app .fp-parcel>.fp-word{max-width:90px;min-height:190px}#app .fp-repair{gap:12px}#app .fp-blueprint,#app .fp-sign{padding:13px 8px}#app .fp-repair .fp-word{min-height:195px}#app .fp-book-heading{flex-direction:column;gap:0;margin-bottom:14px}#app .fp-book .fp-analysis{grid-template-columns:75px minmax(0,1fr);gap:11px}#app .fp-book .fp-letters{gap:4px}#app .fp-book .fp-letters>.fp-button{min-width:40px;padding:4px 6px}#app a.fp-entry{grid-template-columns:1fr}#app .fp-entry-art{min-height:185px;max-height:200px}#app .fp-entry-art>img{object-position:center 76%}#app .fp-entry-copy{padding:21px}#app .fp-entry-copy>strong{font-size:25px}#app .fp-world-caption{top:10px;left:10px;font-size:12px;padding:5px 10px}#app .fp-quest{align-items:flex-start}#app .fp-quest p{min-width:150px}#app .fp-speech p{font-size:16px}#app .fp-tools>.fp-button{font-size:13px;padding:10px 12px}#app .fp-footer{align-items:flex-start;flex-direction:column}#app .fp-footer>.fp-button{padding-left:0}}\n@media(prefers-reduced-motion:reduce){#app .fp-button,#app .fp-entry{transition:none}#app .fp-button:active:not(:disabled){transform:none}}\n@media(max-width:850px){#app .fp-game{display:block}#app .fp-world{aspect-ratio:1.5}#app .fp-game[data-started=\"true\"][data-map-open=\"false\"] .fp-world{display:none}#app .fp-game[data-started=\"true\"] [data-map-toggle]{display:inline-flex}#app .fp-map{border-top:1px solid var(--fp-line);border-radius:10px}#app .fp-game[data-map-open=\"true\"] .fp-map{border-radius:0 0 10px 10px}#app .fp-quest{margin-bottom:16px}#app .fp-book,#app .fp-task{padding:20px}#app .fp-word-pair{grid-template-columns:repeat(2,minmax(0,1fr))}}\n@media(max-width:620px){#app .fp-world{aspect-ratio:1.5}#app .fp-world>img{object-position:center}#app .fp-book,#app .fp-task{padding:19px 16px}#app .fp-word-pair{grid-template-columns:1fr}#app .fp-analysis .fp-word .connected-word{max-height:235px!important}}\n";document.head.append(foxPostStyle);
// Fox Post, chapter one. Inserted inside the existing trainer's lexical scope.
// Only this chapter writes mongol-fox-post-chapter1-v1.
const foxPostKey = 'mongol-fox-post-chapter1-v1';
const foxPostVersion = 1;
const foxPostWords = {
    nom: {id: 'wfc409c1c0d80', modern: 'ном', ru: 'книга'},
    nam: {id: 'w0b97456c30db', modern: 'нам', ru: 'низкий'},
    on: {id: 'w0aef28233108', modern: 'он', ru: 'год'},
    manan: {id: 'w6cc497358b97', modern: 'манан', ru: 'туман'},
};
const foxPostScenes = {station: 'Почтовая станция', workshop: 'Мастерская', library: 'Библиотека'};
const foxPostPanels = ['intro', 'direction', 'letters', 'compare', 'parcels', 'repair', 'door', 'register', 'delivery', 'ending', 'postcard'];
function foxPostEmpty() {
    return {version: foxPostVersion, started: false, direction: 0, learned: [], compared: false,
        parcel: false, repaired: false, register: false, delivered: false, bonus: [],
        scene: 'station', panel: 'intro', lantern: true, order: Math.random() < .5 ? ['nom', 'nam'] : ['nam', 'nom']};
}
function foxPostRead() {
    const empty = foxPostEmpty();
    try {
        const raw = JSON.parse(localStorage.getItem(foxPostKey));
        if (!raw || raw.version !== foxPostVersion) return empty;
        for (const key of ['started', 'compared', 'parcel', 'repaired', 'register', 'delivered', 'lantern']) {
            if (typeof raw[key] === 'boolean') empty[key] = raw[key];
        }
        empty.direction = Math.max(0, Math.min(4, Number.isInteger(raw.direction) ? raw.direction : 0));
        empty.learned = [...new Set(Array.isArray(raw.learned) ? raw.learned.filter(n => [0, 1, 2].includes(n)) : [])];
        empty.bonus = [...new Set(Array.isArray(raw.bonus) ? raw.bonus.filter(n => [2, 4].includes(n)) : [])];
        if (Object.hasOwn(foxPostScenes, raw.scene)) empty.scene = raw.scene;
        if (foxPostPanels.includes(raw.panel)) empty.panel = raw.panel;
        if (Array.isArray(raw.order) && raw.order.length === 2 && new Set(raw.order).size === 2
            && raw.order.every(id => ['nom', 'nam'].includes(id))) empty.order = raw.order;
        // A stale/incomplete save cannot skip the orientation or the guided reading.
        if (empty.direction < 4 && !['intro', 'direction'].includes(empty.panel)) empty.panel = 'direction';
        if (empty.direction === 4 && empty.learned.length < 3 && !['intro', 'letters', 'postcard'].includes(empty.panel)) empty.panel = 'letters';
        return empty;
    } catch { return empty; }
}
let foxPostSave = foxPostRead();
let foxPostFocus = 0;
let foxPostFeedback = '';
let foxPostFeedbackKind = '';
let foxPostBookOpen = false;
let foxPostBookWord = 'nom';
let foxPostSaveError = false;
let foxPostResetOpen = false;
let foxPostRepairChoice = '';
let foxPostMapOpen = false;
const foxPostSelections = new Map();
function foxPostPersist() {
    try { localStorage.setItem(foxPostKey, JSON.stringify(foxPostSave)); foxPostSaveError = false; }
    catch { foxPostSaveError = true; }
}
function foxPostWord(id) {
    const entry = foxPostWords[id];
    return {...CONS_DATA.records[entry.id], modern: entry.modern, ru: entry.ru};
}
function foxPostButton(label, action, attrs = '', primary = false) {
    return '<button type="button" class="fp-button' + (primary ? ' fp-primary' : '')
        + '" data-action="fox-' + action + '" ' + attrs + '>' + label + '</button>';
}
function foxPostSvg(id, selected = -1, color = foxPostSave.lantern, missing = -1, size = 128) {
    const word = foxPostWord(id);
    // Mask a whole contextual segment; never reshape disconnected letter fragments.
    let svg = joinSvg(word, {color, hits: missing < 0, selected, fontSize: size});
    if (missing >= 0) {
        const previous = FONT_DATA;
        FONT_DATA = CONS_DATA.font;
        try {
            const part = segments(word)[missing];
            const view = svg.match(/viewBox="([^"]+)"/)[1].split(' ').map(Number);
            svg = svg.replace('</svg>', '<rect x="' + view[0] + '" y="' + part.top + '" width="'
                + view[2] + '" height="' + Math.max(80, part.bottom - part.top) + '" fill="#FFFCF5"/>'
                + '<rect x="' + (view[0] + 20) + '" y="' + (part.top + 10) + '" width="' + (view[2] - 40)
                + '" height="' + Math.max(60, part.bottom - part.top - 20)
                + '" rx="30" fill="none" stroke="#AB5942" stroke-width="10" stroke-dasharray="24 16"/></svg>');
        } finally { FONT_DATA = previous; }
    }
    return '<div class="fp-word" data-fox-word="' + id + '">' + svg + '</div>';
}
function foxPostChips(id, selected, action = 'letter') {
    return '<div class="fp-letters" role="group" aria-label="Буквы сверху вниз">'
        + visibleChars(foxPostWord(id)).map((char, i) => foxPostButton(
            '<small>' + (i + 1) + '</small><strong' + (foxPostSave.lantern ? ' style="color:' + colorOf(char.ch) + '"' : '')
            + '>' + esc(nameOf(char.ch)) + '</strong>', action,
            'data-word="' + id + '" data-index="' + i + '" aria-label="Буква ' + nameOf(char.ch)
            + ', место ' + (i + 1) + ' сверху" aria-pressed="' + (i === selected) + '"')).join('') + '</div>';
}
function foxPostModern(id, selected = -1) {
    const word = foxPostWord(id);
    return '<p class="fp-modern" lang="mn-Cyrl">' + Array.from(word.modern).map((char, i) =>
        '<span' + (foxPostSave.lantern ? ' style="color:' + colorOf(visibleChars(word)[i].ch) + '"' : '')
        + (i === selected ? ' class="fp-linked"' : '') + '>' + esc(char) + '</span>').join('')
        + '</p><p class="fp-meaning">' + esc(word.ru) + '</p>';
}
function foxPostLetterNote(id, index) {
    const word = foxPostWord(id), chars = visibleChars(word), name = nameOf(chars[index].ch);
    const place = index === 0 ? 'начинает слово и соединяется с буквой снизу'
        : index === chars.length - 1 ? 'завершает слово и соединяется с буквой сверху'
        : 'стоит в середине и соединяется с соседями сверху и снизу';
    const notes = {
        'nom:0': 'Н — первая буква в «ном». Найди её вверху записи: ниже начинается О.',
        'nom:1': 'О — вторая буква. Она находится между Н и М. Цвет связывает её с О в кириллице.',
        'nom:2': 'М — третья, нижняя буква. Она завершает «ном — книга».',
        'nam:1': 'Здесь в середине А. Н и М остались теми же, но получилось другое слово: «нам — низкий».',
        'on:0': 'О теперь начинает слово. Её верхнее очертание отличается от О в середине «ном».',
        'on:1': 'Н теперь стоит в конце: её очертание отличается от начальной Н в «ном». Это та же буква.',
        'manan:0': 'В «манан» М начинает слово. Сравни её с М внизу слова «ном»: буква та же, соединение другое.',
        'manan:2': 'Эта Н стоит в середине, между двумя А. Ниже в этом же слове есть ещё одна Н.',
        'manan:4': 'Последняя Н завершает слово «манан — туман». Сравни её с Н в конце «он — год».',
    };
    return notes[id + ':' + index] || name + ' ' + place + '. Ей соответствует «' + word.modern[index] + '» в кириллице.';
}
function foxPostAnalysis(id, selected = foxPostFocus, action = 'letter') {
    const chars = visibleChars(foxPostWord(id));
    selected = Math.max(0, Math.min(chars.length - 1, selected));
    return '<div class="fp-analysis"><div>' + foxPostSvg(id, selected) + '</div><div class="fp-analysis-copy">'
        + '<p class="fp-overline">Буквы сверху вниз</p>' + foxPostChips(id, selected, action)
        + foxPostModern(id, selected) + '<p class="fp-letter-note">' + esc(foxPostLetterNote(id, selected)) + '</p></div></div>';
}
function foxPostMessage() {
    return '<div class="fp-feedback ' + foxPostFeedbackKind + '" role="status" aria-live="polite" aria-atomic="true">'
        + esc(foxPostFeedback) + '</div>';
}
function foxPostSetMessage(message, kind = '') { foxPostFeedback = message; foxPostFeedbackKind = kind; }
function foxPostSpeak(name, text) {
    return '<div class="fp-speech"><span class="fp-speaker">' + esc(name) + '</span><p>' + text + '</p></div>';
}
function foxPostDirections() {
    const step = foxPostSave.direction;
    const points = [[0, 'Верх первой колонки'], [1, 'Низ первой колонки'], [2, 'Верх следующей колонки справа'], [3, 'Низ второй колонки']];
    return '<h2 id="fp-panel-title">Письмо, которое читают вниз</h2>'
        + foxPostSpeak('Лиса', '«Я впервые вижу такое письмо. Светлячок, покажи, откуда начинать!»')
        + '<p>В каждом слове читай <strong>сверху вниз</strong>. Затем переходи к верху следующей колонки <strong>справа</strong>. Нажми на светлячка по порядку.</p>'
        + '<div class="fp-direction" role="group" aria-label="Две колонки: сначала левая, затем правая">'
        + [0, 1].map(col => '<div class="fp-direction-column">'
            + [0, 1].map(row => {
                const n = col * 2 + row;
                return (row === 1 ? '<div class="fp-direction-script" aria-hidden="true">' + foxPostSvg(col ? 'nam' : 'nom', -1, false, -1, 74) + '</div>' : '')
                    + foxPostButton(n < step ? '✓' : n === step ? '<span class="fp-firefly" aria-hidden="true">✦</span>' : '·', 'direction',
                        'data-step="' + n + '" aria-label="' + points[n][1] + (n === step ? ': здесь светлячок' : '') + '"' + (n < step ? ' disabled' : ''));
            }).join('') + '</div>').join('') + '</div>' + foxPostMessage();
}
function foxPostLesson() {
    const left = 3 - foxPostSave.learned.length;
    return '<h2 id="fp-panel-title">Что написано на бирке?</h2>'
        + foxPostSpeak('Светлячок', '«Здесь <strong>ном — книга</strong>. Познакомься с каждой из трёх букв: нажми на неё в слове или на подпись рядом.»')
        + foxPostAnalysis('nom') + '<p class="fp-learned">' + (left ? 'Осталось рассмотреть букв: ' + left : 'Н, О и М уже в почтовой книжке.') + '</p>'
        + foxPostMessage() + foxPostButton('Сравнить две бирки', 'to-compare', left ? 'disabled' : '', true);
}
function foxPostCompare() {
    return '<h2 id="fp-panel-title">Одна буква меняет слово</h2>'
        + '<p>На соседней полке похожая бирка. В слове «ном» в середине <strong>О</strong>, а в «нам» — <strong>А</strong>. «Нам — низкий» — пометка для нижней полки.</p>'
        + '<div class="fp-word-pair"><div>' + foxPostAnalysis('nom', foxPostSelections.get('nom') ?? 1) + '</div><div>' + foxPostAnalysis('nam', foxPostSelections.get('nam') ?? 1) + '</div></div>'
        + '<p>У каждой буквы свой постоянный цвет. Сначала посмотри на её очертание, затем сверь подпись.</p>'
        + foxPostButton('Искать посылку с книгой', 'finish-compare', '', true);
}
function foxPostParcels() {
    if (foxPostSave.parcel) return '<h2 id="fp-panel-title">Посылка уже в сумке</h2>'
        + foxPostSpeak('Лиса', '«Книгу забрала. Теперь нужен указатель к библиотеке — загляну в мастерскую.»')
        + foxPostButton('Зайти в мастерскую', 'scene', 'data-scene="workshop"', true)
        + foxPostButton('Осмотреть старую открытку', 'postcard');
    return '<h2 id="fp-panel-title">Найди полку с книгой</h2>'
        + foxPostSpeak('Лиса', '«Библиотекарь ждёт книгу. Какая из двух бирок говорит “ном”?»')
        + '<p>Осмотри написание и возьми посылку с нужной полки. Фонарь и почтовая книжка всегда под рукой.</p>'
        + '<div class="fp-parcels">' + foxPostSave.order.map((id, i) => '<article class="fp-parcel"><div class="fp-parcel-ribbon" aria-hidden="true"></div>'
            + foxPostSvg(id, -1, foxPostSave.lantern, -1, 112)
            + foxPostButton('Осмотреть бирку', 'inspect', 'data-word="' + id + '"')
            + foxPostButton('Взять эту посылку', 'parcel', 'data-word="' + id + '" aria-label="Взять посылку с полки ' + (i + 1) + '"', true)
            + '</article>').join('') + '</div>' + foxPostMessage();
}
function foxPostWorkshop() {
    if (foxPostSave.repaired) return '<h2 id="fp-panel-title">Указатель восстановлен</h2>'
        + foxPostAnalysis('nom', 1) + foxPostSpeak('Мастер', '«Теперь видно, где книги. Вот ключ от библиотеки — отнеси посылку!»')
        + foxPostButton('Идти в библиотеку', 'scene', 'data-scene="library"', true);
    const preview = foxPostRepairChoice === 'a' ? 'nam' : 'nom';
    return '<h2 id="fp-panel-title">Почини указатель к книгам</h2>'
        + foxPostSpeak('Мастер', '«Ветер унёс среднюю букву. На чертеже написано “ном — книга”. Подбери недостающую букву, и я дам ключ от библиотеки.»')
        + '<div class="fp-repair"><div class="fp-blueprint"><p class="fp-overline">Чертёж мастера</p>'
        + foxPostSvg('nom', 1) + foxPostModern('nom', 1) + '</div><div class="fp-sign"><p class="fp-overline">Наш указатель</p>'
        + foxPostSvg(preview, -1, foxPostSave.lantern, foxPostRepairChoice ? -1 : 1)
        + (foxPostRepairChoice ? foxPostModern(preview) : '<p>В середине не хватает буквы.</p>') + '</div></div>'
        + '<div class="fp-actions" role="group" aria-label="Выбрать среднюю букву">'
        + foxPostButton('<strong' + (foxPostSave.lantern ? ' style="color:' + colorOf('ᠣ') + '"' : '') + '>О</strong>', 'repair', 'data-letter="o"')
        + foxPostButton('<strong' + (foxPostSave.lantern ? ' style="color:' + colorOf('ᠠ') + '"' : '') + '>А</strong>', 'repair', 'data-letter="a"') + '</div>' + foxPostMessage();
}
function foxPostLibrary() {
    if (!foxPostSave.repaired) return '<h2 id="fp-panel-title">Дверь библиотеки закрыта</h2>'
        + foxPostSpeak('Записка на двери', '«Ключ у мастера. Помоги ему восстановить указатель к книгам.»')
        + foxPostButton('Вернуться к мастеру', 'scene', 'data-scene="workshop"', true);
    if (!foxPostSave.parcel) return '<h2 id="fp-panel-title">Ключ подходит!</h2>'
        + foxPostSpeak('Библиотекарь', '«Спасибо, что открыла дверь. Моя книга ещё на почтовой станции. На её полке бирка “ном”.»')
        + foxPostButton('Забрать посылку', 'scene', 'data-scene="station"', true);
    if (!foxPostSave.register) return '<h2 id="fp-panel-title">Знакомая буква на новом месте</h2>'
        + foxPostSpeak('Библиотекарь', '«Осталось поставить отметку в журнале за этот год. Здесь “он — год”. Посмотри: О теперь вверху, а Н — внизу.»')
        + foxPostAnalysis('on', foxPostFocus, 'register-letter')
        + '<p><strong>Найди Н в новом слове.</strong> Нажми на букву в записи или на её подпись. У конечной Н другое очертание, чем у Н в “ном”.</p>' + foxPostMessage();
    return '<h2 id="fp-panel-title">Первая доставка</h2>'
        + foxPostSpeak('Библиотекарь', '«В журнале отметка есть. Теперь передай мне книгу из сумки.»')
        + foxPostSvg('nom', -1) + foxPostButton('Передать книгу библиотекарю', 'deliver', '', true);
}
function foxPostEnding() {
    return '<div class="fp-ending"><span class="fp-seal" aria-hidden="true">✓</span><p class="fp-overline">Первая глава завершена</p>'
        + '<h2 id="fp-panel-title">Книга нашла свой дом</h2>'
        + foxPostSpeak('Лиса', '«Я прочитала бирку, починила указатель и доставила книгу!»')
        + '<p>В книге лежит записка пропавшего почтальона: «Я отправился к переправе. На станции оставил тебе открытку».</p>'
        + '<div class="fp-achievements"><span>Чтение сверху вниз</span><span>Н · О · М · А</span><span>Буква в начале и в конце</span></div>'
        + '<p>Первая доставка отмечена в почтовой книжке. Можно вернуться к надписям и рассмотреть их ещё раз.</p>'
        + '<div class="fp-actions">' + foxPostButton('Найти открытку на станции', 'postcard', '', true)
        + foxPostButton('Открыть почтовую книжку', 'book') + '</div></div>';
}
function foxPostPostcard() {
    return '<h2 id="fp-panel-title">Открытка с перевала</h2>'
        + foxPostSpeak('Лиса', '«На обороте знакомые буквы! Здесь “манан — туман”. Попробую найти обе Н.»')
        + foxPostAnalysis('manan', foxPostFocus, 'bonus-letter')
        + '<p>Одна Н находится в середине, другая — внизу. Их формы отличаются. Нажми на обе Н.</p>'
        + '<p class="fp-learned">Найдено: ' + foxPostSave.bonus.length + ' из 2</p>' + foxPostMessage()
        + (foxPostSave.bonus.length === 2 ? '<p class="fp-discovery">На открытке проявилась маленькая печать перевала. Она сохранена в книжке.</p>' : '')
        + foxPostButton(foxPostSave.delivered ? 'Вернуться в библиотеку' : 'Вернуться к доставке', 'scene',
            'data-scene="' + (foxPostSave.delivered ? 'library' : 'station') + '"', true);
}
function foxPostBook() {
    const available = ['nom', ...(foxPostSave.compared ? ['nam'] : []), ...(foxPostSave.repaired ? ['on'] : []),
        ...(foxPostSave.panel === 'postcard' || foxPostSave.bonus.length ? ['manan'] : [])];
    if (!available.includes(foxPostBookWord)) foxPostBookWord = 'nom';
    return '<section class="fp-book" aria-labelledby="fp-book-title"><div class="fp-book-heading"><h2 id="fp-book-title">Почтовая книжка</h2>'
        + foxPostButton('Закрыть книжку', 'book') + '</div><div class="fp-actions" role="group" aria-label="Найденные слова">'
        + available.map(id => foxPostButton(esc(foxPostWords[id].modern), 'book-word', 'data-word="' + id
            + '" aria-pressed="' + (foxPostBookWord === id) + '"')).join('') + '</div>'
        + foxPostAnalysis(foxPostBookWord, foxPostFocus, 'book-letter')
        + '<p class="fp-book-tip">В этих четырёх примерах порядок письменных букв совпадает с кириллицей. В других словах связь может быть сложнее — её мы будем разбирать постепенно.</p>'
        + '<details><summary>Источник слов</summary><p>Словарные записи и начертания взяты из существующего банка тренажёра: TUFS ILCAA, Mongolic Basic Vocabulary. Ном — book; нам — low; он — year; манан — fog.</p>'
        + '<a id="fox-post-source" href="https://mongolicbv.aa-ken.jp/" target="_blank" rel="noopener noreferrer">Открыть словарь TUFS ILCAA</a></details></section>';
}
function foxPostTask() {
    const panel = foxPostSave.panel;
    if (panel === 'intro') return '<h2 id="fp-panel-title">Посылка для библиотекаря</h2>'
        + foxPostSpeak('Лиса', '«После ветра на станции всё перепуталось. Библиотекарь ждёт книгу, а я пока не умею читать эти бирки. Поможешь?»')
        + '<p>Исследуй станцию, мастерскую и библиотеку. Светлячок познакомит с первыми буквами. Все объяснения доступны по-русски.</p>'
        + foxPostButton('Взять первую доставку', 'start', '', true);
    if (panel === 'direction') return foxPostDirections();
    if (panel === 'letters') return foxPostLesson();
    if (panel === 'compare') return foxPostCompare();
    if (panel === 'postcard') return foxPostPostcard();
    if (foxPostSave.scene === 'station') return foxPostParcels();
    if (foxPostSave.scene === 'workshop') return foxPostWorkshop();
    if (foxPostSave.delivered) return foxPostEnding();
    return foxPostLibrary();
}
function foxPostGoal() {
    if (foxPostSave.delivered) return 'Доставка завершена. На станции есть необязательная находка.';
    if (foxPostSave.direction < 4) return 'Познакомься с направлением чтения.';
    if (foxPostSave.learned.length < 3) return 'Рассмотри Н, О и М на первой бирке.';
    if (!foxPostSave.compared) return 'Сравни О и А в похожих надписях.';
    if (!foxPostSave.parcel && !foxPostSave.repaired) return 'Найди книгу на станции и загляни к мастеру.';
    if (!foxPostSave.parcel) return 'Забери посылку с биркой «ном» на станции.';
    if (!foxPostSave.repaired) return 'Помоги мастеру восстановить указатель.';
    return 'Доставь книгу в библиотеку.';
}
function foxPostScreen() {
    const canExplore = foxPostSave.direction === 4 && foxPostSave.learned.length === 3 && foxPostSave.compared;
    const stops = Object.entries(foxPostScenes).map(([id, title]) => foxPostButton(
        '<span class="fp-stop-icon" aria-hidden="true">' + (id === 'station' ? '✉' : id === 'workshop' ? '◇' : '▤')
        + '</span><span>' + title + '</span>' + (foxPostSave.scene === id ? '<small>Ты здесь</small>' : ''), 'scene',
        'data-scene="' + id + '" aria-pressed="' + (foxPostSave.scene === id) + '"' + (!canExplore ? ' disabled' : ''))).join('');
    return '<section class="fp-game" data-started="' + foxPostSave.started + '" data-map-open="' + foxPostMapOpen + '" aria-label="Лисья почта, первая глава"><div class="fp-heading">'
        + '<div><p class="fp-overline">Приключение с первых букв · глава 1</p><h1>Лисья почта</h1></div>'
        + '<div class="fp-tools">' + foxPostButton('✦ Фонарь: ' + (foxPostSave.lantern ? 'цвет включён' : 'без цвета'), 'lantern',
            'aria-pressed="' + foxPostSave.lantern + '" aria-label="Цветные подсказки: ' + (foxPostSave.lantern ? 'включены' : 'выключены') + '"')
        + foxPostButton('Почтовая книжка', 'book', 'aria-expanded="' + foxPostBookOpen + '"')
        + foxPostButton('Карта маршрута', 'map', 'data-map-toggle aria-expanded="' + foxPostMapOpen + '"') + '</div></div>'
        + '<div class="fp-world"><img src="' + FOX_POST_ART + '" width="1536" height="1024" alt="Лиса-почтальон с письмом на тропинке. Слева почтовая станция, в центре мастерская, справа библиотека в гэре." decoding="async">'
        + '<div class="fp-world-caption">' + esc(foxPostScenes[foxPostSave.scene]) + '</div></div>'
        + '<nav class="fp-map" aria-label="Куда пойти">' + stops + '</nav>'
        + '<div class="fp-quest"><span class="fp-quest-label">Сейчас</span><p>' + esc(foxPostGoal()) + '</p>'
        + '<div class="fp-inventory" aria-label="В почтовой сумке">'
        + (foxPostSave.parcel && !foxPostSave.delivered ? '<span>✉ Книга</span>' : '')
        + (foxPostSave.repaired ? '<span>Ключ</span>' : '')
        + (foxPostSave.delivered ? '<span>✓ Доставка</span>' : '')
        + (foxPostSave.bonus.length === 2 ? '<span>Печать перевала</span>' : '') + '</div></div>'
        + (foxPostBookOpen ? foxPostBook() : '<section class="fp-task" aria-labelledby="fp-panel-title">' + foxPostTask() + '</section>')
        + (foxPostSaveError ? '<p class="fp-save-warning" role="status">Браузер не разрешил сохранить главу. В этой вкладке можно продолжить играть.</p>' : '')
        + '<footer class="fp-footer"><a id="fox-post-games" href="#games">Все игры тренажёра</a>'
        + foxPostButton('Начать главу заново', 'reset-prompt') + '</footer>'
        + (foxPostResetOpen ? '<div class="fp-reset" role="group" aria-label="Повторить главу"><p>Начать первую главу заново? Сбросится только «Лисья почта».</p>'
            + foxPostButton('Да, начать заново', 'reset') + foxPostButton('Продолжить игру', 'reset-cancel') + '</div>' : '') + '</section>';
}
function foxPostCard() {
    return '<a id="fox-post-entry" class="fp-entry" href="#fox-post"><span class="fp-entry-art"><img src="' + FOX_POST_ART
        + '" width="1536" height="1024" alt="" loading="lazy"></span><span class="fp-entry-copy"><span class="fp-overline">Приключение с первых букв</span>'
        + '<strong>Лисья почта</strong><span>Помоги лисе доставить первую книгу. Исследуй мир, знакомься с буквами и читай с цветным фонарём.</span>'
        + '<b>' + (foxPostSave.delivered ? 'Снова заглянуть в главу' : foxPostSave.started ? 'Продолжить первую главу' : 'Играть с нуля') + '</b></span></a>';
}
function foxPostOpen() {
    arcLeave();
    foxPostSave = foxPostRead();
    state.section = 'fox-post'; state.screen = 'fox-post'; state.route = '#fox-post';
    foxPostFocus = 0; foxPostFeedback = ''; foxPostBookOpen = false; foxPostMapOpen = false;
}
function foxPostMove(scene) {
    if (!Object.hasOwn(foxPostScenes, scene)) return;
    if (foxPostSave.direction < 4 || foxPostSave.learned.length < 3 || !foxPostSave.compared) return;
    foxPostSave.scene = scene;
    foxPostSave.panel = scene === 'station' ? 'parcels' : scene === 'workshop' ? 'repair' : 'door';
    foxPostFocus = 0; foxPostBookOpen = false; foxPostRepairChoice = ''; foxPostSetMessage('');
}
function foxPostHandle(action, target) {
    if (action === 'start') {
        foxPostSave.started = true; foxPostSave.panel = 'direction';
    } else if (action === 'direction') {
        const index = Number(target.dataset.step);
        if (index !== foxPostSave.direction) foxPostSetMessage('Следуй за светлячком: сначала вниз по левой колонке, затем к верху правой.');
        else {
            foxPostSave.direction++;
            foxPostSetMessage('');
            if (foxPostSave.direction === 4) { foxPostSave.panel = 'letters'; foxPostFocus = 0; }
        }
    } else if (action === 'letter') {
        const id = target.dataset.word || 'nom', index = Number(target.dataset.index);
        if (!foxPostWords[id] || !visibleChars(foxPostWord(id))[index]) return;
        foxPostFocus = index;
        foxPostSelections.set(id, index);
        if (foxPostSave.panel === 'letters' && id === 'nom' && !foxPostSave.learned.includes(index)) foxPostSave.learned.push(index);
        foxPostSetMessage('');
    } else if (action === 'to-compare' && foxPostSave.learned.length === 3) {
        foxPostSave.panel = 'compare'; foxPostFocus = 1;
    } else if (action === 'finish-compare' && foxPostSave.learned.length === 3) {
        foxPostSave.compared = true; foxPostSave.panel = 'parcels'; foxPostFocus = 0;
    } else if (action === 'lantern') {
        foxPostSave.lantern = !foxPostSave.lantern;
    } else if (action === 'map') {
        foxPostMapOpen = !foxPostMapOpen;
    } else if (action === 'scene') {
        foxPostMove(target.dataset.scene);
    } else if (action === 'book') {
        foxPostBookOpen = !foxPostBookOpen; foxPostBookWord = 'nom'; foxPostFocus = 0;
    } else if (action === 'book-word' && foxPostWords[target.dataset.word]) {
        foxPostBookWord = target.dataset.word; foxPostFocus = 0;
    } else if (action === 'book-letter' && foxPostWords[target.dataset.word]) {
        foxPostFocus = Number(target.dataset.index);
    } else if (action === 'inspect' && ['nom', 'nam'].includes(target.dataset.word)) {
        foxPostBookOpen = true; foxPostBookWord = target.dataset.word; foxPostFocus = 0;
    } else if (action === 'parcel' && foxPostSave.compared && foxPostSave.scene === 'station') {
        if (target.dataset.word === 'nom') {
            foxPostSave.parcel = true; foxPostSetMessage('');
        } else foxPostSetMessage('На этой бирке «нам — низкий»: пометка для нижней полки. Для книги найди О между Н и М.');
    } else if (action === 'repair' && foxPostSave.compared && foxPostSave.scene === 'workshop') {
        if (target.dataset.letter === 'o') { foxPostSave.repaired = true; foxPostSetMessage(''); }
        else if (target.dataset.letter === 'a') {
            foxPostRepairChoice = 'a'; foxPostSetMessage('С А получилось «нам — низкий». Для слова «ном — книга» нужна О в середине. Сравни с чертежом.');
        }
    } else if (action === 'register-letter' && foxPostSave.parcel && foxPostSave.repaired) {
        foxPostFocus = Number(target.dataset.index);
        if (foxPostFocus === 1) { foxPostSave.register = true; foxPostSetMessage(''); }
        else foxPostSetMessage('Это О в начале. Н завершает слово «он» — посмотри в самый низ записи.');
    } else if (action === 'deliver' && foxPostSave.register && foxPostSave.repaired && foxPostSave.parcel) {
        foxPostSave.delivered = true; foxPostSave.panel = 'ending'; foxPostSetMessage('');
    } else if (action === 'postcard' && foxPostSave.compared) {
        foxPostSave.scene = 'station'; foxPostSave.panel = 'postcard'; foxPostFocus = 0; foxPostBookOpen = false; foxPostSetMessage('');
    } else if (action === 'bonus-letter') {
        foxPostFocus = Number(target.dataset.index);
        if ([2, 4].includes(foxPostFocus)) {
            if (!foxPostSave.bonus.includes(foxPostFocus)) foxPostSave.bonus.push(foxPostFocus);
            foxPostSetMessage(foxPostSave.bonus.length === 2 ? 'Обе Н найдены! Печать перевала теперь в твоей книжке.' : 'Да, это Н. Найди ещё одну Н в этом же слове.', 'success');
        } else foxPostSetMessage('Это ' + nameOf(visibleChars(foxPostWord('manan'))[foxPostFocus].ch) + '. Посмотри на подписи и найди обе Н.');
    } else if (action === 'reset-prompt') foxPostResetOpen = true;
    else if (action === 'reset-cancel') foxPostResetOpen = false;
    else if (action === 'reset') {
        foxPostSave = foxPostEmpty(); foxPostResetOpen = false; foxPostFocus = 0; foxPostBookOpen = false; foxPostSetMessage('');
    }
    foxPostPersist();
}
const foxPostBeforeContent = siteContent;
siteContent = function () { return state.section === 'fox-post' ? foxPostScreen() : foxPostBeforeContent(); };
const foxPostBeforeHome = homeScreen;
homeScreen = function () { return foxPostBeforeHome().replace('<nav class="mg-home-grid', foxPostCard() + '<nav class="mg-home-grid'); };
const foxPostBeforeGames = newGamesScreen;
newGamesScreen = function () { return foxPostCard() + foxPostBeforeGames(); };
const foxPostBeforeHeader = siteHeader;
siteHeader = function () {
    return foxPostBeforeHeader().replace('<a id="nu-games"', '<a id="nu-fox-post" href="#fox-post"' + (state.section === 'fox-post' ? ' aria-current="page"' : '')
        + '>Лисья почта</a><a id="nu-games"');
};
const foxPostBeforeRoute = applySiteLocation;
applySiteLocation = function () {
    if (/^#fox-post\/?$/.test(location.hash)) { foxPostOpen(); return; }
    return foxPostBeforeRoute();
};
const foxPostBeforeHash = siteHash;
siteHash = function () { return state.section === 'fox-post' ? '#fox-post' : foxPostBeforeHash(); };
const foxPostBeforeAction = nuAction;
nuAction = function (event) {
    if (state.section !== 'fox-post') return foxPostBeforeAction(event);
    let target = event.target.closest('button[data-action]');
    const hit = event.target.closest('[data-letter-index]');
    if (hit) {
        const word = hit.closest('[data-fox-word]')?.dataset.foxWord;
        if (!word || !foxPostWords[word]) return false;
        const index = visibleChars(foxPostWord(word)).findIndex(char => char.index === Number(hit.dataset.letterIndex));
        if (index < 0) return true;
        const action = foxPostBookOpen ? 'book-letter' : foxPostSave.panel === 'postcard' ? 'bonus-letter'
            : foxPostSave.scene === 'library' && !foxPostSave.register ? 'register-letter' : 'letter';
        target = {dataset: {word, index: String(index), action: 'fox-' + action}};
        foxPostHandle(action, target);
    } else {
        if (!target || target.disabled || !target.dataset.action.startsWith('fox-')) return foxPostBeforeAction(event);
        foxPostHandle(target.dataset.action.slice(4), target);
    }
    const action = target?.dataset.action || '';
    const activeIndex = target?.dataset.index;
    render();
    const focus = action.includes('letter') && activeIndex !== undefined
        ? APP.querySelector('[data-action="' + action + '"][data-word="' + target.dataset.word + '"][data-index="' + activeIndex + '"]')
        : APP.querySelector('.fp-task .fp-button:not([disabled]), .fp-book .fp-button');
    focus?.focus({preventScroll: true});
    return true;
};

