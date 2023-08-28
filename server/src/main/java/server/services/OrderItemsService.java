package server.services;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.dto.OrderItemsDto;
import server.models.OrderItems;

@Service
@AllArgsConstructor
@Slf4j
public class OrderItemsService extends CommonService<OrderItemsDto, OrderItems> {
}
