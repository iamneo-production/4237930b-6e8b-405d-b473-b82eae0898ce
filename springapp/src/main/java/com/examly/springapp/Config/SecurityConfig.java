// author-> Arulsaravanan

package com.examly.springapp.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{

     // Authorization
     @Override
     protected void configure(HttpSecurity http) throws Exception {
         
         http.cors();
         http.csrf().disable()
             .authorizeRequests()
             
             .antMatchers("/**").permitAll()
             // .antMatchers("/admin/signup").permitAll()
             // .antMatchers("/user/signup").permitAll()
             // .antMatchers("/admin/login").permitAll()
             // .antMatchers("/user/login").permitAll()
             // .antMatchers("/login/checkUserRole/**").permitAll()
             // .antMatchers("/register/check/**").permitAll()
 
             .antMatchers("/user/**").hasAuthority("User")
             .antMatchers("/admin/**").hasAuthority("Admin")
 
             // .anyRequest().authenticated()
             .and().httpBasic();
     }
 
     @Bean
     AuthenticationProvider authenticationProvider()
     {
         DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
         provider.setUserDetailsService(userDetailsService());
         provider.setPasswordEncoder(passwordEncoder());
         return provider; 
     }
 
 
     @Bean
     public PasswordEncoder passwordEncoder()
     {
         return new BCryptPasswordEncoder();
     }
 
 
     @Bean
     public UserDetailsService userDetailsService()
     {
         return new UserInfoUserDetailService();
     }
    
}
