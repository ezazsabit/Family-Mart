<?php
// echo "Testing login";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-control-Allow-Headers, Authorization, X-Requested-With");

// $con = mysqli_connect("localhost","root","Angular13");
// mysqli_select_db($con, "react_crud");
include("DbConnect.php");
// $db = new DbConnect();
// $conn = $db->connect();
// echo $conn;
$method = $_SERVER['REQUEST_METHOD'];
// mysqli_select_db($conn, "react_crud");
// echo $method;
if($method == "POST"){
    // $data = json_decode(file_get_contents("php://input"));
    // //----------
    // echo $data;
    // $email=$data->email;
    // $password = $data->password;
    $email = $_POST["email"];
    $password = $_POST["password"];
}
else{
    $email = $_GET["e"];
    $password = $_GET["p"];
}


//----------------------
$result = mysqli_query($conn,"SELECT * from users where email='$email' AND `password`='$password'");

$nums = mysqli_num_rows($result);

$rs=mysqli_fetch_all($result);
var_dump($result);

//--------------

if($nums>=1){
    // $outp .='"status":"200"}';
    // http_response_code(200);
    $outp= "";

    //------------------
    $outp .='{"email":"' . $rs[0][2] . '",';
    $outp .='"name":"' . $rs[0][1] . '",';
    $outp .='"status":"200"}';
    // $outp .='{"Email":"' . $rs["email"] . '",';
    // $outp .='"Status":"'. $rs["200"].'"}';

    echo $outp;
}
else{
    // http_response_code(202);
    echo '{"res":"error"}';
}



?>