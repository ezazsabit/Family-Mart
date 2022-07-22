<?php
    header('Access-Control-Allow-Origin: *');
    //   header("Access-Control-Allow-Headers: *");
    header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: *');                      

include("DbConnect.php");
    $conn = new DbConnect();
    $db = $conn->connect();
    $method = $_SERVER['REQUEST_METHOD'];
    switch($method) {
        case 'POST':
            $user = json_decode(file_get_contents('php://input'));
            
            $sql = "INSERT INTO myitems(product_name,price, imglink, quantity) values(:name, :price, :img, :quantity)";
            $stmt = $db->prepare($sql);
            // $date = date('Y-m-d');


            // ----------------------------IMPORTANT------------------

            //-------------$user->(((je nam ba key object diye ami send korchi oigula dite hbe))) Ex.namep----------------------
            $stmt->bindParam(':name', $user->namep);
            $stmt->bindParam(':price', $user->pricep);
            $stmt->bindParam(':quantity', $user->quantityp);
            $stmt->bindParam(':img', $user->imglink);
            // $stmt->bindParam(':created_at', $date);
            // $stmt->bindParam(':updated_at', $date);
            if($stmt->execute()) {
                $data = ['status' => 1, 'message' => "Record successfully created"];
            } else {
                $data = ['status' => 0, 'message' => "Failed to create record."];
            }
            echo json_encode($data);

            break;


            ///get items-----
            case 'GET':
                //------------------this is for normal------------without condition----------
                $sql = "SELECT * FROM myitems";
                $stmt = $db->prepare($sql);
                $stmt->execute();
                $items = $stmt->fetchAll(PDO::FETCH_ASSOC);        
                echo json_encode($items);
                break;
                //-----------------------------------------for confition----------------------------------

                // $sql = "SELECT * FROM additems";
                // $path = explode('/', $_SERVER['REQUEST_URI']);
                // if(isset($path[3]) && is_numeric($path[3])) {
                //     $sql .= " WHERE id = :id";
                //     $stmt = $db->prepare($sql);
                //     $stmt->bindParam(':id', $path[3]);
                //     $stmt->execute();
                //     $items = $stmt->fetch(PDO::FETCH_ASSOC);
                // } else {
                //     $stmt = $db->prepare($sql);
                //     $stmt->execute();
                //     $items = $stmt->fetchAll(PDO::FETCH_ASSOC);
                // }
            
                // echo json_encode($items);
                // break;
    
        
          
            


          
}



?>