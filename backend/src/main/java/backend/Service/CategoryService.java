package backend.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.Repository.CategoryRepository;
import backend.model.Category;

@Service
public class CategoryService 
{
	@Autowired
	private CategoryRepository categoryRepository;
	
//	get all category
	public List<Category> getAllCategory()   
	{  
	List<Category> category = new ArrayList<Category>();  
	categoryRepository.findAll().forEach(category1 -> category.add(category1));  
	return category;  
	}
	
//	get category by id
	public Category getCategoryById(int id)   
	{  
	return categoryRepository.findById(id).get();  
	}
	
//	save category
	public void saveOrUpdate(Category category)   
	{  
		categoryRepository.save(category);  
	}
}
