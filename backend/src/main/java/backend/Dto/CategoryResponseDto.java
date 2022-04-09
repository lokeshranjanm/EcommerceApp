package backend.Dto;

import java.util.List;

import lombok.Data;

@Data
public class CategoryResponseDto {
	
	private int categoryId;
    private String categoryName;
    private List<String> productName;
	
    public int getCategoryId() {
		return categoryId;
	}
	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}
	public String getCategoryName() {
		return categoryName;
	}
	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}
	public List<String> getProductName() {
		return productName;
	}
	public void setProductName(List<String> productName) {
		this.productName = productName;
	}
	
}
