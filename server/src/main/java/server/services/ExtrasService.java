package server.services;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.dto.ExtrasDto;
import server.models.Extras;


@Service
@AllArgsConstructor
@Slf4j
public class ExtrasService extends CommonService<ExtrasDto, Extras> {

}
