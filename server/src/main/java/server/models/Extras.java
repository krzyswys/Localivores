package server.models;


import jakarta.persistence.*;
import lombok.*;

@jakarta.persistence.Entity
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "extras")
public class Extras implements Model {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "GMO")
    private Boolean gmo;

}


