package server.services;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.dto.ProductDto;
import server.mapper.CommonMapper;
import server.models.Product;
import server.repositories.CommonRepository;

@Service
@Slf4j
public class ProductService extends CommonService<ProductDto, Product> {
    public ProductService(CommonMapper<ProductDto, Product> commonMapper, CommonRepository<Product, Long> commonRepository) {
        super(commonMapper, commonRepository);
    }
}
