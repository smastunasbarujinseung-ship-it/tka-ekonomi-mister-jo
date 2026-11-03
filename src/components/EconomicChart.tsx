import React from 'react';
import { EconomicChartConfig } from '../types';

interface EconomicChartProps {
  config: EconomicChartConfig;
}

export const EconomicChart: React.FC<EconomicChartProps> = ({ config }) => {
  const { type, title, caption } = config;

  return (
    <div className="my-5 bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 overflow-hidden">
      <div className="mb-3">
        <h4 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">{title}</h4>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">{caption}</p>
      </div>

      <div className="flex justify-center items-center py-2 bg-slate-50/70 rounded-xl border border-slate-100 overflow-x-auto">
        {type === 'demand_supply_shift' && (
          <svg viewBox="0 0 520 320" className="w-full max-w-lg h-auto select-none font-sans" aria-label={title}>
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" />
              </marker>
              <marker id="shift-arrow-left" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#dc2626" />
              </marker>
              <marker id="shift-arrow-right" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#059669" />
              </marker>
            </defs>

            {/* Grid Lines */}
            <line x1="60" y1="260" x2="480" y2="260" stroke="#cbd5e1" strokeDasharray="3 3" />
            <line x1="60" y1="200" x2="480" y2="200" stroke="#cbd5e1" strokeDasharray="3 3" />
            <line x1="60" y1="120" x2="480" y2="120" stroke="#cbd5e1" strokeDasharray="3 3" />

            {/* Axes */}
            <line x1="60" y1="280" x2="490" y2="280" stroke="#1e293b" strokeWidth="2.5" markerEnd="url(#arrow)" />
            <line x1="60" y1="280" x2="60" y2="20" stroke="#1e293b" strokeWidth="2.5" markerEnd="url(#arrow)" />

            {/* Axis Labels */}
            <text x="495" y="285" fill="#1e293b" fontSize="13" fontWeight="bold">Kuantitas (Q)</text>
            <text x="50" y="15" fill="#1e293b" fontSize="13" fontWeight="bold">Harga (P)</text>

            {/* Supply 0 (Original Supply) */}
            <line x1="100" y1="250" x2="380" y2="70" stroke="#047857" strokeWidth="3" strokeDasharray="4 4" />
            <text x="385" y="75" fill="#047857" fontSize="12" fontWeight="bold">S0 (Pasokan Normal)</text>

            {/* Supply 1 (Shifted Left - Gagal Panen) */}
            <line x1="60" y1="210" x2="320" y2="40" stroke="#dc2626" strokeWidth="3.5" />
            <text x="325" y="45" fill="#dc2626" fontSize="12" fontWeight="bold">S1 (Gagal Panen)</text>
            <path d="M 240 160 L 190 135" fill="none" stroke="#dc2626" strokeWidth="2" markerEnd="url(#shift-arrow-left)" />

            {/* Demand 0 (Original Demand) */}
            <line x1="100" y1="70" x2="380" y2="250" stroke="#0284c7" strokeWidth="3" strokeDasharray="4 4" />
            <text x="385" y="255" fill="#0284c7" fontSize="12" fontWeight="bold">D0 (Permintaan Awal)</text>

            {/* Demand 1 (Shifted Right - Lonjakan Musiman) */}
            <line x1="160" y1="50" x2="440" y2="230" stroke="#059669" strokeWidth="3.5" />
            <text x="445" y="235" fill="#059669" fontSize="12" fontWeight="bold">D1 (Musiman Hari Raya)</text>
            <path d="M 270 180 L 320 205" fill="none" stroke="#059669" strokeWidth="2" markerEnd="url(#shift-arrow-right)" />

            {/* Equilibrium Point E0 */}
            <circle cx="240" cy="160" r="5" fill="#64748b" />
            <text x="248" y="165" fill="#475569" fontSize="12" fontWeight="bold">E0</text>

            {/* Equilibrium Point E1 */}
            <circle cx="270" cy="115" r="6" fill="#b91c1c" />
            <text x="280" y="115" fill="#b91c1c" fontSize="13" fontWeight="extrabold">E1 (Harga Melonjak!)</text>

            {/* Dashed lines to axes for E0 and E1 */}
            <line x1="60" y1="160" x2="240" y2="160" stroke="#94a3b8" strokeDasharray="2 2" />
            <text x="30" y="165" fill="#64748b" fontSize="11">P0</text>

            <line x1="60" y1="115" x2="270" y2="115" stroke="#ef4444" strokeDasharray="2 2" />
            <text x="25" y="118" fill="#dc2626" fontSize="12" fontWeight="bold">P1 ▲</text>
          </svg>
        )}

        {type === 'circular_flow' && (
          <svg viewBox="0 0 540 340" className="w-full max-w-lg h-auto select-none font-sans" aria-label={title}>
            <defs>
              <marker id="cf-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#0284c7" />
              </marker>
              <marker id="cf-green" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#059669" />
              </marker>
            </defs>

            {/* Top Market: Pasar Output (Barang & Jasa) */}
            <rect x="170" y="20" width="200" height="45" rx="10" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
            <text x="270" y="47" textAnchor="middle" fill="#15803d" fontSize="13" fontWeight="bold">PASAR BARANG & JASA</text>

            {/* Left Actor: RTK */}
            <rect x="30" y="125" width="130" height="65" rx="12" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
            <text x="95" y="152" textAnchor="middle" fill="#1d4ed8" fontSize="13" fontWeight="bold">RTK</text>
            <text x="95" y="170" textAnchor="middle" fill="#64748b" fontSize="11">Konsumen</text>

            {/* Center Actor: Pemerintah */}
            <rect x="205" y="125" width="130" height="65" rx="12" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
            <text x="270" y="152" textAnchor="middle" fill="#b45309" fontSize="13" fontWeight="bold">PEMERINTAH</text>
            <text x="270" y="170" textAnchor="middle" fill="#78350f" fontSize="11">Regulator & Pajak</text>

            {/* Right Actor: RTP */}
            <rect x="380" y="125" width="130" height="65" rx="12" fill="#f0fdfa" stroke="#0d9488" strokeWidth="2" />
            <text x="445" y="152" textAnchor="middle" fill="#0f766e" fontSize="13" fontWeight="bold">RTP</text>
            <text x="445" y="170" textAnchor="middle" fill="#64748b" fontSize="11">Produsen</text>

            {/* Bottom Market: Pasar Faktor Produksi */}
            <rect x="170" y="245" width="200" height="45" rx="10" fill="#f8fafc" stroke="#64748b" strokeWidth="2" />
            <text x="270" y="272" textAnchor="middle" fill="#334155" fontSize="13" fontWeight="bold">PASAR INPUT (FAKTOR)</text>

            {/* Sektor Luar Negeri Box */}
            <rect x="195" y="305" width="150" height="28" rx="6" fill="#fae8ff" stroke="#a21caf" strokeWidth="1.5" />
            <text x="270" y="323" textAnchor="middle" fill="#86198f" fontSize="11" fontWeight="semibold">Masyarakat Luar Negeri</text>

            {/* Outer Flow: Arus Uang (Hijau) */}
            <path d="M 95 125 L 95 42 L 165 42" fill="none" stroke="#16a34a" strokeWidth="2.5" markerEnd="url(#cf-green)" />
            <path d="M 375 42 L 445 42 L 445 125" fill="none" stroke="#16a34a" strokeWidth="2.5" markerEnd="url(#cf-green)" />
            <text x="75" y="25" fill="#15803d" fontSize="10" fontWeight="bold">Belanja Barang</text>
            <text x="410" y="25" fill="#15803d" fontSize="10" fontWeight="bold">Penerimaan RTP</text>

            {/* Inner Flow: Arus Barang/Faktor (Biru) */}
            <path d="M 95 190 L 95 267 L 165 267" fill="none" stroke="#0284c7" strokeWidth="2.5" markerEnd="url(#cf-blue)" />
            <path d="M 375 267 L 445 267 L 445 190" fill="none" stroke="#0284c7" strokeWidth="2.5" markerEnd="url(#cf-blue)" />
            <text x="70" y="295" fill="#0284c7" fontSize="10" fontWeight="bold">Faktor Produksi</text>
            <text x="410" y="295" fill="#0284c7" fontSize="10" fontWeight="bold">Balas Jasa Faktor</text>
          </svg>
        )}

        {type === 'lorenz_curve' && (
          <svg viewBox="0 0 520 320" className="w-full max-w-lg h-auto select-none font-sans" aria-label={title}>
            {/* Box area */}
            <rect x="70" y="40" width="380" height="240" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />

            {/* 45 degree diagonal line (Perfect Equality) */}
            <line x1="70" y1="280" x2="450" y2="40" stroke="#059669" strokeWidth="2.5" strokeDasharray="5 5" />
            <text x="310" y="115" fill="#059669" fontSize="12" fontWeight="bold" transform="rotate(-32, 310, 115)">
              Garis Kesetaraan Sempurna (Gini = 0)
            </text>

            {/* Kurva Lorenz Nusantara (Rendah / Rata: Gini 0.28) */}
            <path d="M 70 280 Q 260 270, 450 40" fill="none" stroke="#0284c7" strokeWidth="3" />
            <text x="260" y="225" fill="#0284c7" fontSize="12" fontWeight="bold">Lorenz Nusantara (Gini = 0,28)</text>

            {/* Kurva Lorenz Swastika (Tinggi / Timpang: Gini 0.52) */}
            <path d="M 70 280 Q 320 280, 450 40" fill="none" stroke="#dc2626" strokeWidth="3" />
            <text x="345" y="260" fill="#dc2626" fontSize="12" fontWeight="bold">Lorenz Swastika (Gini = 0,52)</text>

            {/* Axis text */}
            <text x="260" y="305" textAnchor="middle" fill="#1e293b" fontSize="12" fontWeight="bold">Kumulatif % Penduduk</text>
            <text x="25" y="160" textAnchor="middle" fill="#1e293b" fontSize="12" fontWeight="bold" transform="rotate(-90, 25, 160)">
              Kumulatif % Pendapatan
            </text>

            <text x="65" y="295" fill="#64748b" fontSize="11">0%</text>
            <text x="440" y="295" fill="#64748b" fontSize="11">100%</text>
            <text x="45" y="45" fill="#64748b" fontSize="11">100%</text>
          </svg>
        )}

        {type === 'ceiling_floor_price' && (
          <svg viewBox="0 0 520 320" className="w-full max-w-lg h-auto select-none font-sans" aria-label={title}>
            {/* Axes */}
            <line x1="70" y1="280" x2="480" y2="280" stroke="#1e293b" strokeWidth="2.5" />
            <line x1="70" y1="280" x2="70" y2="30" stroke="#1e293b" strokeWidth="2.5" />

            <text x="485" y="285" fill="#1e293b" fontSize="13" fontWeight="bold">Q (Liter)</text>
            <text x="60" y="25" fill="#1e293b" fontSize="13" fontWeight="bold">P (Rp/Liter)</text>

            {/* Demand & Supply */}
            <line x1="100" y1="60" x2="440" y2="260" stroke="#0284c7" strokeWidth="3" />
            <text x="445" y="265" fill="#0284c7" fontSize="12" fontWeight="bold">D</text>

            <line x1="100" y1="260" x2="440" y2="60" stroke="#059669" strokeWidth="3" />
            <text x="445" y="65" fill="#059669" fontSize="12" fontWeight="bold">S</text>

            {/* Equilibrium Point */}
            <circle cx="270" cy="160" r="5" fill="#1e293b" />
            <line x1="70" y1="160" x2="270" y2="160" stroke="#94a3b8" strokeDasharray="3 3" />
            <text x="20" y="165" fill="#1e293b" fontSize="11">Pe: 18.000</text>
            <text x="260" y="150" fill="#1e293b" fontSize="11" fontWeight="bold">E (Keseimbangan)</text>

            {/* Price Ceiling Line below Pe */}
            <line x1="70" y1="210" x2="460" y2="210" stroke="#dc2626" strokeWidth="2.5" />
            <text x="15" y="215" fill="#dc2626" fontSize="11" fontWeight="bold">HET: 14.000</text>
            <text x="360" y="200" fill="#dc2626" fontSize="12" fontWeight="bold">Ceiling Price (HET)</text>

            {/* Shortage gap points */}
            <circle cx="185" cy="210" r="5" fill="#059669" />
            <text x="175" y="235" fill="#059669" fontSize="11" fontWeight="bold">Qs</text>

            <circle cx="355" cy="210" r="5" fill="#0284c7" />
            <text x="350" y="235" fill="#0284c7" fontSize="11" fontWeight="bold">Qd</text>

            {/* Shortage Bracket */}
            <line x1="185" y1="250" x2="355" y2="250" stroke="#dc2626" strokeWidth="2" strokeDasharray="2 2" />
            <text x="270" y="270" textAnchor="middle" fill="#dc2626" fontSize="12" fontWeight="bold">
              Kelebihan Permintaan / Kelangkaan (SHORTAGE)
            </text>
          </svg>
        )}

        {type === 'inflation_bar' && (
          <svg viewBox="0 0 520 240" className="w-full max-w-lg h-auto select-none font-sans" aria-label={title}>
            <text x="100" y="40" fill="#1e293b" fontSize="13" fontWeight="bold">Cost-Push Inflation (Peristiwa X)</text>
            <rect x="100" y="55" width="300" height="35" rx="6" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" />
            <rect x="100" y="55" width="220" height="35" rx="6" fill="#ef4444" />
            <text x="200" y="77" fill="#ffffff" fontSize="12" fontWeight="bold">Lonjakan Biaya BBM & Logistik (73%)</text>

            <text x="100" y="130" fill="#1e293b" fontSize="13" fontWeight="bold">Demand-Pull Inflation (Peristiwa Y)</text>
            <rect x="100" y="145" width="300" height="35" rx="6" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
            <rect x="100" y="145" width="260" height="35" rx="6" fill="#10b981" />
            <text x="210" y="167" fill="#ffffff" fontSize="12" fontWeight="bold">Kelebihan Belanja & Uang Beredar (86%)</text>
          </svg>
        )}
      </div>
    </div>
  );
};
