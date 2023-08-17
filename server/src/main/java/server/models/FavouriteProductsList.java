package server.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "favourite_products_list")
public @Data class FavouriteProductsList {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "favouriteProductsList")
    private List<Product> products;

    public FavouriteProductsList(User user, List<Product> products) {
        this.user = user;
        this.products = products;
    }

    public FavouriteProductsList() {

    }
}
