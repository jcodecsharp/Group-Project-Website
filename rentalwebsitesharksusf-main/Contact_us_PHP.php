<?php
    require_once "dbconn.php";

 
    $ticket_textbox = mysqli_real_escape_string($conn, $_POST['ticket_textbox']);
    
 
 
    if(mysqli_query($conn, "INSERT INTO contact_us_issues(message) VALUES('" . $ticket_textbox . "')")) {
     print('insert success');
    } else {
       echo "Error: " . $sql . "" . mysqli_error($conn);
    }
 
    mysqli_close($conn);
?>