package server.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import java.util.List;


@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "drivers")
public class Drivers {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    //********************************************
    //userID
    //********************************************

    @Column(name = "vehicle_type")
    private String vehicleType;

    @Column(name = "availability")
    private Boolean availability;

    @OneToMany(mappedBy = "driver")
    private List<Orders> orders;

}
