package com.newlecture.web.controller.api;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.newlecture.web.entity.Notice;
import com.newlecture.web.entity.NoticeView;
import com.newlecture.web.service.NoticeService;

@RestController("apiNoticeController")
@RequestMapping("/api/notice/")
public class NoticeController {

	@Autowired
	private NoticeService noticeService;

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("list")
	public List<NoticeView> list(@RequestParam(name = "p", defaultValue = "1") int page,
			@RequestParam(name = "q", defaultValue = "") String query,
			@RequestParam(name = "f", defaultValue = "title") String field) {

		List<NoticeView> list = new ArrayList<>();
		list = noticeService.getList(page, query, field);

		return list;
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("{id}")
	public Notice detail(@PathVariable("id") int id) {

		Notice notice = null;
		notice = noticeService.get(id);

		return notice;
	}

}
