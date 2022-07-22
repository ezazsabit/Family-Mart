<?php
 header('Access-Control-Allow-Origin: *');
 //   header("Access-Control-Allow-Headers: *");
 header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
 header('Access-Control-Allow-Headers: *');
//   echo "Testing";

include("DbConnect.php");
    $conn = new DbConnect();
    $db = $conn->connect();
    $method = $_SERVER['REQUEST_METHOD'];
    switch($method){
        case "PUT": 
            $user = json_decode( file_get_contents('php://input') );
            $sql = "UPDATE additems SET product_name= :name,price=:price, quantity =:quantity, imglink =:img, updated_at =:updated_at WHERE id = :id";
            $stmt = $db->prepare($sql);
            $updated_at = date('Y-m-d');
            $stmt->bindParam(':id', $user->id);
            $stmt->bindParam(':name', $user->name);
            $stmt->bindParam(':price', $user->price);
            $stmt->bindParam(':quantity', $user->quantity);
            $stmt->bindParam(':img', $user->img);
            $stmt->bindParam(':updated_at', $updated_at);

            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record updated successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
            echo json_encode($response);
            break;

        }
        ?>