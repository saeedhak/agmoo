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
            if($getData['prdImg'] && $getData['prdImg'] == 'Yes' ){
                $sendData = mysqli_query($condb, "SELECT * FROM products_img WHERE pro_id = '".$getData['prdId']."' ");
            }
        }else{

            $sendData = mysqli_query($condb, "SELECT * FROM products WHERE status = 'Yes' ");

        }
    }elseif($getEndPointData != "" && $getEndPointData === "FeatureProduct"){
            $sendData = mysqli_query($condb, "SELECT * FROM products WHERE status = 'Yes' AND feature_status = 'Yes' ");
    }elseif($getEndPointData != "" && $getEndPointData === "BestSellerProduct"){
        $sendData = mysqli_query($condb, "SELECT * FROM products WHERE status = 'Yes' AND new_arrival = 'Yes' ");
    }elseif($getEndPointData != "" && $getEndPointData === "NewArrivalProduct"){
        $sendData = mysqli_query($condb, "SELECT * FROM products WHERE status = 'Yes' AND new_prods = 'Yes' ");
    }elseif($getEndPointData != "" && $getEndPointData === "HotProduct"){
        $sendData = mysqli_query($condb, "SELECT * FROM products WHERE status = 'Yes' AND hot_prods = 'Yes' ");
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
        
        }elseif($getData['action'] == "add" || $getData['action'] == "remove" || $getData['action'] == "delete"){
            $myQuery = "";
            $getCardData =  mysqli_fetch_assoc(mysqli_query($condb, "SELECT * FROM cart WHERE id = '".$getData['cartId']."' "));
           
           if($getData['action'] == "add"){
            $nowCurrentQTY = $getCardData['qty']+1;
            $myQuery = "UPDATE cart SET qty = '".$nowCurrentQTY."' WHERE id = '".$getData['cartId']."' "; 
           }elseif($getData['action'] == "remove"){
            $nowCurrentQTY = $getCardData['qty']-1;
            $myQuery = "UPDATE cart SET qty = '".$nowCurrentQTY."' WHERE id = '".$getData['cartId']."' ";
           }elseif($getData['action'] == "delete"){
            $myQuery = "DELETE FROM cart WHERE id = '".$getData['cartId']."' ";
           }

           if(mysqli_query($condb,$myQuery)){

            $sendData = mysqli_query($condb, "SELECT C.*,PRD.large_img, PRD.pro_title, PRD.stock_qty FROM cart AS C
            INNER JOIN products AS PRD ON C.product_id = PRD.id
            WHERE C.session_id = '".$getData['sessionId']."'  ");

           }

        }
    }elseif($getEndPointData != "" && $getEndPointData === "checkout"){
        $CHECKOUT_ONlOAD_DATA = array(
            'address' => [],
            'cartSubtotal' =>[] 
        );
        if($getData['sessionId']){
            $getUserData = mysqli_fetch_assoc(mysqli_query($condb,"SELECT bill_address FROM members_reg WHERE user_id = '".$getData['sessionId']."' "));
            array_push($CHECKOUT_ONlOAD_DATA['address'], $getUserData['bill_address']);
            $getCardData = mysqli_fetch_assoc(mysqli_query($condb,"SELECT SUM(total_price) AS sub_total FROM cart WHERE session_id = '".$getData['sessionId']."' "));
            array_push($CHECKOUT_ONlOAD_DATA['cartSubtotal'], $getCardData['sub_total']);
            
            array_push($GLOBALS['dataArray'],$CHECKOUT_ONlOAD_DATA);

        }
    }elseif($getEndPointData != "" && $getEndPointData === "orderSubmit"){
        if($getData['sessionId']){
            //get current date 
            $sortDate = date("Y-m-d");
            // get user details
            $getUserDetails = mysqli_fetch_assoc(mysqli_query($condb,"SELECT * FROM members_reg WHERE user_id = '".$getData['sessionId']."' "));
            // get cart data 
            $getCartDetails = mysqli_query($condb,"SELECT * FROM cart WHERE session_id = '".$getData['sessionId']."' ");
            // total cart product price 
            $totalCartProductPrice = mysqli_fetch_assoc(mysqli_query($condb,"SELECT SUM(`total_price`) As cartProductTotalPrice FROM `cart` WHERE `session_id` = '".$getData['sessionId']."' "));
            // create order no 
            $OrderConfirmationNumber = rand(100000,999990);
            // insert order main for create user order behalf of one time checkout
            $insertOrd_qry = "INSERT INTO  `order_main`  SET 
            `user_id` = '".$getUserDetails['user_id']."',
            `ord_confirm_num`='".$OrderConfirmationNumber."',
            `subtotal_amount`='".$totalCartProductPrice['cartProductTotalPrice']."',
            `total_amount` = '".$totalCartProductPrice['cartProductTotalPrice']."',
            `user_email` ='".$getUserDetails['email']."',
            `shipping_fname`='".$getUserDetails['first_name']."',
            `shipping_lname`='".$getUserDetails['last_name']."',
            `shipping_phone`='".$getUserDetails['mobile_phone']."',
            `shipping_address`='".$getUserDetails['bill_address']."',
            `shipping_city`='".$getUserDetails['bill_city']."',
            `shipping_zipcode` ='".$getUserDetails['bill_zipcode']."',
            `order_status`='Inprocess',
            `payment_status`='Pending',
            `payment_method`='COD',
            `sort_date`='".$sortDate."',
            `currency`= 'PKR '";

            $insertQry=mysqli_query($condb, $insertOrd_qry);

            // get order id behalf of orderMain
            $OrderId=mysqli_insert_id($condb);

            // insert order details all cart => this checkout data
            while($rc = mysqli_fetch_array($getCartDetails)){
                $insertOrd_Detail_qry = "INSERT INTO `order_detail` SET 
                `orderid`='".$OrderId."',  
                `user_id`='".$getUserDetails['user_id']."',
                `prod_id`='".$rc['product_id']."',
                `prod_qty`='".$rc['qty']."',
                `unit_price`='".$rc['actual_price']."',
                `discount_unit_value`='".$rc['discount_value']."',
                `total_price`='".$rc['total_price']."',
                `sort_date`='".$sortDate."'";
                
                $rs_ordDetailQry=mysqli_query($condb, $insertOrd_Detail_qry);

                // 
                    
                    $TotalProdQty = mysqli_fetch_assoc(mysqli_query($condb,"SELECT `stock_qty` from `products` WHERE id = '".$rc['product_id']."'"));
                    $LessItem = $TotalProdQty['stock_qty']- $rc['qty'];
                    $UpdateQty = mysqli_query($condb,"UPDATE `products` SET `stock_qty` = '".$LessItem."' WHERE `id` = '".$rc['product_id']."'");
                    $updatestatus = mysqli_query($condb,"UPDATE `order_main` SET `stock_qty_less` = 'Yes' WHERE `id` = '".$OrderId."'");
                }
            // now cart empty
            $empty_cart = mysqli_query($condb, "DELETE FROM `cart` WHERE `session_id`='".$getData['sessionId']."'");
            // array push data for response  
            array_push($GLOBALS['dataArray'],['response' => 'done', 'orderId' => $OrderConfirmationNumber]);


        }
    }elseif($getEndPointData != "" && $getEndPointData === "userDataAfterLogin"){
        if($getData['sessionId']){
            $getUserDataAfterLogin = array(
                'userDetails' => [],
                'userOrderDetails' =>[] 
            );
            $getUserDetails = mysqli_fetch_assoc(mysqli_query($condb, "SELECT * FROM members_reg WHERE user_id = '".$getData['sessionId']."' "));
            array_push($getUserDataAfterLogin['userDetails'], $getUserDetails);
            $getUserOrderDetails = mysqli_query($condb, "SELECT id, ord_confirm_num,subtotal_amount,order_status FROM order_main WHERE user_id = '".$getData['sessionId']."' ");
                while($data = mysqli_fetch_assoc($getUserOrderDetails)){

                    array_push($getUserDataAfterLogin['userOrderDetails'],$data);
                }

            array_push($GLOBALS['dataArray'],$getUserDataAfterLogin);
        }
    }elseif($getEndPointData != "" && $getEndPointData === "orderDetailsItem"){
            $getOrderDetailsItem = array(
                'userOrderDetailsItem' =>[] 
            );
            $getUserOrderDetailsItem = mysqli_query($condb, "SELECT PRD.*, OD.prod_qty, OD.total_price FROM order_detail AS OD 
            INNER JOIN products AS PRD ON OD.prod_id = PRD.id 
            WHERE OD.orderid = '".$getData['orderId']."' ");
                while($data = mysqli_fetch_assoc($getUserOrderDetailsItem)){

                    array_push($getOrderDetailsItem['userOrderDetailsItem'],$data);
                }

            array_push($GLOBALS['dataArray'],$getOrderDetailsItem);

    }elseif($getEndPointData != "" && $getEndPointData === "getAllBanner"){

        $sendData = mysqli_query($condb, "SELECT * FROM sliders_img WHERE status = 'Yes' ");
    }



}elseif(isset($_REQUEST['formData']) && !empty($_REQUEST['formData']) && $_REQUEST['formData'] == "objFormData"){
    $getData = $_REQUEST['endPoint'];
    $getFormData = $_REQUEST;
    // user login
        if($getData != '' && $getData == 'userLogin'){

            $checkUserData = mysqli_fetch_assoc(mysqli_query($condb,"SELECT user_id, first_name FROM members_reg WHERE email = '".$getFormData['userEmail']."' AND password_my = '".$getFormData['userPassword']."' "));
            if(isset($checkUserData['user_id']) && $checkUserData['user_id'] != ''){
                mysqli_query($condb,"UPDATE cart SET session_id = '".$checkUserData['user_id']."' WHERE session_id = '".$getFormData['sessionId']."' ");
                $formResponse = ['userId' => $checkUserData['user_id'] ,'userName' => $checkUserData['first_name']];
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

        }elseif($getData != '' && $getData == 'updateUserForm'){
            $UPDATE_USER_DETAILS = array(
                'formResponse' => [],
                'userData' =>[] 
            );

            //update user detail 
            $updateUser_qry = "UPDATE `members_reg` SET
            `first_name`='".addslashes($getFormData['firstName'])."',
            `last_name`='".addslashes($getFormData['lastName'])."',
            `mobile_phone`='".addslashes($getFormData['contact'])."',
            `bill_city`='".addslashes($getFormData['city'])."',
            `bill_zipcode`='".addslashes($getFormData['zipCode'])."',
            `bill_address` ='".addslashes($getFormData['address'])."',
            `password` ='".md5($getFormData['password'])."',
            `password_my` ='".addslashes($getFormData['password'])."'
            WHERE `user_id`='".$getFormData['userId']."' "; 
            // tun query
            if(mysqli_query($condb, $updateUser_qry)){
                $getUserDetails = mysqli_fetch_assoc(mysqli_query($condb, "SELECT * FROM members_reg WHERE user_id = '".$getFormData['userId']."' "));
                array_push($UPDATE_USER_DETAILS['formResponse'],'update');
                array_push($UPDATE_USER_DETAILS['userData'],$getUserDetails);
                array_push($GLOBALS['dataArray'], $UPDATE_USER_DETAILS);
            }
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
