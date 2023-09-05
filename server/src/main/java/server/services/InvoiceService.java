package server.services;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.dto.InvoiceDto;
import server.mapper.CommonMapper;
import server.models.Invoice;
import server.repositories.CommonRepository;

@Service
@Slf4j
public class InvoiceService extends CommonService<InvoiceDto, Invoice> {
    public InvoiceService(CommonMapper<InvoiceDto, Invoice> commonMapper, CommonRepository<Invoice, Long> commonRepository) {
        super(commonMapper, commonRepository);
    }
}
