const foxPostStyle=document.createElement("style");foxPostStyle.id="fox-post-styles";foxPostStyle.textContent="#app .site-main:has(.fp-immersive){max-width:1440px;padding:4px 18px 18px;margin:0 auto}\n#app .fp-game{--fp-ink:#253e50;--fp-paper:#fff7df;--fp-wood:#b7773f;font:16px/1.5 Arial,Helvetica,sans-serif;color:var(--fp-ink)}\n#app .fp-game *,#app .fp-entry *{box-sizing:border-box}\n#app .fp-stage{position:relative;width:100%;height:clamp(650px,calc(100svh - 100px),850px);overflow:hidden;border-radius:20px;background:#728d6c;isolation:isolate;box-shadow:0 5px 28px #31412b29}\n#app .fp-backdrop{position:absolute;inset:0;z-index:-2;background-image:linear-gradient(180deg,#18324120 0%,transparent 25%,transparent 65%,#13282050 100%),var(--fp-world);background-size:auto 165%;background-repeat:no-repeat;transition:background-position .7s,filter .25s}\n#app .fp-scene-station .fp-backdrop{background-position:8% 52%}\n#app .fp-scene-workshop .fp-backdrop{background-position:52% 52%}\n#app .fp-scene-library .fp-backdrop{background-position:100% 52%}\n#app .fp-hud{position:absolute;top:14px;left:20px;right:20px;z-index:15;display:flex;justify-content:space-between;gap:20px;align-items:flex-start;pointer-events:none}\n#app .fp-hud>div{padding:9px 17px;background:#fff7e6ed;border:1px solid #e0c69e;border-radius:10px;box-shadow:0 2px 9px #2237291f}\n#app .fp-hud span{font-size:12px;color:#775632}\n#app .fp-hud h1{font:600 24px/1.2 Arial,Helvetica,sans-serif;letter-spacing:-.025em;margin:3px 0 0;color:#23455e}\n#app .fp-hud button{pointer-events:auto}\n#app .fp-menu-toggle{display:grid;place-items:center;width:46px;height:46px;border:1px solid #ceb28a;border-radius:50%;background:#fff7e6ed;color:#23455e;font:22px Arial;cursor:pointer}\n#app .fp-current-errand{position:absolute;top:98px;left:22px;z-index:3;margin:0!important;padding:8px 13px;max-width:300px;border-radius:8px;background:#fff8e7e8;color:#4e573d;font-size:14px;line-height:1.45!important;box-shadow:0 2px 10px #17352315;pointer-events:none}\n#app .fp-button{display:inline-flex;align-items:center;justify-content:center;gap:7px;min-height:44px;padding:10px 16px;background:#fff7e6;border:1px solid #b99565;border-radius:8px;color:#23455e;font:400 15px/1.35 Arial,Helvetica,sans-serif;text-align:center;cursor:pointer;box-shadow:0 2px 0 #8b663a19}\n#app .fp-button:hover{background:#f2dfb8}\n#app .fp-button.fp-primary{background:#23455e;border-color:#23455e;color:#fff9eb}\n#app .fp-button:disabled{opacity:.5;cursor:default}\n#app .fp-game button:focus-visible,#app .fp-game a:focus-visible,#app .fp-entry:focus-visible{outline:3px solid #f3d262;outline-offset:3px}\n#app .fp-ground{position:absolute;left:0;right:0;top:48%;bottom:22%;z-index:0;border:0;background:transparent;cursor:crosshair}\n#app .fp-sprite{display:block;width:100%;height:100%;background-size:200% 200%;background-repeat:no-repeat;filter:drop-shadow(0 5px 2px #222d201f)}\n#app .fp-sprite-fox{background-position:0 0}\n#app .fp-sprite-master{background-position:100% 0}\n#app .fp-sprite-owl{background-position:0 100%}\n#app .fp-sprite-firefly{background-position:100% 100%}\n#app .fp-actor{position:absolute;z-index:5;margin:0;width:190px;height:190px;transform:translateX(-50%);border:0;padding:0;background:none;color:#23455e}\n#app button.fp-actor{cursor:pointer}\n#app .fp-actor-fox{width:185px;height:185px;pointer-events:none}\n#app .fp-actor-master{width:205px;height:205px}\n#app .fp-actor-owl{width:190px;height:190px}\n#app .fp-character-name{position:absolute;bottom:-13px;left:50%;transform:translateX(-50%);padding:4px 9px;border-radius:6px;white-space:nowrap;background:#fff8e9eb;box-shadow:0 2px 5px #132d2424;font-size:12px;line-height:1.4}\n#app .fp-firefly{position:absolute;z-index:17;width:80px;height:80px;padding:0;transform:translate(-50%,-50%);border:0;background:transparent;cursor:pointer;border-radius:50%}\n#app .fp-firefly .fp-sprite{position:relative;z-index:1;animation:fp-firefly-bob 2.8s ease-in-out infinite;filter:drop-shadow(0 0 9px #f9df5ea8)}\n#app .fp-firefly-halo{position:absolute;inset:14px;border-radius:50%;background:#ffdc65;opacity:.35;filter:blur(13px);animation:fp-glow-breathe 2.6s ease-in-out infinite}\n#app .fp-firefly-near-word{width:62px;height:62px}\n@keyframes fp-firefly-bob{0%,100%{translate:0 -3px;rotate:-3deg}50%{translate:0 4px;rotate:3deg}}\n@keyframes fp-glow-breathe{0%,100%{opacity:.22;scale:.8}50%{opacity:.45;scale:1.16}}\n#app .fp-props{position:absolute;inset:0;pointer-events:none;z-index:4}\n#app .fp-props button{pointer-events:auto}\n#app .fp-prop{position:absolute;cursor:pointer;border:0;padding:0;font:14px/1.4 Arial,Helvetica,sans-serif;color:#3c382a}\n#app .fp-prop-caption{position:absolute;left:50%;bottom:-29px;transform:translateX(-50%);padding:5px 9px;background:#fff7e9eb;border:1px solid #c5a778;border-radius:6px;font-size:12px;line-height:1.3;white-space:nowrap;box-shadow:0 2px 5px #3a392025}\n#app .fp-envelope{width:112px;height:76px;background:#fff3d4;border:2px solid #c4a06b;border-radius:4px;box-shadow:0 7px 11px #252b2a4d}\n#app .fp-envelope-on-scene{left:40%;top:42%;rotate:-8deg;animation:fp-envelope-invite 3s ease-in-out infinite}\n#app .fp-envelope-fold{position:absolute;inset:0;overflow:hidden}\n#app .fp-envelope-fold:after{content:\"\";position:absolute;width:82px;height:82px;left:13px;top:-52px;rotate:45deg;background:#f5e2b7;border:1px solid #c4a06b}\n#app .fp-wax-seal{position:absolute;width:24px;height:24px;border-radius:50%;top:29px;left:44px;background:#ae5038;box-shadow:inset 0 0 0 3px #8f3c2b,inset 0 0 0 5px #c77450}\n@keyframes fp-envelope-invite{0%,80%,100%{translate:0 0}90%{translate:0 -5px}}\n#app .fp-crates{position:absolute;left:39%;top:37%;width:36%;height:190px;display:flex;align-items:flex-end;justify-content:center;gap:26px}\n#app .fp-crate{position:relative;width:128px;height:106px;flex-shrink:0;border:2px solid #865626;background:repeating-linear-gradient(0deg,#ac783f 0,#ac783f 22px,#8b5b2e 23px,#bc8a4b 25px);border-radius:5px;box-shadow:0 10px 14px #18302045;cursor:pointer;padding:0;pointer-events:auto;color:#23455e}\n#app .fp-crate-1{translate:0 -24px}\n#app .fp-crate-board{position:absolute;inset:0;background:linear-gradient(90deg,transparent 0 43%,#cfad72 44% 54%,transparent 55%);border-radius:3px}\n#app .fp-hanging-tag{position:absolute;left:41px;bottom:18px;min-width:45px;width:53px;height:118px;padding:5px 1px;background:#fff7df;border:1px solid #c8ac76;border-radius:2px;box-shadow:2px 4px 4px #38231540;rotate:3deg}\n#app .fp-hanging-tag:before{content:\"\";position:absolute;top:-18px;left:50%;height:20px;width:1px;background:#8c6742}\n#app .fp-crate-empty{opacity:.7}\n#app .fp-crate .fp-prop-caption{font-size:12px}\n#app .fp-hidden-postcard{position:absolute;left:61%;top:64%;width:66px;height:48px;border:1px solid #c6ac79;border-radius:3px;background:#f2e2bd;rotate:-12deg;box-shadow:0 3px 7px #263a2f3d;cursor:pointer}\n#app .fp-hidden-postcard>span{position:absolute;inset:7px;border:1px dashed #967746}\n#app .fp-hidden-postcard small{position:absolute;top:52px;left:-22px;width:110px;font-size:12px;color:#fff9e5;text-shadow:0 1px 3px #183222}\n#app .fp-workbench-sign{left:40%;top:33%;width:123px;height:211px;rotate:-5deg;border:6px solid #9d622c;border-radius:6px;background:#dfba7e;box-shadow:0 8px 15px #243b2f50}\n#app .fp-workbench-sign .fp-word{height:100%}\n#app .fp-workbench-sign svg>rect[fill=\"#FFFCF5\"],#app .fp-sign-slot svg>rect[fill=\"#FFFCF5\"]{fill:#dfba7e}\n#app .fp-library-door{left:48%;top:28%;width:122px;height:220px;border:6px solid #a05c29;border-radius:40px 40px 3px 3px;background:repeating-linear-gradient(90deg,#24616e 0,#24616e 20px,#194853 21px,#3c7b81 23px);box-shadow:inset 0 0 0 2px #c18542,0 6px 20px #203c2e55}\n#app .fp-door-knob{position:absolute;right:12px;top:53%;width:16px;height:16px;border-radius:50%;background:#e1b860;border:2px solid #a57529}\n#app .fp-door-open{background:#4e3623;border-color:#b7793e;box-shadow:inset 0 0 24px #eab85b80,0 3px 10px #1c322b38}\n#app .fp-door-open:before{content:\"\";position:absolute;inset:9px;background:repeating-linear-gradient(0deg,transparent 0 22px,#b4824b 23px 25px);opacity:.6}\n#app .fp-door-open .fp-door-knob{display:none}\n#app .fp-ledger-on-scene{top:52%;left:37%;width:85px;height:65px;background:#753d2d;border:3px solid #c79751;border-radius:4px;rotate:-7deg;box-shadow:0 5px 8px #1a342e4d;color:#f9e0ac}\n#app .fp-object-icon{display:block;width:52px;height:52px;flex-shrink:0}\n#app .fp-ledger-on-scene .fp-object-icon{margin:0 auto;width:65px;height:57px}\n#app .fp-windchime{position:absolute;left:15%;top:20%;width:72px;height:100px;transform-origin:50% 0;animation:fp-chime 4s ease-in-out infinite;color:#d5ae54;filter:drop-shadow(0 2px 2px #35422f);pointer-events:none}\n#app .fp-windchime svg{width:100%;height:100%}\n@keyframes fp-chime{0%,100%{rotate:-8deg}50%{rotate:8deg}}\n#app .fp-paths{position:absolute;right:14px;top:95px;z-index:5;display:flex;flex-direction:column;gap:8px}\n#app .fp-paths>.fp-button{min-height:42px;background:#684629e8;border:2px solid #b9935d;color:#fff7dc;box-shadow:0 3px 5px #1732272e;font-size:14px;padding:8px 15px}\n#app .fp-inventory{position:absolute;bottom:172px;left:14px;right:14px;z-index:9;display:flex;align-items:flex-end;gap:7px;pointer-events:none}\n#app .fp-item{display:flex;flex-direction:column;align-items:center;gap:2px;width:67px;min-height:72px;flex-shrink:0;padding:5px 3px;background:#fff6dfed;border:1px solid #bd9a64;border-radius:9px;color:#79562b;font:12px/1.35 Arial,Helvetica,sans-serif;cursor:pointer;pointer-events:auto;box-shadow:0 3px 9px #18332929}\n#app .fp-item .fp-object-icon{width:38px;height:38px}\n#app .fp-item-selected{outline:3px solid #f3d567;outline-offset:1px;background:#fff1b5}\n#app [data-fp-drag]{touch-action:none;user-select:none}\n#app .fp-dialogue{position:absolute;z-index:20;left:16px;right:16px;bottom:14px;min-height:135px;display:grid;grid-template-columns:105px minmax(0,1fr);gap:5px 16px;padding:16px 20px 15px 8px;background:#fff7e9f7;border:2px solid #c9a575;border-radius:14px;box-shadow:0 6px 25px #182d2940}\n#app .fp-dialogue-portrait{width:106px;height:106px;align-self:center}\n#app .fp-dialogue-body{align-self:center;min-width:0}\n#app .fp-dialogue-name{font:600 14px/1.3 Arial,Helvetica,sans-serif;color:#85572e;letter-spacing:.02em}\n#app .fp-game .fp-dialogue p{margin:5px 0 0;font:400 17px/1.5 Arial,Helvetica,sans-serif;color:#283e46}\n#app .fp-dialogue .fp-button{margin-top:10px;min-height:42px;font-size:14px;padding:8px 15px}\n#app .fp-object-view{position:absolute;top:106px;left:50%;z-index:12;width:min(430px,calc(100% - 40px));max-height:calc(100% - 285px);min-height:315px;transform:translateX(-50%);padding:0 20px 15px;background:#fff5d9;border:1px solid #bea06b;border-radius:4px 9px 7px 3px;box-shadow:0 10px 35px #172f2959,inset 0 0 35px #c49a4a17}\n#app .fp-object-heading{height:47px;display:flex;justify-content:space-between;gap:10px;align-items:center;border-bottom:1px solid #d4bb8e;margin-bottom:7px;font-size:14px;color:#775734}\n#app .fp-object-heading>.fp-button{min-height:40px;width:40px;padding:0;border:0;background:transparent;box-shadow:none;font-size:25px;flex-shrink:0}\n#app .fp-word{display:flex;align-items:center;justify-content:center;min-width:0;padding:0}\n#app .fp-word>.connected-word{display:block;max-height:222px!important;max-width:100%;min-height:70px}\n#app .fp-word .letter-hit{cursor:pointer}\n#app .fp-read-object{position:relative;max-width:315px;margin:0 auto}\n#app .fp-ink-and-margin{position:relative;display:grid;grid-template-columns:minmax(90px,1fr) 58px;align-items:center;min-height:220px;max-width:210px;margin:0 auto}\n#app .fp-margin-letters{display:flex;flex-direction:column;align-items:center;justify-content:space-around;gap:0;align-self:stretch;padding:0 0 4px}\n#app .fp-margin-letters>button{display:block;width:44px;min-height:44px;padding:4px 0;border:0;background:transparent;color:#293d44;font:500 23px/1 Arial,Helvetica,sans-serif;cursor:pointer;border-radius:50%}\n#app .fp-margin-letters>button[aria-pressed=\"true\"]{box-shadow:inset 0 0 0 1px #a78a52;background:#e8d9b34f}\n#app .fp-object-modern{text-align:center;margin:0 auto}\n#app .fp-game .fp-modern{display:flex;justify-content:center;gap:2px;margin:1px 0 0;font:500 27px/1.3 Arial,Helvetica,sans-serif;letter-spacing:.03em}\n#app .fp-modern>span{padding:1px 3px;border:1px solid transparent;border-radius:4px}\n#app .fp-modern .fp-linked{border-color:#9e8450;background:#ead7a84f}\n#app .fp-game .fp-meaning{font:400 14px/1.45 Arial,Helvetica,sans-serif;margin:1px 0 4px;color:#786346}\n#app .fp-object-parcel>.fp-button{display:flex;margin:9px auto 0}\n#app .fp-letter-paper{position:relative;min-height:289px}\n#app .fp-game .fp-handwritten-title{font-size:15px;margin:2px 0 10px;text-align:center;color:#806032}\n#app .fp-letter-columns{display:grid;grid-template-columns:1fr 1fr;gap:32px;padding:18px 36px 12px 65px;min-height:238px;align-items:center}\n#app .fp-letter-columns .fp-word>.connected-word{max-height:187px!important}\n#app .fp-light-trail{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;overflow:visible}\n#app .fp-light-trail path{fill:none;stroke:#c89532;stroke-width:.7;stroke-dasharray:1.5 2;opacity:.65}\n#app .fp-two-tags{display:grid;grid-template-columns:1fr 1fr;gap:18px;max-width:350px;margin:7px auto}\n#app .fp-tag-on-string{position:relative;padding:10px 8px 7px;background:#fffaf0;border:1px solid #d6bd8c;border-radius:3px;box-shadow:0 3px 7px #79573014;text-align:center}\n#app .fp-tag-on-string:before{content:\"\";position:absolute;top:3px;left:50%;width:4px;height:4px;border:1px solid #a78a57;border-radius:50%}\n#app .fp-tag-on-string .fp-word{min-height:177px}\n#app .fp-tag-on-string .fp-word>.connected-word{max-height:170px!important}\n#app .fp-tag-on-string .fp-button{font-size:12px;padding:5px;min-height:44px;width:100%}\n#app .fp-sign-on-table{display:grid;grid-template-columns:90px minmax(0,1fr) 75px;gap:14px;min-height:290px;align-items:center}\n#app .fp-small-blueprint{align-self:start;margin-top:25px;padding:8px;border:1px dashed #8f9c97;background:#e5ece5;color:#596965;font-size:12px;text-align:center}\n#app .fp-small-blueprint .fp-word{margin-top:6px}\n#app .fp-small-blueprint .fp-word>.connected-word{max-height:145px!important}\n#app .fp-sign-slot{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:266px;background:#dfba7e;border:6px solid #a46c32;border-radius:5px;color:#654527;box-shadow:0 4px 7px #362b1c35;cursor:pointer;padding:10px 2px;font:12px/1.4 Arial}\n#app .fp-sign-slot .fp-word{min-height:200px}\n#app .fp-sign-slot .fp-word>.connected-word{max-height:192px!important}\n#app .fp-wood-pieces{display:flex;flex-direction:column;gap:17px}\n#app .fp-wood-piece{position:relative;display:grid;place-items:center;width:72px;height:100px;padding:7px 5px 17px;border:3px solid #a16a31;background:#dfba7e;box-shadow:2px 4px 3px #76532926;border-radius:4px;cursor:grab;rotate:4deg}\n#app .fp-wood-piece:nth-child(2){rotate:-4deg}\n#app .fp-wood-piece>svg{display:block;max-width:100%;height:65px!important;max-height:65px;overflow:hidden}\n#app .fp-wood-piece>span{position:absolute;bottom:2px;font:12px/1.2 Arial;color:#74512c}\n#app .fp-piece-selected{outline:3px solid #f4d765;outline-offset:3px}\n#app .fp-ledger-page{position:relative;background:repeating-linear-gradient(0deg,transparent 0 29px,#ceb98f55 30px,transparent 31px);border-left:2px solid #c66a5740;padding:0 15px}\n#app .fp-ink-check{position:absolute;bottom:23px;right:15px;font:bold 37px/1 Arial;color:#2a5f46;rotate:-9deg}\n#app .fp-book-tabs{display:flex;gap:6px;flex-wrap:wrap;justify-content:center;margin:2px 0 9px}\n#app .fp-book-tabs>.fp-button{min-height:36px;padding:4px 11px;font-size:14px;background:#efdcaf}\n#app .fp-book-stamps{position:absolute;right:9px;bottom:8px;display:flex;gap:5px;color:#9f4938;rotate:-8deg;pointer-events:none}\n#app .fp-book-stamps .fp-object-icon{width:48px;height:48px}\n#app .fp-reward{position:absolute;z-index:25;left:50%;top:117px;width:min(365px,calc(100% - 42px));transform:translateX(-50%);padding:23px;text-align:center;background:#fff8e6;border:2px solid #b99554;border-radius:14px;box-shadow:0 6px 35px #1b342966}\n#app .fp-reward-ribbon{font-size:12px;color:#97723d;text-transform:uppercase;letter-spacing:.05em}\n#app .fp-reward-object{display:flex;align-items:center;justify-content:center;margin:16px auto 10px;width:92px;height:92px;background:radial-gradient(circle,#f8e09b,transparent 70%);color:#9d763a}\n#app .fp-reward-object .fp-object-icon{width:85px;height:85px}\n#app .fp-reward h2{font:500 23px/1.25 Arial;margin:8px 0 10px;color:#23455e}\n#app .fp-game .fp-reward p{font:400 15px/1.55 Arial;margin:0 0 17px;color:#625740}\n#app .fp-settings{position:absolute;z-index:28;right:15px;top:73px;display:flex;flex-direction:column;gap:9px;padding:16px;background:#fff7e7;border:1px solid #b99565;border-radius:11px;box-shadow:0 4px 18px #243d314d}\n#app .fp-settings a{padding:10px;color:#23455e;text-decoration:underline;text-underline-offset:4px;font-size:14px;min-height:44px}\n#app .fp-save-warning{position:absolute;bottom:0;left:0;right:0;z-index:35;margin:0!important;padding:4px 10px;background:#7f3d2e;color:#fff4df;font-size:12px;text-align:center}\n#app .fp-reading-active .fp-backdrop{filter:brightness(.83) saturate(.85)}\n#app .fp-reading-active .fp-current-errand{display:none}\n#app .fp-reading-active .fp-paths{opacity:.7}\n.fp-drag-shadow{position:fixed!important;z-index:999999!important;width:100px!important;height:110px!important;transform:translate(-50%,-50%) rotate(-4deg)!important;pointer-events:none!important;opacity:.9;background:#dfba7e;border:3px solid #a16a31;border-radius:6px;box-shadow:0 10px 25px #263f2c59;display:grid;place-items:center;overflow:hidden;padding:8px;color:#79562b}\n.fp-drag-shadow>svg{max-height:80px!important;width:70px!important}\n#app a.fp-entry{display:grid;grid-template-columns:235px minmax(0,1fr);margin:0 0 28px;border:1px solid #c5af8b;border-radius:14px;overflow:hidden;background:#fff9ea;text-decoration:none;color:#23455e}\n#app .fp-entry-art{position:relative;display:block;min-height:220px;background-size:cover;background-position:22% 50%}\n#app .fp-entry-art>.fp-sprite{position:absolute;width:180px;height:180px;left:25px;bottom:0}\n#app .fp-entry-copy{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding:24px 28px;gap:10px}\n#app .fp-entry-copy>span:first-child{font:12px/1.4 Arial;text-transform:uppercase;letter-spacing:.06em;color:#8b6541}\n#app .fp-entry-copy>strong{font:500 28px/1.2 Arial;letter-spacing:-.02em}\n#app .fp-entry-copy>span:not(:first-child){font:15px/1.6 Arial;color:#5e624f;max-width:60ch}\n#app .fp-entry-copy>b{font:500 14px/1.4 Arial;color:#975632}\n@media(max-width:850px){#app .fp-stage{min-height:690px}#app .fp-current-errand{max-width:240px;top:93px}#app .fp-actor-fox{width:155px;height:155px}#app .fp-actor-master{width:180px;height:180px}#app .fp-actor-owl{width:165px;height:165px}#app .fp-dialogue{grid-template-columns:80px minmax(0,1fr);min-height:150px;padding:12px 14px 12px 4px;gap:8px}#app .fp-dialogue-portrait{width:84px;height:84px}#app .fp-game .fp-dialogue p{font-size:16px}#app .fp-inventory{bottom:188px}#app .fp-crates{left:35%;width:48%;gap:15px}#app .fp-crate{width:106px}#app .fp-paths>.fp-button{padding:7px 12px}#app .fp-object-view{top:101px;max-height:calc(100% - 300px)}}\n@media(max-width:620px){#app .site-main:has(.fp-immersive){padding:0 5px 10px}#app .fp-stage{border-radius:13px;min-height:755px;height:calc(100svh - 64px)}#app .fp-hud{top:9px;left:11px;right:11px}#app .fp-hud>div{padding:7px 11px}#app .fp-hud h1{font-size:20px}#app .fp-hud span{font-size:12px}#app .fp-menu-toggle{width:42px;height:42px}#app .fp-current-errand{top:88px;left:12px;max-width:208px;font-size:14px;padding:7px 10px}#app .fp-paths{right:9px;top:92px;gap:6px}#app .fp-paths>.fp-button{font-size:12px;min-height:40px;padding:7px 8px;max-width:116px}#app .fp-backdrop{background-size:auto 145%}#app .fp-scene-station .fp-backdrop{background-position:18% 48%}#app .fp-scene-workshop .fp-backdrop{background-position:52% 48%}#app .fp-scene-library .fp-backdrop{background-position:95% 48%}#app .fp-actor-fox{width:137px;height:137px;bottom:31%!important}#app .fp-actor-master{width:155px;height:155px;bottom:33%!important;left:77%!important}#app .fp-actor-owl{width:145px;height:145px;bottom:34%!important;left:78%!important}#app .fp-character-name{font-size:11px;white-space:normal;width:110px;bottom:-17px}#app .fp-envelope-on-scene{left:42%;top:35%;width:100px;height:70px}#app .fp-envelope-fold:after{left:7px;top:-55px}#app .fp-wax-seal{left:38px;top:25px}#app .fp-prop-caption{font-size:11px}#app .fp-crates{left:34%;top:38%;width:60%;gap:10px;height:156px}#app .fp-crate{width:82px;height:86px}#app .fp-hanging-tag{width:44px;min-width:44px;left:22px;height:105px}#app .fp-crate .fp-prop-caption{font-size:10px;max-width:100px;white-space:normal}#app .fp-hidden-postcard{left:70%;top:59%;width:49px;height:40px}#app .fp-hidden-postcard small{left:-18px;top:43px;font-size:10px;width:90px}#app .fp-inventory{left:9px;right:9px;bottom:206px;gap:4px}#app .fp-item{width:52px;min-height:65px;font-size:11px;border-radius:7px}#app .fp-item .fp-object-icon{width:32px;height:32px}#app .fp-dialogue{left:8px;right:8px;bottom:9px;min-height:177px;padding:12px 12px 12px 3px;grid-template-columns:64px minmax(0,1fr);gap:4px;max-height:207px;overflow:auto}#app .fp-dialogue-portrait{width:65px;height:65px;align-self:start;margin-top:10px}#app .fp-dialogue-name{font-size:13px}#app .fp-game .fp-dialogue p{font-size:15px;line-height:1.45}#app .fp-dialogue .fp-button{font-size:13px;margin-top:8px;padding:8px 11px}#app .fp-object-view{top:132px;width:calc(100% - 25px);min-height:315px;max-height:calc(100% - 361px);padding:0 12px 12px}#app .fp-object-heading{font-size:13px;height:44px;margin-bottom:4px}#app .fp-read-object{max-width:280px}#app .fp-ink-and-margin{min-height:205px;max-width:190px;grid-template-columns:1fr 48px}#app .fp-word>.connected-word{max-height:208px!important}#app .fp-margin-letters>button{font-size:22px;min-height:40px;width:42px}#app .fp-object-modern .fp-modern{font-size:25px}#app .fp-firefly{width:69px;height:69px}#app .fp-firefly-near-word{width:55px;height:55px}#app .fp-letter-paper{min-height:279px}#app .fp-letter-columns{gap:18px;padding-left:47px;padding-right:20px;min-height:223px}#app .fp-sign-on-table{grid-template-columns:66px minmax(0,1fr) 61px;gap:9px;min-height:280px}#app .fp-small-blueprint{padding:6px;font-size:11px}#app .fp-wood-piece{width:59px;height:93px;padding:6px 3px 16px}#app .fp-sign-slot{min-height:252px;border-width:4px;padding:7px 2px;font-size:11px}#app .fp-sign-slot .fp-word{min-height:192px}#app .fp-sign-slot .fp-word>.connected-word{max-height:184px!important}#app .fp-workbench-sign{left:37%;top:30%;width:97px;height:175px}#app .fp-library-door{left:39%;top:29%;width:91px;height:182px;border-width:5px}#app .fp-ledger-on-scene{left:31%;top:50%;width:66px;height:56px}#app .fp-ledger-on-scene .fp-object-icon{width:53px;height:47px}#app .fp-reward{top:137px;padding:17px 18px;width:calc(100% - 38px)}#app .fp-reward h2{font-size:22px}#app .fp-game .fp-reward p{font-size:15px}#app .fp-two-tags{gap:11px}#app .fp-tag-on-string{padding:8px 5px}#app .fp-tag-on-string .fp-button{font-size:11px;padding:5px;min-height:43px}#app .fp-tag-on-string .fp-word{min-height:172px}#app .fp-windchime{left:13%;top:22%;width:52px;height:73px}#app .fp-book-tabs{gap:4px}#app .fp-book-tabs>.fp-button{font-size:13px;min-height:36px;padding:4px 8px}#app a.fp-entry{grid-template-columns:1fr}#app .fp-entry-art{min-height:190px;background-position:center 45%}#app .fp-entry-art>.fp-sprite{width:178px;height:178px;left:calc(50% - 89px)}#app .fp-entry-copy{padding:21px}}\n@media(prefers-reduced-motion:reduce){#app .fp-game *,#app .fp-game *:before,#app .fp-game *:after{animation:none!important;transition:none!important}}\n@media(max-width:620px){#app .fp-game .fp-dialogue p{font-size:16px;line-height:1.45}#app .fp-dialogue{max-height:225px}#app .fp-dialogue .fp-button{font-size:14px}#app .fp-paths>.fp-button{font-size:14px;min-height:44px}#app .fp-character-name,#app .fp-prop-caption,#app .fp-crate .fp-prop-caption,#app .fp-hidden-postcard small,#app .fp-item{font-size:12px}#app .fp-tag-on-string .fp-button{font-size:14px;min-height:44px}#app .fp-margin-letters>button{min-height:44px;width:44px}#app .fp-game .fp-meaning{font-size:16px}#app .fp-wood-piece>span{font-size:14px}}\n";document.head.append(foxPostStyle);
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
// The chapter is played on a single illustrated stage. Reading belongs to
// envelopes, parcel tags, wooden signs and the library ledger in that stage.
const foxPostRewardInfo = {
    lantern: ['Фонарь букв', 'Огонёк дарит тебе свой фонарь. Теперь ты можешь сама подсвечивать буквы на найденных предметах.'],
    key: ['Ключ от библиотеки', 'Барсук благодарит за починенный указатель. Выбери ключ в сумке и примени его к двери библиотеки.'],
    'first-stamp': ['Печать первой доставки', 'Сова ставит в твою почтовую книжку первую печать. Книга доставлена!'],
    windchime: ['Музыка ветра', 'Подарок библиотекаря для почтовой станции. Подвеска уже ждёт тебя над крыльцом.'],
    'pass-stamp': ['Печать перевала', 'Огонёк нашёл на открытке тайную печать. Она останется в твоей почтовой книжке.'],
};
const foxPostOldRead = foxPostRead;
foxPostRead = function () {
    const save = foxPostOldRead();
    let raw = null;
    try { raw = JSON.parse(localStorage.getItem(foxPostKey)); } catch {}
    save.rewards = [...new Set((Array.isArray(raw?.rewards) ? raw.rewards : []).filter(id => Object.hasOwn(foxPostRewardInfo, id)))];
    save.doorUnlocked = raw?.doorUnlocked === true || save.delivered;
    if (!raw?.immersive) {
        if (save.learned.length === 3) save.rewards.push('lantern');
        if (save.repaired) save.rewards.push('key');
        if (save.delivered) save.rewards.push('first-stamp', 'windchime');
        if (save.bonus.length === 2) save.rewards.push('pass-stamp');
    }
    save.rewards = [...new Set(save.rewards)];
    save.immersive = true;
    return save;
};
foxPostSave = foxPostRead();
let foxPostWorld = {view: null, word: 'nom', selected: null, piece: null, reward: null,
    speaker: 'firefly', speech: '', foxX: 18, help: false, settings: false, bookWord: 'nom'};
