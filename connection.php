<?php
// Create a database connection
$host = 'localhost:3307';
$dbUser = 'root';
$dbPass = 'abba1221';
$dbName = 'login';
$conn = new mysqli($host, $dbUser, $dbPass, $dbName);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


// Rest of the code...
?>
