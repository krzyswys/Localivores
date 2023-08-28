package server.services;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.dto.UserDto;
import server.models.User;

@Service
@AllArgsConstructor
@Slf4j
public class UserService extends CommonService<UserDto, User> {

}
