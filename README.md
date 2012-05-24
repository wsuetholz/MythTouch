MythTouch
=========
A web based touch interface for a MythTV installation.

Requires:
---------
* Apache
* PHP (with curl support)
* MythTV 0.25
    
Make sure that your MythTV backend is accessible via http://localhost:6544/

Drop mythtouch and touch directory into your web server and navigate to:

http://<server-url>/mythtouch/app.html and away you go.

Notes:
------
- xml-proxy.php - grabs data from the MythTV Backend using the Services API and returns it in a JSON format
- img-proxy.php - grabs an image in PNG format from the MythTV Backend using the Services API and returns it with the correct mime type.
