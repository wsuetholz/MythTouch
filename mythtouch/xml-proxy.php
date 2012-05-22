<?php
// PHP Proxy 
// Based on example for Yahoo! Web services by Jason Levitt. 
//
// Only responds to HTTP GET as that is all the MythTV XML interface uses
// Only returns text/xml


// Allowed hostname
define ('HOSTNAME', 'http://localhost:6544/');

$QUERYVAR = urldecode(parse_url($_SERVER['REQUEST_URI'], PHP_URL_QUERY));

$ANDPOS = strpos($QUERYVAR, "&");


// echo $QUERYVAR . "\n\n";

if ($ANDPOS > 0) {
	$QUERYVAR1 = substr_replace($QUERYVAR, "?", $ANDPOS, 1);
}


// echo "URL_QUERY: " . urldecode(parse_url($_SERVER['REQUEST_URI'], PHP_URL_QUERY)) . "\n\n";
// echo "QUERYVAR1:  " . $QUERYVAR1 . "\n\n";

$url = HOSTNAME.$QUERYVAR1;

// echo "NEW url " . urldecode($url) . "\n\n";
    
// Open the Curl session
$session = curl_init(urldecode($url));

// Don't return HTTP headers. Do return the contents of the call
curl_setopt($session, CURLOPT_HEADER, false);
curl_setopt($session, CURLOPT_RETURNTRANSFER, true);

// Get JSON
curl_setopt($session, CURLOPT_HTTPHEADER, array('Accept: application/json'));
    
// Make the call
$xml = curl_exec($session);

// The web service returns json. Set the Content-Type appropriately
header("Content-Type: text/json");

echo $xml;
curl_close($session);

?>
