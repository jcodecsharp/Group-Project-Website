<?php
error_reporting(E_ERROR | E_PARSE);
header('Content-Type: application/json; charset=utf-8');
$servername = "localhost";
$username = "root";
$password = "";
$db = "rentalsitedb";
$city_name = $_request[""];

// Create connection
$conn = new mysqli($servername, $username, $password, $db);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "Select 0BR, 1BR, 2BR, 3BR, 4BR, avg, percent_delta_20to21 FROM average_rent_prices";
$result = $conn->query($sql);
$data = array();


if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    $data[] = $row; 
  }
} else {
  echo "0 results";
}
echo json_encode($data);
$conn->close();
?>