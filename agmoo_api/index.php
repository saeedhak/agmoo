<?php
header("Content-Type: application/json");
header("Content-Type: text/plain");

$condb = mysqli_connect("localhost", "agmoo_web_user", "J(Z%d);2xEd)", "agmo_db");


// try area start
// if($condb){
//     die("done");
// }else{
//     die("plz go to bath");
// }
// try area end
$rest_json = file_get_contents('php://input');
$_POST = json_decode($rest_json, true);


if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
// ------- header & conection complete -------- //---*/ } 

// working start

// create global variable

$getData = [];
$getEndPointData = "";
$sendData = "";
$getEndPointValue = "";

$GLOBALS['errorArray'] = array();
$GLOBALS['dataArray'] = array();
$GLOBALS['sendArray'] = array();

// create global variable end




// my function start
function errorSubmit($errorType, $errorStatus, $errorDes)
{
    array_push($GLOBALS['errorArray'], [
        'errorType' => $errorType,
        'errorStatus' => $errorStatus,
        'errorDescription' => $errorDes,
    ]);
}
// my function end








// main body start

if (!empty($_GET['endPoint'])) {
    $getData = $_GET;
    $getEndPointData = $_GET['endPoint'];


    if ($getEndPointData != "" && $getEndPointData === "brand") {
        if($getData['moduleId']){
            $sendData = mysqli_query($condb, "SELECT * FROM products WHERE brand_id = '".$getData['moduleId']."' AND status = 'Yes' ");
        }else{

            $sendData = mysqli_query($condb, "SELECT * FROM brands WHERE status = 'Yes' ");
        }
    }elseif($getEndPointData != "" && $getEndPointData === "category"){

        if($getData['moduleId']){
        
            $sendData = mysqli_query($condb, "SELECT * FROM products WHERE cat_id = '".$getData['moduleId']."' AND status = 'Yes' ");
        
        }elseif($getData['catWithSubCat']){
            $CATEGORY_WITH_SUBCATEGORY = array(
                'category' => [],
                'subCategory' =>[] 
            );
            $sendData = mysqli_query($condb, "SELECT * FROM categories WHERE status = 'Yes' ");
            while($data = mysqli_fetch_assoc($sendData)){

                array_push($CATEGORY_WITH_SUBCATEGORY['category'], $data);
            }
            $sendData = mysqli_query($condb, "SELECT * FROM subcategory WHERE status = 'Yes' ");
            while($data = mysqli_fetch_assoc($sendData)){

                array_push($CATEGORY_WITH_SUBCATEGORY['subCategory'], $data);
            }
            array_push($GLOBALS['dataArray'],$CATEGORY_WITH_SUBCATEGORY);
        }elseif($getData['moduleSubCatId']){

            $sendData = mysqli_query($condb, "SELECT * FROM products WHERE subcat_id = '".$getData['moduleSubCatId']."' AND status = 'Yes' ");
            
        }else{

            $sendData = mysqli_query($condb, "SELECT * FROM categories WHERE status = 'Yes' ");
        }
    }elseif($getEndPointData != "" && $getEndPointData === "product"){
        if($getData['prdId']){
            $sendData = mysqli_query($condb, "SELECT * FROM products WHERE id = '".$getData['prdId']."' ");
        }else{

            $sendData = mysqli_query($condb, "SELECT * FROM products WHERE status = 'Yes' ");

        }
    }
} else {

    // $getData = " ERROR:- unsecure trasfer method...!!!  ";
    // $sendData = ['error1' => ' ERROR1:- unsecure trasfer method1...!!! '];

    errorSubmit("unsecure", "001", "unsecure trasfer method...!!!");
}

// main body end






// working end






// send data start

if (!empty($errorArray)) {

    $GLOBALS['sendArray'] = ['errorData' =>  $GLOBALS['errorArray']];
} elseif (!empty($sendData)) {

    while ($data = mysqli_fetch_assoc($sendData)) {
        array_push($GLOBALS['dataArray'], $data);
    }

    $GLOBALS['sendArray'] = ['sendData' => $GLOBALS['dataArray']];
} elseif ($GLOBALS['dataArray']) {
    $GLOBALS['sendArray'] = ['sendData' => $GLOBALS['dataArray']];
}

echo json_encode($GLOBALS['sendArray']);

// send data end
