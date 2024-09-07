package lk.ac.uov.Uniwear.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lk.ac.uov.Uniwear.Model.Shirt;
import lk.ac.uov.Uniwear.Repo.ShirtRepo;


@Service
public class ShirtService {
	@Autowired
	private ShirtRepo repo;
	
	public void addShirt(Shirt shirt) {
        repo.save(shirt);
    }
	
	public List<Shirt> getShirtDetails(String university, String category){
		return repo.getShirtDetails(university, category);
	}
}
