package server.mapper;

import org.mapstruct.Mapper;
import server.dto.PaymentDto;
import server.models.Payment;

@Mapper(componentModel = "spring")
public interface PaymentMapper extends CommonMapper<PaymentDto, Payment> {
}
