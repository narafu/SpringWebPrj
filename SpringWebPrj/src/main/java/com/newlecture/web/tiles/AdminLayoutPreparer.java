package com.newlecture.web.tiles;

import java.util.Map;

import org.apache.tiles.AttributeContext;
import org.apache.tiles.preparer.ViewPreparer;
import org.apache.tiles.request.Request;
import org.springframework.beans.factory.annotation.Autowired;

import com.newlecture.web.service.NoticeService;

public class AdminLayoutPreparer implements ViewPreparer {

	@Autowired
	private NoticeService categoryService;

	@Override
	public void execute(Request tilesContext, AttributeContext attributeContext) {

		Map<String, Object> model = tilesContext.getContext("request");

//		Map<String, String> cate1 = new HashMap<>();
//		cate1.put("title", "수업노트");
//		Map<String, String> cate2 = new HashMap<>();
//		cate2.put("title", "코드예제");
//
//		List<Map<String, String>> categories = new ArrayList<>();
//		categories.add(cate1);
//		categories.add(cate2);

//		try {
			
			model.put("categories", categoryService.getList(1, "", "title"));
//			
//		} catch (ClassNotFoundException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		} catch (SQLException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}

	}

}
