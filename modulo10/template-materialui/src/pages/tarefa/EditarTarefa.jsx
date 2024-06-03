import React, { useState, useEffect } from 'react';
import { Box, Grid, Card, CardHeader, CardContent, CardActions, Button, FormControl, InputLabel, Input, FormHelperText, MenuItem, Select } from '@mui/material';

const EditarTarefa = ({ handleCloseEditar, idTarefaSelecionada, tarefas, setTarefas }) => {
  const [idTarefa, setIdTarefa] = useState('');
  const [tituloTarefa, setTituloTarefa] = useState('');
  const [descricaoTarefa, setDescricaoTarefa] = useState('');
  const [inicioTarefa, setInicioTarefa] = useState('');
  const [fimTarefa, setFimTarefa] = useState('');
  const [dataConclusao, setDataConclusao] = useState('');
  const [recursoTarefa, setRecursoTarefa] = useState('');
  const [statusTarefa, setStatusTarefa] = useState('');

  useEffect(() => {
    setIdTarefa(idTarefaSelecionada);
    const tarefaSelecionada = tarefas.find(tarefa => tarefa.idTarefa === idTarefaSelecionada);
    if (tarefaSelecionada) {
      setTituloTarefa(tarefaSelecionada.tituloTarefa);
      setDescricaoTarefa(tarefaSelecionada.descricaoTarefa);
      setInicioTarefa(tarefaSelecionada.inicioTarefa);
      setFimTarefa(tarefaSelecionada.fimTarefa);
      setDataConclusao(tarefaSelecionada.dataConclusao);
      setRecursoTarefa(tarefaSelecionada.recursoTarefa);
      setStatusTarefa(tarefaSelecionada.statusTarefa);
    }
  }, [idTarefaSelecionada, tarefas]);

  const handleRecurso = (event) => {
    setRecursoTarefa(event.target.value);
  };

  const handleStatus = (event) => {
    setStatusTarefa(event.target.value);
  };

  const handleEditar = () => {
    const updatedTarefas = tarefas.map(tarefa => {
      if (tarefa.idTarefa === idTarefaSelecionada) {
        return {
          ...tarefa,
          tituloTarefa,
          descricaoTarefa,
          inicioTarefa,
          fimTarefa,
          dataConclusao,
          recursoTarefa,
          statusTarefa,
        };
      }
      return tarefa;
    });
    setTarefas(updatedTarefas);
    handleCloseEditar();
  };

  return (
    <Box className="App" display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Card className="App-card" maxWidth="sm">
        <CardHeader
          title="Tarefas"
          subheader="Edição de Tarefas"
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <Input name="tituloTarefa" value={tituloTarefa} onChange={(e) => setTituloTarefa(e.target.value)} />
                <FormHelperText>Título da Tarefa.</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <Input name="descricaoTarefa" value={descricaoTarefa} onChange={(e) => setDescricaoTarefa(e.target.value)} />
                <FormHelperText>Descrição da Tarefa.</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <Input name="inicioTarefa" type="date" value={inicioTarefa} onChange={(e) => setInicioTarefa(e.target.value)} />
                <FormHelperText>Início da Tarefa.</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <Input name="fimTarefa" type="date" value={fimTarefa} onChange={(e) => setFimTarefa(e.target.value)} />
                <FormHelperText>Fim da Tarefa.</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <Input name="dataConclusao" type="date" value={dataConclusao} onChange={(e) => setDataConclusao(e.target.value)} />
                <FormHelperText>Data de Conclusão da Tarefa.</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor="tarefa_recurso">Recurso</InputLabel>
                <Select
                  id="tarefa_recurso"
                  name="recursoTarefa"
                  value={recursoTarefa}
                  onChange={handleRecurso}
                >
                  <MenuItem value={'Recurso 1'}>Recurso 1</MenuItem>
                  <MenuItem value={'Recurso 2'}>Recurso 2</MenuItem>
                  <MenuItem value={'Recurso 3'}>Recurso 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor="tarefa_status">Status</InputLabel>
                <Select
                  id="tarefa_status"
                  name="statusTarefa"
                  value={statusTarefa}
                  onChange={handleStatus}
                >
                  <MenuItem value={'Em Progresso'}>Em Progresso</MenuItem>
                  <MenuItem value={'Concluída'}>Concluída</MenuItem>
                  <MenuItem value={'Atrasada'}>Atrasada</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" onClick={handleEditar}>Salvar</Button>
          <Button size="small" variant="outlined" onClick={handleCloseEditar}>Cancelar</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default EditarTarefa;
