package server.services;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.dto.UserDto;
import server.mapper.CommonMapper;
import server.models.User;
import server.repositories.CommonRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
public class UserService extends CommonService<UserDto, User> {
    public UserService(CommonMapper<UserDto, User> commonMapper, CommonRepository<User, Long> commonRepository) {
        super(commonMapper, commonRepository);
    }
}
