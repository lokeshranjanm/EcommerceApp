package backend.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.Repository.ProductRepository;
import backend.model.Product;

@Service
public class ProductService 
{
	@Autowired
	private ProductRepository productRepository;
	
	
	//getting all books record by using the method findAll()

	public List<Product> getAllProducts()   
	{  
	List<Product> product = new ArrayList<Product>();  
	productRepository.findAll().forEach(product1 -> product.add(product1));  
	return product;  
	}
	
        //getting particular product by productId
	public Product getProductById(int id)   
	{  
	return productRepository.findById(id).get();  
	}
	
	//saving a specific record by using the method save() of CrudRepository  
	public void saveOrUpdate(Product product)   
	{  
	    productRepository.save(product);  
	}
	
	//deleting a specific record by using the method deleteById() of CrudRepository  
	public void delete(int id)   
	{  
		productRepository.deleteById(id);  
	}  
	//updating a record  
	public void update(Product product, int productId)   
	{  
		productRepository.save(product);  
	}
}
