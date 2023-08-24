package server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import server.models.Extras;
import server.repositories.ExtrasRepository;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api")
public class ExtrasController {
    @Autowired
    ExtrasRepository extrasRepository;

    @GetMapping("/extras")
    public ResponseEntity<List<Extras>> getAllExtras(){
        try{

            List<Extras> extras = new ArrayList<>(extrasRepository.findAll());

            if (extras.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(extras, HttpStatus.OK);
        }
        catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/extras")
    public ResponseEntity<Extras> createExtras(@RequestBody Extras extras){
        try{
            Extras _extras = extrasRepository.save(Extras.builder().gmo(extras.getGmo()).build());
            return new ResponseEntity<>(_extras, HttpStatus.CREATED);
        }
        catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
