package server.services;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.dto.PaymentMethodDto;
import server.models.PaymentMethod;

@Service
@AllArgsConstructor
@Slf4j
public class PaymentMethodService extends CommonService<PaymentMethodDto, PaymentMethod> {
}
