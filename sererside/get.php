<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: *");
//   echo "Testing";

include("DbConnect.php");
    $conn = new DbConnect();
    $db = $conn->connect();
    $method = $_SERVER['REQUEST_METHOD'];
    switch($method){
        case 'GET':
            //------------------this is for normal------------without condition----------
            // $sql = "SELECT * FROM additems";
            // $stmt = $db->prepare($sql);
            // $stmt->execute();
            // $items = $stmt->fetchAll(PDO::FETCH_ASSOC);        
            // echo json_encode($items);
            // break;
            //---------------------------------------------------------------------------
            $sql = "SELECT * FROM additems";
            $path = explode('/', $_SERVER['REQUEST_URI']);
            if(isset($path[3]) && is_numeric($path[3])) {
                $sql .= " WHERE id = :id";
                $stmt = $db->prepare($sql);
                $stmt->bindParam(':id', $path[3]);
                $stmt->execute();
                $items = $stmt->fetch(PDO::FETCH_ASSOC);
            } else {
                $stmt = $db->prepare($sql);
                $stmt->execute();
                $items = $stmt->fetchAll(PDO::FETCH_ASSOC);
            }
        
            echo json_encode($items);
            break;

    }

    ?>
   