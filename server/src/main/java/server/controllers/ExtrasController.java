package server.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import server.dto.ExtrasDto;
import server.repositories.ExtrasRepository;
import server.services.ExtrasService;
import java.util.List;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api/extras")
public class ExtrasController {
    ExtrasService extrasService;

    @GetMapping
    public ResponseEntity<List<ExtrasDto>> getAllExtras(){
        return ResponseEntity.ok().body(extrasService.getAll());
    }

    @PostMapping
    public ResponseEntity<ExtrasDto> createExtras(@RequestBody ExtrasDto extrasDto) {
        extrasService.save(extrasDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(extrasService.save(extrasDto));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ExtrasDto> getExtras(@PathVariable Long id){
        return ResponseEntity.ok().body(extrasService.getExtras(id));
    }
}
