<?php
// Database configuration
$servername = "localhost";
$username = "root";
$password = ""; // Update this if you have a different password
$dbname = "voting_app"; // The name of your database

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get vote data from POST request
$ward = $_POST['ward'];
$aspirant = $_POST['aspirant'];
$ip_address = $_SERVER['REMOTE_ADDR'];

// Check if the IP address has already voted
$sql = "SELECT * FROM votes WHERE ip_address = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $ip_address);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    echo "You have already voted.";
} else {
    // Insert vote into database
    $sql = "INSERT INTO votes (ward, aspirant, ip_address) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $ward, $aspirant, $ip_address);

    if ($stmt->execute()) {
        // Increment the vote count for the selected aspirant
        $sql = "UPDATE aspirants SET votes = votes + 1 WHERE name = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $aspirant);
        $stmt->execute();

        echo "Your vote has been submitted successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }
}

$stmt->close();
$conn->close();
?>
