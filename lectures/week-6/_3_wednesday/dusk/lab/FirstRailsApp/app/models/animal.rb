class Animal
  #Starting animals
  @@animals = ["lions", "tigers", "bears", "elephants", "dolphins"]
  def self.all
    @@animals
  end
  def self.create(animal)
    @@animals.push(animal)
  end
end