package server.controllers;

import org.springframework.web.bind.annotation.*;
import server.dto.ProductDto;
import server.models.Product;
import server.services.CommonService;


@RestController
@RequestMapping("/api/product")
public class ProductController extends CommonController<ProductDto, Product> {

    public ProductController(CommonService<ProductDto, Product> commonService) {
        super(commonService);
    }
}
