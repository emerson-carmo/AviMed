-- ============================================
-- AviMed Manager
-- Script: 002_rls_doencas.sql
-- Objetivo: Configurar segurança (RLS)
-- ============================================

alter table public.doencas
enable row level security;

drop policy if exists "Doencas Select" on public.doencas;
drop policy if exists "Doencas Insert" on public.doencas;
drop policy if exists "Doencas Update" on public.doencas;
drop policy if exists "Doencas Delete" on public.doencas;

create policy "Doencas Select"

on public.doencas

for select

to authenticated

using (true);

create policy "Doencas Insert"

on public.doencas

for insert

to authenticated

with check (true);

create policy "Doencas Update"

on public.doencas

for update

to authenticated

using (true)

with check (true);

create policy "Doencas Delete"

on public.doencas

for delete

to authenticated

using (true);