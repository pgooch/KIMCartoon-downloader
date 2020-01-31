# KIMCartoon downloader plugin
This is a chrome plugin that will allow you to download an entire season or series (depending on how KIMCartoon has the show organized) with a single click. It does this one video at a time, starting the next once the previous has completed. 

The delay in download time allows the script to run for long stretches without the process being interrupted by the captcha (although it can still be stopped). While the browser tab does not need to remain active while the plugin is working, having _other_ browser tabs active can cause chrome to stop automatically progressing or the downloads from showing their progress (that is a really weird one). I have not looked into this as I built it to run overnight when the machine is not in use.

Files are downloaded to a directory in your default Chrome downloads directory. 

This plugin could be modified to download from KissAnime or any of the other sites in the network, but I have not had a reason to so that yet.

### Installing and using

To use this you first need to download or fork the repository. Once you that is complete you'll need to go to the Chrome menu -> More Tools -> Extensions. Once there enable developer mode in the top right (if you haven't already done so) and select "Load unpacked", from there you will be prompted to select a directory. Select the directory your downloaded or cloned and it will install the unpacked extension. 

After installation go to a KIMCartoon episode page, for example https://kimcartoon.to/Cartoon/Rambo/Episode-01-First-Strike?id=31093 and a link should appear at the top of the page with "Start downloading "Rambo Episode 01 First Strike" and automatically keep downloading." Once selected it will start the download. Leave the tab open and it will do it's thing downloading each episode and going to the next.

This is a Chrome plugin, and it could be in the plugin repository, built given the nature of what it does and the site it does it to I`m not sure how long it would last there. At any rate I only created it to download the occasional old and hard-to-find show so I don't plan on actively working on it. If you wish to fork and make a PR to increase functionality or add support to other sites in the network feel free.

### Breakage

It is very possible that KIMCartoon changes in a way that breaks compatibility with this plugin. While it is working at time of publish I don't know for how long it will work. If it quits working I may decide to fix it, but as I only have limited use for it I make no guarantees.