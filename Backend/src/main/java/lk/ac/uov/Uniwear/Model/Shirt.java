package lk.ac.uov.Uniwear.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;

@Entity
public class Shirt {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int shirtId;
	@Column(nullable = false)
	private String name;
	@Column(nullable = false)
	private String shortDesc;
	@Column(nullable = false)
	private String itemDesc;
	@Column(nullable = false)
	private String price;
	@Column(nullable = false)
	private String colar;
	@Column(nullable = false)
	private String cuff;
	@Column(nullable = false)
	private String placket;
	@Column(nullable = false)
	private String pLength;
	@Column(nullable = false)
	private String material;
	@Column(nullable = false)
	private String manufacturer;
	@Lob
	@Column(columnDefinition = "MEDIUMBLOB")
	private String image1;
	@Lob
	@Column(columnDefinition = "MEDIUMBLOB")
	private String image2;
	@Lob
	@Column(columnDefinition = "MEDIUMBLOB")
	private String image3;
	@ManyToOne
	private User user;
	
	public Shirt() {

	}

	public Shirt(int shirtId, String name, String shortDesc, String itemDesc, String price, String colar, String cuff,
			String placket, String pLength, String material, String manufacturer, String image1, String image2,
			String image3, User user) {
		this.shirtId = shirtId;
		this.name = name;
		this.shortDesc = shortDesc;
		this.itemDesc = itemDesc;
		this.price = price;
		this.colar = colar;
		this.cuff = cuff;
		this.placket = placket;
		this.pLength = pLength;
		this.material = material;
		this.manufacturer = manufacturer;
		this.image1 = image1;
		this.image2 = image2;
		this.image3 = image3;
		this.user = user;
	}

	public int getShirtId() {
		return shirtId;
	}

	public void setShirtId(int shirtId) {
		this.shirtId = shirtId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getShortDesc() {
		return shortDesc;
	}

	public void setShortDesc(String shortDesc) {
		this.shortDesc = shortDesc;
	}

	public String getItemDesc() {
		return itemDesc;
	}

	public void setItemDesc(String itemDesc) {
		this.itemDesc = itemDesc;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getColar() {
		return colar;
	}

	public void setColar(String colar) {
		this.colar = colar;
	}

	public String getCuff() {
		return cuff;
	}

	public void setCuff(String cuff) {
		this.cuff = cuff;
	}

	public String getPlacket() {
		return placket;
	}

	public void setPlacket(String placket) {
		this.placket = placket;
	}

	public String getpLength() {
		return pLength;
	}

	public void setpLength(String pLength) {
		this.pLength = pLength;
	}

	public String getMaterial() {
		return material;
	}

	public void setMaterial(String material) {
		this.material = material;
	}

	public String getManufacturer() {
		return manufacturer;
	}

	public void setManufacturer(String manufacturer) {
		this.manufacturer = manufacturer;
	}

	public String getImage1() {
		return image1;
	}

	public void setImage1(String image1) {
		this.image1 = image1;
	}

	public String getImage2() {
		return image2;
	}

	public void setImage2(String image2) {
		this.image2 = image2;
	}

	public String getImage3() {
		return image3;
	}

	public void setImage3(String image3) {
		this.image3 = image3;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
}
