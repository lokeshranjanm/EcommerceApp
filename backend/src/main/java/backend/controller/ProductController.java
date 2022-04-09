package backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import backend.Repository.ProductRepository;
import backend.Service.ProductService;
import backend.model.Product;

@RestController
@RequestMapping("/product/")
public class ProductController 
{
	@Autowired
	private ProductService productService;
	
	
	
	
	//creating a get mapping that retrieves all the books detail from the database   
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/get")  
	private List<Product> getAllProducts()  
	{  
		return productService.getAllProducts();  
	}
	
	//creating a get mapping that retrieves the detail of a specific book  
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/get/{productId}")  
	private Product getProduct(@PathVariable int productId)   
	{  
	return productService.getProductById(productId);
	}
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/add")  
	private int saveCategory(@RequestBody Product product )  
	{  
		productService.saveOrUpdate(product);  
	    return product.getProductId();  
	}
	
	//creating a delete mapping that deletes a specified book  
	@CrossOrigin(origins = "http://localhost:3000")
	@DeleteMapping("/delete/{productId}")  
	private String deleteProduct(@PathVariable("productId") int productId)   
	{  
		productService.delete(productId);
		return "Product deleted successfully!";
	}
	
	//creating put mapping that updates the book detail  
	@CrossOrigin(origins = "http://localhost:3000")
	@PutMapping("/update/{productId}")  
	private Product update(@PathVariable int productId, @RequestBody Product product)   
	{  
		productService.saveOrUpdate(product);  
	return product;  
	}


}

//	//creating post mapping that post the book detail in the database  
//@PostMapping("/add")
//public ResponseEntity<ProductResponseDto> addBook(@RequestBody final ProductRequestDto productRequestDto)
//{
//	ProductResponseDto productResponseDto = productService.addProduct(productRequestDto);
//    return new ResponseEntity<>(productResponseDto, HttpStatus.OK);
//}
