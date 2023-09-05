package server.controllers;

import org.springframework.web.bind.annotation.*;
import server.dto.ExtrasDto;
import server.models.Extras;
import server.services.CommonService;

@RestController
@RequestMapping("/api/extras")
public class ExtrasController extends CommonController<ExtrasDto, Extras> {

    public ExtrasController(CommonService<ExtrasDto, Extras> extrasService) {
        super(extrasService);
    }
}

