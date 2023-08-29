package server.services;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.dto.InvoiceDto;
import server.dto.OpeningHoursDto;
import server.dto.OrderItemsDto;
import server.mapper.CommonMapper;
import server.models.Invoice;
import server.models.OpeningHours;
import server.models.OrderItems;
import server.repositories.CommonRepository;

@Service
@Slf4j
public class OpeningHoursService extends CommonService<OpeningHoursDto, OpeningHours>{
    public OpeningHoursService(CommonMapper<OpeningHoursDto, OpeningHours> commonMapper, CommonRepository<OpeningHours, Long> commonRepository) {
        super(commonMapper, commonRepository);
    }
}
