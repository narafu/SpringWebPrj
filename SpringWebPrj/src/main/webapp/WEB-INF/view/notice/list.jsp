<%@page import="java.util.List"%>
<%@page import="com.newlecture.web.entity.NoticeView"%>
<%@page import="com.newlecture.web.service.NoticeService"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="http://www.springframework.org/security/tags"%>

		<main class="main">
			<h2 class="main title">공지사항</h2>
			
			<div class="breadcrumb">
				<h3 class="hidden">경로</h3>
				<ul>
					<li>home</li>
					<li>고객센터</li>
					<li>공지사항</li>
				</ul>
			</div>
			
			<div class="search-form margin-top first align-right">
				<h3 class="hidden">공지사항 검색폼</h3>
				<form class="table-form">
					<fieldset>
						<legend class="hidden">공지사항 검색 필드</legend>
						<label class="hidden">검색분류</label>
						<select name="f">
							<option  value="title">제목</option>
							<option  value="writerId">작성자</option>
						</select> 
						<label class="hidden">검색어</label>
						<input type="text" name="q" value=""/>
						<input class="btn btn-search" type="submit" value="검색" />
					</fieldset>
				</form>
			</div>
			
			<div class="notice margin-top">
				<h3 class="hidden">공지사항 목록</h3>
				<table class="table">
					<thead>
						<tr>
							<th class="w60">번호</th>
							<th class="expand">제목</th>
							<th class="w100">작성자</th>
							<th class="w100">작성일</th>
							<th class="w60">조회수</th>
						</tr>
					</thead>
					<tbody>
					
					<c:forEach var="n" items="${list}" varStatus="st">	
					<tr>
						<td>${n.id}</td>
						<td class="title indent text-align-left"><a href="detail?id=${n.id}">${n.title}</a></td>
						<td>${n.writerId }</td>
						<td>
							${n.regdate}
						</td>
						<td>${n.hit }</td>
					</tr>
					</c:forEach>
					
					<%-- <%
					List<NoticeView> list = (List<NoticeView>)request.getAttribute("list");
					for(NoticeView n : list){
					%>
					<tr>
						<td><%=n.getId()%></td>
						<td class="title indent text-align-left"><a href="detail?id=<%=n.getId()%>"><%=n.getTitle() %></a></td>
						<td><%=n.getWriterId() %></td>
						<td>
							<%=n.getRegdate() %>	
						</td>
						<td><%=n.getHit() %></td>
					</tr>
					<%} %> --%>
							
										
					
					</tbody>
				</table>
			</div>
			
			<div class="indexer margin-top align-right">
				<h3 class="hidden">현재 페이지</h3>
				<div><span class="text-orange text-strong">1</span> / 1 pages</div>
			</div>

			<div class="margin-top align-center pager">	
		
	<div>
		
		
		<span class="btn btn-prev" onclick="alert('이전 페이지가 없습니다.');">이전</span>
		
	</div>
	<ul class="-list- center">
		<c:forEach var="i" begin="1" end="5">		
		<c:set var="orange" value="" />
		<c:if test="${i==1}">
			<c:set var="orange" value="-text- orange bold" />
		</c:if>		
		<li><a class="${orange}" href="?p=${i}&t=&q=" >${i}</a></li>
		</c:forEach>
	</ul>
	<%-- <ul class="-list- center">
		<c:forEach var="i" begin="1" end="5">
		
		<c:if test="${i==1}">
			<li><a class="-text- orange bold" href="?p=1&t=&q=" >${i}</a></li>
		</c:if>
		<c:if test="${i!=1}">
			<li><a class="" href="?p=1&t=&q=" >${i}</a></li>
		</c:if>
					
		</c:forEach>
	</ul> --%>
	<div>
		
		
			<span class="btn btn-next" onclick="alert('다음 페이지가 없습니다.');">다음</span>
		
	</div>
	
			</div>
		</main>
		<script src="../js/utils.js"></script>
		<script src="../js/notice/list.js"></script>
		
		
		
		
		