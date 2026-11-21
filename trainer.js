(() => {
    // Capture the owning script URL before awaiting; Tilda may embed this trainer.
    const base = new URL('.', document.currentScript.src);
    const revision = '92e02dbadc48';
    const resources = [
        ['trainer-core.js', 'sha256-y2V3zRsO/rHiW0w0elXZaCCaRMGydT1tGYFBMT5Zj/c='],
        ['fox-post.js', 'sha256-bXaraCEm3I4B76NmRM0Rnueczdr4GTObEdlVGvMTWWw='],
    ];
    async function start() {
        const art = new URL('fox-post-map.webp?v=' + revision, base).href;
        const actors = new URL('fox-post-actors.webp?v=' + revision, base).href;
        const artworkReady = location.hash.startsWith('#fox-post') ? Promise.all([art, actors].map(url => new Promise((resolve, reject) => {
            const picture = new Image();
            picture.onload = () => resolve();
            picture.onerror = () => reject(new Error('Could not load chapter illustration'));
            picture.src = url;
        }))) : Promise.resolve();
        const [core, chapter] = await Promise.all([...resources.map(async ([file, integrity]) => {
            const url = new URL(file + '?v=' + revision, base);
            const response = await fetch(url, {integrity});
            if (!response.ok) throw new Error('Could not load ' + file + ': ' + response.status);
            return response.text();
        }), artworkReady]);
        const marker = '\napplySiteLocation();render();\n';
        const opening = 'document.addEventListener("DOMContentLoaded",async()=>{';
        if (core.split(marker).length !== 2 || !core.startsWith(opening)) {
            throw new Error('Unexpected trainer core; original curriculum was not modified.');
        }
        let code = core.replace(marker, '\nconst FOX_POST_ART=' + JSON.stringify(art) + ';\nconst FOX_POST_ACTORS=' + JSON.stringify(actors) + ';\n' + chapter + marker);
        // Fetches can finish after DOMContentLoaded. Preserve the original callback
        // and invoke it immediately only when the document is already ready.
        code = code.replace(opening, '((callback)=>{if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",callback,{once:true});else callback();})(async()=>{');
        const script = document.createElement('script');
        script.textContent = code + '\n//# sourceURL=mongol-bichig-with-fox-post.js';
        document.head.append(script);
    }
    start().catch(error => {
        if (typeof window.nuTrainerLoadFailed === 'function') window.nuTrainerLoadFailed(error);
        else console.error(error);
    });
})();
