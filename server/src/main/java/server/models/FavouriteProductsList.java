package server.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "favourite_products_list")
public @Data class FavouriteProductsList {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long favourite_products_list_id;


}
