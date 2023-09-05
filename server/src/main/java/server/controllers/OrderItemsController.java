package server.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import server.dto.OrderItemsDto;
import server.models.OrderItems;
import server.services.CommonService;

@RestController
@RequestMapping("/api/orderitems")
public class OrderItemsController extends CommonController<OrderItemsDto, OrderItems> {

    public OrderItemsController(CommonService<OrderItemsDto, OrderItems> commonService) {
        super(commonService);
    }
}
