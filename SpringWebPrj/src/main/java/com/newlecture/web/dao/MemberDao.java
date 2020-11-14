package com.newlecture.web.dao;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.newlecture.web.entity.Member;

@Mapper
public interface MemberDao {

	@Insert("INSERT INTO Member(uid, pwd, name) VALUES(#{uid}, #{pwd}, #{name})")
	public int insert(Member member);

	@Select("SELECT * FROM Member WHERE uid = #{uid}")
	public Member get(@Param("uid") String uid);

}
