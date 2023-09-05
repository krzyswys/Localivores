package server.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import server.dto.OrderDto;
import server.models.Order;
import server.services.CommonService;

@RestController
@RequestMapping("/api/order")
public class OrderController extends CommonController<OrderDto, Order> {

    public OrderController(CommonService<OrderDto, Order> commonService) {
        super(commonService);
    }
}
