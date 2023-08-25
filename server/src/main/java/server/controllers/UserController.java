//package server.controllers;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import server.models.User;
//import server.repositories.UserRepository;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@CrossOrigin(origins = "http://localhost:8080")
//@RestController
//@RequestMapping("/api/users")
//public class UserController {
//    UserRepository userRepository;
//
//    @GetMapping
//    public ResponseEntity<List<User>> getUsers(){
//        try {
//            List<User> users = new ArrayList<>(userRepository.findAll());
//
//            if (users.isEmpty()){
//                return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
//            }
//            return new ResponseEntity<>(users, HttpStatus.OK);
//
//        } catch (Exception e) {
//            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
//
//    @PostMapping
//    public ResponseEntity<User> createUser(@RequestBody User user){
//        try {
//            User _user = userRepository.save(new User(user.getReviews(), user.getFirstName(), user.getLastName(), user.getEmail(), user.getPassword(), user.getPhoneNumber(), user.getAddress(), user.getRole()));
//            return new ResponseEntity<>(_user, HttpStatus.CREATED);
//        } catch (Exception e){
//            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
//}
