package server.controllers;

import org.springframework.web.bind.annotation.*;
import server.dto.PaymentMethodDto;
import server.models.PaymentMethod;
import server.services.CommonService;

@RestController
@RequestMapping("/api/paymentmethod")
public class PaymentMethodController extends CommonController<PaymentMethodDto, PaymentMethod> {

    public PaymentMethodController(CommonService<PaymentMethodDto, PaymentMethod> commonService) {
        super(commonService);
    }
}
