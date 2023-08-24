package server.dto;

import lombok.*;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrdersDto {
    private Long id;
    private Long paymentId;
    private List<Long> orderItemIds;
    private Date orderDate;
    private Date deliveryDate;
    private String orderStatus;
    private BigDecimal deliveryCost;
    private Long driverId;
}
