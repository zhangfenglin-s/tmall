<?php
    header("content-type:text/html;charset=utf-8");
	$con = mysql_connect("localhost","root","root");
	mysql_select_db("tmalluser");
	
	$name = $_POST["name"];
	$password = $_POST["password"];
	
	$reslut = mysql_query("select * from tmallusers where password = '$password' and name='$name'",$con);
	if(mysql_num_rows($reslut) == 1){
		echo "1";
	}else{
		echo"0";
	}
	mysql_close($con);
?>