package az.developia.schoolsystem.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import az.developia.schoolsystem.model.Test;

public interface TestRepo extends JpaRepository<Test, Integer>{

	 List<Test> findAllByCreatorUsername(String username);

}
