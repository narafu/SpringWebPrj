package com.newlecture.web.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.newlecture.web.entity.Notice;
import com.newlecture.web.entity.NoticeView;

@Mapper
public interface NoticeDao {

	@Select("SELECT * FROM Notice where ${field} like '%${query}%' ORDER BY regdate DESC LIMIT #{size} OFFSET ${offset}")
	List<NoticeView> getList(@Param("offset") int offset, @Param("size") int size, int page, String query,
			String field);

	@Select("SELECT * FROM Notice where id = ${id}")
	Notice get(int id);

	int insert(Notice notice);

	int update(Notice notice);

	int delete(int id);

}
