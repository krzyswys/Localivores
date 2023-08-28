package server.services;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.dto.InvoiceDto;
import server.models.Invoice;

@Service
@AllArgsConstructor
@Slf4j
public class InvoiceService extends CommonService<InvoiceDto, Invoice> {
}
