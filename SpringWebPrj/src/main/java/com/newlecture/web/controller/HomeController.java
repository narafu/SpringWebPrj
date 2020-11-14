package com.newlecture.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.newlecture.web.entity.Notice;

@Controller
public class HomeController {

	@GetMapping("/index")
	public String index() {
		
		
		
		return "root.index"; // "index.jsp" 이름의 파일을 찾는다. ("/index"에서..)
	}
	
	@GetMapping("/data")
	@ResponseBody
	public Notice data() {
		
//		return "hello";
//		return "alert('hello');";
		
		Notice notice = new Notice();
		notice.setId(1);
		notice.setTitle("hello");
		notice.setWriterId("newlec");
		notice.setHit(10);
		return notice;
		
	}
	
}
