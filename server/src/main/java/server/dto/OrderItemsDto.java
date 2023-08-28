package server.dto;

import lombok.Data;

@Data
public class OrderItemsDto implements Dto {
    private Long id;
    private OrderDto order;
    private ProductDto product;
    private Integer quantity;
}