package com.newlecture.web.config;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.newlecture.web.security.NewlectureAuthenticationSuccessHandler;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private DataSource dataSource;

	@Override
	protected void configure(HttpSecurity http) throws Exception {

		/* 권한이 필요한 설정 - 어떤 URL에 어떤 인증이 필요한지 설정해주어야.. */
		http.authorizeRequests()
					.antMatchers("/admin/**").hasRole("ADMIN") /* DB에서는 ROLE_ADMIN */
					.antMatchers("/teacher/**").hasAnyRole("ADMIN", "TEACHER") /* DB에서는 ROLE_TEACHER */
					.antMatchers("/student/**").hasRole("STUDENT") /* DB에서는 ROLE_STUDENT */
					.antMatchers("/member/home").authenticated()
					.and()
					
				.formLogin()
					.loginPage("/member/login") /* get url */
					.loginProcessingUrl("/member/login") /* post url */
					.defaultSuccessUrl("/index") /* 로그인 후 이동하는 기본 페이지 */
					.successHandler(new NewlectureAuthenticationSuccessHandler()) /* 인증이 성공한 후 할 업무 */
//					.failureHandler(authenticationFailureHandler)
					.and()
					
				.logout()
					.logoutUrl("/member/logout") /* 로그아웃  페이지, 설정하지 않으면 "/logout" */
					.logoutSuccessUrl("/index") /* 로그아웃 성공 후 페이지 */
					.invalidateHttpSession(true) /* 세션을 지운다*/
					.and()
					
				.csrf()
					.disable();

		/* 기본제공 로그인 페이지
			super.configure(http); */

	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {

		/*
		 * DB를 쓰지 않고 메모리상에서 인증을 구현할 때 auth.inMemoryAuthentication();
		 */

		/*
		 * DB의 정보를 통해서 인증을 구현할 때 jdbcAuthentication();
		 */

		/*
		 * 도메인 컨트롤러를 통해서 인증을 구현할 때 auth.ldapAuthentication();
		 */

		/*
		 * auth .inMemoryAuthentication() .withUser("newlec") .password("{noop}111")
		 * .roles("ADMIN") .and() .withUser("dragon") .password("111")
		 * .roles("TEACHER");
		 */
		// {noop}은 패스워드가 암호화되지 않았음을 나타낸다.

		auth.jdbcAuthentication().dataSource(dataSource).usersByUsernameQuery(
				"select uid id, pwd password, 1 enabled from Member where uid = ?") /* id, password, enabled 컬럼명 필수 */
				.authoritiesByUsernameQuery("select uid id, 'ROLE_ADMIN' roleId from Member where uid=?") /*
																											 * id,
																											 * roleId
																											 * 컬럼명 필수
																											 */
				.passwordEncoder(new BCryptPasswordEncoder()); /* 암호화 도구 - 복호화해서 비교하는 게 아니라, 원본은 모른 채 암호화된 것끼리 비교한다. */

	}

}
