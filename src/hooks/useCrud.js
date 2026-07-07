import { useState } from "react";
import {
  listar,
  inserir,
  atualizar,
  excluir,
} from "../services/crudService";

export default function useCrud(tabela) {
  const [lista, setLista] = useState([]);
  const [loading, setLoading] = useState(false);

  async function carregar() {
    try {
      setLoading(true);

      const dados = await listar(tabela);

      setLista(dados);

    } catch (erro) {

      console.error(erro);
      alert("Erro ao carregar registros.");

    } finally {

      setLoading(false);

    }
  }

  async function salvar(id, registro) {

    try {

      setLoading(true);

      if (id) {

        await atualizar(tabela, id, registro);

      } else {

        await inserir(tabela