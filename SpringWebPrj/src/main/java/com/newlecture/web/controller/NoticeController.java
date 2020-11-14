package com.newlecture.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/notice/")
public class NoticeController {

	// 3번째로 무식한 방법
//	private NoticeDao noticeDao = new JdbcNoticeDao();
	// 바람직한 방법
//	@Autowired /* 기본 생성자를 호출하면서 injection*/
//	private NoticeDao noticeDao;

	@GetMapping("list")
	public String list(@RequestParam(name = "p", defaultValue = "1") int page) {

		// 1번째로 무식한 방법
//		JdbcNoticeDao noticeDao = new JdbcNoticeDao();
		// 2번째로 무식한 방법
//		NoticeDao noticeDao = new JdbcNoticeDao();

//		int page = 1;
//		String query = "title";
//		String field = "";

//		List<NoticeView> list = null;
//		try {

//			list = noticeDao.getList(page, query, field);

//		} catch (ClassNotFoundException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		} catch (SQLException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}

		return "notice/list";
	}

	@GetMapping("detail")
	public String detail() {

		return "notice.detail";
	}

	@PostMapping("reg")
	public String reg(String title, String content) {

		System.out.println("title: " + title);
		System.out.println("content: " + content);

		return "notice.detail";
	}

}
