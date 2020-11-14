package com.newlecture.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.newlecture.web.dao.NoticeDao;
import com.newlecture.web.entity.Notice;
import com.newlecture.web.entity.NoticeView;

//@Component (가능 but 더 특화된 service 사용)
//@Repository (dao에 사용)
@Service
public class NoticeService {

	@Autowired
	private NoticeDao noticeDao;
//	private CommentDao commentDao;

	public List<NoticeView> getList(int page, String query, String field) {

		int offset = (page - 1) * 10; // 1-> 0, 2-> 10, 3-> 20 이 되게 만들어야한다.
		int size = 10;

		return noticeDao.getList(offset, size, page, query, field);
	}
	
	public Notice get(int id) {

		return noticeDao.get(id);
	}

//	public List<NoticeView> getListWithComments(int page, String query, String field) {
//		
//		List<NoticeView> list = getList(page, query, field);
//		for(NoticeView n : list) {
//			List<Comment> cmts = commentDao.getListTop(n.getId());
//			n.setComments(cmts);
//		}
//		
//		return list;
//	}

}
