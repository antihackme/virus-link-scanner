virus-link-scanner
==================


Description: 
	This extension uses the Metascan Online API to analyze file links for potential virus threats. This extension adds a context menu option when right clicking on a link to scan the file before downloading. Risky files will not be downloaded, while clean files will. Results page will be shown for risky files.

Chrome extension : virus link scanner 

How to install: To use this extension, you will either need to use the compiled extension or the unpacked files in the source folder.

Instructions: Unpacked extension

	On the extensions section in chrome, select developer mode.

	Once selected, you can load an unpacked extension and load up the files.

	In this case you will load from the source folder in the directory of this git repo.

	You will be prompted to adding your key by the extension. If no extension is added, then it will alert you that it cant complete the call because it lacks a key.

	* When inserting an api key, it will be checked by initiating an api call with an example hash to ensure that the key is valid. When confirmed that it is valid, it will be saved to localstorage. If incorrect, it will not save it.


Instructions: Compiled extension - ie. virus_scanner.crx in build folder of git repo.

	On the extensions section in chrome, select developer mode.

	Drag and drop the crx extension file onto the extension web page. 

	You will be prompeted to install the extension. Allow it.

	It will then be installed. Installer page will start then.


User Instructions:

	While on a web page, select and right click on a link that your interested in downloading but are unsure if the link is safe.
	
	In the context menu, select the following option : "Download and Scan link for viruses".
	
	The extension will begin doing the analysis and determine the appropiate steps.
	
	If a virus exists, you will be taken to a new page with the results of the scan. No download will occur.
	
	If the file is clean, then you will be prompted to save the file instead.
	



Notes:

Now it terms of downloading a clean file.

There are two implementations included for downloading the file. If the saveAS function is used, then the blob data sent to the api can be sent and downloaded to the users computer (Thus reusing the blob data in the client side). The second is an api call to chromes download function to download a file. Using this second implementation will require that you re-download the file. Ideally, it would be best to reuse the blob data instead to avoid having to do the second implementation. Both are included in the function and can be used by commenting and uncommenting depending on which you would like to use.

~Agustin Roldan
metarco.com

