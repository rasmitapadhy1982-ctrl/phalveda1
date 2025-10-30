const fruits = [
    {
      name: "Balseera (Odisha)",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Forest_fruit.jpg",
      description: "A lesser-known forest fruit native to Odisha’s tribal regions. Balseera is known for its sweet and tangy taste, often eaten fresh or used in traditional chutneys. The fruit is rich in vitamin C and antioxidants, and locals believe it boosts immunity and helps digestion. Due to deforestation and changing farming patterns, Balseera has become rare and is mostly found in forested hill areas of southern Odisha."
    },
    {
      name: "Kokum (Western Ghats)",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Garcinia_indica_fruit.jpg",
      description: "Kokum is a sour fruit native to the Western Ghats of India, especially in Goa, Maharashtra, and Karnataka. It is widely used in refreshing summer drinks and curries. The deep red-purple fruit is full of antioxidants, aids digestion, and helps cool the body. Traditionally, kokum butter was used for skincare, and its rind is sun-dried to make tangy syrups and condiments."
    },
    {
      name: "Wood Apple (Bael Fruit)",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Woodapple.jpg",
      description: "Known as Bael in Hindi, this fruit grows across central and eastern India. It has a hard shell with sweet, aromatic pulp inside. The fruit is sacred in Hinduism and is also used to prepare cooling summer drinks. It helps in curing stomach disorders and is rich in fiber and tannins. The tree is highly drought-resistant and has deep cultural roots in Indian rituals."
    },
    {
      name: "Chironji (Cuddapah Almond)",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Buchanania_lanzan_fruits.jpg",
      description: "Chironji seeds come from the Buchanania lanzan tree found in central India’s forests. These small, nut-like seeds are used in sweets and traditional medicines. The fruit’s pulp is not commonly eaten, but the seeds are prized for their almond-like flavor. Chironji trees are vital to tribal livelihoods, and their conservation is key to maintaining forest ecology."
    },
    {
      name: "Kafal (Bayberry)",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Myrica_esculenta_fruit.jpg",
      description: "Kafal is a Himalayan wild berry with a sweet-sour taste. It’s found in Uttarakhand, Himachal Pradesh, and parts of Nepal. The small red berries ripen in early summer and are loved by locals as a seasonal delicacy. It’s rich in antioxidants and vitamins, but due to overharvesting, the fruit is becoming harder to find. Kafal has deep mention in folk songs and local legends."
    }
  ];
  
  function displayFruits() {
    const fruitList = document.getElementById("fruitList");
    fruitList.innerHTML = "";
    fruits.forEach(fruit => {
      const card = document.createElement("div");
      card.classList.add("fruit-card");
      card.innerHTML = `
        <img src="${fruit.image}" alt="${fruit.name}">
        <h3>${fruit.name}</h3>
        <p>${fruit.description}</p>
      `;
      fruitList.appendChild(card);
    });
  }
  
  document.getElementById("addFruit").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const image = document.getElementById("image").value;
    const description = document.getElementById("description").value;
  
    if (name && image && description) {
      fruits.push({ name, image, description });
      displayFruits();
      document.getElementById("name").value = "";
      document.getElementById("image").value = "";
      document.getElementById("description").value = "";
    } else {
      alert("Please fill in all fields!");
    }
  });
  
  displayFruits();
  