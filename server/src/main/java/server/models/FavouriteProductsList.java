package server.models;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.lang.NonNull;

import java.util.List;

@Entity
@Table(name = "favourite_products_list")
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class FavouriteProductsList {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    @NonNull
    private User user;

    @OneToMany(mappedBy = "favouriteProductsList")
    private List<Product> products;
}
