package server.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import server.dto.InvoiceDto;
import server.models.Invoice;
import server.services.CommonService;

@RestController
@RequestMapping("/api/invoice")
public class InvoiceController extends CommonController<InvoiceDto, Invoice> {
    public InvoiceController(CommonService<InvoiceDto, Invoice> invoiceService) {
        super(invoiceService);
    }
}
