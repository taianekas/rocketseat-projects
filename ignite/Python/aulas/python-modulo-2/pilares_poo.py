# Pilares do POO - Herança, Polimorfismo, Encapsulamento e Abstração

print('\nExemplo de Herança:')

class Animal:
  def __init__(self, name) -> None:
    self.name = name

  def andar(self):
    print(f'O animal {self.name} andou.')
    return

  def emitir_som(self):
    pass

class Cachorro(Animal):
  def emitir_som(self):
    return 'Latiu'
  
class Gato(Animal):
  def emitir_som(self):
    return 'Miou'
  

dog = Cachorro('Marley')
cat = Gato('Ratinha')


print('\nExemplo de Polimorfismo:')
animals = [dog, cat]

for animal in animals:
  print(f'{animal.name} {animal.emitir_som()}')

########################################################

print('\nExemplo de Encapsulamento:')
class ContaBancaria:
  def __init__(self, saldo) -> None:
    self.__saldo = saldo # Atributo privado
  
  def depositar(self, valor):
    if valor > 0:
      self.__saldo += valor

  def sacar(self, valor):
    if valor > 0 and valor <= self.__saldo:
      self.__saldo -= valor

  def consultar_saldo(self):
    return self.__saldo

valor = ContaBancaria(1000)
print(f'Saldo da conta: {valor.consultar_saldo()}')

conta = valor.depositar(800)
print(f'Saldo da conta: {valor.consultar_saldo()}')

conta = valor.sacar(500)
print(f'Saldo da conta: {valor.consultar_saldo()}')

conta = valor.consultar_saldo()
print(f'O saldo final da conta é {conta}')

########################################################

print('\nExemplo de Abstração:') 
from abc import ABC, abstractmethod

class Veiculo(ABC):

  @abstractmethod
  def ligar(self):
    pass

  @abstractmethod
  def desligar(self):
    pass

class Carro(Veiculo):
  def __init__(self) -> None:
    pass

  def ligar(self):
    return f'Carro ligado, usando a chave'
  
  def desligar(self):
    return f'Carro desligado, usando a chave'
  
carro_amarelo = Carro()
print(carro_amarelo.ligar())
print(carro_amarelo.desligar())
