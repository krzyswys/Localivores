package server.dto;

import lombok.Data;
import java.util.Date;

@Data
public class ProductDto {
    private Long id;
    private StoreDto store;
    private String description;
    private Double price;
    private Double weight;
    private Double discount;
    private String origin;
    private Date expirationDate;
    private ExtrasDto extras;
    private FavouriteProductsListDto favouriteProductsList;
}