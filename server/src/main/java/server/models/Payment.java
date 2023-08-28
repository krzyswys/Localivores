package server.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import server.utils.PaymentStatus;

import java.math.BigDecimal;
import java.util.Date;

@jakarta.persistence.Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "payments")
public @Data class Payment implements Model {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "amount", precision = 10, scale = 2)
    private BigDecimal amount;

    @Column(name = "payment_date")
    private Date paymentDate;

    @Column(name = "payment_status")
    private PaymentStatus paymentStatus;
}
