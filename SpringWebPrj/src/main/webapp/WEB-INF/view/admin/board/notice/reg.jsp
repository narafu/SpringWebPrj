<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<main>
	<h2 class="main title">공지사항 등록</h2>

	<div class="breadcrumb">
		<h3 class="hidden">breadlet</h3>
		<ul>
			<li>home</li>
			<li>게시글 관리</li>
			<li>공지사항</li>
		</ul>
	</div>

	<form action="reg" method="post" enctype="multipart/form-data">
		<div class="margin-top first">
			<h3 class="hidden">공지사항 입력</h3>
			<table class="table">
				<tbody>
					<tr>
						<th>제목</th>
						<td class="text-align-left text-indent text-strong text-orange"
							colspan="3"><input type="text" name="title" /></td>
					</tr>
					<tr>
						<th>첨부파일</th>
						<td colspan="3" class="text-align-left text-indent"><input
							type="file" name="file" /></td>
					</tr>
					<!--                                 <tr>
                                    <th>첨부파일</th>
                                    <td colspan="3" class="text-align-left text-indent">
           	                         <input type="file" name="file" /> </td>
                                </tr> -->
					<tr class="content">
						<td colspan="4">
							<style>
.html-area {
	min-height: 400px;
	border: 1px solid #797979;
}

.html-area * {
	all: unset;
}
</style> <script src="/js/editor/editor.js"></script>

							<div class="editor">
								<div class="toolbar">
									<button class="btn-bold">B</button>
								</div>
								<div class="html-area" contenteditable="true"></div>
								<textarea class="content" name="content"></textarea>
							</div>
						</td>
					</tr>
					<tr>
						<td colspan="4" class="text-align-right"><input
							class="vertical-align" type="checkbox" id="open" name="open"
							value="true"><label for="open" class="margin-left">바로공개</label>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="margin-top text-align-center">
			<input class="btn-text btn-default" type="submit" value="등록" /> <a
				class="btn-text btn-cancel" href="list">취소</a>
		</div>
	</form>

</main>