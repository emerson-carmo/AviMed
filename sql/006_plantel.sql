-- ==========================================================
-- AviMed Manager
-- Sprint 04 - Módulo Plantel
-- Tabela: plantel
-- ==========================================================

create extension if not exists pgcrypto;

create table if not exists plantel (

    id uuid primary key default gen_random_uuid(),

    anilha varchar(20) not null unique,

    nome varchar(100) not null,

    especie varchar(100),

    raca varchar(100),

    sexo varchar(20),

    nascimento date,

    origem varchar(150),

    peso numeric(8,2),

    status varchar(20) default 'ATIVA',

    observacoes text,

    foto text,

    created_at timestamp default now(),

    updated_at timestamp default now()

);

create index if not exists idx_plantel_nome
on plantel(nome);

create index if not exists idx_plantel_anilha
on plantel(anilha);

create index if not exists idx_plantel_especie
on plantel(especie);