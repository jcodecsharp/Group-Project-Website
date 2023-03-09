<!DOCTYPE html>
<html>

<head>
    <title>Sharking Rental Pricing</title>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" type="text/javascript"></script>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <link rel="stylesheet" href="sharking_site_CSS.css">


</head>

<body>
    <h1 id="titlePage_heading">Sharking Rental Pricing</h1>
    <div id="opening_statement">Rental Property Trends in Tampa, FL!</div>
    <br>
    <!-- <img src="downtownTampa.jpg" id="downtownTampa_Picture"> -->
    <br><br><br><br>

    <div id="map"></div>
    <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAs990VFMongSHXzhCs69hG0b9-foXwpys&callback=initMap&v=weekly"
        async></script>

    <br><br><br>
    <label for="select_zipcode" id="select_zipcode_label">Select a zipcode for Rental statics:</label>
    <select name="select_zipcode" id="zipcode_select">
        <option value="33689">33689</option>
        <option value="33686">33686</option>
        <option value="33694">33694</option>
        <option value="33687">33687</option>
        <option value="33684">33684</option>
        <option value="33680">33680</option>
        <option value="33675">33675</option>
        <option value="33672">33672</option>
        <option value="33662">33662</option>
        <option value="33655">33655</option>
        <option value="33646">33646</option>
        <option value="33634">33634</option>
        <option value="33630">33630</option>
        <option value="33622">33622</option>
        <option value="33625">33625</option>
        <option value="33619">33619</option>
        <option value="33616">33616</option>
        <option value="33613">33613</option>
        <option value="33610">33610</option>
        <option value="33607">33607</option>
        <option value="33604">33604</option>
        <option value="33601">33601</option>
        <option value="33602">33602</option>
        <option value="33605">33605</option>
        <option value="33611">33611</option>
        <option value="33614">33614</option>
        <option value="33617">33617</option>
        <option value="33620">33620</option>
        <option value="33626">33626</option>
        <option value="33635">33635</option>
        <option value="33647">33647</option>
    </select>
    <button type="button" id="submit_zipcode_button">Submit For Rental Statics</button>
    <button type="button" id="submit_apicredits_button">Check API credits</button>
	<button type="button" id="submit_yeartrend_button">Submit For Rental Trend in Last Year</button>
    <script src="index.js"> </script>
    <?php
    $x = 5;
    $y = 10.5;
    ?>
    <?php
$servername = "localhost";
$username = "root";
$password = "password";

try {
  $conn = new PDO("mysql:host=$servername;dbname=rentalsitedb", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected successfully";
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
?>
</body>

</html>