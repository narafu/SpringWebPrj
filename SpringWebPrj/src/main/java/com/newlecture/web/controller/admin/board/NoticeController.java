package com.newlecture.web.controller.admin.board;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.security.Principal;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.newlecture.web.entity.Notice;
import com.newlecture.web.entity.NoticeView;
import com.newlecture.web.service.NoticeService;

@Controller("adminNoticeController")
@RequestMapping("/admin/board/notice/")
public class NoticeController {

	@Autowired
	private NoticeService noticeService;

	@GetMapping("list")
	public String list(@RequestParam(name = "p", defaultValue = "1") int page,
			@RequestParam(name = "q", defaultValue = "") String query,
			@RequestParam(name = "f", defaultValue = "title") String field, Model model) {

			List<NoticeView> list = noticeService.getList(page, query, field);
//			List<NoticeView> list = noticeService.getListWithComments(page, query, field);
			model.addAttribute("list", list);

		return "admin.board.notice.list";
	}

	@GetMapping("{id}")
	public String list(@PathVariable("id") int id, Model model) {

			Notice notice = noticeService.get(id);
			model.addAttribute("n", notice);

		return "admin.board.notice.detail";
	}

	@GetMapping("reg")
	public String reg() {

		return "admin.board.notice.reg";
	}

	@PostMapping("reg-ajax")
	public String reg(@RequestBody Notice notcie) {

		/*
		 * ex) json = {id=1, title="hello"}
		 * 
		 * @RequestBody는 setter를 이용해서 json을 객체에 담아준다.
		 */

		return "ok";
	}

	@PostMapping("reg")
	public String reg(Notice notice, MultipartFile file, HttpServletRequest request, Principal principal)
			throws IOException {

		String uid = principal.getName(); /* 사용자가 입력한 아이디를 받아옴!! */
		notice.setWriterId(uid);

		/*
		 * 파일명 출력 System.out.println(file.getOriginalFilename());
		 */

		String path = request.getServletContext().getRealPath("/upload/"); // 상대경로를 입력하고 실제경로를 얻음
		// 폴더 upload

		File file1 = new File(path);
		if (!file1.exists()) // 존재하지 않다면 false
			file1.mkdir(); // file1 폴더를 만들어줌

		path += file.getOriginalFilename();

		// 출력하기위한 output stream path에 출력함
		FileOutputStream os = new FileOutputStream(path);

		InputStream is = file.getInputStream();

		byte[] buf = new byte[1024];
		int len = 0;
		while ((len = is.read(buf)) != -1) // buf사이즈 만큼 read함 // is.read(buf) -> 다 못채웠으면 LEN만큼 반환함
			os.write(buf, 0, len);

		return "redirect:list";

	}

}
