-- ============================================
-- AviMed Manager
-- Script: 003_usuarios.sql
-- Objetivo: Criar tabela de usuários
-- ============================================

create extension if not exists "pgcrypto";

create table if not exists public.usuarios (

    id uuid primary key default gen_random_uuid(),

    auth_id uuid unique not null,

    nome varchar(120) not null,

    email varchar(150) unique not null,

    perfil varchar(20) not null
        check (perfil in ('ADMIN','CONSULTA')),

    ativo boolean default true,

    created_at timestamptz default now(),

    updated_at timestamptz default now()

);

comment on table public.usuarios is
'Tabela de usuários do AviMed';

comment on column public.usuarios.auth_id is
'UUID do usuário criado no Supabase Auth';

comment on column public.usuarios.perfil is
'ADMIN ou CONSULTA';