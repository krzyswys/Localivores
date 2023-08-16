package server.models;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Table(name = "payment_methods")
public @Data class PaymentMethod {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "credit_card")
    private boolean creditCard;

    @Column(name = "paypal")
    private boolean paypal;

    @Column(name = "google_pay")
    private boolean googlePay;

    @Column(name = "apple_pay")
    private boolean applePay;

    public PaymentMethod(boolean creditCard, boolean paypal, boolean googlePay, boolean applePay) {
        this.creditCard = creditCard;
        this.paypal = paypal;
        this.googlePay = googlePay;
        this.applePay = applePay;
    }
}
