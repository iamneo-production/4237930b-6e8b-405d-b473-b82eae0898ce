// author-> Arulsaravanan

package com.examly.springapp.Config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.examly.springapp.Model.UserModel;
import com.examly.springapp.Service.UserService;


@Service
public class UserInfoUserDetailService implements UserDetailsService{


    @Autowired
    private UserService userService;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        UserModel user = userService.findByEmail(email);
        
        if(user == null){
            throw new UsernameNotFoundException("user not found");
            }
            return new UserInfoDetails(user);
        }

    }
