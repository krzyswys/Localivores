package server.services;


import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.dto.OrderDto;
import server.mapper.CommonMapper;
import server.models.Order;
import server.repositories.CommonRepository;

@Service
@Slf4j
public class OrderService extends CommonService<OrderDto, Order> {
    public OrderService(CommonMapper<OrderDto, Order> commonMapper, CommonRepository<Order, Long> commonRepository) {
        super(commonMapper, commonRepository);
    }
}
