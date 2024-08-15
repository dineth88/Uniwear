package lk.ac.uov.Uniwear.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import lk.ac.uov.Uniwear.Model.Shirt;


@Repository
public interface ShirtRepo extends JpaRepository<Shirt, Integer>{

}
