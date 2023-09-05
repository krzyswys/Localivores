package server.mapper;

import org.mapstruct.Mapper;
import server.dto.InvoiceDto;
import server.models.Invoice;

@Mapper(componentModel = "spring")
public interface InvoiceMapper extends CommonMapper<InvoiceDto, Invoice> {

}