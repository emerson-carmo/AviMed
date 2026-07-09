-- ============================================
-- AviMed Manager
-- Script: 004_rls_usuarios.sql
-- ============================================

alter table public.usuarios
enable row level security;

drop policy if exists "Usuarios Select" on public.usuarios;
drop policy if exists "Usuarios Insert" on public.usuarios;
drop policy if exists "Usuarios Update" on public.usuarios;

create policy "Usuarios Select"

on public.usuarios

for select

to authenticated

using (true);

create policy "Usuarios Insert"

on public.usuarios

for insert

to authenticated

with check (true);

create policy "Usuarios Update"

on public.usuarios

for update

to authenticated

using (true)

with check (true);