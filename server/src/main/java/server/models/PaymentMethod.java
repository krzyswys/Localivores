package server.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@jakarta.persistence.Entity
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "payment_methods")
public class PaymentMethod implements Model {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "credit_card")
    private Boolean creditCard;

    @Column(name = "paypal")
    private Boolean paypal;

    @Column(name = "google_pay")
    private Boolean googlePay;

    @Column(name = "apple_pay")
    private Boolean applePay;
}
