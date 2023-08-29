package server.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import server.dto.OpeningHoursDto;
import server.dto.OrderDto;
import server.models.OpeningHours;
import server.models.Order;
import server.services.CommonService;

@RestController
@RequestMapping("/api/openinghours")
public class OpeningHoursController extends CommonController<OpeningHoursDto, OpeningHours> {
    public OpeningHoursController(CommonService<OpeningHoursDto, OpeningHours> commonService) {
        super(commonService);
    }
}
