<?php

header("Access-Control-Allow-Origin: *");

ini_set( "display_errors", true );

date_default_timezone_set( "Asia/Manila" );  // http://www.php.net/manual/en/timezones.php

define( "DB_DSN", "mysql:host=sql304.byethost13.com;dbname=b13_18491037_business_location_rating" );

define( "DB_USERNAME", "b13_18491037" );

define( "DB_PASSWORD", "wenytic23" );

//define( "CLASS_PATH", "classes" );

//define( "TEMPLATE_PATH", "templates" );

//define( "HOMEPAGE_NUM_ARTICLES", 5 );

//define( "ADMIN_USERNAME", "admin" );

//define( "ADMIN_PASSWORD", "mypass" );

//require( CLASS_PATH . "/Article.php" );

define('CSV_PATH1','http://storage.googleapis.com/amt-dgph.appspot.com/uploads/7aSO8JS50gvgUpmGd668/natcrimestat2013.csv');

define('CSV_PATH2','http://storage.googleapis.com/amt-dgph.appspot.com/uploads/6R7jGsRtC0Ef5EA3WgvN/top_15_highest_number_of_index_crimes_from_2010-2015.csv');

define('population_path', 'http://nap.psa.gov.ph/activestats/psgc/');

define('demographic_qc', 'http://quezoncity.gov.ph/index.php/facts-and-figures/');

function handleException( $exception ) {

  echo "Sorry, a problem occurred. Please try later.";

  error_log( $exception->getMessage() );

}

 

set_exception_handler( 'handleException' );



?>