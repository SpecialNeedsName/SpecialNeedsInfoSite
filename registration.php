<?php
require_once('config.php');
?>

<!DOCTYPE html>
<html>
    <head>
        <title>User Registration</title>
        <link rel="stylesheet" href="css/bootstrap.css">
    </head>
<body>
    
<div>
    
    <?php
    
    if(isset($_POST['create'])){
        $firstname = $_POST['firstname'];
        $lastname = $_POST['lastname'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        
        $sql = "INSERT INTO users(firstname, lastname, email, password ) VALUES(?,?,?,?)";
        $stmtinsert = $db->prepare($sql);
        $result = $stmtinsert->execute([$firstname, $lastname, $email, $password]);
        if($result){
            echo 'Successfully saved.';
        }else{
            echo 'There were errors while saving the data.';
        }
        
    }
    
    ?>
    
</div>
    
    
<div>
    <form action="registration.php" method="post">
        <div class="container">
            
            <div class="row">
                <div class="col-sm-3">
                
            <h1>Registration</h1>
            <p>Please enter your information.</p>
            <hr class="mb-3">
            <label for="firstname"><b>First Name</b></label>
            <input class="form-control" type="text" name="firstname" required>
            
            <label for="lastname"><b>Last Name</b></label>
            <input class="form-control" type="text" name="lastname" required>
            
            <label for="email"><b>Email Address</b></label>
            <input class="form-control" type="email" name="email" required>
            
            <label for="password"><b>Password</b></label>
            <input class="form-control" type="password" name="password" required>
            <hr class="mb-3">
            <input class="btn btn-primary" type="submit" name="create" value="Sign Up">
            
                </div>
            </div>
        </div>
    </form>
</div>
    
</body>
</html>
