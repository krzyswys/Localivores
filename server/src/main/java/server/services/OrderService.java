package server.services;


import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.dto.OrderDto;
import server.models.Order;

@Service
@AllArgsConstructor
@Slf4j
public class OrderService extends CommonService<OrderDto, Order> {
}
