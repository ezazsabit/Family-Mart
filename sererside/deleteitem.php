<?php
  header('Access-Control-Allow-Origin: *');
//   header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: *');
//   echo "Testing";

include("DbConnect.php");
    $conn = new DbConnect();
    //---$conn k connect kore $db te rakhbo------------------
    $db = $conn->connect();
    $method = $_SERVER['REQUEST_METHOD'];
    switch($method){
        case "DELETE": 
            $sql = "DELETE FROM additems WHERE id = :id";
            $path = explode('/', $_SERVER['REQUEST_URI']);
    //----------------$db k $sql tar operation er jnno ready korbo----path theke explode kore 3  no index er array  (Family-Mart/deleteitems.php/:id) niye :id er sathe bind korbo----------ekhan thekei mainly delete operation shuru-----------
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':id', $path[3]);
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to delete record.'];
            }
            echo json_encode($response);
            break;
    

        }
        ?>