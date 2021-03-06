import React, { useState } from 'react';

import api  from '../../config/configApi';

const Login = () =>{

    const [usuario, setUsuario] = useState({
        firstName:'', 
        lastName: '', 
        userName: '', 
        password: '',
        zipCode: '',
        email: '',
    });

    const dadosLogin = e => setUsuario({...usuario, [e.target.name]: e.target.value});

    const loginSubmit = async e => {
        e.preventDefault();
        console.log(usuario.firstName);
        console.log(usuario.password);
        console.log(usuario.email);
        console.log(usuario.estadosBrasil)

        const headers = {
            'Content-Type': 'application/json'
        }

        await api.post("/login", usuario, { headers })
        .then((response) => {
            console.log(response);
        }).catch((err) => {
            if(err.response){
                console.log(err.response);
            }else{
                console.log("Erro: tente mais tarde");
            }            
        });
    }

    return (
      <div className="container-sm">
          <h1>Registro de Login </h1>
          <form className="row g-3 needs-validation" onSubmit={loginSubmit}>
          <div className="col-md-4">
            <label for="validationCustom01" className="form-label">First name</label>
            <input type="text" className="form-control" name="firstName" onChange={dadosLogin}/>
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
          <div className="col-md-4">
            <label for="validationCustom02" className="form-label">Last name</label>
            <input type="text" className="form-control" name="lastName" onChange={dadosLogin}/>
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
          <div className="col-md-4">
            <label for="validationCustomUsername" className="form-label">Username</label>
            <div className="input-group has-validation">
              <span className="input-group-text" id="inputGroupPrepend">@</span>
              <input type="text" className="form-control" name="userName"  onChange={dadosLogin}/>
              <div className="invalid-feedback">
                Please choose a username.
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <label for="validationCustom03" className="form-label">Password</label>
            <input type="text" className="form-control" name="password" onChange={dadosLogin}/>
            <div className="invalid-feedback">
              Please provide a valid Password.
            </div>
          </div>
          <div className="col-md-3">
            <label for="validationCustom04" className="form-label">State</label>
              <select name="estadosBrasil" className="form-select" onChange={dadosLogin}>
                <option value="selected">Selecione o Estado...</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amap??</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Cear??</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Esp??rito Santo</option>
                <option value="GO">Goi??s</option>
                <option value="MA">Maranh??o</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Par??</option>
                <option value="PB">Para??ba</option>
                <option value="PR">Paran??</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piau??</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rond??nia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">S??o Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </select>
            <div className="invalid-feedback">
              Please select a valid state.
            </div>
          </div>
          <div className="col-md-3">
            <label for="validationCustom05" className="form-label" >Zip Code</label>
            <input type="text" className="form-control"  name="zipCode" onChange={dadosLogin}/>
            <div className="invalid-feedback">
              Please provide a valid zip.
            </div>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox"   name="checkBox" onChange={dadosLogin}/>
              <label className="form-check-label" for="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-outline-primary" type="submit">Submit form</button>
          </div>
        </form>
      </div>
    );
  }

export default Login;