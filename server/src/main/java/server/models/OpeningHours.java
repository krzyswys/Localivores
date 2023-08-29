package server.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import java.time.LocalTime;
import java.util.Date;


@jakarta.persistence.Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "opening_hours", uniqueConstraints = @UniqueConstraint(columnNames = {"store_id", "day_of_week"}))
public @Data class OpeningHours implements Model {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "store_id")
    private Store store;

    @Column(name = "day_of_week")
    @Min(1)
    @Max(7)
    private int dayOfWeek;

    @Column(name = "time_open")
    private LocalTime timeOpen;

    @Column(name = "time_closed")
    private LocalTime timeClosed;

}
