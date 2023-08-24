package server.dto;

import lombok.Data;
import java.util.List;

@Data
public class FavouriteProductsListDto {
    private Long id;
    private UserDto user;
    private List<ProductDto> products;
}