package server.services;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.dto.OrderItemsDto;
import server.mapper.CommonMapper;
import server.models.OrderItems;
import server.repositories.CommonRepository;

@Service
@Slf4j
public class OrderItemsService extends CommonService<OrderItemsDto, OrderItems> {
    public OrderItemsService(CommonMapper<OrderItemsDto, OrderItems> commonMapper, CommonRepository<OrderItems, Long> commonRepository) {
        super(commonMapper, commonRepository);
    }
}
