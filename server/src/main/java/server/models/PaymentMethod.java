package server.models;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "payment_methods")
public class PaymentMethod {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "credit_card")
    @Nullable
    private Boolean creditCard;


    @Column(name = "paypal")
    @Nullable
    private Boolean paypal;

    @Column(name = "google_pay")
    @Nullable
    private Boolean googlePay;

    @Column(name = "apple_pay")
    @Nullable
    private Boolean applePay;
}
