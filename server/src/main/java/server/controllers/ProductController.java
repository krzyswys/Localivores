//package server.controllers;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import server.models.Product;
//import server.repositories.ProductRepository;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@CrossOrigin(origins = "http://localhost:8080")
//@RestController
//@RequestMapping("/api")
//public class ProductController {
//    @Autowired
//    ProductRepository productRepository;
//
//    @GetMapping("/products")
//    public ResponseEntity<List<Product>> getAllProducts(){
//        try {
//            List<Product> products = new ArrayList<>(productRepository.findAll());
//
//            if (products.isEmpty()){
//                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//            }
//            return new ResponseEntity<>(products, HttpStatus.OK);
//
//        } catch (Exception e){
//            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
//
//    @PostMapping("/products")
//    public ResponseEntity<Product> createProducts(@RequestBody Product product){
//        try {
//            Product _product = productRepository.save(new Product(product.getStore(), product.getDescription(), product.getPrice(), product.getWeight(), product.getDiscount(), product.getOrigin(), product.getExpirationDate(), product.getExtras(), product.getFavouriteProductsList()));
//            return new ResponseEntity<>(_product, HttpStatus.CREATED);
//        } catch (Exception e){
//            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
//}
