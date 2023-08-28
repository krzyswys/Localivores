package server.services;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.dto.PaymentDto;
import server.mapper.CommonMapper;
import server.models.Payment;
import server.repositories.CommonRepository;

@Service
@Slf4j
public class PaymentService extends CommonService<PaymentDto, Payment> {
    public PaymentService(CommonMapper<PaymentDto, Payment> commonMapper, CommonRepository<Payment, Long> commonRepository) {
        super(commonMapper, commonRepository);
    }
}