let foxPostDrag = null;
let foxPostIgnoreClickUntil = 0;
const foxPostActorNames = {fox: 'Лиса-почтальон', firefly: 'Огонёк', master: 'Барсук-мастер', owl: 'Сова-библиотекарь'};
function foxPostOwn(id) { return foxPostSave.rewards.includes(id); }
function foxPostSay(speaker, speech) { foxPostWorld.speaker = speaker; foxPostWorld.speech = speech; }
function foxPostSprite(actor, extra = '') {
    return '<span class="fp-sprite fp-sprite-' + actor + ' ' + extra + '" style="background-image:url(&quot;'
        + FOX_POST_ACTORS + '&quot;)" aria-hidden="true"></span>';
}
function foxPostIcon(kind) {
    // Code-native drawings of inventory objects; glyphs always use the trainer's font.
    const drawings = {
        lantern: '<path d="M18 15c0-12 24-12 24 0M16 18h28l-3 31H19zM23 23v20m9-20v20m9-20v20M17 50h26"/><circle cx="32" cy="34" r="7" fill="#f2cf6a"/>',
        key: '<circle cx="22" cy="23" r="11"/><circle cx="22" cy="23" r="4"/><path d="m30 31 19 19m-3-3 6-6m-12 0 6-6"/>',
        parcel: '<rect x="12" y="13" width="40" height="39" rx="3" fill="#cfaa74"/><path d="M12 28h40M31 13v39"/><rect x="36" y="18" width="11" height="20" rx="1" fill="#fff7dc"/>',
        'first-stamp': '<circle cx="32" cy="32" r="23"/><circle cx="32" cy="32" r="18"/><path d="m20 32 8 8 16-18"/>',
        windchime: '<path d="M32 6v9M15 23l17-9 17 9M18 24v22m14-26v31m14-27v22M13 46h10l-2 10h-6zm14 5h10l-2 10h-6zm14-5h10l-2 10h-6z"/>',
        'pass-stamp': '<circle cx="32" cy="32" r="23"/><path d="m14 42 13-20 7 10 5-7 12 17M27 22l-2 10 7-3"/>',
        book: '<path d="M32 17c-9-5-16-5-25-2v35c9-3 16-3 25 2 9-5 16-5 25-2V15c-9-3-16-3-25 2Zm0 0v35"/>',
    };
    return '<svg class="fp-object-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" aria-hidden="true">'
        + (drawings[kind] || drawings.book) + '</svg>';
}
function foxPostGift(id) {
    if (!foxPostOwn(id)) foxPostWorld.reward = id;
}
function foxPostGoal() {
    if (foxPostSave.delivered) return !foxPostOwn('windchime') ? 'Библиотекарь приготовила тебе подарок.'
        : foxPostOwn('pass-stamp') ? 'Глава пройдена. Обе печати сохранены в почтовой книжке.' : 'Доставка завершена. На станции спрятана открытка.';
    if (foxPostSave.direction < 4) return 'Огонёк хочет показать письмо у почтовой двери.';
    if (foxPostSave.learned.length < 3 || !foxPostOwn('lantern')) return 'Рассмотри бирку вместе с Огоньком.';
    if (!foxPostSave.parcel) return 'Найди посылку с книгой на почтовой станции.';
    if (!foxPostSave.repaired || !foxPostOwn('key')) return 'Барсук просит починить указатель к книгам.';
    if (!foxPostSave.doorUnlocked) return 'Примени ключ к двери библиотеки.';
    if (!foxPostSave.register) return 'Сова показывает журнал у библиотечной двери.';
    return 'Передай книгу сове: выбери её в сумке.';
}
function foxPostDefaultSpeech() {
    const s = foxPostSave, u = foxPostWorld;
    if (u.speech) return {speaker: u.speaker, text: u.speech};
    if (u.view === 'letter') return {speaker: 'firefly', text: [
        'Я Огонёк! Начнём вверху левой колонки. Нажми на меня — я покажу дорогу по письму.',
        'Сначала идём вниз по этой колонке. Следуй за моим огоньком до самого низа.',
        'Первая колонка закончилась. Перелетаем к верху следующей колонки справа.',
        'Теперь снова вниз. Так мы прочитаем письмо в правильном порядке.',
    ][Math.min(3, s.direction)]};
    if (u.view === 'tag') return {speaker: 'firefly', text: s.learned.length < 3
        ? 'На бирке написано «ном — книга». Здесь три буквы: Н, О и М. Нажми на каждую букву в записи — я подлечу и объясню её.'
        : 'Ты познакомилась со всеми тремя буквами. Я хочу подарить тебе фонарь, чтобы ты могла читать другие бирки!'};
    if (u.view === 'compare') return {speaker: 'firefly', text: 'На одной полке «ном — книга», на другой «нам — низкий». Н и М те же, а середина разная: О или А. Нажми на середину каждой бирки.'};
    if (u.view === 'parcel') return {speaker: 'firefly', text: u.word === 'nom'
        ? 'Прочитай сверху вниз: Н, О, М. Это «ном — книга». Библиотекарь ждёт именно такую посылку.'
        : 'Здесь Н, А, М: «нам — низкий». Это пометка нижней полки. Для книги нужна О в середине.'};
    if (u.view === 'sign') return {speaker: 'master', text: 'Это указатель к книгам: «ном». Найди О в середине моего чертежа. Возьми её дощечку и вставь в пустой паз — перетащи или нажми на дощечку, а затем на паз.'};
    if (u.view === 'ledger') return {speaker: 'owl', text: 'Это журнал за этот год. В заголовке «он — год»: О сверху, Н внизу. Н в конце выглядит иначе, чем в начале «ном». Найди нижнюю Н — здесь я отмечу доставку.'};
    if (u.view === 'postcard') return {speaker: 'firefly', text: 'На открытке «манан — туман». В середине и в самом низу есть Н. Найди обе — и мы откроем спрятанную печать перевала.'};
    if (s.scene === 'station') return {speaker: 'firefly', text: !s.started
        ? 'Привет! Библиотекарь ждёт книгу. Я помогу прочитать бирки. Сначала возьми письмо у синей двери.'
        : s.delivered && foxPostOwn('pass-stamp') ? 'Первая доставка и тайна открытки разгаданы! Обе печати в твоей книжке, а музыка ветра украшает станцию. Хорошая работа, почтальон!'
        : s.delivered ? 'Книга уже у совы, первая доставка завершена! На крыльце можно увидеть подаренную музыку ветра. А под полками осталась открытка — заглянем?'
        : s.parcel ? 'Книга в твоей сумке! Барсук в мастерской знает, как попасть в библиотеку. А под посылками, кажется, прячется открытка.'
        : s.learned.length < 3 ? 'Вернись к письму: покажу, как разобрать надпись на бирке.'
        : 'Теперь посмотри на две полки. Сравним бирки, найдём книгу и положим её в сумку.'};
    if (s.scene === 'workshop') return {speaker: 'master', text: s.repaired && foxPostOwn('key')
        ? s.doorUnlocked ? 'Указатель снова цел, и библиотека открыта. Спасибо за помощь! Заходи, если захочешь ещё раз рассмотреть буквы на доске.'
            : 'Ключ уже в твоей сумке. Примени его к двери библиотеки. А указатель будет показывать дорогу к книгам!'
        : s.repaired
        ? 'Спасибо за указатель! Бери ключ. У двери библиотеки выбери его в сумке и нажми на дверь.'
        : 'Здравствуй, почтальон! Почини мой указатель к книгам — и получишь ключ от библиотеки. Нажми на доску у верстака.'};
    return {speaker: 'owl', text: s.delivered && foxPostOwn('windchime') ? 'Спасибо за первую доставку! Печать уже в твоей книжке, а музыка ветра украсила почтовую станцию. Почтальон оставил там для тебя открытку.'
        : s.delivered ? 'Ты прочитала бирку и доставила книгу! Прими почтовую печать и музыку ветра для своей станции.'
        : !s.doorUnlocked ? 'Рада тебя видеть! Ключ от двери у барсука. Если он уже у тебя, выбери его в сумке и примени к двери.'
        : !s.parcel ? 'Спасибо, что открыла дверь! Моя книга ещё на станции — на её полке написано «ном».'
        : !s.register ? 'Книга приехала! Сначала открой журнал у двери — я покажу знакомую Н на новом месте.'
        : 'В журнале всё отмечено. Выбери посылку в сумке и передай её мне.'};
}
function foxPostFly({x = 31, y = 30, action = 'npc', attrs = '', inside = false} = {}) {
    return '<button type="button" class="fp-firefly ' + (inside ? 'fp-firefly-near-word' : 'fp-firefly-idle')
        + '" style="left:' + x + '%;top:' + y + '%" data-action="fox-' + action + '" ' + attrs
        + ' aria-label="' + (action === 'direction' ? 'Следовать за Огоньком' : 'Поговорить с Огоньком') + '">'
        + '<span class="fp-firefly-halo"></span>' + foxPostSprite('firefly') + '</button>';
}
function foxPostNPC(actor, x, bottom) {
    return '<button type="button" class="fp-actor fp-actor-' + actor + '" style="left:' + x + '%;bottom:' + bottom
        + '%" data-action="fox-npc" data-actor="' + actor + '"' + (actor === 'owl' ? ' data-fp-drop="owl"' : '')
        + ' aria-label="Поговорить: ' + foxPostActorNames[actor] + '">' + foxPostSprite(actor)
        + '<span class="fp-character-name">' + foxPostActorNames[actor] + '</span></button>';
}
function foxPostSpeech() {
    const line = foxPostDefaultSpeech();
    let action = '';
    if (foxPostWorld.view === 'tag' && foxPostSave.learned.length === 3 && !foxPostOwn('lantern')) {
        action = foxPostButton('Взять фонарь у Огонька', 'show-gift', 'data-gift="lantern"');
    } else if (foxPostWorld.view === 'compare') {
        action = foxPostButton('Проверить посылки', 'finish-compare', '', true);
    } else if (foxPostSave.scene === 'workshop' && foxPostSave.repaired && !foxPostOwn('key')) {
        action = foxPostButton('Взять ключ у мастера', 'show-gift', 'data-gift="key"', true);
    } else if (foxPostSave.scene === 'library' && foxPostSave.delivered && !foxPostOwn('first-stamp')) {
        action = foxPostButton('Получить награду', 'show-gift', 'data-gift="first-stamp"', true);
    } else if (foxPostSave.scene === 'library' && foxPostSave.delivered && !foxPostOwn('windchime')) {
        action = foxPostButton('Забрать подарок для станции', 'show-gift', 'data-gift="windchime"', true);
    }
    return '<section class="fp-dialogue" aria-label="Разговор с персонажем"><div class="fp-dialogue-portrait">'
        + foxPostSprite(line.speaker) + '</div><div class="fp-dialogue-body"><strong class="fp-dialogue-name">'
        + esc(foxPostActorNames[line.speaker]) + '</strong><p role="status" aria-live="polite" aria-atomic="true">'
        + esc(line.text) + '</p>' + (foxPostWorld.reward ? '' : action) + '</div></section>';
}
function foxPostInventory() {
    const items = [
        ...(foxPostOwn('lantern') ? [['lantern', 'Фонарь']] : []),
        ['book', 'Книжка'],
        ...(foxPostSave.parcel && !foxPostSave.delivered ? [['parcel', 'Книга']] : []),
        ...(foxPostOwn('key') && !foxPostSave.doorUnlocked ? [['key', 'Ключ']] : []),
        ...(foxPostOwn('first-stamp') ? [['first-stamp', 'Печать']] : []),
        ...(foxPostOwn('pass-stamp') ? [['pass-stamp', 'Перевал']] : []),
    ];
    return '<div class="fp-inventory" role="group" aria-label="Сумка лисы">'
        + items.map(([id, label]) => '<button type="button" class="fp-item' + (foxPostWorld.selected === id ? ' fp-item-selected' : '')
            + '" data-action="fox-item" data-item="' + id + '"'
            + (['key', 'parcel'].includes(id) ? ' data-fp-drag="' + id + '"' : '')
            + ' aria-label="' + label + ' в сумке" aria-pressed="' + (id === 'lantern' ? foxPostSave.lantern : foxPostWorld.selected === id) + '">'
            + foxPostIcon(id) + '<span>' + label + '</span></button>').join('') + '</div>';
}
function foxPostEnvelope() {
    return '<button type="button" class="fp-envelope fp-prop fp-envelope-on-scene" data-action="fox-letter-open" aria-label="Взять письмо у синей двери">'
        + '<span class="fp-envelope-fold"></span><span class="fp-wax-seal"></span><span class="fp-prop-caption">Письмо Огонька</span></button>';
}
function foxPostTagInk(id, focus = -1, size = 95) {
    return foxPostSvg(id, focus, foxPostSave.lantern, -1, size);
}
function foxPostParcelsOnScene() {
    return '<div class="fp-crates">' + foxPostSave.order.map((id, i) => '<button type="button" class="fp-crate fp-crate-' + i
        + (foxPostSave.parcel && id === 'nom' ? ' fp-crate-empty' : '') + '" data-action="fox-parcel-open" data-word="' + id + '" aria-label="Рассмотреть бирку на полке ' + (i + 1) + '">'
        + '<span class="fp-crate-board"></span><span class="fp-hanging-tag">' + foxPostTagInk(id, -1, 64)
        + '</span><span class="fp-prop-caption">' + (foxPostSave.parcel && id === 'nom' ? foxPostSave.delivered ? 'Книга доставлена' : 'Книга в сумке' : 'Бирка на полке') + '</span></button>').join('') + '</div>';
}
function foxPostSceneProps() {
    const scene = foxPostSave.scene;
    if (scene === 'station') return foxPostEnvelope() + (foxPostSave.direction === 4 ? foxPostParcelsOnScene() : '')
        + (foxPostSave.parcel ? '<button type="button" class="fp-hidden-postcard" data-action="fox-postcard" aria-label="Поднять открытку под полкой"><span></span><small>Уголок открытки</small></button>' : '')
        + (foxPostOwn('windchime') ? '<div class="fp-windchime" aria-label="Подаренная совой музыка ветра">' + foxPostIcon('windchime') + '</div>' : '');
    if (scene === 'workshop') return '<button type="button" class="fp-workbench-sign fp-prop" data-action="fox-sign-open" aria-label="' + (foxPostSave.repaired ? 'Осмотреть починенный указатель мастера' : 'Осмотреть сломанный указатель мастера') + '">'
        + foxPostSvg('nom', -1, foxPostSave.lantern, foxPostSave.repaired ? -1 : 1, 78)
        + '<span class="fp-prop-caption">' + (foxPostSave.repaired ? 'Починенный указатель' : 'Сломанный указатель') + '</span></button>';
    return '<button type="button" class="fp-library-door fp-prop ' + (foxPostSave.doorUnlocked ? 'fp-door-open' : '')
        + '" data-action="fox-door" data-fp-drop="door" aria-label="' + (foxPostSave.doorUnlocked ? 'Открытая дверь библиотеки' : 'Применить ключ к двери библиотеки') + '">'
        + '<span class="fp-door-knob"></span><span class="fp-prop-caption">' + (foxPostSave.doorUnlocked ? 'Библиотека открыта' : 'Дверь заперта') + '</span></button>'
        + (foxPostSave.doorUnlocked ? '<button type="button" class="fp-ledger-on-scene fp-prop" data-action="fox-ledger-open" aria-label="Открыть библиотечный журнал">'
            + foxPostIcon('book') + '<span class="fp-prop-caption">Журнал совы</span></button>' : '');
}
function foxPostScribedLetters(id, action) {
    const chars = visibleChars(foxPostWord(id));
    return '<div class="fp-margin-letters" role="group" aria-label="Подписи букв на предмете">'
        + chars.map((c, i) => '<button type="button" data-action="fox-' + action + '" data-word="' + id + '" data-index="' + i
            + '" aria-label="Буква ' + nameOf(c.ch) + ', место ' + (i + 1) + ' сверху" aria-pressed="' + (foxPostFocus === i) + '"'
            + (foxPostSave.lantern ? ' style="color:' + colorOf(c.ch) + '"' : '') + '>' + esc(nameOf(c.ch)) + '</button>').join('') + '</div>';
}
function foxPostReadingObject(id, action) {
    const chars = visibleChars(foxPostWord(id)), n = Math.min(chars.length - 1, foxPostFocus);
    return '<div class="fp-read-object" data-reading-action="' + action + '"><div class="fp-ink-and-margin">'
        + foxPostSvg(id, n, foxPostSave.lantern, -1, 145) + foxPostScribedLetters(id, action) + '</div>'
        + '<div class="fp-object-modern">' + foxPostModern(id, n) + '</div>'
        + foxPostFly({x: 15, y: 20 + n / Math.max(1, chars.length - 1) * 48, inside: true}) + '</div>';
}
function foxPostDirectionObject() {
    const step = Math.min(3, foxPostSave.direction);
    const point = [[18, 23], [18, 75], [56, 23], [56, 75]][step];
    return '<div class="fp-letter-paper"><p class="fp-handwritten-title">Дорога по письму</p><div class="fp-letter-columns" aria-label="Две колонки монгольского письма">'
        + foxPostTagInk('nom', -1, 100) + foxPostTagInk('nam', -1, 100) + '</div>'
        + '<svg class="fp-light-trail" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M18 23V75'
        + (step >= 2 ? ' Q37 94 47 48 Q51 18 56 23' : '') + (step >= 3 ? 'V75' : '') + '" pathLength="100"/></svg>'
        + foxPostFly({x: point[0], y: point[1], action: 'direction', attrs: 'data-step="' + step + '"', inside: true}) + '</div>';
}
function foxPostPiece(letter) {
    const id = letter === 'o' ? 'nom' : 'nam', word = foxPostWord(id), old = FONT_DATA;
    FONT_DATA = CONS_DATA.font;
    let segment;
    try { segment = segments(word)[1]; } finally { FONT_DATA = old; }
    let svg = joinSvg(word, {color: foxPostSave.lantern, fontSize: 80});
    const [x, , width] = svg.match(/viewBox="([^"]+)"/)[1].split(' ').map(Number);
    const crop = [x, segment.top - 15, width, segment.bottom - segment.top + 30];
    svg = svg.replace(/viewBox="[^"]+"/, 'viewBox="' + crop.join(' ') + '"');
    const open = svg.indexOf('>') + 1, end = svg.lastIndexOf('</svg>'), clip = 'fox-post-piece-' + letter;
    svg = svg.slice(0, open) + '<defs><clipPath id="' + clip + '"><rect x="' + crop[0] + '" y="' + crop[1]
        + '" width="' + crop[2] + '" height="' + crop[3] + '"/></clipPath></defs><g clip-path="url(#' + clip + ')">'
        + svg.slice(open, end) + '</g></svg>';
    return '<button type="button" class="fp-wood-piece' + (foxPostWorld.piece === letter ? ' fp-piece-selected' : '')
        + '" data-action="fox-piece" data-letter="' + letter + '" data-fp-drag="piece-' + letter + '" aria-label="Взять дощечку ' + (letter === 'o' ? 'О' : 'А') + '">'
        + svg + '<span>' + (letter === 'o' ? 'О' : 'А') + '</span></button>';
}
function foxPostSignObject() {
    return '<div class="fp-sign-on-table"><div class="fp-small-blueprint"><span>Чертёж барсука</span>' + foxPostTagInk('nom', 1, 68) + '</div>'
        + '<button type="button" class="fp-sign-slot" data-action="fox-drop-piece" data-fp-drop="sign" aria-label="Вставить выбранную дощечку в указатель">'
        + foxPostSvg(foxPostRepairChoice === 'a' ? 'nam' : 'nom', -1, foxPostSave.lantern, foxPostRepairChoice ? -1 : 1, 115)
        + '<span>' + (foxPostRepairChoice ? 'Сравни с чертежом' : foxPostWorld.piece ? 'Вставить дощечку' : 'Пустой паз') + '</span></button>'
        + '<div class="fp-wood-pieces" aria-label="Дощечки на верстаке">' + foxPostPiece('o') + foxPostPiece('a') + '</div></div>';
}
function foxPostBookObject() {
    const available = ['nom', ...(foxPostSave.compared ? ['nam'] : []), ...(foxPostSave.doorUnlocked ? ['on'] : []), ...(foxPostSave.bonus.length ? ['manan'] : [])];
    if (!available.includes(foxPostWorld.bookWord)) foxPostWorld.bookWord = 'nom';
    return '<div class="fp-field-book"><div class="fp-book-tabs">' + available.map(id => foxPostButton(esc(foxPostWords[id].modern), 'book-word', 'data-word="' + id + '"')).join('') + '</div>'
        + foxPostReadingObject(foxPostWorld.bookWord, 'book-letter') + '<div class="fp-book-stamps">'
        + ['first-stamp', 'pass-stamp'].filter(foxPostOwn).map(id => '<span aria-label="' + foxPostRewardInfo[id][0] + '">' + foxPostIcon(id) + '</span>').join('') + '</div></div>';
}
function foxPostObjectView() {
    const u = foxPostWorld;
    if (!u.view) return '';
    let title = '', inside = '';
    if (u.view === 'letter') {title = 'Письмо Огонька'; inside = foxPostDirectionObject();}
    if (u.view === 'tag') {title = 'Бирка для первой доставки'; inside = foxPostReadingObject('nom', 'letter');}
    if (u.view === 'compare') {title = 'Две бирки на соседних полках'; inside = '<div class="fp-two-tags">'
        + ['nom', 'nam'].map(id => '<div class="fp-tag-on-string" data-reading-action="compare-letter">' + foxPostTagInk(id, 1, 105)
            + foxPostModern(id, 1) + foxPostButton('Подсветить середину', 'compare-letter', 'data-word="' + id + '" data-index="1"') + '</div>').join('') + '</div>';}
    if (u.view === 'parcel') {title = 'Бирка на полке'; inside = foxPostReadingObject(u.word, 'parcel-letter')
        + foxPostButton('Положить посылку в сумку', 'parcel', 'data-word="' + u.word + '"', true);}
    if (u.view === 'sign') {title = 'Верстак барсука'; inside = foxPostSignObject();}
    if (u.view === 'ledger') {title = 'Библиотечный журнал'; inside = '<div class="fp-ledger-page">' + foxPostReadingObject('on', 'register-letter')
        + (foxPostSave.register ? '<span class="fp-ink-check" aria-label="Доставка отмечена">✓</span>' : '') + '</div>';}
    if (u.view === 'postcard') {title = 'Открытка с перевала'; inside = foxPostReadingObject('manan', 'bonus-letter');}
    if (u.view === 'book') {title = 'Почтовая книжка'; inside = foxPostBookObject();}
    return '<section class="fp-object-view fp-object-' + u.view + '" aria-label="' + title + '"><div class="fp-object-heading"><span>' + title + '</span>'
        + foxPostButton('×', 'object-close', 'aria-label="Убрать предмет и вернуться в сцену"') + '</div>' + inside + '</section>';
}
function foxPostRewardView() {
    const id = foxPostWorld.reward;
    if (!id) return '';
    const [title, text] = foxPostRewardInfo[id];
    return '<section class="fp-reward" aria-label="Подарок: ' + title + '"><span class="fp-reward-ribbon">Подарок от персонажа</span><div class="fp-reward-object">'
        + foxPostIcon(id) + '</div><h2>' + title + '</h2><p>' + text + '</p>'
        + foxPostButton(id === 'windchime' ? 'Повесить на станции' : 'Забрать подарок', 'claim-gift', 'data-gift="' + id + '"', true) + '</section>';
}
function foxPostScreen() {
    const s = foxPostSave, u = foxPostWorld;
    const noObject = !u.view && !u.reward;
    const worldFly = noObject && s.scene === 'station' ? foxPostFly({x: s.started ? 43 : 30, y: 32}) : '';
    return '<section class="fp-game fp-immersive" aria-label="Лисья почта: приключение с первыми буквами"><div class="fp-stage fp-scene-' + s.scene
        + (u.view ? ' fp-reading-active' : '') + '" style="--fp-world:url(&quot;' + FOX_POST_ART + '&quot;)">'
        + '<div class="fp-backdrop" role="img" aria-label="' + foxPostScenes[s.scene] + ' в степной деревне"></div>'
        + '<header class="fp-hud"><div><span>Глава 1 · ' + foxPostScenes[s.scene] + '</span><h1>Лисья почта</h1></div>'
        + '<button type="button" class="fp-menu-toggle" data-action="fox-settings" aria-label="Открыть меню главы" aria-expanded="' + u.settings + '">☰</button></header>'
        + '<p class="fp-current-errand">' + esc(foxPostGoal()) + '</p>'
        + '<button type="button" class="fp-ground" data-action="fox-walk" aria-label="Пройти по тропинке"></button>'
        + '<figure class="fp-actor fp-actor-fox" style="left:' + u.foxX + '%;bottom:26%" aria-label="Лиса-почтальон">' + foxPostSprite('fox') + '</figure>'
        + (s.scene === 'workshop' ? foxPostNPC('master', 75, 29) : s.scene === 'library' ? foxPostNPC('owl', 77, 29) : '')
        + worldFly + '<div class="fp-props">' + foxPostSceneProps() + '</div>'
        + '<nav class="fp-paths" aria-label="Дороги между локациями">' + Object.entries(foxPostScenes).filter(([id]) => id !== s.scene)
            .map(([id, name]) => foxPostButton(name, 'scene', 'data-scene="' + id + '"')).join('') + '</nav>'
        + foxPostInventory() + foxPostObjectView() + foxPostRewardView() + foxPostSpeech()
        + (u.settings ? '<div class="fp-settings"><a id="fox-post-all-games" href="#games">Все игры тренажёра</a>'
            + foxPostButton('Начать главу заново', 'reset-prompt') + foxPostButton('Вернуться в игру', 'settings') + '</div>' : '')
        + (foxPostResetOpen ? '<section class="fp-reward fp-reset"><h2>Начать главу заново?</h2><p>Это повторит приключение лисы с первой встречи с Огоньком.</p>'
            + foxPostButton('Начать заново', 'reset', '', true) + foxPostButton('Продолжить', 'reset-cancel') + '</section>' : '')
        + (foxPostSaveError ? '<p class="fp-save-warning" role="status">Сохранение недоступно. В этой вкладке можно продолжить.</p>' : '') + '</div></section>';
}
function foxPostCard() {
    return '<a id="fox-post-entry" class="fp-entry" href="#fox-post"><span class="fp-entry-art" style="background-image:url(&quot;' + FOX_POST_ART + '&quot;)">'
        + foxPostSprite('fox') + '</span><span class="fp-entry-copy"><span>Приключение с первых букв</span><strong>Лисья почта</strong>'
        + '<span>Поговори с Огоньком, помоги мастеру и доставь книгу сове. Учись читать прямо в мире игры.</span><b>'
        + (foxPostSave.started ? 'Продолжить приключение' : 'Познакомиться с Огоньком') + '</b></span></a>';
}
function foxPostOpen() {
    arcLeave(); foxPostSave = foxPostRead();
    state.section = 'fox-post'; state.screen = 'fox-post'; state.route = '#fox-post';
    foxPostWorld = {view: null, word: 'nom', selected: null, piece: null, reward: null,
        speaker: 'firefly', speech: '', foxX: 18, help: false, settings: false, bookWord: 'nom'};
    foxPostFocus = 0; foxPostRepairChoice = ''; foxPostResetOpen = false;
}
function foxPostMove(scene) {
    if (!Object.hasOwn(foxPostScenes, scene)) return;
    foxPostSave.scene = scene; foxPostWorld.view = null; foxPostWorld.speech = ''; foxPostWorld.selected = null; foxPostWorld.reward = null;
    foxPostWorld.foxX = 18; foxPostFocus = 0;
}
function foxPostWorldAction(action, data = {}, event = null) {
    const s = foxPostSave, u = foxPostWorld;
    if (action === 'letter-open') {
        s.started = true; u.view = s.direction < 4 ? 'letter' : 'tag'; s.panel = s.direction < 4 ? 'direction' : 'letters';
        u.speech = ''; u.foxX = 30; foxPostFocus = 0;
    } else if (action === 'direction') {
        if (u.view !== 'letter' || Number(data.step) !== s.direction) return;
        s.direction++;
        if (s.direction === 4) {u.view = 'tag'; s.panel = 'letters'; foxPostFocus = 0; foxPostSay('firefly', 'Ты прошла всё письмо! Теперь посмотрим на бирку для книги. Верхняя буква — Н. Нажми на неё.');}
    } else if (['letter', 'parcel-letter', 'book-letter', 'compare-letter'].includes(action)) {
        const id = data.word || 'nom', n = Number(data.index);
        if (!foxPostWords[id] || !visibleChars(foxPostWord(id))[n]) return;
        foxPostFocus = n; u.word = id;
        foxPostSay('firefly', foxPostLetterNote(id, n));
        if (u.view === 'tag' && id === 'nom' && !s.learned.includes(n)) s.learned.push(n);
        if (s.learned.length === 3 && !foxPostOwn('lantern')) foxPostSay('firefly', 'Н, О, М — ты разобрала слово «ном — книга»! Забери мой фонарь: он поможет подсвечивать буквы на других предметах.');
    } else if (action === 'object-close') {
        u.view = null; u.speech = '';
    } else if (action === 'parcel-open') {
        u.foxX = data.word === s.order[0] ? 43 : 58;
        if (s.learned.length < 3 || !foxPostOwn('lantern')) {
            u.view = s.direction < 4 ? 'letter' : 'tag'; s.started = true; u.speech = ''; return foxPostPersist();
        }
        u.word = data.word;
        if (!s.compared) {u.view = 'compare'; foxPostFocus = 1;}
        else {u.view = 'parcel'; foxPostFocus = 0;}
        u.speech = '';
    } else if (action === 'finish-compare') {
        if (s.learned.length < 3 || !foxPostOwn('lantern')) return;
        s.compared = true; s.panel = 'parcels'; u.view = null; u.speech = '';
    } else if (action === 'parcel') {
        if (!s.compared || s.scene !== 'station' || u.view !== 'parcel') return;
        if (data.word === 'nom') {s.parcel = true; u.view = null; u.selected = null; foxPostSay('firefly', 'Верно, это книга! Посылка теперь в сумке. Отправимся к барсуку-мастеру — у него есть ключ от библиотеки.');}
        else foxPostSay('firefly', 'Здесь «нам — низкий»: А в середине. Библиотекарю нужна книга — найди на другой полке «ном» с О.');
    } else if (action === 'sign-open') {
        u.foxX = 47;
        if (s.learned.length < 3 || !s.compared) {foxPostSay('master', 'Я покажу, как починить указатель. Сначала Огонёк на станции познакомит тебя с буквами в слове «ном». Поговори с ним и сравни две бирки.'); return foxPostPersist();}
        if (s.repaired) {foxPostSay('master', 'Указатель уже цел. Спасибо! Ключ твой.'); foxPostGift('key');}
        else {u.view = 'sign'; u.piece = null; u.speech = '';}
    } else if (action === 'piece') {
        if (u.view !== 'sign' || !['o', 'a'].includes(data.letter)) return;
        u.piece = data.letter;
        foxPostSay('master', 'Ты взяла дощечку ' + (data.letter === 'o' ? 'О' : 'А') + '. Теперь вставь её в пустой паз указателя.');
    } else if (action === 'drop-piece') {
        if (u.view !== 'sign' || !u.piece) {foxPostSay('master', 'Сначала возьми одну из двух дощечек на верстаке, затем нажми на паз.');}
        else if (u.piece === 'o') {
            s.repaired = true; s.panel = 'repair'; u.view = null; u.piece = null; foxPostRepairChoice = '';
            foxPostSay('master', 'Получилось «ном — книга»! Спасибо, почтальон. За помощь дарю ключ от библиотеки.'); foxPostGift('key');
        } else {foxPostRepairChoice = 'a'; u.piece = null; foxPostSay('master', 'Теперь на доске «нам — низкий». А нам нужен указатель к книгам: «ном». Сравни середину с моим чертежом и попробуй О.');}
    } else if (action === 'item') {
        const id = data.item;
        if (id === 'book') {u.view = u.view === 'book' ? null : 'book'; u.speech = ''; foxPostFocus = 0;}
        else if (id === 'lantern' && foxPostOwn('lantern')) {s.lantern = !s.lantern; foxPostSay('firefly', s.lantern ? 'Фонарь снова подсвечивает знакомые буквы. Нажми на букву, и я помогу её рассмотреть.' : 'Фонарь погашен. Теперь можно попробовать узнать очертания без цвета. Я рядом, если понадобится помощь.');}
        else if (id === 'key' && foxPostOwn('key') && !s.doorUnlocked) {u.selected = u.selected === 'key' ? null : 'key'; foxPostSay('owl', 'Ключ выбран. Нажми на дверь библиотеки или перетащи ключ на неё.');}
        else if (id === 'parcel' && s.parcel && !s.delivered) {u.selected = u.selected === 'parcel' ? null : 'parcel'; foxPostSay('fox', 'Книга у меня! Передам её сове: нажму на библиотекаря или перетащу посылку к ней.');}
        else if (['first-stamp', 'pass-stamp'].includes(id) && foxPostOwn(id)) {u.view = 'book'; u.speech = '';}
    } else if (action === 'door') {
        u.foxX = 58;
        if (s.scene !== 'library') return;
        if (s.doorUnlocked) foxPostSay('owl', s.register ? 'Дверь открыта. Выбери книгу в сумке и передай её мне.' : 'Дверь открыта! Нажми на мой журнал, и я покажу, где отметить доставку.');
        else if (u.selected === 'key' && foxPostOwn('key')) {s.doorUnlocked = true; u.selected = null; foxPostSay('owl', 'Подходит! Заходи. Открой журнал у двери — там знакомая Н стоит на новом месте.');}
        else foxPostSay('owl', foxPostOwn('key') ? 'Выбери ключ в сумке и нажми на дверь. Можно перетащить ключ прямо на неё.' : 'Дверь заперта. Барсук-мастер подарит ключ, если поможешь с его указателем.');
    } else if (action === 'ledger-open') {
        if (!s.doorUnlocked) return;
        u.foxX = 52; u.view = 'ledger'; u.speech = ''; u.selected = null; foxPostFocus = 0;
    } else if (action === 'register-letter') {
        if (u.view !== 'ledger' || !s.doorUnlocked) return;
        foxPostFocus = Number(data.index);
        if (foxPostFocus === 1) {s.register = true; foxPostSay('owl', 'Нашла! Это Н в конце слова «он — год». Я поставила отметку в журнале. Теперь убери журнал, выбери книгу в сумке и передай её мне.');}
        else foxPostSay('owl', 'Это О, она начинает слово «он». Н — ниже, в конце. Я подсвечу её, когда ты нажмёшь на нижнюю букву.');
    } else if (action === 'npc') {
        const actor = data.actor || 'firefly'; u.foxX = actor === 'master' ? 48 : actor === 'owl' ? 54 : 25;
        if (actor === 'owl' && u.selected === 'parcel' && s.parcel && !s.delivered) {
            if (!s.doorUnlocked || !s.register) foxPostSay('owl', !s.doorUnlocked ? 'Спасибо! Сначала откроем дверь ключом.' : 'Перед передачей книги нужно отметить доставку в журнале. Нажми на него у двери.');
            else {s.delivered = true; s.panel = 'ending'; u.selected = null; u.view = null; foxPostSay('owl', 'Книга доставлена! Ты прочитала бирку, починила указатель и нашла Н в журнале. Получай первую почтовую печать и подарок для станции.'); foxPostGift('first-stamp');}
        } else if (actor === 'master' && s.repaired && !foxPostOwn('key')) foxPostGift('key');
        else if (actor === 'owl' && s.delivered && !foxPostOwn('first-stamp')) foxPostGift('first-stamp');
        else if (actor === 'firefly' && u.view && u.view !== 'letter') foxPostSay('firefly', foxPostLetterNote(u.view === 'ledger' ? 'on' : u.view === 'postcard' ? 'manan' : u.word, foxPostFocus));
        else {u.speech = ''; u.speaker = actor;}
    } else if (action === 'show-gift') {
        const id = data.gift;
        if (id === 'lantern' && s.learned.length === 3 || id === 'key' && s.repaired || id === 'first-stamp' && s.delivered
            || id === 'windchime' && s.delivered && foxPostOwn('first-stamp')) foxPostGift(id);
    } else if (action === 'claim-gift') {
        const id = data.gift;
        if (id !== u.reward || !Object.hasOwn(foxPostRewardInfo, id)) return;
        if (!foxPostOwn(id)) s.rewards.push(id);
        u.reward = null; u.view = null;
        if (id === 'lantern') {s.lantern = true; foxPostSay('firefly', 'Фонарь теперь в твоей сумке. Нажми на одну из двух бирок на полках — сравним их и найдём книгу.');}
        if (id === 'key') foxPostSay('master', 'Теперь ключ в сумке. Примени его к двери библиотеки. Счастливой дороги!');
        if (id === 'first-stamp') foxPostGift('windchime');
        if (id === 'windchime') foxPostSay('owl', 'Я повесила музыку ветра на твоей станции. А в книге нашлась записка: почтальон отправился к переправе. На станции он оставил открытку.');
        if (id === 'pass-stamp') foxPostSay('firefly', s.delivered ? 'Ты нашла тайную печать перевала! Обе печати сохранены в книжке. Первая доставка и тайна открытки завершены.' : 'Печать перевала теперь в твоей книжке! Вернёмся к нашей доставке — сова всё ещё ждёт книгу.');
    } else if (action === 'postcard') {
        if (!s.parcel) return;
        s.scene = 'station'; u.view = 'postcard'; u.speech = ''; foxPostFocus = 0;
    } else if (action === 'bonus-letter') {
        if (u.view !== 'postcard') return;
        const n = Number(data.index); if (![0, 1, 2, 3, 4].includes(n)) return;
        foxPostFocus = n;
        if ([2, 4].includes(n)) {
            if (!s.bonus.includes(n)) s.bonus.push(n);
            foxPostSay('firefly', foxPostLetterNote('manan', n));
            if (s.bonus.length === 2) foxPostGift('pass-stamp');
        } else foxPostSay('firefly', 'Это ' + nameOf(visibleChars(foxPostWord('manan'))[n].ch) + '. А Н находится в середине и в самом низу слова. Рассмотрим их вместе.');
    } else if (action === 'book-word' && foxPostWords[data.word]) {u.bookWord = data.word; foxPostFocus = 0; u.speech = '';}
    else if (action === 'scene') foxPostMove(data.scene);
    else if (action === 'walk' && event) {const box = APP.querySelector('.fp-stage').getBoundingClientRect(); u.foxX = Math.max(9, Math.min(87, (event.clientX - box.left) / box.width * 100));}
    else if (action === 'settings') u.settings = !u.settings;
    else if (action === 'reset-prompt') foxPostResetOpen = true;
    else if (action === 'reset-cancel') foxPostResetOpen = false;
    else if (action === 'reset') {foxPostSave = foxPostEmpty(); foxPostSave.rewards = []; foxPostSave.immersive = true; foxPostSave.doorUnlocked = false; foxPostOpenFresh();}
    foxPostPersist();
}
function foxPostOpenFresh() {
    foxPostWorld = {view: null, word: 'nom', selected: null, piece: null, reward: null, speaker: 'firefly', speech: '', foxX: 18, settings: false, bookWord: 'nom'};
    foxPostFocus = 0; foxPostResetOpen = false; foxPostRepairChoice = '';
}
const foxPostBeforeContent = siteContent;
siteContent = function () { return state.section === 'fox-post' ? foxPostScreen() : foxPostBeforeContent(); };
const foxPostBeforeHome = homeScreen;
homeScreen = function () { return foxPostBeforeHome().replace('<nav class="mg-home-grid', foxPostCard() + '<nav class="mg-home-grid'); };
const foxPostBeforeGames = newGamesScreen;
newGamesScreen = function () { return foxPostCard() + foxPostBeforeGames(); };
const foxPostBeforeRoute = applySiteLocation;
applySiteLocation = function () {if (/^#fox-post\/?$/.test(location.hash)) {foxPostOpen(); return;} return foxPostBeforeRoute();};
const foxPostBeforeHash = siteHash;
siteHash = function () { return state.section === 'fox-post' ? '#fox-post' : foxPostBeforeHash(); };
const foxPostBeforeAction = nuAction;
nuAction = function (event) {
    if (state.section !== 'fox-post') return foxPostBeforeAction(event);
    if (Date.now() < foxPostIgnoreClickUntil) return true;
    let button = event.target.closest('button[data-action]');
    const hit = event.target.closest('[data-letter-index]');
    const object = hit?.closest('[data-reading-action]');
    if (hit && object) {
        const id = hit.closest('[data-fox-word]')?.dataset.foxWord;
        if (!foxPostWords[id]) return true;
        const n = visibleChars(foxPostWord(id)).findIndex(c => c.index === Number(hit.dataset.letterIndex));
        if (n < 0) return true;
        foxPostWorldAction(object.dataset.readingAction, {word: id, index: String(n)}, event);
    } else {
        if (!button || button.disabled || !button.dataset.action.startsWith('fox-')) return foxPostBeforeAction(event);
        foxPostWorldAction(button.dataset.action.slice(4), button.dataset, event);
    }
    const active = button?.dataset.index;
    render();
    if (active !== undefined) APP.querySelector('[data-action="' + button.dataset.action + '"][data-word="' + button.dataset.word + '"][data-index="' + active + '"]')?.focus({preventScroll: true});
    return true;
};
// Preserve position through DOM renders, then animate the actual actors to their
// new location. Only their position moves; the connected written forms stay exact.
const foxPostBeforeRender = render;
render = function () {
    const previous = new Map();
    if (state.section === 'fox-post') for (const selector of ['.fp-firefly', '.fp-actor-fox']) {
        const el = APP.querySelector(selector); if (el) previous.set(selector, el.getBoundingClientRect());
    }
    foxPostBeforeRender();
    if (state.section !== 'fox-post' || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    for (const [selector, old] of previous) {
        const el = APP.querySelector(selector); if (!el?.animate) continue;
        const box = el.getBoundingClientRect(), dx = old.left - box.left, dy = old.top - box.top;
        if (Math.abs(dx) + Math.abs(dy) < 3) continue;
        const base = selector === '.fp-firefly' ? 'translate(-50%,-50%)' : 'translateX(-50%)';
        el.animate([{transform: base + ' translate(' + dx + 'px,' + dy + 'px)'}, {transform: base + ' translate(0,0)'}],
            {duration: selector === '.fp-firefly' ? 850 : 650, easing: 'cubic-bezier(.3,.1,.2,1)'});
    }
};
function foxPostDragEnd(event, cancelled = false) {
    const drag = foxPostDrag; if (!drag) return;
    drag.ghost?.remove(); foxPostDrag = null;
    if (!drag.moved || cancelled) return;
    foxPostIgnoreClickUntil = Date.now() + 500;
    const zones = [...APP.querySelectorAll('[data-fp-drop]')];
    const target = zones.find(el => {const r = el.getBoundingClientRect(); return event.clientX >= r.left && event.clientX <= r.right && event.clientY >= r.top && event.clientY <= r.bottom;});
    if (!target) return;
    const kind = target.dataset.fpDrop;
    if (drag.item.startsWith('piece-') && kind === 'sign') {foxPostWorld.piece = drag.item.slice(6); foxPostWorldAction('drop-piece');}
    else if (drag.item === 'key' && kind === 'door') {foxPostWorld.selected = 'key'; foxPostWorldAction('door');}
    else if (drag.item === 'parcel' && kind === 'owl') {foxPostWorld.selected = 'parcel'; foxPostWorldAction('npc', {actor: 'owl'});}
    else return;
    render();
}
APP.addEventListener('pointerdown', event => {
    if (state.section !== 'fox-post' || event.button !== 0) return;
    const target = event.target.closest('[data-fp-drag]'); if (!target) return;
    foxPostDrag = {item: target.dataset.fpDrag, target, x: event.clientX, y: event.clientY, moved: false, ghost: null};
    target.setPointerCapture?.(event.pointerId);
});
APP.addEventListener('pointermove', event => {
    const drag = foxPostDrag; if (!drag) return;
    if (!drag.moved && Math.hypot(event.clientX - drag.x, event.clientY - drag.y) > 8) {
        drag.moved = true; drag.ghost = drag.target.cloneNode(true); drag.ghost.classList.add('fp-drag-shadow');
        drag.ghost.removeAttribute('data-action'); document.body.append(drag.ghost);
    }
    if (drag.ghost) {event.preventDefault(); drag.ghost.style.left = event.clientX + 'px'; drag.ghost.style.top = event.clientY + 'px';}
});
APP.addEventListener('pointerup', event => foxPostDragEnd(event));
APP.addEventListener('pointercancel', event => foxPostDragEnd(event, true));

