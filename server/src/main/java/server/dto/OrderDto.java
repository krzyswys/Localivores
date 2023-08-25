package server.dto;


import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import lombok.Data;
import server.utils.OrderStatus;


@Data
public class OrderDto {
    private Long id;
    private PaymentDto payment;
    private InvoiceDto invoice;
    private List<OrderItemsDto> orderItems;
    private Date orderDate;
    private Date deliveryDate;
    private OrderStatus orderStatus;
    private BigDecimal deliveryCost;
    private DriverDto driver;
    private UserDto user;
}