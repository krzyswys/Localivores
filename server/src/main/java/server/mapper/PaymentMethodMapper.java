package server.mapper;


import org.mapstruct.Mapper;
import server.dto.PaymentMethodDto;
import server.models.PaymentMethod;

@Mapper(componentModel = "spring")
public interface PaymentMethodMapper extends CommonMapper<PaymentMethodDto, PaymentMethod> {
}
