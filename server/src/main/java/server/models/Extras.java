package server.models;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "extras")
public @Data class Extras {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long extras_id;

    @Column(name = "GMO")
    private boolean gmo;

    public Extras(boolean gmo){
        this.gmo = gmo;
    }

    public Extras(){

    }
}


