package backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import backend.model.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> 
{
	
}
