<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix='c' uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<jsp:include page="../main/header.jsp"></jsp:include>
<title>로그인</title>
<style>
  .login{
    float: right;
    border: 1px solid black;
  }

</style>
</head>
<body>



<div class="login">
<h1>회원 로그인</h1>
<form action='login.do' method='POST'>
<p>
<input type="radio" name="userType" value="master" checked> 관리자
<input type="radio" name="userType" value="president" checked> 사장
</p>
<p>ID : <input type='text' name='p_id' value='${coockie.p_id.value}'></p>
<p>암호 : <input type='password' name='password'></p>
<input type='checkbox' name='saveId'> 아이디 저장
<p><button>로그인</button></p>
</form>
<a href='join.html'>회원가입</a>
</div>
</body>
</html>