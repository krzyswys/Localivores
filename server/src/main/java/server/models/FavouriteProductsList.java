package server.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@jakarta.persistence.Entity
@Table(name = "favourite_products_list")
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor(force = true)
public class FavouriteProductsList implements Model {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "favouriteProductsList")
    private List<Product> products;
}
