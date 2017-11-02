<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%
    String ctxName =request.getContextPath();
    %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>:::HOMEPAGE:::</title>
</head>
<body>
  <div id="headerlink">
    <table width="100%" border="0">
      <tr align="right" valign="middle">
        <td>
        <a href="<%=ctxName%>/main/form">HOME</a>&nbsp;|&nbsp;  
        <a href="<%=ctxName%>/president/form">로그인</a> %>&nbsp;|&nbsp;
        <a href="<%=ctxName%>">회원목록</a>&nbsp;
        </td>
      </tr>
    </table>
  </div>
  <div class="menubar">
    <ul>
      <li><a href="#">Home</a>
        <ul>
          <li><a href="#">대표 이름</a></li>
          <li><a href="#">대표 연혁</a></li>
          <li><a href="#">대표님 한말씀</a></li>
        </ul>
      </li>
      <li><a href="#" id ="Products">Products</a>
        <ul>
          <li><a href="#">가게 이름</a></li>
          <li><a href="#">가게 위치</a></li>
          <li><a href="#">체인점 문의</a></li>
        </ul>
       </li>
       <li><a href="#">Company</a>
         <ul>
          <li><a href="#">????</a></li>
          <li><a href="#">????</a></li>
          <li><a href="#">????</a></li>
        </ul>
       </li> 
       <li><a href="#">Q&A</a>
        <ul>
          <li><a href="#">공지사항</a></li>
          <li><a href="#">게시판</a></li>
        </ul>
       </li>
    </ul>
  </div>
  
<style>
.menubar{
border:none;
border:0px;
margin:0px;
padding:0px;
font: 67.5% "Lucida Sans Unicode", "Bitstream Vera Sans", "Trebuchet Unicode MS", "Lucida Grande", Verdana, Helvetica, sans-serif;
font-size:14px;
font-weight:bold;
}

.menubar ul{
background: rgb(20,20,20);
height:50px;
list-style:none;
margin:0;
padding:0;
}

.menubar li{
float:left;
padding:0px;
}

.menubar li a{
background: rgb(20,20,20);
color:#cccccc;
display:block;
font-weight:normal;
line-height:50px;
margin:0px;
padding:0px 25px;
text-align:center;
text-decoration:none;

}

.menubar li a:hover, .menubar ul li:hover a{
background: rgb(20,20,20);
color:#FFFFFF;
text-decoration:none;
}

.menubar li ul{
background: rgb(20,20,20);
display:none; /* 평상시에는 드랍메뉴가 안보이게 하기 */
height:auto;
padding:0px;
margin:0px;
border:0px;
position:absolute;
width:200px;
z-index:200;
/*top:1em;
/*left:0;*/
}

.menubar li:hover ul{
display:block; /* 마우스 커서 올리면 드랍메뉴 보이게 하기 */
}

.menubar li li {
background: rgb(109,109,109);
display:block;
float:none;
margin:0px;
padding:0px;
width:200px;
}

.menubar li:hover li a{
background:none;
}

.menubar li ul a{
display:block;
height:50px;
font-size:12px;
font-style:normal;
margin:0px;
padding:0px 10px 0px 15px;
text-align:left;
}

.menubar li ul a:hover, .menubar li ul li:hover a{
background: rgb(71,71,71);
border:0px;
color:#ffffff;
text-decoration:none;
}

/* .menubar p{
clear:left;
} */
</style>

</body>
</html>