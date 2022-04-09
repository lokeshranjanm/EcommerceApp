package backend.Dto;

import java.util.ArrayList;
import java.util.List;

import backend.model.Product;

public class Mapper 
{
	
	public Mapper() {
		
	}

	    public static ProductResponseDto productToProductResponseDto (Product product) {
	    	ProductResponseDto  productResponseDto = new ProductResponseDto ();
	    	productResponseDto.setProductId(product.getProductId());
	    	productResponseDto.setCategoryName(product.getCategory().getCategoryName());
	        return productResponseDto;
	    }

	    public static List<ProductResponseDto> productsToProductResponseDtos(List<Product> products) {
	        List<ProductResponseDto> productResponseDtos = new ArrayList<>();
	        for (Product product: products) {
	        	productResponseDtos.add(productToProductResponseDto(product));
	        }
	        return productResponseDtos;
	    }

//	    public static CategoryResponseDto categoryToCategoryResponseDto(Category category) {
//	        CategoryResponseDto categoryResponseDto = new CategoryResponseDto();
//	        categoryResponseDto.setId(category.getId());
//	        categoryResponseDto.setName(category.getName());
//	        List<String> names = new ArrayList<>();
//	        List<Book> books = category.getBooks();
//	        for (Book book : books) {
//	            names.add(book.getName());
//	        }
//	        categoryResponseDto.setBookNames(names);
//	        return categoryResponseDto;
//	    }
//
//	    public static List<CategoryResponseDto> categoriesToCategoryResponseDtos(List<Category> categories) {
//	        List<CategoryResponseDto> categoryResponseDtos = new ArrayList<>();
//	        for (Category category: categories) {
//	            categoryResponseDtos.add(categoryToCategoryResponseDto(category));
//	        }
//	        return categoryResponseDtos;
//	    }
	
}
