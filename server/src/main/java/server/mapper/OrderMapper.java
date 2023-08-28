package server.mapper;

import org.mapstruct.Mapper;
import server.dto.OrderDto;
import server.models.Order;

@Mapper(componentModel = "spring")

public interface OrderMapper extends CommonMapper<OrderDto, Order> {
}
