package server.models;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Table(name = "payment_methods")
public @Data class PaymentMethod {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "credit_card_number")
    private String creditCardNumber;

    @Column(name = "paypal")
    private int paypal;

    @Column(name = "google_pay")
    private int googlePay;

    @Column(name = "apple_pay")
    private int applePay;
}
