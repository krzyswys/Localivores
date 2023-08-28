package server.mapper;

import org.mapstruct.Mapper;
import server.dto.OrderItemsDto;
import server.models.OrderItems;

@Mapper(componentModel = "spring")
public interface OrderItemsMapper extends CommonMapper<OrderItemsDto, OrderItems> {
}
