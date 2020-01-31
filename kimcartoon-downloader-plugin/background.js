/*
	This will download the passed video and message back once it's complete.
 */
const downloadIds = [];
let downloadLocation;
let downloadName;
let downloadSource;
chrome.extension.onMessage.addListener(function(message,sender,response){
	downloadName = message.videoName;
	downloadSource = message.videoPath

	// Try to get a adirectory name to save under, but if not just save to the default locatioln
	downloadLocation = message.videoName.split(/(Season|Episode)/)[0].trim()
	if(downloadLocation==message.videoName){
		downloadLocation = ""
	}else{
		downloadLocation += "/"
	}
	downloadLocation += message.videoName;

	// And here we try and download the video
	chrome.downloads.download({
		url: message.videoPath,
		saveAs: false,
	},(download)=>{
		downloadIds.push(download);
	});

	// monitor the downloads so we can go to the next page once this DL is done.
	// I'm hoping this will be slow enough that it doesn`t trigger flooding prevention
	chrome.downloads.onChanged.addListener(function(delta){
		if(downloadIds.includes(delta.id)){
			if(delta.state!== undefined && delta.state.current=="complete"){
				chrome.tabs.sendMessage(sender.tab.id,{download:'complete'},function(response){
					console.log("The tab has been told the download is complete.")
				});
			}
		}
	})

});

// Here we have some logic around naming of the files
chrome.downloads.onDeterminingFilename.addListener(function(item, suggest){

	// Update the downloadLocation with the file extension we can now gather and then suggest a file name to save to
	downloadLocation += '.'+item.mime.split('/')[1];
	console.log(`Starting download of "${downloadName}" from "${downloadSource}" to "${downloadLocation}".`);
	suggest({filename: downloadLocation});
});