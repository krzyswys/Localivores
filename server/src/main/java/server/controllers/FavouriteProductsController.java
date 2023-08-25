//package server.controllers;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import server.models.FavouriteProductsList;
//import server.repositories.FavouriteProductsListRepository;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@CrossOrigin(origins = "http://localhost:8080")
//@RestController
//@RequestMapping("/api")
//public class FavouriteProductsController{
//    @Autowired
//    FavouriteProductsListRepository favouriteProductsListRepository;
//
//    @GetMapping("/favourite-products")
//    public ResponseEntity<List<FavouriteProductsList>> getFavouriteProducts(){
//        try{
//        List<FavouriteProductsList> favouriteProductsLists = new ArrayList<>(favouriteProductsListRepository.findAll());
//
//        if (favouriteProductsLists.isEmpty()){
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        }
//
//        return new ResponseEntity<>(favouriteProductsLists, HttpStatus.OK);
//
//        } catch (Exception e){
//            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
//
//    @PostMapping("/favourite-products")
//    public ResponseEntity<FavouriteProductsList> createFavouriteProductsList(@RequestBody FavouriteProductsList favouriteProductsList){
//        try{
//            FavouriteProductsList _favouriteProductsList = favouriteProductsListRepository.save(new FavouriteProductsList(favouriteProductsList.getUser(), favouriteProductsList.getProducts()));
//            return new ResponseEntity<>(_favouriteProductsList, HttpStatus.CREATED);
//        } catch (Exception e){
//            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
//}
