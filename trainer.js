(() => {
    // Capture the owning script URL before awaiting; Tilda may embed this trainer.
    const base = new URL('.', document.currentScript.src);
    const revision = '06e95a776cae';
    const resources = [
        ['trainer-core.js', 'sha256-cqRo7tgCtqacaNZzUWvWSXRw8Wp4il+LreYMYECvmCw='],
        ['fox-post.js', 'sha256-Hp1AWBRXQ9L6medOm1hxPVEesakPjAZKgUsAm24z340='],
    ];
    async function start() {
        const [core, chapter] = await Promise.all(resources.map(async ([file, integrity]) => {
            const url = new URL(file + '?v=' + revision, base);
            const response = await fetch(url, {integrity});
            if (!response.ok) throw new Error('Could not load ' + file + ': ' + response.status);
            return response.text();
        }));
        const marker = '\napplySiteLocation();render();\n';
        const opening = 'document.addEventListener("DOMContentLoaded",async()=>{';
        if (core.split(marker).length !== 2 || !core.startsWith(opening)) {
            throw new Error('Unexpected trainer core; original curriculum was not modified.');
        }
        const art = new URL('fox-post-map.webp?v=' + revision, base).href;
        let code = core.replace(marker, '\nconst FOX_POST_ART=' + JSON.stringify(art) + ';\n' + chapter + marker);
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
