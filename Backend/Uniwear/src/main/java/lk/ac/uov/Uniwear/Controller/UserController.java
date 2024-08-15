package lk.ac.uov.Uniwear.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lk.ac.uov.Uniwear.Model.User;
import lk.ac.uov.Uniwear.Service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
    
    @Autowired
    private UserService service;
    
    @CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174", "http://localhost:3000"})
    @GetMapping("{email}")
    public ResponseEntity<String> getPassword(@PathVariable("email") String email) {
        return new ResponseEntity<String>(service.getPswd(email), HttpStatus.OK);
    }
    
    @CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174", "http://localhost:3000"})
    @GetMapping("id/{email}")
    public ResponseEntity<String> getId(@PathVariable("email") String email) {
        return new ResponseEntity<String>(service.getId(email), HttpStatus.OK);
    }
    
    @CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174", "http://localhost:3000"})
    @PostMapping()
    public ResponseEntity<String> addUser(@RequestBody User user) {
        service.addUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body("New user added");
    }
}
