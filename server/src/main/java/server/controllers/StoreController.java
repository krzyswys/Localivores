package server.controllers;

import org.springframework.web.bind.annotation.*;
import server.dto.StoreDto;
import server.models.Store;
import server.services.CommonService;


@RestController
@RequestMapping("/api/store")
public class StoreController extends CommonController<StoreDto, Store> {

    public StoreController(CommonService<StoreDto, Store> commonService) {
        super(commonService);
    }
}
