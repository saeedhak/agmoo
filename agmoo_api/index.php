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
    }elseif($getEndPointData != "" && $getEndPointData === "addToCart"){

        if($getData['action'] == "insert"){
            $prdData = mysqli_fetch_assoc(mysqli_query($condb, "SELECT * FROM products WHERE id = '".$getData['prdId']."' "));
            $cartData = mysqli_query($condb, "SELECT * FROM cart WHERE session_id = '".$getData['sessionId']."' AND product_id = '".$getData['prdId']."'  ");
            if(mysqli_num_rows($cartData) > 0 && $prdData['stock_qty'] > $getData['cartQTY'] ){
                $cartData = mysqli_fetch_assoc($cartData);
                $__nowCartQty = $cartData['qty']+1;
                $__productPrice = $__nowCartQty * $prdData['actual_price'];
                $updateQuery = "UPDATE cart SET qty = '".$__nowCartQty."', total_price = '".$__productPrice."' WHERE id = '".$cartData['id']."' ";  
                if(mysqli_query($condb,$updateQuery)){
                    array_push($GLOBALS['dataArray'],['cartResponse' => 'addQty']);
                }
            }else{
                $__productPrice = $getData['cartQTY'] * $prdData['actual_price'];
                $insertQuery = "INSERT INTO cart SET session_id = '".$getData['sessionId']."', product_id = '".$getData['prdId']."', total_price = '".$__productPrice."', qty = '".$getData['cartQTY']."', actual_price = '".$prdData['actual_price']."' ";
                if(mysqli_query($condb, $insertQuery)){
                    array_push($GLOBALS['dataArray'],['cartResponse' => 'insertProductInCart']);
                }
            }
        }
    }elseif($getEndPointData != "" && $getEndPointData === "cart"){

        if($getData['action'] == "cardData"){

            $sendData = mysqli_query($condb, "SELECT C.*,PRD.large_img, PRD.pro_title, PRD.stock_qty FROM cart AS C
            INNER JOIN products AS PRD ON C.product_id = PRD.id
            WHERE C.session_id = '".$getData['sessionId']."'  ");
        
        }elseif($getData['action'] == "add" || $getData['action'] == "remove"){
            $myQuery = "";
            $getCardData =  mysqli_fetch_assoc(mysqli_query($condb, "SELECT * FROM cart WHERE id = '".$getData['cartId']."' "));
           
           if($getData['action'] == "add"){
            $nowCurrentQTY = $getCardData['qty']+1;
            $myQuery = "UPDATE cart SET qty = '".$nowCurrentQTY."' WHERE id = '".$getData['cartId']."' "; 
           }elseif($getData['action'] == "remove"){
            $nowCurrentQTY = $getCardData['qty']-1;
            $myQuery = "UPDATE cart SET qty = '".$nowCurrentQTY."' WHERE id = '".$getData['cartId']."' ";
           }

           if(mysqli_query($condb,$myQuery)){

            $sendData = mysqli_query($condb, "SELECT C.*,PRD.large_img, PRD.pro_title, PRD.stock_qty FROM cart AS C
            INNER JOIN products AS PRD ON C.product_id = PRD.id
            WHERE C.session_id = '".$getData['sessionId']."'  ");

           }

        }
    }



}elseif(isset($_REQUEST['formData']) && !empty($_REQUEST['formData']) && $_REQUEST['formData'] == "objFormData"){
    $getData = $_REQUEST['endPoint'];
    $getFormData = $_REQUEST;
    // user login
        if($getData != '' && $getData == 'userLogin'){

            $checkUserData = mysqli_fetch_assoc(mysqli_query($condb,"SELECT user_id, first_name FROM members_reg WHERE email = '".$getFormData['userEmail']."' AND password_my = '".$getFormData['userPassword']."' "));
            if(isset($checkUserData['user_id']) && $checkUserData['user_id'] != ''){
                mysqli_query($condb,"UPDATE cart SET session_id = '".$checkUserData['user_id']."' WHERE session_id = '".$getFormData['sessionId']."' ");
                $formResponse = $checkUserData['first_name'];
            }else{

                $formResponse = "invalid user...!!!";
            }
            array_push($GLOBALS['dataArray'],$formResponse);
        }elseif($getData != '' && $getData == 'userRegistration'){
            // check email 
            $checkEmail = mysqli_query($condb,"select user_id from members_reg where email = '".$getFormData['email']."'");
		if(mysqli_num_rows($checkEmail) > 0){
            $formResponse = "duplicate";
		}else{
            $insertQuery = "insert into members_reg set first_name = '".$getFormData['firstName']."', last_name = '".$getFormData['lastName']."', email = '".$getFormData['email']."', password = '".md5($getFormData['password'])."', password_my = '".$getFormData['password']."', mobile_phone = '".$getFormData['contact']."', bill_city = '".$getFormData['city']."', bill_zipcode = '".$getFormData['zipCode']."', bill_address = '".$getFormData['address']."'";
			if(mysqli_query($condb,$insertQuery)){
                $formResponse = "success";
			}else{
                $formResponse = "error";
            }
		} 
            // $insertQuery = ""

            // send data to global array
            array_push($GLOBALS['dataArray'],$formResponse);

        }
}else {

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
