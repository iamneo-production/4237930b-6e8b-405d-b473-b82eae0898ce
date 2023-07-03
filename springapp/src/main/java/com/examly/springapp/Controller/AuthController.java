// author-> Arulsaravanan
package com.examly.springapp.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.examly.springapp.Model.LoginModel;
import com.examly.springapp.Model.UserModel;
import com.examly.springapp.Service.UserService;

@RestController
@RequestMapping
// change the origin link as per your workspace- port-8081 link
@CrossOrigin(origins = "https://8081-addcabcdecadbcffbbedebaebcdacaee.project.examly.io")
public class AuthController {

    @Autowired
    private UserService userService;

    //CHECK THE USER AVAILABLE IN DB
    @PostMapping("/user/login")
    public Boolean isUserPresent(@RequestBody LoginModel data)
    {
        Boolean flag = userService.userpresent(data);
        return flag;
    }

    //CHECK THE ADMIN AVAILABLE IN DB
    @PostMapping("/admin/login")
    public Boolean isAdminPresent(@RequestBody LoginModel data)
    {
        Boolean flag = userService.adminpresent(data);
        return flag;
    }

    //check the existing user availability by the email
    @GetMapping("/register/check/{email}")
    public Boolean checkByEmail(@PathVariable String email)
    {
        Boolean flag = userService.checkuser(email);
        return flag;
    }

     //check the existing user/adminRole by email
     @GetMapping("/login/checkUserRole/{email}")
     public String checkRoleByEmail(@PathVariable String email)
     {
         String userRole = userService.checkRoleByEmail(email);
         return userRole;
     }

    
    //SAVE THE USER DATA'S INTO DB
    @PostMapping("/user/signup")
    public String saveUser(@RequestBody UserModel user)
    {
        userService.saveuser(user);
        return "User added"; 
    }

    //SAVE THE ADMIN DATA'S INTO DB
    @PostMapping("/admin/signup")
    public String saveAdmin(@RequestBody UserModel user)
    {
        userService.saveuser(user);
        return "Admin added"; 
    }    
}
