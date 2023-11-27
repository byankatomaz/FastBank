import { Header, Button } from "components";
import { CreateCliente } from "interfaces";
import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ClienteService } from "services";
import { ClienteResolver } from "validations";

export function SignUp() {
  const { register, handleSubmit, setValue } = useForm({
    resolver: ClienteResolver,
  });

  const [imagem, setImagem] = useState<File | null>(null)

  const [cep, setCep] = useState<string | undefined>(undefined)

  const [endereco, setEndereco] = useState({})

  const searchCep = async () => {

    if (cep) {
      const urlBase = `https://api.postmon.com.br/v1/cep/${cep}`

      try {
        const response = await fetch(urlBase)

        if (response.ok) {

          const enderecoJson = await response.json()

          setEndereco(enderecoJson)

          if (endereco) {
            setValue('rua', endereco.logradouro || '');
            setValue('bairro', endereco.bairro || '');
            setValue('cidade', endereco.cidade || '');
            setValue('estado', endereco.estado || '');
          }

        } else {
          console.error('Erro na resposta da requisição do CEP:', response.statusText);
        }


      } catch (error) {
        alert('Erro ao pesquisar CEP')
      }
    }



  }

  const onSubmit: SubmitHandler<CreateCliente> = async (values) => {

    try {
      const { status, data } = await ClienteService.createClient(values);
      if (status === 201) {
        console.log('data: ', data)
      }
    } catch (error) {
      console.error('Erro ao enviar o cliente:', error);
    }
  };

  const handleImageChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const file = event?.target.files?.[0] || null;

    setImagem(file)

  };

  const CEPChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const cepInput = event?.target.value.replace(/\D/g, '');

    console.log(cepInput);

    setCep(cepInput);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && cep && cep.length === 8) {
      searchCep();
    }
  };

useEffect(() => {
    if (cep && cep.length === 8) {
      searchCep();
    }
  }, [cep])

  return (
    <>
      < Header />
      <div className="container-signup" onSubmit={handleSubmit(onSubmit)}>
        <div className="container-form">
          <h1>Cadastre-se</h1>
          <form className="form">

            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-2 md:gap-5">
              <div>

                <label htmlFor="nome">Nome completo:</label>
                <input {...register('nome')} type="text" placeholder="Nome" className=""></input>

              </div>


              <div>
                <label htmlFor="cpf">CPF:</label>
                <input {...register('cpf')} type="text" placeholder="Digite seu CPF"></input>
              </div>

              <div>
                <label htmlFor="tipo">Tipo de pessoa:</label>
                <select {...register('tipo')}>
                  <option value="">Escolha uma opção</option>
                  <option value="PF">Pessoa Fisica</option>
                  <option value="PJ">Pessoa Juridica</option>
                </select>
              </div>

              <div>
                <label htmlFor="salario">Salário:</label>
                <input {...register('salario')} type="number" placeholder="Digite seu salário" ></input>
              </div>

              <div>
                <label htmlFor="cep">CEP:</label>
                <input {...register('cep')} type="number" placeholder="CEP" onChange={CEPChange} onKeyDown={handleKeyPress}></input>
              </div>

              <div>
                <label htmlFor="rua">Rua:</label>
                <input {...register('rua')} type="text" placeholder="Rua"></input>
              </div>

              <div>
                <label htmlFor="bairro">Bairro:</label>
                <input {...register('bairro')} type="text" placeholder="Bairro"></input>
              </div>

              <div>
                <label htmlFor="cidade">Cidade:</label>
                <input {...register('cidade')} type="text" placeholder="Cidade"></input>
              </div>

              <div>
                <label htmlFor="estado">Estado:</label>
                <input {...register('estado')} type="text" placeholder="Estado"></input>
              </div>

              <div>
                <label htmlFor="num">Número:</label>
                <input {...register('num')} type="number" placeholder="Numero"></input>

              </div>


              <div>
                <label htmlFor="email">E-mail:</label>
                <input {...register('email')} type="email" placeholder="Endereço de Email"></input>
              </div>

              <div>
                <label htmlFor="password">Senha:</label>
                <input {...register('password')} type="password" placeholder="Senha"></input>
              </div>


              <div className="divImage">
                <div className="space-y-1 text-center">

                  <div className="flex text-sm text-black mb-2">
                    <label htmlFor="imagem" className="labelImage">
                      <span className="p-3">Upload a file</span>
                      <input {...register('imagem')} type="file" id="imagem" name="imagem" onChange={handleImageChange} accept="image/*" className="sr-only" />
                    </label>
                  </div>

                  <p className="text-xs text-white">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>


            </div>

            <div className="flex justify-end mt-6">
              <Button type='submit' variant='dark'>Cadastrar</Button>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}