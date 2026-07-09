-- ============================================
-- AviMed Manager
-- Script: 001_doencas.sql
-- Objetivo: Criar tabela de doenças
-- ============================================

create extension if not exists "pgcrypto";

create table if not exists public.doencas (

    id uuid primary key default gen_random_uuid(),

    nome varchar(150) not null,

    sintomas text,

    medicamento varchar(150),

    dosagem varchar(100),

    periodo_tratamento varchar(100),

    created_at timestamptz default now(),

    updated_at timestamptz default now()

);

comment on table public.doencas is
'Cadastro de doenças do AviMed';

comment on column public.doencas.nome is
'Nome da doença';

comment on column public.doencas.sintomas is
'Sintomas observados';

comment on column public.doencas.medicamento is
'Medicamento recomendado';

comment on column public.doencas.dosagem is
'Dosagem recomendada';

comment on column public.doencas.periodo_tratamento is
'Período recomendado do tratamento';