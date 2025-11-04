const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

export type Paciente = { id: number; nome: string; cpf: string; nascimento: string; telefone?: string };
export type Medico   = { id: number; nome: string; crm: string; especialidade: string };
export type Consulta = { id: number; pacienteId: number; medicoId: number; data: string; hora: string; observacoes?: string };

type HttpResp<T> = { ok: boolean; status: number; data?: T; errorText?: string };

async function http<T = any>(path: string, init?: RequestInit): Promise<HttpResp<T>> {
  // evita // na URL
  const base = (import.meta.env.VITE_API_URL || 'http://localhost:8080').replace(/\/+$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  const url = `${base}${p}`;

  try {
    const res = await fetch(url, { headers: { 'Content-Type': 'application/json' }, ...init });
    const ct = res.headers.get('content-type') || '';
    const isJSON = ct.includes('application/json');
    const data = isJSON ? await res.json().catch(() => undefined) : undefined;
    const errorText = !res.ok ? (isJSON ? JSON.stringify(data) : await res.text().catch(() => '')) : undefined;
    return { ok: res.ok, status: res.status, data, errorText };
  } catch (e: any) {
    return { ok: false, status: 0, errorText: String(e?.message || e) };
  }
}

export const listarPacientes = () => http<Paciente[]>('/paciente');
export const criarPaciente   = (p: Omit<Paciente,'id'>) => http<void>('/paciente', { method: 'POST', body: JSON.stringify(p) });
export const atualizarPaciente = (p: Paciente) => http<void>('/paciente', { method: 'PUT', body: JSON.stringify(p) });
export const deletarPaciente = (id: number) => http<void>(`/paciente/${id}`, { method: 'DELETE' });

export const listarMedicos = () => http<Medico[]>('/medico');
export const criarMedico   = (m: Omit<Medico,'id'>) => http<void>('/medico', { method: 'POST', body: JSON.stringify(m) });
export const atualizarMedico = (m: Medico) => http<void>('/medico', { method: 'PUT', body: JSON.stringify(m) });
export const deletarMedico = (id: number) => http<void>(`/medico/${id}`, { method: 'DELETE' });

export function listarConsultas(params?: { pacienteId?: number; medicoId?: number }) {
  const qs = new URLSearchParams();
  if (params?.pacienteId) qs.set('pacienteId', String(params.pacienteId));
  if (params?.medicoId) qs.set('medicoId', String(params.medicoId));
  const suffix = qs.toString() ? `?${qs.toString()}` : '';
  return http<Consulta[]>(`/consulta${suffix}`);
}
export const criarConsulta     = (c: Omit<Consulta,'id'>) => http<void>('/consulta', { method: 'POST', body: JSON.stringify(c) });
export const atualizarConsulta = (c: Consulta) => http<void>('/consulta', { method: 'PUT', body: JSON.stringify(c) });
export const deletarConsulta   = (id: number) => http<void>(`/consulta/${id}`, { method: 'DELETE' });
