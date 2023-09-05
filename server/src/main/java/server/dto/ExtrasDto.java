package server.dto;

import lombok.Data;
import server.models.Product;

import java.util.List;

@Data
public class ExtrasDto implements Dto {
    private Long id;
    private List<Product> products;
    private Boolean gmo;
}