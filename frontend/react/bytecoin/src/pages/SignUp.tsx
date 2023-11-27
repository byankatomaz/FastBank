import { Header, Button } from "components";
import { CreateCliente } from "interfaces";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ClienteService } from "services";
import { ClienteResolver } from "validations";

export function SignUp(){
    const { register, handleSubmit } = useForm({
      resolver: ClienteResolver,
    });
      
      const [imagem, setImagem] = useState<File | null>(null)
    
      const onSubmit: SubmitHandler<CreateCliente> = async (values) => {
      
        try {
          const { status, data } = await ClienteService.createClient(values);
          if (status === 201){
            console.log('data: ', data)
          }
        } catch (error) {
          console.error('Erro ao enviar o cliente:', error);
        }
      };
    
      const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e?.target.files?.[0] || null;
        
        setImagem(file)
        
      };

      return(
        <>
            < Header />
            <div className="container" onSubmit={handleSubmit(onSubmit)}>
                <form className="form">
                    
                    <h1>Escrever algo</h1>

                    <label  htmlFor="imagem">Sua imagem:</label>
                    <input {...register('imagem')} type="file" id="imagem" name="imagem" onChange={handleImageChange} accept="image/*" />

                    <label  htmlFor="nome">Nome completo:</label>
                    <input {...register('nome')} type="text" placeholder="Nome"></input>

                    <label  htmlFor="cpf">CPF:</label>
                    <input {...register('cpf')} type="text" placeholder="Digite seu CPF"></input>

                    <label  htmlFor="tipo">Tipo de pessoa:</label>
                    <select {...register('tipo')}>
                        <option value="">Escolha uma opção</option>
                        <option value="PF">Pessoa Fisica</option>
                        <option value="PJ">Pessoa Juridica</option>
                    </select>

                    <label  htmlFor="salario">Salário:</label>
                    <input {...register('salario')} type="number" placeholder="Digite seu salário"></input>

                    <label  htmlFor="rua">Rua:</label>
                    <input {...register('rua')} type="text" placeholder="Rua"></input>

                    <label  htmlFor="bairro">Bairro:</label>
                    <input {...register('bairro')} type="text" placeholder="Bairro"></input>

                    <label  htmlFor="cidade">Cidade:</label>
                    <input {...register('cidade')} type="text" placeholder="Cidade"></input>

                    <label  htmlFor="estado">Estado:</label>
                    <input {...register('estado')} type="text" placeholder="Estado"></input>

                    <label  htmlFor="num">Número:</label>
                    <input {...register('num')} type="number" placeholder="Numero"></input>

                    <label  htmlFor="cep">CEP:</label>
                    <input {...register('cep')} type="number" placeholder="CEP"></input>

                    <label  htmlFor="email">E-mail:</label>
                    <input {...register('email')} type="email" placeholder="Endereço de Email"></input>

                    <label  htmlFor="password">Senha:</label>
                    <input {...register('password')} type="password" placeholder="Senha"></input>

                    <Button type='submit' variant='dark'>Cadastrar</Button>
                </form>
            </div>
        </>
    )
}