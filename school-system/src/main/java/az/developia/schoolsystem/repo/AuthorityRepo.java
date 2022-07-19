package az.developia.schoolsystem.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import az.developia.schoolsystem.model.AuthorityModel;

public interface AuthorityRepo extends JpaRepository<AuthorityModel, Integer> {
public List<AuthorityModel>findAllByUsername(String username);

}
