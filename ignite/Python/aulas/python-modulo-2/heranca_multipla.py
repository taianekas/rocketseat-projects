class Animal:
  def __init__(self, name) -> None:
    self.name = name

  def emitir_som(self):
    pass

class Mamifero(Animal):
  def amamentar(self):
    return f'{self.name} amamenta'
  
class Ave(Animal):
  def voar(self):
    return f'{self.name} voa'
  
class Morcego(Mamifero, Ave):
  def emitir_som(self):
    return 'Morcegos emitem sons ultrassônicos'
  

animal = Morcego('Bat')

# Acessando métodos da classe base 'Animal'
print(f'Nome do animal: {animal.name}')
print(f'Som do animal: {animal.emitir_som()}')


# Acessando métodos das classes 'Mamifero' e 'Ave'

print(f'Ação do animal: {animal.amamentar()}')
print(f'Locomoção do animal: {animal.voar()}')
