package server.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import server.dto.PaymentDto;
import server.models.Payment;
import server.services.CommonService;

@RestController
@RequestMapping("/api/payment")
public class PaymentController extends CommonController<PaymentDto, Payment>  {

    public PaymentController(CommonService<PaymentDto, Payment> commonService) {
        super(commonService);
    }
}
