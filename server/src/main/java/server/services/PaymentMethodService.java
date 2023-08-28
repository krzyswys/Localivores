package server.services;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.dto.PaymentMethodDto;
import server.mapper.CommonMapper;
import server.models.PaymentMethod;
import server.repositories.CommonRepository;

@Service
@Slf4j
public class PaymentMethodService extends CommonService<PaymentMethodDto, PaymentMethod> {
    public PaymentMethodService(CommonMapper<PaymentMethodDto, PaymentMethod> commonMapper, CommonRepository<PaymentMethod, Long> commonRepository) {
        super(commonMapper, commonRepository);
    }
}
