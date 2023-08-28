package server.services;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.dto.ExtrasDto;
import server.mapper.CommonMapper;
import server.models.Extras;
import server.repositories.CommonRepository;


@Service
@Slf4j
public class ExtrasService extends CommonService<ExtrasDto, Extras> {
    public ExtrasService(CommonMapper<ExtrasDto, Extras> commonMapper, CommonRepository<Extras, Long> commonRepository) {
        super(commonMapper, commonRepository);
    }
}
