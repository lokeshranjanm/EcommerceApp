package backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import backend.Service.CategoryService;
import backend.model.Category;

@RestController
@RequestMapping("/category")
public class CategoryController 
{
	@Autowired
	private CategoryService categoryService;
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/get")  
	private List<Category> getAllCategory()  
	{  
		return categoryService.getAllCategory();  
	}
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/get/{categoryId}")  
	private Category getCategory(@PathVariable("categoryId") int categoryId)   
	{  
	return categoryService.getCategoryById(categoryId);  
	}
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/add")  
	private int saveCategory(@RequestBody Category category )  
	{  
		categoryService.saveOrUpdate(category);  
	    return category.getCategoryId();  
	}
}
