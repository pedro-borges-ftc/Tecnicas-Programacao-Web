function Carro()
{
  var Marca = "Sem marca";
  var Modelo = "Sem modelo";
  this.SetMarca = SetMarca;
  this.SetModelo = SetModelo;
  this.ShowMarca = DisplayMarca;
  this.ShowModelo = DisplayModelo;

  function DisplayMarca(){
    console.log(Marca);
  }

  function DisplayModelo(){
    console.log(Modelo);
  }

  function SetMarca(_marca) {
    Marca = _marca;
  }

  function SetModelo(_modelo) {
      Modelo = _modelo;
  }

  }
  var carro = new Carro();
  carro.SetMarca("Ford");
  carro.SetModelo("Ka");
  carro.ShowMarca();
  carro.ShowModelo();