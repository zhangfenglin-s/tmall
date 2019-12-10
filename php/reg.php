<?php
	header("content-type:text/html;charset=utf-8");
	
	$con = mysql_connect("localhost","root","root");
	mysql_select_db("tmalluser");
	$name = $_POST["name"];
	$flag4 = $_POST["flag4"];
	
	
	if($flag4 == "blur"){
		$result1 = mysql_query("select * from tmallusers where name='$name'",$con);
		if(mysql_num_rows($result1) == "1"){
			echo "1";
		}else{
			echo"0";
		}
	}
	
	if($flag4 == "submit"){
		$password = $_POST["password"];
		$result = mysql_query("select * from tmallusers where password = '$password' and name='$name'",$con);
		
		if(mysql_num_rows($result) == "1"){
			echo "1";
		}else{
			mysql_query("insert into tmallusers values('$name','$password')", $con);
			echo"0";
		}
	}
	
	mysql_close($con);
?>