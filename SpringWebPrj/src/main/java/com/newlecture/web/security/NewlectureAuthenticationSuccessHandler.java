package com.newlecture.web.security;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.savedrequest.SavedRequest;

public class NewlectureAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

	/*
	 * 객체로 쓰기위해 ioc에 넣으려면 @Component를 붙인다. 그러나 두고두고 쓸 것이 아니기 때문에 ioc에 담는 것 보다는, new로
	 * 생성해서 쓰자~
	 */

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
			Authentication authentication) throws IOException, ServletException {

		/* 인증이 성공한 후 할 업무 */
		System.out.println("로그인 성공!");

		HttpSession session = request.getSession();

		SavedRequest savedRequest = (SavedRequest) session
				.getAttribute("SPRING_SECURITY_SAVED_REQUEST"); /* return URL */

		/* 로그인 후 원하는 곳으로 보내는 코드 */
		if (savedRequest != null) {

			String returnURL = savedRequest.getRedirectUrl();
			response.sendRedirect(returnURL);

		} else {

			response.sendRedirect("/index");

		}

	}

}
