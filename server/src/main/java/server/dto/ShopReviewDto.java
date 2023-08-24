package server.dto;

import lombok.Data;
import java.util.Date;

@Data
public class ShopReviewDto {
    private Long id;
    private Integer rating;
    private String description;
    private Date date;
    private UserDto user;
    private StoreDto store;
}