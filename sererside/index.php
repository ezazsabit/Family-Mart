<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: *");
  echo "Testing";

include("DbConnect.php");
    $conn = new DbConnect();
    $db = $conn->connect();
    $method = $_SERVER['REQUEST_METHOD'];
    switch($method) {
        case 'POST':
            $user = json_decode(file_get_contents('php://input'));
            
            $sql = "INSERT INTO additems(id, product_name, quantity,price, imglink, created_at, updated_at) values(null, :name, :price,:quantity, :img, :created_at, :updated_at)";
            $stmt = $db->prepare($sql);
            $date = date('Y-m-d');
            $stmt->bindParam(':name', $user->name);
            $stmt->bindParam(':price', $user->price);
            $stmt->bindParam(':quantity', $user->quantity);
            $stmt->bindParam(':img', $user->img);
            $stmt->bindParam(':created_at', $date);
            $stmt->bindParam(':updated_at', $date);
            if($stmt->execute()) {
                $data = ['status' => 1, 'message' => "Record successfully created"];
            } else {
                $data = ['status' => 0, 'message' => "Failed to create record."];
            }
            echo json_encode($data);

            break;
        
            // case "DELETE": 
            //     $sql = "DELETE FROM addditems WHERE id = :id";
            //     $path = explode('/', $_SERVER['REQUEST_URI']);
        
            //     $stmt = $conn->prepare($sql);
            //     $stmt->bindParam(':id', $path[2]);
            //     if($stmt->execute()) {
            //         $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
            //     } else {
            //         $response = ['status' => 0, 'message' => 'Failed to delete record.'];
            //     }
            //     echo json_encode($response);
            //     break;
        
            


          
}



?>