package server.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@jakarta.persistence.Entity
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "products")
public class Product implements Model {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "store_id")
    private Store store;

    @Column(name = "description")
    private String description;

    @Column(name = "price", precision = 10, scale = 2)
    private BigDecimal price;

    @Column(name = "weight")
    private Double weight;

    @Column(name = "discount")
    private Double discount;

    @Column(name = "origin")
    private String origin;

    @Column(name = "expiration_date")
    private Date expirationDate;

    @Column(name = "quantity")
    private Integer quantity;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "extras_id")
    private Extras extras;

    @OneToMany(mappedBy = "product")
    private List<FavouriteProductsList> favouriteProductsList;

    @OneToMany(mappedBy = "product")
    private List<OrderItems> orderItems;
}
