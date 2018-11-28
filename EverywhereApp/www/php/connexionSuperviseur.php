<?php
 
// Check if the user is already logged in, if yes then redirect him to welcome page
/*if(isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true){
    header("location: welcome.php");
    exit;
}*/
 
// Include config file
require_once("connexionBDD.php");

// Define variables and initialize with empty values
$mail = $password = "";
$mail_err = $password_err = "";

// Processing form data when form is submitted
if($_SERVER["REQUEST_METHOD"] == "POST"){

    // Check if mail is empty
    if(empty(trim($_POST["mail"]))){
        $mail_err = "Please enter mail.";
    } else{
        $mail = trim($_POST["mail"]);
    }
    
    // Check if password is empty
    if(empty(trim($_POST["password"]))){
        $password_err = "Please enter your password.";
    } else{
        $password = trim($_POST["password"]);
    }
    
    // Validate credentials
    if(empty($mail_err) && empty($password_err)) {
        // Prepare a select statement
        $sql = "SELECT id, mail FROM superviseur WHERE mail = ?";
        
        if($stmt = $mysqli->prepare($sql)){
            // Bind variables to the prepared statement as parameters
            $stmt->bind_param("s", $param_mail);
            
            // Set parameters
            $param_mail = $mail;
            
            // Attempt to execute the prepared statement
            if($stmt->execute()){
                // Store result
                $stmt->store_result();
                
                // Check if mail exists, if yes then verify password
                if($stmt->num_rows == 1){
                    // Store data in session variables
                    $_SESSION["loggedin"] = true;
                    $_SESSION["id"] = $id;
                    $_SESSION["mail"] = $mail;
                } else {
                    // Display an error message if mail doesn't exist
                    $mail_err = "No account found with that mail.";
                }
            } else{
                echo "Oops! Something went wrong. Please try again later.";
            }
        }
        
    }
}
?>