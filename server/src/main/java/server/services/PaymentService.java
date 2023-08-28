package server.services;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.dto.PaymentDto;
import server.models.Payment;

@Service
@AllArgsConstructor
@Slf4j
public class PaymentService extends CommonService<PaymentDto, Payment> {
}
