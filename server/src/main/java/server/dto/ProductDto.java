package server.dto;

import lombok.Data;
import java.math.BigDecimal;
import java.util.Date;

@Data
public class ProductDto {
    private Long id;
    private StoreDto store;
    private String description;
    private BigDecimal price;
    private Double weight;
    private Double discount;
    private String origin;
    private Date expirationDate;
    private Integer quantity;
    private ExtrasDto extras;
    private FavouriteProductsListDto favouriteProductsList;
}