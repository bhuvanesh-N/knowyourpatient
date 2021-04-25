<?php
include 'config.php';
$email = $_REQUEST['name'];
$password = $_REQUEST['password'];
$sql = "SELECT password FROM doctordetails where email='$email'";
$activated = "SELECT activate FROM doctordetails where email='$email'";



$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
  // output data of each row
  while($row = mysqli_fetch_assoc($result)) {
      if($row["password"]==$password){
        $acresult = mysqli_query($conn, $activated);
if (mysqli_num_rows($acresult) > 0) {
  // output data of each row
  while($row = mysqli_fetch_assoc($acresult)) {
      if($row["activate"]=='T'){
        echo "Login SuccessfuL";
        break;
       
  }
  else{
      echo "Email Not Verified...Check Your Mail For Verification Link";
      break;
  }
}
} else {
  echo "Email Not Verified";
}
    
    break;
  }
  else{
      echo "Invalid User";
      break;
  }
}
} else {
  echo "Invalid User";
}





mysqli_close($conn);
?>
