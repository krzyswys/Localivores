package server.controllers;


import org.springframework.web.bind.annotation.*;
import server.dto.DriverDto;
import server.models.Driver;
import server.services.CommonService;

@RestController
@RequestMapping("/api/driver")
public class DriverController extends CommonController<DriverDto, Driver> {

    public DriverController(CommonService<DriverDto, Driver> commonService) {
        super(commonService);
    }
}

