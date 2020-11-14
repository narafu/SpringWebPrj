<%@page import="java.util.List"%>
<%@page import="com.newlecture.web.entity.NoticeView"%>
<%@page import="com.newlecture.web.service.NoticeService"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>

<!DOCTYPE html>
<html>

<head>

    <title>
    	<tiles:insertAttribute name="title" ignore="true"/>
   	</title>
   	
    <meta charset="UTF-8">
    <link href="/css/customer/layout.css" type="text/css" rel="stylesheet" />
    <link href='<tiles:getAsString name="css"/>' type="text/css" rel="stylesheet" />
    <style>
    
        #visual .content-container{	
            height:inherit;
            display:flex; 
            align-items: center;
            
            background: url("../../images/customer/visual.png") no-repeat center;
        }
    </style>
</head>

<body>
    <!-- header 부분 -->

    <%-- <jsp:include page="../inc/header.jsp" /> --%>
    <tiles:insertAttribute name="header" />

	<!-- --------------------------- <visual> --------------------------------------- -->
	<!-- visual 부분 -->
	
	<div id="visual">
		<div class="content-container"></div>
	</div>
	<!-- --------------------------- <body> --------------------------------------- -->
	<div id="body">
		<div class="content-container clearfix">

			<!-- --------------------------- aside --------------------------------------- -->
			<tiles:insertAttribute name="aside" />

			
			<!-- --------------------------- main --------------------------------------- -->
			<tiles:insertAttribute name="main" />
			
		</div>
	</div>

    <!-- ------------------- <footer> --------------------------------------- -->
		<%-- <jsp:include page="../inc/footer.jsp" /> --%>
		<tiles:insertAttribute name="footer" />
        
    </body>
    
    </html>