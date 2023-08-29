package server.dto;

import lombok.Data;
import server.models.FavouriteProductsList;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Data
public class ProductDto implements Dto {
    private Long id;
    private String name;
    private StoreDto store;
    private String description;
    private BigDecimal price;
    private Double weight;
    private Double discount;
    private String origin;
    private Date expirationDate;
    private Integer quantity;
    private ExtrasDto extras;
    private List<FavouriteProductsList> favouriteProductsList;

}