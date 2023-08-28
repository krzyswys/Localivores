package server.dto;

import lombok.Data;

@Data
public class PaymentMethodDto implements Dto {
    private Long id;
    private Boolean creditCard;
    private Boolean paypal;
    private Boolean googlePay;
    private Boolean applePay;
}