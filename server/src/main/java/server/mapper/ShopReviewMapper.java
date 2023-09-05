package server.mapper;

import org.mapstruct.Mapper;
import server.dto.ShopReviewDto;
import server.models.ShopReview;

@Mapper(componentModel = "spring")
public interface ShopReviewMapper extends CommonMapper<ShopReviewDto, ShopReview> {

}
