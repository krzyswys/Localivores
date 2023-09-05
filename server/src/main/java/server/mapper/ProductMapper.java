package server.mapper;

import org.mapstruct.Mapper;
import server.dto.ProductDto;
import server.models.Product;

@Mapper(componentModel = "spring")
public interface ProductMapper extends CommonMapper<ProductDto, Product> {
}
