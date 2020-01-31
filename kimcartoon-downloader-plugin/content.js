// Get some inforamation sorted out
const autoDownloadHash = '#kimcartoon-downloader-auto-start'
const videoName = document.title.replace(/Watch (.+) online FREE.+/,`$1`);
const videoPath = document.querySelector(`video`).src

// Add a download link
document.querySelector(`#myContainer`).insertAdjacentHTML(`afterbegin`,`<div>
    `+(window.location.hash !== autoDownloadHash ? `<a id="kimcartoon-downloader" href="${autoDownloadHash}">Start downloading "${videoName}" and automatically keep downloading.</a>` : `<a href="#">Stop automatically downloading episodes.</a>`)+`
</div><div class="clear2"></div>`)

// Have the download link send the video details to the background script
const sendToBackground = () => {
    let message = {
        'videoName': videoName,
        'videoPath': videoPath,
    }
    // Send video to the background do get downloaded.
    chrome.runtime.sendMessage(message);
}

// Make that download link do some downloading
if(document.getElementById('kimcartoon-downloader')!==null){
    document.getElementById('kimcartoon-downloader').addEventListener(`click`,sendToBackground)
}

// check if the hash is loaded and if it is call the function as if we`d clicked the link
if(window.location.hash == autoDownloadHash){
    setTimeout(sendToBackground,500)
}

// Listen for a "download:complete" message from the background
chrome.runtime.onMessage.addListener((request,sender)=>{
    if(request.download!==undefined && request.download==="complete"){
        if(window.location.hash == autoDownloadHash){
            const nextPage = document.querySelector('[title="Next episode"]').parentNode.href+autoDownloadHash
            window.location = nextPage
        }
    }
});