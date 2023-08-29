package server.dto;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import server.models.Product;
import server.models.User;

import java.util.List;

@Data
public class FavouriteProductsListDto implements Dto {
    private Long id;
    private User user;
    private Product product;
}