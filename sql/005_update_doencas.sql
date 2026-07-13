-- ===========================================
-- AviMed Manager
-- Sprint 02
-- Atualização da tabela DOENCAS
-- ===========================================

ALTER TABLE public.doencas
ADD COLUMN IF NOT EXISTS categoria TEXT;

ALTER TABLE public.doencas
ADD COLUMN IF NOT EXISTS especie TEXT;

ALTER TABLE public.doencas
ADD COLUMN IF NOT EXISTS diagnostico TEXT;

ALTER TABLE public.doencas
ADD COLUMN IF NOT EXISTS observacoes TEXT;

ALTER TABLE public.doencas
ADD COLUMN IF NOT EXISTS status TEXT
DEFAULT 'ATIVA';

ALTER TABLE public.doencas
ADD COLUMN IF NOT EXISTS periodo TEXT;

COMMENT ON COLUMN public.doencas.categoria IS
'Categoria da doença';

COMMENT ON COLUMN public.doencas.especie IS
'Espécie afetada';

COMMENT ON COLUMN public.doencas.diagnostico IS
'Diagnóstico';

COMMENT ON COLUMN public.doencas.observacoes IS
'Observações gerais';

COMMENT ON COLUMN public.doencas.status IS
'ATIVA ou INATIVA';

COMMENT ON COLUMN public.doencas.periodo IS
'Período do tratamento';

UPDATE public.doencas
SET status='ATIVA'
WHERE status IS NULL;