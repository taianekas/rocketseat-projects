# POO
# Clases

class People: 
  def __init__(self, name, age) -> None:  # Constructor
    self.name = name
    self.age = age

  def salutation(self): 
    return f'Olá, meu nome é {self.name} e tenho {self.age} anos de idade.'

# Objetos
instance = People('John Doe', 25)  # instance = People(name='John Doe', age=25)
message = instance.salutation()

print(message)