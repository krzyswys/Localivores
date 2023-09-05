package server.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import server.dto.Dto;
import server.models.Model;
import server.services.CommonService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:8080")
public class CommonController<DtoImplementation extends Dto, ModelImplementation extends Model> {
    protected CommonService<DtoImplementation, ModelImplementation> commonService;

    public CommonController(CommonService<DtoImplementation, ModelImplementation> commonService) {
        this.commonService = commonService;
    }

    @GetMapping
    public ResponseEntity<List<DtoImplementation>> getAll() {
        return ResponseEntity.ok().body(commonService.getAll());
    }

    @PostMapping
    public ResponseEntity<Dto> createExtras(@RequestBody DtoImplementation dto) {
        commonService.save(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(commonService.save(dto));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Dto> getExtras(@PathVariable Long id){
        return ResponseEntity.ok().body(commonService.get(id));
    }
}
