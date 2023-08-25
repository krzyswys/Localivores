package server.dto;

import lombok.Data;
import server.utils.PaymentStatus;

import java.math.BigDecimal;
import java.util.Date;

@Data
public class PaymentDto {
    private Long id;
    private BigDecimal amount;
    private Date paymentDate;
    private PaymentStatus paymentStatus;
}