// author-> SindhupriyaDharshini

package com.examly.springapp.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.examly.springapp.Model.LoginModel;
import com.examly.springapp.Model.UserModel;
import com.examly.springapp.Repository.UserRepository;
import com.examly.springapp.Exception.ResourceNotFoundException;
@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userrepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    //save the user and admin
    @Override
    public UserModel saveuser(UserModel newuser)
    {
        newuser.setPassword(passwordEncoder.encode(newuser.getPassword()));
        return userrepository.save(newuser);  
    }

    //check the user present or not
    @Override
    public Boolean userpresent(LoginModel data) {

        UserModel user = userrepository.findByEmail(data.getEmail());
        if(user != null && user.getUserRole().equals("User") && passwordEncoder.matches(data.getPassword(), user.getPassword())) {
            return true;
        }
        return false;
    }

    //check the admin present or not
    @Override
    public Boolean adminpresent(LoginModel data) {

        UserModel user = userrepository.findByEmail(data.getEmail());
        if(user != null && user.getUserRole().equals("Admin") && passwordEncoder.matches(data.getPassword(), user.getPassword())) {
            return true;
        }
        return false;
    }

    //check the user availability by the email
    @Override
    public Boolean checkuser(String email) {

        UserModel user = userrepository.findByEmail(email);
        if(user != null ) {
            return true;
        }
        return false;
        
    }

    //check the userRole by the email
    @Override
    public String checkRoleByEmail(String email) {

        UserModel user = userrepository.findByEmail(email);
        if(user != null)
            return user.getUserRole();

        else
            return "EmailId Not available";           
    }

    //for finding the user by email
    @Override
    public UserModel findByEmail(String email) {

        UserModel user = userrepository.findByEmail(email);
        return user;
    }

    //for finding the userId by email
    @Override
    public int getIdByEmail(String email) {
        UserModel user = userrepository.findByEmail(email);
        return user.getUserId();
    }

    


}
    

