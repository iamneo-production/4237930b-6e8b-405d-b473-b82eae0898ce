// author-> SindhupriyaDharshini

package com.examly.springapp.Service;
import com.examly.springapp.Model.LoginModel;
import com.examly.springapp.Model.UserModel;

public interface UserService {


    //for saving the datas of user/admin (Registraion page)
    UserModel saveuser(UserModel newuser);

    //for finding the user by email
    UserModel findByEmail(String email);

    //for checking the datas of user and admin (Login page)
    Boolean userpresent(LoginModel data);
    Boolean adminpresent(LoginModel data);
    
    //check the user availability by the email
    Boolean checkuser(String email);

    //check the userrole by the email
    String checkRoleByEmail(String email);
 
    //check the userrId by the email
    int getIdByEmail(String email);

    



}

    

