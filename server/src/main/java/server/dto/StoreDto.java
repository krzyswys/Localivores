package server.dto;

import lombok.Data;
import java.util.List;

@Data
public class StoreDto {
    private Long id;
    private String name;
    private String address;
    private String openingHours;
    private Double discounts;
    private Double longitude;
    private Double latitude;
    private List<ProductDto> productList;
    private List<ShopReviewDto> shopReviews;
    private UserDto user;
}