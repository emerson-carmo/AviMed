-- ==========================================================
-- AviMed Manager
-- Sprint 06
-- Histórico Clínico das Aves
-- ==========================================================

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS historico_clinico (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Relacionamentos
    ave_id UUID NOT NULL,
    doenca_id UUID NOT NULL,

    -- Dados clínicos
    data_diagnostico DATE NOT NULL DEFAULT CURRENT_DATE,

    tratamento TEXT,

    medicamento VARCHAR(150),

    dosagem VARCHAR(100),

    periodo VARCHAR(100),

    status VARCHAR(30) NOT NULL DEFAULT 'EM_TRATAMENTO',

    observacoes TEXT,

    -- Controle
    created_at TIMESTAMP DEFAULT NOW(),

    updated_at TIMESTAMP DEFAULT NOW(),

    -- Chaves estrangeiras
    CONSTRAINT fk_historico_ave
        FOREIGN KEY (ave_id)
        REFERENCES plantel(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_historico_doenca
        FOREIGN KEY (doenca_id)
        REFERENCES doencas(id)
        ON DELETE RESTRICT

);

-- ==========================================================
-- Índices
-- ==========================================================

CREATE INDEX IF NOT EXISTS idx_hist_ave
ON historico_clinico(ave_id);

CREATE INDEX IF NOT EXISTS idx_hist_doenca
ON historico_clinico(doenca_id);

CREATE INDEX IF NOT EXISTS idx_hist_data
ON historico_clinico(data_diagnostico);

CREATE INDEX IF NOT EXISTS idx_hist_status
ON historico_clinico(status);