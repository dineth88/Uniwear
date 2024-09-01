package lk.ac.uov.Uniwear.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lk.ac.uov.Uniwear.Model.Shirt;
import lk.ac.uov.Uniwear.Service.ShirtService;


@RestController
@RequestMapping("/shirt")
public class ShirtController {
    
    @Autowired
    private ShirtService service;
    
    @CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174", "http://localhost:3000"})
    @PostMapping()
    public ResponseEntity<String> addShirt(@RequestBody Shirt shirt) {
        service.addShirt(shirt);
        return ResponseEntity.status(HttpStatus.CREATED).body("New shirt added");
    }
}