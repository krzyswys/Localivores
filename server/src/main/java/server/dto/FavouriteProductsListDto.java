package server.dto;

import lombok.Data;
import java.util.List;

@Data
public class FavouriteProductsListDto implements Dto {
    private Long id;
    private UserDto user;
    private List<ProductDto> products;
}