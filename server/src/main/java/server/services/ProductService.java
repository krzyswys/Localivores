package server.services;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.dto.ProductDto;
import server.models.Product;

@Service
@AllArgsConstructor
@Slf4j
public class ProductService extends CommonService<ProductDto, Product> {
}
