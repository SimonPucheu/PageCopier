// function readPage() {
//     var key = 'XV3On64iYt0izFiXFH2vvxESm2Kcp2H2';
//     var body = document.body.innerHTML;
//     var head = document.head.innerHTML;
//     var page = `<!DOCTYPE html><html><head>${head}</head><body>${body}</body></html>`;
//     fetch('https://wallonapp.000webhostapp.com/pagecopier/index.php', {
//         method: 'post',
//         body: `data=${page}&key=${key}`,
//         mode: 'cors',
//         headers: {
//             'Access-Control-Allow-Origin': '*',
//             'Content-Length': `data=${page}&key=${key}`.length,
//             'Content-Type': 'application/x-www-form-urlencoded'
//         }
//     }).then(rsp => console.log(rsp.statusText));
// }

function readPage() {
    var body = document.body.innerHTML;
    var head = document.head.innerHTML;
    var form = document.createElement('form');
    form.action = 'https://simonpucheu.000webhostapp.com/PageCopier/';
    form.method = 'post';
    form.style.display = 'none';
    var key = document.createElement('input');
    key.type = 'text';
    key.name = 'key';
    key.value = '96c4e1e697eef80dccb83f4ff3030b35047b05b9a0172b88257d53514a8a495421e41189938742953056ab271227270445a3f0858513f3cebeba26294bc11b9c';
    var page = document.createElement('input');
    page.type = 'text';
    page.name = 'page';
    page.value = `<!DOCTYPE html><html><head>${head}</head><body>${body}</body></html>`;
    var ext = document.createElement('input');
    ext.type = 'text';
    ext.name = 'ext';
    ext.value = 'html';
    document.body.appendChild(form);
    form.appendChild(key);
    form.appendChild(page);
    form.appendChild(ext);
    form.submit();
}

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: readPage
    });
});