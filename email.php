<?php 

if (isset($_POST['submit'])) {
    // Get Form Data 
    $name = preg_replace('!\s+!', ' ', $_POST['name']);
    $email = $_POST['email'];
    $content = preg_replace('!\s+!', ' ', $_POST['content']);
    
    $json = array(
        'success'   => false,
        'message'    => null
    );
    
    function jsonArray($success, $message) {
        $json['success'] = $success;
        $json['message'] = $message;
        
        return json_encode($json);
    }
    
    if (empty($name) || empty($email) || empty($content)) {
        echo jsonArray(false, "Wszystkie pola sa wymagane");
        exit();
    } else {
        if (!preg_match("/^[a-zA-Z0-9]+$/", $name)) {
            echo jsonArray(false, "Niedozowolne znaki w polu imie");
            exit();
        } else {
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo jsonArray(false, "Niepoprawny E-mial");
            exit();
            } else {
                if (strlen($name) < 3 || strlen($name) > 30) {
                    echo jsonArray(false, "Pole imie powinno zawierac od 3 do 30 znakow");
                    exit();
                } else {
                    if (strlen($content) < 3 || strlen($content) > 1000) {
                        echo jsonArray(false, "Pole wiadomosc powinno zawierac od 3 do 30 znakow");
                        exit();
                    } else {
                        if (!preg_match("/^[\s\p{L}0-9,.]+$/", $content)) {
                            echo jsonArray(false, "Niedozwolone znaki w polu wiadomosc");
                            exit();
                        } else {
                            echo jsonArray(true, "Sukcess");
                            exit();
                        }
                    }
                }
            }
        }
    }
} else {
    echo json_encode('ERROR');
    exit();
}

?>
