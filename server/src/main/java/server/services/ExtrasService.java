package server.services;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.dto.ExtrasDto;
import server.exceptions.LocalivoresException;
import server.mapper.ExtrasMapper;
import server.models.Extras;
import server.repositories.ExtrasRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
@Slf4j
public class ExtrasService {
    private ExtrasRepository extrasRepository;
    private ExtrasMapper extrasMapper;

    @Transactional
    public List<ExtrasDto> getAll() {
        return extrasRepository.findAll().stream().map(extrasMapper::mapExtrasToDto).collect(Collectors.toList());
    }

    @Transactional
    public ExtrasDto save(ExtrasDto extrasDto) {
        Extras extras = extrasRepository.save(extrasMapper.mapDtoToExtras(extrasDto));
        extrasDto.setId(extras.getId());
        return extrasDto;
    }

    @Transactional
    public ExtrasDto getExtras(Long id) {
        Extras extras = extrasRepository.findById(id)
                                        .orElseThrow(() -> new LocalivoresException("No extras found with id + " + id));
        return extrasMapper.mapExtrasToDto(extras);
    }
}
