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
            
            $sql = "INSERT INTO myitems(product_name,email,price, imglink, quantity) values(:name,:email, :price, :img, :quantity)";
            $stmt = $db->prepare($sql);
            // $date = date('Y-m-d');


            // ----------------------------IMPORTANT------------------

            //-------------$user->(((je nam ba key object diye ami send korchi oigula dite hbe))) Ex.namep----------------------
            $stmt->bindParam(':name', $user->namep);
            $stmt->bindParam(':price', $user->pricep);
            $stmt->bindParam(':quantity', $user->quantityp);
            $stmt->bindParam(':img', $user->imglink);
            $stmt->bindParam(':email', $user->email);
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
                // $sql = "SELECT * FROM myitems";
                // $stmt = $db->prepare($sql);
                // $stmt->execute();
                // $items = $stmt->fetchAll(PDO::FETCH_ASSOC);        
                // echo json_encode($items);
                // break;

                //-----------------------------------------for confition----------------------------------

                //-----------------mun's code--------------------
                // $_conn = new mysqli("localhost","root","","react_crud");
                // $sql = "SELECT * FROM myitems WHERE email = 'sabit8138@gmail.com'";
                // $res = mysqli_query($_conn, $sql);
                // $items = mysqli_fetch_all($res,MYSQLI_ASSOC);
                // echo json_encode($items);
                //--------------------------------------------------
                

                //---------------------my code---------------------------------
                //fetch for only first row------- and-------- fetchAll for all row
                //ASSOC for associative array
                $sql = "SELECT * FROM myitems ";
                $path = explode('/', $_SERVER['REQUEST_URI']);
                if(isset($path[3])) {
                    $sql .= " WHERE email = :email";
                    $stmt = $db->prepare($sql);
                  
                    $stmt->bindParam(':email', $path[3]);
                    $stmt->execute();
                    // echo $stmt;
                    $items = $stmt->fetchAll(PDO::FETCH_ASSOC);
                } else {
                    $stmt = $db->prepare($sql);
                    $stmt->execute();
                    $items = $stmt->fetchAll(PDO::FETCH_ASSOC);
                }
            
                echo json_encode($items);
                break;
    
        
          
            


          
}



?>