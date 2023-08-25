package server.dto;

import lombok.Data;
import java.util.Date;

@Data
public class InvoiceDto {
    private Long id;
    private Date date;
    private String invoiceStatus;
}