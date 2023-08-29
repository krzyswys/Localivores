package server.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.List;

@jakarta.persistence.Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@SuperBuilder
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "users")
public class User implements Model {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToMany(mappedBy = "user")
    private List<ShopReview> reviews;

    @OneToMany(mappedBy = "user")
    private List<Order> orders;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "apartment_number")
    private String apartmentNumber;

    @Column(name = "address")
    private String address;

    @Column(name = "city")
    private String city;

    @Column(name = "postal_code")
    private String postalCode;

}